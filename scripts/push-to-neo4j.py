#!/usr/bin/env python3
"""Push the Jim x Thi portal universe into Neo4j."""

from __future__ import annotations

import os
import re
import sys
from pathlib import Path

WORKSPACE = Path(os.environ.get("MOLTHI_WORKSPACE", "/Users/molthi/.openclaw/workspace"))
sys.path.insert(0, str(WORKSPACE / "scripts"))

from shared.neo4j_config import get_driver  # noqa: E402

ROOT = Path(__file__).resolve().parents[1]
CYPHER_PATH = ROOT / "neo4j" / "import-jim-thi-portal-universe.cypher"


def split_statements(text: str) -> list[str]:
    cleaned = "\n".join(line for line in text.splitlines() if not line.strip().startswith("//"))
    return [statement.strip() for statement in re.split(r";\s*(?:\n|$)", cleaned) if statement.strip()]


def main() -> None:
    statements = split_statements(CYPHER_PATH.read_text(encoding="utf-8"))
    driver = get_driver()
    graph_key = "jim-thi-knowledge-portal-v1"
    with driver.session(database="neo4j") as session:
        session.run("MATCH (n:JimThiPortalNode {graphKey: $graphKey}) DETACH DELETE n", graphKey=graph_key).consume()
        session.run("MATCH (g:JimThiPortalUniverse {graphKey: $graphKey}) DETACH DELETE g", graphKey=graph_key).consume()
        for statement in statements:
            session.run(statement).consume()
        counts = session.run(
            """
            MATCH (g:JimThiPortalUniverse {graphKey: $graphKey})-[:CONTAINS]->(n:JimThiPortalNode)
            OPTIONAL MATCH (a:JimThiPortalNode {graphKey: $graphKey})-[r]->(b:JimThiPortalNode {graphKey: $graphKey})
            WHERE type(r) <> 'CONTAINS'
            RETURN count(DISTINCT n) AS nodes, count(DISTINCT r) AS edges
            """,
            graphKey=graph_key,
        ).single()
    print({"nodes": counts["nodes"], "edges": counts["edges"], "statements": len(statements)})


if __name__ == "__main__":
    main()
