// Jim x Thi Knowledge Portal universe import
// Generated from data/portal-universe.json
CREATE CONSTRAINT jim_thi_portal_universe_key IF NOT EXISTS FOR (g:JimThiPortalUniverse) REQUIRE g.graphKey IS UNIQUE;
CREATE CONSTRAINT jim_thi_portal_node_uid IF NOT EXISTS FOR (n:JimThiPortalNode) REQUIRE n.uid IS UNIQUE;

MERGE (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"})
SET g.title = "Jim x Thi Knowledge Portal", g.generatedAt = "2026-07-23", g.scopeNote = "Public-facing GitHub Pages portal for Jim and Thi. It starts nearly blank, with TinyFish content and generic topic pills that can absorb future summaries, calls, and assets.";

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:portal"})
SET n.id = "portal", n.name = "Jim x Thi Portal", n.type = "portal", n.cluster = "Portal spine", n.status = "public-v1", n.summary = "Public GitHub Pages cockpit for shared summaries, artifacts, and topic clusters.", n.detail = "The portal is intentionally sparse at launch: it should grow from actual Jim/Thi work instead of pretending to be full.", n.url = "", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:portal"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:protocol_parallel_graph"})
SET n.id = "protocol_parallel_graph", n.name = "Parallel Graph Protocol", n.type = "protocol", n.cluster = "Portal spine", n.status = "active", n.summary = "Every meaningful portal update also updates browser graph data and the Neo4j universe.", n.detail = "The graph is generated from structured JSON and pushed through an idempotent Cypher path.", n.url = "", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:protocol_parallel_graph"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:assets_drive"})
SET n.id = "assets_drive", n.name = "Shared Drive Assets", n.type = "asset_folder", n.cluster = "Assets", n.status = "live", n.summary = "Google Drive drop zone for files, screenshots, transcripts, and visual assets.", n.detail = "Created under openmolthi@gmail.com and shared by link for editing.", n.url = "https://drive.google.com/drive/folders/1ov0Qw1XW05i3WGFi3xrAD0k_WXZH7z3O", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:assets_drive"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:stream_whatsapp"})
SET n.id = "stream_whatsapp", n.name = "Group Chat", n.type = "source_stream", n.cluster = "Inputs", n.status = "active", n.summary = "WhatsApp exchanges that can be distilled into portal items.", n.detail = "Good for requests, corrections, hypotheses, and lightweight decisions.", n.url = "", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:stream_whatsapp"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:stream_calls"})
SET n.id = "stream_calls", n.name = "Video Calls", n.type = "source_stream", n.cluster = "Inputs", n.status = "planned", n.summary = "Call notes or transcripts that can become summary artifacts.", n.detail = "Future call summaries should preserve date, participants, claims, decisions, and follow-ups.", n.url = "", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:stream_calls"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_tinyfish"})
SET n.id = "pill_tinyfish", n.name = "TinyFish", n.type = "nav_pill", n.cluster = "Working topics", n.status = "seeded", n.summary = "The only seeded content cluster at launch.", n.detail = "Contains the existing founder demo and evidence carousel so Jim has something real to inspect immediately.", n.url = "", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_tinyfish"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_language"})
SET n.id = "pill_language", n.name = "Language", n.type = "nav_pill", n.cluster = "Working topics", n.status = "blank", n.summary = "Placeholder for language, phrasing, naming, rhetoric, and semantic work.", n.detail = "Use this when a conversation turns into wording, concepts, or distinctions.", n.url = "", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_language"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_books"})
SET n.id = "pill_books", n.name = "Books", n.type = "nav_pill", n.cluster = "Working topics", n.status = "blank", n.summary = "Placeholder for books, essays, reading notes, and literary source material.", n.detail = "Useful for Jim-facing reading, references, and book-derived summaries.", n.url = "", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_books"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_headlines"})
SET n.id = "pill_headlines", n.name = "Headlines", n.type = "nav_pill", n.cluster = "Working topics", n.status = "blank", n.summary = "Placeholder for current signals, news, and short headline scans.", n.detail = "Use this for lightweight observations before they become a deeper brief.", n.url = "", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_headlines"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_calls"})
SET n.id = "pill_calls", n.name = "Calls", n.type = "nav_pill", n.cluster = "Working topics", n.status = "blank", n.summary = "Placeholder for video-call notes and decisions.", n.detail = "Designed to become the landing area for call-derived summaries.", n.url = "", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_calls"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_assets"})
SET n.id = "pill_assets", n.name = "Assets", n.type = "nav_pill", n.cluster = "Working topics", n.status = "live", n.summary = "Entry point to shared Drive materials.", n.detail = "Keeps files outside GitHub while the portal stays lightweight.", n.url = "", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_assets"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:artifact_tinyfish_founder_demo"})
SET n.id = "artifact_tinyfish_founder_demo", n.name = "TinyFish Founder Demo", n.type = "artifact", n.cluster = "TinyFish", n.status = "live", n.summary = "Founder-audience demo narrative with evidence cadence and enterprise payoff.", n.detail = "Copied into this GitHub Pages bundle so Jim does not need seedbox access.", n.url = "tinyfish-founder-demo.html", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:artifact_tinyfish_founder_demo"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:artifact_tinyfish_carousel"})
SET n.id = "artifact_tinyfish_carousel", n.name = "TinyFish Evidence Carousel", n.type = "artifact", n.cluster = "TinyFish", n.status = "live", n.summary = "Carousel-style evidence ladder with screenshot receipt flow.", n.detail = "Copied into this GitHub Pages bundle so Jim does not need seedbox access.", n.url = "tinyfish-weiss-carousel.html", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:artifact_tinyfish_carousel"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:artifact_first_call_summary"})
SET n.id = "artifact_first_call_summary", n.name = "First Call Summary", n.type = "artifact", n.cluster = "Calls", n.status = "planned", n.summary = "Blank slot for the first video-call summary.", n.detail = "Promote when actual call notes or transcripts exist.", n.url = "", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:artifact_first_call_summary"})
MERGE (g)-[:CONTAINS]->(n);

