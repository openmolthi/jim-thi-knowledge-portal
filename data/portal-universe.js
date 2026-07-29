window.JIM_THI_PORTAL_UNIVERSE = {
  "graphKey": "jim-thi-knowledge-portal-v1",
  "generatedAt": "2026-07-30",
  "title": "Jim x Thi Knowledge Portal",
  "scopeNote": "Public-facing GitHub Pages portal for Jim and Thi. It starts nearly blank, with TinyFish content and generic topic pills that can absorb future summaries, calls, and assets.",
  "driveFolder": {
    "name": "Jim x Thi Portal Assets",
    "id": "1ov0Qw1XW05i3WGFi3xrAD0k_WXZH7z3O",
    "url": "https://drive.google.com/drive/folders/1ov0Qw1XW05i3WGFi3xrAD0k_WXZH7z3O"
  },
  "edgeTypeLegend": {
    "HOSTS_PILL": "Portal contains a navigation pill / topic cluster",
    "HAS_ARTIFACT": "Pill contains a published or planned artifact",
    "HAS_SOURCE_STREAM": "Pill can ingest a source stream such as chat, call, file, or asset",
    "RELATES_TO": "Pill or artifact has a conceptual relationship to another node",
    "NEXT_ACTION": "Node has a recommended next action",
    "USES_ASSET_FOLDER": "Node uses the shared Drive asset folder",
    "GOVERNS": "A protocol governs the portal workflow"
  },
  "nodes": [
    {
      "id": "portal",
      "name": "Jim x Thi Portal",
      "type": "portal",
      "cluster": "Portal spine",
      "status": "public-v1",
      "summary": "Public GitHub Pages cockpit for shared summaries, artifacts, and topic clusters.",
      "detail": "The portal is intentionally sparse at launch: it should grow from actual Jim/Thi work instead of pretending to be full."
    },
    {
      "id": "protocol_parallel_graph",
      "name": "Parallel Graph Protocol",
      "type": "protocol",
      "cluster": "Portal spine",
      "status": "active",
      "summary": "Every meaningful portal update also updates browser graph data and the Neo4j universe.",
      "detail": "The graph is generated from structured JSON and pushed through an idempotent Cypher path."
    },
    {
      "id": "assets_drive",
      "name": "Shared Drive Assets",
      "type": "asset_folder",
      "cluster": "Assets",
      "status": "live",
      "summary": "Google Drive drop zone for files, screenshots, transcripts, and visual assets.",
      "detail": "Created under openmolthi@gmail.com and shared by link for editing.",
      "url": "https://drive.google.com/drive/folders/1ov0Qw1XW05i3WGFi3xrAD0k_WXZH7z3O"
    },
    {
      "id": "stream_whatsapp",
      "name": "Group Chat",
      "type": "source_stream",
      "cluster": "Inputs",
      "status": "active",
      "summary": "WhatsApp exchanges that can be distilled into portal items.",
      "detail": "Good for requests, corrections, hypotheses, and lightweight decisions."
    },
    {
      "id": "stream_calls",
      "name": "Video Calls",
      "type": "source_stream",
      "cluster": "Inputs",
      "status": "planned",
      "summary": "Call notes or transcripts that can become summary artifacts.",
      "detail": "Future call summaries should preserve date, participants, claims, decisions, and follow-ups."
    },
    {
      "id": "pill_tinyfish",
      "name": "TinyFish",
      "type": "nav_pill",
      "cluster": "Working topics",
      "status": "seeded",
      "summary": "The only seeded content cluster at launch.",
      "detail": "Contains the existing founder demo and evidence carousel so Jim has something real to inspect immediately."
    },
    {
      "id": "pill_language",
      "name": "Language",
      "type": "nav_pill",
      "cluster": "Working topics",
      "status": "blank",
      "summary": "Placeholder for language, phrasing, naming, rhetoric, and semantic work.",
      "detail": "Use this when a conversation turns into wording, concepts, or distinctions."
    },
    {
      "id": "pill_books",
      "name": "Books",
      "type": "nav_pill",
      "cluster": "Working topics",
      "status": "active",
      "summary": "Books, essays, films, and reading material shared by Jim.",
      "detail": "A growing shelf of references with short explanations of why each item matters."
    },
    {
      "id": "pill_headlines",
      "name": "Headlines",
      "type": "nav_pill",
      "cluster": "Working topics",
      "status": "blank",
      "summary": "Placeholder for current signals, news, and short headline scans.",
      "detail": "Use this for lightweight observations before they become a deeper brief."
    },
    {
      "id": "pill_calls",
      "name": "Calls",
      "type": "nav_pill",
      "cluster": "Working topics",
      "status": "blank",
      "summary": "Placeholder for video-call notes and decisions.",
      "detail": "Designed to become the landing area for call-derived summaries."
    },
    {
      "id": "pill_assets",
      "name": "Assets",
      "type": "nav_pill",
      "cluster": "Working topics",
      "status": "live",
      "summary": "Entry point to shared Drive materials.",
      "detail": "Keeps files outside GitHub while the portal stays lightweight."
    },
    {
      "id": "artifact_tinyfish_founder_demo",
      "name": "TinyFish Founder Demo",
      "type": "artifact",
      "cluster": "TinyFish",
      "status": "live",
      "summary": "Founder-audience demo narrative with evidence cadence and enterprise payoff.",
      "detail": "Copied into this GitHub Pages bundle so Jim does not need seedbox access.",
      "url": "tinyfish-founder-demo.html"
    },
    {
      "id": "artifact_tinyfish_carousel",
      "name": "TinyFish Evidence Carousel",
      "type": "artifact",
      "cluster": "TinyFish",
      "status": "live",
      "summary": "Carousel-style evidence ladder with screenshot receipt flow.",
      "detail": "Copied into this GitHub Pages bundle so Jim does not need seedbox access.",
      "url": "tinyfish-weiss-carousel.html"
    },
    {
      "id": "artifact_improvement_manifesto",
      "name": "The Improvement Manifesto",
      "type": "artifact",
      "cluster": "Books",
      "status": "new",
      "summary": "John Glennane's 2026 declaration for human-centred improvement: business should lead technology, and original, complete, durable “True Design” should replace templates and quick fixes.",
      "detail": "A visual call to move beyond accidental improvement, technocratic ready-made answers, AI shortcuts, and “best practice.” Its preferred alternative is agency, human vocation, trust, and Next Practice."
    },
    {
      "id": "artifact_make_boards_work",
      "name": "Make Boards Work",
      "type": "artifact",
      "cluster": "Books",
      "status": "new",
      "summary": "Marc O. Stöckli's practical guide to moving boards from legally required bodies to vital sources of judgement, challenge, trust, and strategic value.",
      "detail": "The book combines behavioural norms—beginner's mind, psychological safety, and trust—with board composition, conflicts, the chair as lightning rod, and a disciplined cycle before, during, and after meetings."
    },
    {
      "id": "artifact_emperor",
      "name": "The Emperor",
      "type": "artifact",
      "cluster": "Books",
      "status": "new",
      "summary": "Tarot archetype of authority, structure, stability, boundaries, and disciplined leadership.",
      "detail": "Jim shared Biddy Tarot's interpretation of the fourth Major Arcana card.",
      "url": "https://biddytarot.com/tarot-card-meanings/major-arcana/emperor/"
    },
    {
      "id": "artifact_circle",
      "name": "The Circle",
      "type": "artifact",
      "cluster": "Books",
      "status": "new",
      "summary": "Dave Eggers' 2013 dystopian novel about a dominant technology company whose pursuit of transparency erodes privacy, autonomy, and dissent.",
      "detail": "A useful provocation about surveillance, platform power, and the seduction of frictionless participation.",
      "url": "https://en.wikipedia.org/wiki/The_Circle_(Eggers_novel)"
    },
    {
      "id": "artifact_on_bullshit",
      "name": "On Bullshit",
      "type": "artifact",
      "cluster": "Books",
      "status": "new",
      "summary": "Harry Frankfurt's philosophical essay distinguishing bullshit from lying: the liar tracks truth in order to conceal it; the bullshitter is indifferent to truth.",
      "detail": "A compact lens for analysing rhetoric, institutional language, and claims designed primarily to create an impression.",
      "url": "https://www.csc2.ncsu.edu/faculty/mpsingh/local/Social/f24/wrap/readings/Harry-Frankfurt-On-Bullshit-1988.pdf"
    },
    {
      "id": "artifact_human_stupidity",
      "name": "The Basic Laws of Human Stupidity",
      "type": "artifact",
      "cluster": "Books",
      "status": "new",
      "summary": "Carlo M. Cipolla's satirical model of stupidity: people routinely underestimate its prevalence and destructive power, especially when actions harm others without benefiting the actor.",
      "detail": "A humorous but sharp framework for thinking about irrational harm in organisations and society.",
      "url": "https://ia801609.us.archive.org/29/items/kaufman-s-clinical-neurology-for-psychiatrists-pdfdrive/The%20Basic%20Laws%20of%20Human%20Stupidity%20%28Carlo%20M.%20Cipolla%29%20%28Z-Library%29.pdf"
    },
    {
      "id": "artifact_flying_machines",
      "name": "Those Magnificent Men in Their Flying Machines",
      "type": "artifact",
      "cluster": "Books",
      "status": "new",
      "summary": "The 1965 British adventure comedy about an eccentric international air race from London to Paris in the pioneering era of aviation.",
      "detail": "Jim shared a link to the film—a playful celebration of invention, rivalry, national character, and glorious mechanical chaos.",
      "url": "https://ok.ru/video/6496174017084"
    },
    {
      "id": "artifact_first_call_summary",
      "name": "First Call Summary",
      "type": "artifact",
      "cluster": "Calls",
      "status": "planned",
      "summary": "Blank slot for the first video-call summary.",
      "detail": "Promote when actual call notes or transcripts exist.",
      "url": ""
    },
    {
      "id": "action_next_summary",
      "name": "Next Summary Slot",
      "type": "next_action",
      "cluster": "Execution",
      "status": "next",
      "summary": "Add the first real post-launch summary under the right nav pill.",
      "detail": "Update portal-universe.json, rebuild artifacts, push Neo4j, and publish GitHub Pages."
    }
  ],
  "edges": [
    {
      "id": "e_portal_protocol",
      "source": "portal",
      "target": "protocol_parallel_graph",
      "type": "GOVERNS",
      "strength": "strong",
      "note": "Standing rule for this portal."
    },
    {
      "id": "e_portal_tinyfish",
      "source": "portal",
      "target": "pill_tinyfish",
      "type": "HOSTS_PILL",
      "strength": "strong",
      "note": "Seeded content pill."
    },
    {
      "id": "e_portal_language",
      "source": "portal",
      "target": "pill_language",
      "type": "HOSTS_PILL",
      "strength": "medium",
      "note": "Generic blank-state pill."
    },
    {
      "id": "e_portal_books",
      "source": "portal",
      "target": "pill_books",
      "type": "HOSTS_PILL",
      "strength": "medium",
      "note": "Generic blank-state pill."
    },
    {
      "id": "e_portal_headlines",
      "source": "portal",
      "target": "pill_headlines",
      "type": "HOSTS_PILL",
      "strength": "medium",
      "note": "Generic blank-state pill."
    },
    {
      "id": "e_portal_calls",
      "source": "portal",
      "target": "pill_calls",
      "type": "HOSTS_PILL",
      "strength": "medium",
      "note": "Generic blank-state pill."
    },
    {
      "id": "e_portal_assets",
      "source": "portal",
      "target": "pill_assets",
      "type": "HOSTS_PILL",
      "strength": "strong",
      "note": "Drive assets pill."
    },
    {
      "id": "e_tinyfish_demo",
      "source": "pill_tinyfish",
      "target": "artifact_tinyfish_founder_demo",
      "type": "HAS_ARTIFACT",
      "strength": "strong",
      "note": "Seeded TinyFish content."
    },
    {
      "id": "e_tinyfish_carousel",
      "source": "pill_tinyfish",
      "target": "artifact_tinyfish_carousel",
      "type": "HAS_ARTIFACT",
      "strength": "strong",
      "note": "Seeded TinyFish content."
    },
    {
      "id": "e_books_improvement",
      "source": "pill_books",
      "target": "artifact_improvement_manifesto",
      "type": "HAS_ARTIFACT",
      "strength": "strong",
      "note": "PDF shared by Jim."
    },
    {
      "id": "e_books_boards",
      "source": "pill_books",
      "target": "artifact_make_boards_work",
      "type": "HAS_ARTIFACT",
      "strength": "strong",
      "note": "Book proof shared by Jim."
    },
    {
      "id": "e_books_emperor",
      "source": "pill_books",
      "target": "artifact_emperor",
      "type": "HAS_ARTIFACT",
      "strength": "medium",
      "note": "Link shared by Jim."
    },
    {
      "id": "e_books_circle",
      "source": "pill_books",
      "target": "artifact_circle",
      "type": "HAS_ARTIFACT",
      "strength": "medium",
      "note": "Novel reference shared by Jim."
    },
    {
      "id": "e_books_bullshit",
      "source": "pill_books",
      "target": "artifact_on_bullshit",
      "type": "HAS_ARTIFACT",
      "strength": "medium",
      "note": "Essay shared by Jim."
    },
    {
      "id": "e_books_stupidity",
      "source": "pill_books",
      "target": "artifact_human_stupidity",
      "type": "HAS_ARTIFACT",
      "strength": "medium",
      "note": "Book shared by Jim."
    },
    {
      "id": "e_books_flying",
      "source": "pill_books",
      "target": "artifact_flying_machines",
      "type": "HAS_ARTIFACT",
      "strength": "medium",
      "note": "Film shared by Jim."
    },
    {
      "id": "e_calls_summary",
      "source": "pill_calls",
      "target": "artifact_first_call_summary",
      "type": "HAS_ARTIFACT",
      "strength": "weak",
      "note": "Blank call summary slot."
    },
    {
      "id": "e_assets_drive",
      "source": "pill_assets",
      "target": "assets_drive",
      "type": "USES_ASSET_FOLDER",
      "strength": "strong",
      "note": "Shared Drive folder."
    },
    {
      "id": "e_chat_to_language",
      "source": "pill_language",
      "target": "stream_whatsapp",
      "type": "HAS_SOURCE_STREAM",
      "strength": "medium",
      "note": "Chat can generate language notes."
    },
    {
      "id": "e_calls_to_stream",
      "source": "pill_calls",
      "target": "stream_calls",
      "type": "HAS_SOURCE_STREAM",
      "strength": "strong",
      "note": "Call summaries originate here."
    },
    {
      "id": "e_assets_stream",
      "source": "assets_drive",
      "target": "stream_calls",
      "type": "RELATES_TO",
      "strength": "medium",
      "note": "Call assets can live in Drive."
    },
    {
      "id": "e_next_summary",
      "source": "portal",
      "target": "action_next_summary",
      "type": "NEXT_ACTION",
      "strength": "strong",
      "note": "Next concrete operation."
    }
  ],
  "summary": {
    "nodeCount": 22,
    "edgeCount": 22,
    "clusterCount": 6,
    "pillCount": 6,
    "artifactCount": 10,
    "liveArtifactCount": 2
  }
};
