# Jim x Thi Knowledge Portal

Public GitHub Pages portal for Jim and Thi's summarized working content.

## Links

- Public portal: `https://openmolthi.github.io/jim-thi-knowledge-portal/`
- GitHub repo: `https://github.com/openmolthi/jim-thi-knowledge-portal`
- Shared asset Drive: `https://drive.google.com/drive/folders/1ov0Qw1XW05i3WGFi3xrAD0k_WXZH7z3O`

## Files

- `index.html` - standalone portal and graph widget.
- `tinyfish-founder-demo.html` - bundled TinyFish founder demo.
- `tinyfish-weiss-carousel.html` - bundled TinyFish evidence carousel.
- `data/portal-universe.json` - source-of-truth graph data.
- `data/portal-universe.js` - generated browser wrapper.
- `data/portal-universe-nodes.csv` - import-friendly node table.
- `data/portal-universe-edges.csv` - import-friendly edge table.
- `neo4j/import-jim-thi-portal-universe.cypher` - idempotent Neo4j import.
- `scripts/push-to-neo4j.py` - pushes the generated Cypher into the shared Neo4j graph.
- `docs/portal-universe.md` - generated human-readable cluster inventory.

## Update Rule

For every meaningful Jim/Thi summary added to the portal:

1. Add or update the artifact and topic nodes in `data/portal-universe.json`.
2. Run `node scripts/build-artifacts.mjs`.
3. Commit and push to GitHub Pages.
4. Import `neo4j/import-jim-thi-portal-universe.cypher` when the Neo4j universe should be refreshed.

## Regenerate

```bash
node scripts/build-artifacts.mjs
python3 scripts/push-to-neo4j.py
```
