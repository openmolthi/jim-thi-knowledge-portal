import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const dataPath = path.join(root, "data", "portal-universe.json");
const graph = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const nodeById = new Map(graph.nodes.map((node) => [node.id, node]));
const allowedRelTypes = new Set(Object.keys(graph.edgeTypeLegend));
const errors = [];

for (const edge of graph.edges) {
  if (!nodeById.has(edge.source)) errors.push(`${edge.id}: missing source ${edge.source}`);
  if (!nodeById.has(edge.target)) errors.push(`${edge.id}: missing target ${edge.target}`);
  if (!allowedRelTypes.has(edge.type)) errors.push(`${edge.id}: unknown type ${edge.type}`);
}

if (errors.length) {
  throw new Error(`Portal universe integrity failure:\n${errors.join("\n")}`);
}

const clusters = graph.nodes.filter((node) => node.type === "nav_pill" || node.type === "topic_cluster");
const artifacts = graph.nodes.filter((node) => node.type === "artifact");
const generated = {
  ...graph,
  summary: {
    nodeCount: graph.nodes.length,
    edgeCount: graph.edges.length,
    clusterCount: clusters.length,
    pillCount: graph.nodes.filter((node) => node.type === "nav_pill").length,
    artifactCount: artifacts.length,
    liveArtifactCount: artifacts.filter((node) => node.status?.startsWith("existing") || node.status?.startsWith("live")).length
  }
};

fs.writeFileSync(
  path.join(root, "data", "portal-universe.js"),
  `window.JIM_THI_PORTAL_UNIVERSE = ${JSON.stringify(generated, null, 2)};\n`,
  "utf8"
);

function csvEscape(value) {
  const text = Array.isArray(value) ? value.join("|") : String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function writeCsv(filePath, rows, fields) {
  const lines = [fields.join(",")];
  for (const row of rows) {
    lines.push(fields.map((field) => csvEscape(row[field])).join(","));
  }
  fs.writeFileSync(filePath, `${lines.join("\n")}\n`, "utf8");
}

writeCsv(path.join(root, "data", "portal-universe-nodes.csv"), graph.nodes, [
  "id",
  "name",
  "type",
  "cluster",
  "status",
  "summary",
  "detail",
  "url"
]);

writeCsv(path.join(root, "data", "portal-universe-edges.csv"), graph.edges, [
  "id",
  "source",
  "target",
  "type",
  "strength",
  "note"
]);

function cypherString(value) {
  return JSON.stringify(String(value ?? ""));
}

const cypher = [];
cypher.push("// Jim x Thi Knowledge Portal universe import");
cypher.push("// Generated from data/portal-universe.json");
cypher.push("CREATE CONSTRAINT jim_thi_portal_universe_key IF NOT EXISTS FOR (g:JimThiPortalUniverse) REQUIRE g.graphKey IS UNIQUE;");
cypher.push("CREATE CONSTRAINT jim_thi_portal_node_uid IF NOT EXISTS FOR (n:JimThiPortalNode) REQUIRE n.uid IS UNIQUE;");
cypher.push("");
cypher.push(`MERGE (g:JimThiPortalUniverse {graphKey: ${cypherString(graph.graphKey)}})`);
cypher.push(`SET g.title = ${cypherString(graph.title)}, g.generatedAt = ${cypherString(graph.generatedAt)}, g.scopeNote = ${cypherString(graph.scopeNote)};`);
cypher.push("");

for (const node of graph.nodes) {
  cypher.push(`MERGE (n:JimThiPortalNode {uid: ${cypherString(`${graph.graphKey}:${node.id}`)}})`);
  cypher.push(`SET n.id = ${cypherString(node.id)}, n.name = ${cypherString(node.name)}, n.type = ${cypherString(node.type)}, n.cluster = ${cypherString(node.cluster)}, n.status = ${cypherString(node.status)}, n.summary = ${cypherString(node.summary)}, n.detail = ${cypherString(node.detail)}, n.url = ${cypherString(node.url)}, n.graphKey = ${cypherString(graph.graphKey)};`);
  cypher.push(`MATCH (g:JimThiPortalUniverse {graphKey: ${cypherString(graph.graphKey)}}), (n:JimThiPortalNode {uid: ${cypherString(`${graph.graphKey}:${node.id}`)}})`);
  cypher.push("MERGE (g)-[:CONTAINS]->(n);");
  cypher.push("");
}

for (const edge of graph.edges) {
  cypher.push(`MATCH (a:JimThiPortalNode {uid: ${cypherString(`${graph.graphKey}:${edge.source}`)}}), (b:JimThiPortalNode {uid: ${cypherString(`${graph.graphKey}:${edge.target}`)}})`);
  cypher.push(`MERGE (a)-[r:${edge.type} {uid: ${cypherString(`${graph.graphKey}:edge:${edge.id}`)}}]->(b)`);
  cypher.push(`SET r.graphKey = ${cypherString(graph.graphKey)}, r.strength = ${cypherString(edge.strength)}, r.note = ${cypherString(edge.note)};`);
  cypher.push("");
}

fs.writeFileSync(path.join(root, "neo4j", "import-jim-thi-portal-universe.cypher"), `${cypher.join("\n")}\n`, "utf8");

const docs = [
  "# Jim x Thi Knowledge Portal",
  "",
  `Generated: ${graph.generatedAt}`,
  "",
  "## Operating Rule",
  "",
  "Every meaningful portal content update should update `data/portal-universe.json`, run `node scripts/build-artifacts.mjs`, and publish the generated browser/Neo4j artifacts alongside the portal page.",
  "",
  "## Current Pills",
  ""
];

for (const cluster of clusters) {
  docs.push(`- **${cluster.name}** (${cluster.status}) - ${cluster.summary}`);
}

docs.push("");
docs.push("## Current Artifacts");
docs.push("");

for (const artifact of artifacts) {
  docs.push(`- **${artifact.name}** (${artifact.status}) - ${artifact.summary}`);
}

fs.writeFileSync(path.join(root, "docs", "portal-universe.md"), `${docs.join("\n")}\n`, "utf8");

console.log(JSON.stringify(generated.summary, null, 2));