MERGE (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:action_next_summary"})
SET n.id = "action_next_summary", n.name = "Next Summary Slot", n.type = "next_action", n.cluster = "Execution", n.status = "next", n.summary = "Add the first real post-launch summary under the right nav pill.", n.detail = "Update portal-universe.json, rebuild artifacts, push Neo4j, and publish GitHub Pages.", n.url = "", n.graphKey = "jim-thi-knowledge-portal-v1";
MATCH (g:JimThiPortalUniverse {graphKey: "jim-thi-knowledge-portal-v1"}), (n:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:action_next_summary"})
MERGE (g)-[:CONTAINS]->(n);

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:portal"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:protocol_parallel_graph"})
MERGE (a)-[r:GOVERNS {uid: "jim-thi-knowledge-portal-v1:edge:e_portal_protocol"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "strong", r.note = "Standing rule for this portal.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:portal"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_tinyfish"})
MERGE (a)-[r:HOSTS_PILL {uid: "jim-thi-knowledge-portal-v1:edge:e_portal_tinyfish"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "strong", r.note = "Seeded content pill.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:portal"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_language"})
MERGE (a)-[r:HOSTS_PILL {uid: "jim-thi-knowledge-portal-v1:edge:e_portal_language"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "medium", r.note = "Generic blank-state pill.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:portal"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_books"})
MERGE (a)-[r:HOSTS_PILL {uid: "jim-thi-knowledge-portal-v1:edge:e_portal_books"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "medium", r.note = "Generic blank-state pill.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:portal"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_headlines"})
MERGE (a)-[r:HOSTS_PILL {uid: "jim-thi-knowledge-portal-v1:edge:e_portal_headlines"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "medium", r.note = "Generic blank-state pill.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:portal"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_calls"})
MERGE (a)-[r:HOSTS_PILL {uid: "jim-thi-knowledge-portal-v1:edge:e_portal_calls"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "medium", r.note = "Generic blank-state pill.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:portal"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_assets"})
MERGE (a)-[r:HOSTS_PILL {uid: "jim-thi-knowledge-portal-v1:edge:e_portal_assets"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "strong", r.note = "Drive assets pill.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_tinyfish"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:artifact_tinyfish_founder_demo"})
MERGE (a)-[r:HAS_ARTIFACT {uid: "jim-thi-knowledge-portal-v1:edge:e_tinyfish_demo"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "strong", r.note = "Seeded TinyFish content.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_tinyfish"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:artifact_tinyfish_carousel"})
MERGE (a)-[r:HAS_ARTIFACT {uid: "jim-thi-knowledge-portal-v1:edge:e_tinyfish_carousel"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "strong", r.note = "Seeded TinyFish content.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_calls"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:artifact_first_call_summary"})
MERGE (a)-[r:HAS_ARTIFACT {uid: "jim-thi-knowledge-portal-v1:edge:e_calls_summary"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "weak", r.note = "Blank call summary slot.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_assets"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:assets_drive"})
MERGE (a)-[r:USES_ASSET_FOLDER {uid: "jim-thi-knowledge-portal-v1:edge:e_assets_drive"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "strong", r.note = "Shared Drive folder.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_language"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:stream_whatsapp"})
MERGE (a)-[r:HAS_SOURCE_STREAM {uid: "jim-thi-knowledge-portal-v1:edge:e_chat_to_language"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "medium", r.note = "Chat can generate language notes.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:pill_calls"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:stream_calls"})
MERGE (a)-[r:HAS_SOURCE_STREAM {uid: "jim-thi-knowledge-portal-v1:edge:e_calls_to_stream"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "strong", r.note = "Call summaries originate here.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:assets_drive"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:stream_calls"})
MERGE (a)-[r:RELATES_TO {uid: "jim-thi-knowledge-portal-v1:edge:e_assets_stream"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "medium", r.note = "Call assets can live in Drive.";

MATCH (a:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:portal"}), (b:JimThiPortalNode {uid: "jim-thi-knowledge-portal-v1:action_next_summary"})
MERGE (a)-[r:NEXT_ACTION {uid: "jim-thi-knowledge-portal-v1:edge:e_next_summary"}]->(b)
SET r.graphKey = "jim-thi-knowledge-portal-v1", r.strength = "strong", r.note = "Next concrete operation.";

