---
id: vilf-backlog
title: VILF Backlog
unlisted: true
---

# VILF 1.0 - Backlog (Authoritative)
**Repository source of truth for project planning and execution.**  
This backlog governs all work on the Vigía Innovation Lab Framework (VILF) 1.0 repository.  
Workflow and quality gates are defined in `/AGENTS.md`.

---

## Backlog Rules
- Each task has a stable ID (BL-XX).
- “Status” is one of: `TODO`, `IN_PROGRESS`, `BLOCKED`, `DONE`.
- “Acceptance Criteria” are mandatory and testable.
- Canon/Core changes require explicit approval per AGENTS.md.
- No task is considered DONE unless acceptance criteria are fully met.

---

## Current Artifacts (Inputs)
- Master Draft (VILF 1.0): `VILF-1.0-master_1.md`, `VILF-1.0-master_2.md`
- Annexes (VILF 1.0): `VILF-1.0-Annexes.md`
- Legacy reference PDF (base guide): `A Guide to Accelerate Global Innovation - Q2 - 2024 - EN.pdf`

---

## Phase 1 — Repo Governance and Planning
### BL-01 — Repository + Governance Setup  
Status: DONE  
Evidence (Commit ID): 2859f43  
Notes:  
- Repository initialized and verified as single source of truth  
- AGENTS.md governance contract added and validated  
- Canonical master drafts, annexes, backlog, and reference PDF committed  
- No Docusaurus, build artifacts, or stray assets present  

BL-02 - Docusaurus Base Setup (Infrastructure Only)  
Status: DONE  
Evidence (Commit IDs): 7d116d5, d0c31cb  
Notes:  
- Docusaurus scaffold created (infra-only; no VILF content migrated)  
- Docusaurus now runs from repo root; build succeeds  
Scope:  
- Initialize Docusaurus project structure  
- Configure repository for Docusaurus without content migration  
- No chapter files, no MDX generation  

Acceptance Criteria:  
- Docusaurus builds successfully locally  
- No framework content imported  
- Structure mirrors VIF baseline  

---

BL-02A - Docusaurus Root Restructure & Manuscript Isolation  
Status: DONE  
Evidence (Commit IDs): 29b1b03, d0c31cb, b60f453  
Notes:  
- Docusaurus runs from repo root  
- /site removed  
- Canonical manuscript isolated under /manuscript  
- Local build successful; no content migration performed  
Scope:  
- Move Docusaurus installation from /site to repository root  
- Remove /site directory entirely  
- Relocate VILF master drafts and annexes into a non-rendered folder (/manuscript)  
- Preserve Docusaurus-first, chapters-later constraint  

Acceptance Criteria:  
- Docusaurus runs from repo root (npm install / npm run build succeed)  
- No VILF framework content rendered or published  
- Canonical manuscript isolated from Docusaurus rendering  
- Backlog item closed with commit evidence  

---

BL-02C — Cleanup: Remove Redundant Ops Script (BL-02B Artifact)  
Status: DONE  
Evidence (Commit ID): 6810541  
Notes: Removed redundant ops script; build unchanged.  
Scope:  
- Remove ops/scripts/flatten-docs.ps1 if present  
- Ensure no remaining references to the cancelled BL-02B implementation path  

Acceptance Criteria:  
- ops/scripts/flatten-docs.ps1 removed from repo  
- Repo builds unchanged (npm run build still succeeds)  
- Backlog item closed with commit evidence  

---

BL-02G — Governance: Track Governance Changes in AGENTS + Backlog  
Status: DONE  
Evidence (Commit ID): 4f02a4b  
Notes: Governance change control rule codified in AGENTS.md.  
Scope:  
- Require that any governance change is added to AGENTS.md  
- Require that any governance change is tracked as a backlog item (define → execute → close with commit evidence)  

Acceptance Criteria:  
- AGENTS.md includes an explicit rule for governance changes (AGENTS + backlog tracking)  
- Backlog item BL-02G is closed with commit evidence  

---

BL-02B — Fix Docs Nesting After Root Move (docs/docs → docs)  
Status: DONE  
Evidence (Commit ID): 9ccca0b  
Notes: Cancelled — docs/docs nesting not present in current repo state; no action required; item closed to avoid redundant work.  
Scope:  
- Flatten Docusaurus docs from docs/docs/* into docs/*  
- Preserve docs/ops intact  
- Restore working /docs/intro route so build passes  

Acceptance Criteria:  
- docs/intro.md exists at docs/intro.md (not docs/docs/intro.md)  
- docs/docs directory removed (or empty)  
- npm run build succeeds without broken-link errors  
- Backlog item closed with commit evidence  

---

BL-02H — Repo Hygiene: Ignore Build Artifacts & Local State  
Status: DONE  
Evidence (Commit ID): 7dc6337  
Notes: .gitignore updated to exclude local artifacts.  
Scope:  
- Ensure build artifacts and local state are not tracked by git  
- Add/extend .gitignore for Docusaurus/Node artifacts  

Acceptance Criteria:  
- .gitignore ignores: node_modules/, build/, .docusaurus/  
- git status -sb no longer shows these as untracked after cleanup  
- Backlog item closed with commit evidence  

---

BL-03 - Styling Parity with VIF  
Status: DONE  
Evidence (Commit ID): 78015cd, 86f6020  
Scope:  
- Apply exact VIF visual language (colors, layout, components)  
- Configure hero, cards, and section components  
- No content rendering beyond placeholders  
- Requires: VIF palette (hex), VIF index.tsx, CSS modules/global CSS, component structure, sitemap definition.  

Acceptance Criteria:  
- Visual parity with VIF confirmed  
- Styling assets isolated and reusable  
- No deviation from VIF component structure  

---

BL-03A - Site Identity: Docusaurus Config (VILF)  
Status: DONE  
Evidence (Commit ID): fb3e1ea  
Notes: Site identity and navbar title set.  

---

BL-03B - Styling Baseline (custom.css)  
Status: DONE  
Evidence (Commit ID): 3a79849  
Notes: Doulab palette and baseline styles applied.  

---

BL-03C - Remove Blog (Disable preset + delete content)  
Status: DONE  
Evidence (Commit ID): 7966f18  
Notes: Blog disabled and content removed.  

---

BL-03D - Homepage Layout (VIF-style)  
Status: DONE  
Evidence (Commit ID): 4b4ed3c  
Notes: VIF-style homepage layout applied.  

---

BL-03G — Versioning Rule + Version Set  
Status: DONE  
Evidence (Commit IDs): 5e9e4bb, 174de63  
Notes: Versioning rule added; package.json name set to vilf and version set to 0.3.0.  

---
BL-03E — Remove Default Docusaurus Tutorial Content (Avoid /blog Broken Links)  
Status: DONE  
Evidence (Commit ID): 8555d7d  
Notes: Default tutorial content removed; /blog references eliminated; build passes.  
Scope:  
- Remove default docs/pages that reference /blog (intro/tutorials/markdown-page)  
- Remove /blog links from footer/navbar config  
Acceptance Criteria:  
- npm run build succeeds with onBrokenLinks=throw  
- No references to /blog remain  

---

BL-03H — Governance: Build Must Pass Before Any Commit  
Status: DONE  
Evidence (Commit ID): 48db8a7  
Notes: Build gate before commit rule added to AGENTS.md.  
Scope:  
- Add a governance rule requiring npm run build to pass before every commit  
- Track rule via backlog + AGENTS.md  
Acceptance Criteria:  
- AGENTS.md updated with explicit rule  
- Backlog item closed with commit evidence  

---

BL-03I — Root README.md (VILF)  
Status: DONE  
Evidence (Commit ID): 080e71a  
Notes: Root README added for VILF repository structure.  
Scope:  
- Add a root README.md explaining what this repo is and how it is structured  
Acceptance Criteria:  
- README.md present at repo root  
- Reflects VILF (not VIF) and current repo structure  
- Backlog item closed with commit evidence  

---

BL-04 - Landing Page Construction (VILF)  
Status: DONE
Evidence (Commit IDs): 4b4ed3c, 7a46af4
Notes:
- Implemented via BL-03D (homepage layout) + BL-09A (public CTA cleanup).
Scope:  
- Build full VILF landing page (hero, sections, cards)  
- Use placeholder copy where necessary  
- No chapter-level navigation  

Acceptance Criteria:  
- Landing page matches VIF sitemap logic  
- No broken links or empty sections  
- Page renders cleanly on build  

---

BL-04A — Navigation & Sitemap Baseline (VIF-style)  
Status: DONE  
Evidence (Commit ID): 01a2578  
Scope:  
- Align navbar + footer to a minimal, non-broken sitemap  
- Ensure Docs entry points are stable (/docs/intro, Ops)  
Acceptance Criteria:  
- Navbar: Docs, Ops, (optional) GitHub  
- Footer: no dead links (no /blog, no scaffold links)  
- npm run build succeeds with onBrokenLinks=throw  

---

BL-04B — Docs UX Baseline  
Status: DONE  
Evidence (Commit ID): 4a0f1d4  
Scope:  
- Refine docs/intro.md to be the stable landing page  
- Ensure ops backlog remains accessible and correctly categorized in sidebars  
Acceptance Criteria:  
- /docs/intro renders cleanly  
- Sidebar shows Introduction + Ops/backlog  
- npm run build succeeds  

---

BL-04C — Branding Baseline (VILF)  
Status: DONE  
Evidence (Commit ID): 7b43742  
Scope:  
- Replace default Docusaurus logo/favicon/social assets with VILF placeholders  
- Ensure metadata (title, image) is consistent  
Acceptance Criteria:  
- No default Docusaurus logo in navbar  
- Favicon present (placeholder OK)  
- npm run build succeeds  

---

BL-04D — Privacy: Remove Ops Visibility from Public Navigation  
Status: DONE  
Evidence (Commit ID): a5a2a72  
Scope:  
- Remove any navbar/footer/sidebar links to /docs/ops  
- Replace with a public roadmap/status page under /docs  
Acceptance Criteria:  
- No Ops links in navbar/footer/sidebar  
- Public page exists (e.g., /docs/roadmap) with safe content  
- npm run build succeeds  

---

BL-05 - Sitemap & Navigation Configuration  
Status: DONE
Evidence (Commit IDs): 01a2578, 4a0f1d4, 48d61b4
Notes:
- Covered by BL-04A/04B + BL-05A/05B/05C; config/sidebar sanity confirmed during BL-09.
Scope:  
- Define top-level sitemap and navigation  
- Align navigation model with VIF  
- Exclude chapter pages  

Acceptance Criteria:  
- Navigation structure finalized and documented  
- No orphan routes  
- Sitemap stable across builds  

---

BL-05A — Public Docs Skeleton: Chapter Placeholders  
Status: DONE  
Evidence (Commit ID): 755c7c7  
Scope:  
- Create placeholder chapter pages under /docs that reflect VILF structure  
- Add them to sidebars (public)  
Acceptance Criteria:  
- Chapters appear in sidebar  
- No manuscript content copied yet  
- npm run build succeeds  

---

BL-05B — Public Docs Skeleton: Annex Placeholders  
Status: DONE  
Evidence (Commit ID): cd5d75a  
Scope:  
- Create placeholder annex index page and annex list (01–15)  
- Add to sidebars (public)  
Acceptance Criteria:  
- Annex pages appear in sidebar  
- No annex text copied yet  
- npm run build succeeds  

---

BL-05C — Homepage/Intro Alignment  
Status: DONE  
Evidence (Commit ID): 48d61b4  
Scope:  
- Ensure intro + roadmap link to the new skeleton pages  
Acceptance Criteria:  
- No dead links  
- npm run build succeeds  

---

BL-06 - GitHub Repository Configuration  
Status: DONE  
Evidence (Commit IDs):  
- BL-06A: ad6ab5f  
- BL-06B: e77cc67  
- BL-06B0: 27836ba  
- BL-06C: 22428e7  
- BL-06D: 68677cd  
- BL-06E: 87875a5  
- BL-06F: 7716936  
- BL-06G: f1e9b68  
- BL-06H: 6a14784  
- BL-06I: 8e5ed3f  
- BL-06J: 1a0f8aa  
- BL-06K: 6c4e8ff  
- BL-06L: efdba81  
- BL-06M: 5b4e46c  
- BL-06N: 8a3de66  
- BL-06O: 1716247  
- BL-06P: 980edbb  
- BL-06Q: aac60c3  
Notes: Placeholders removed as part of migration; no history rewrite performed.  
Scope:  
- Configure repo metadata (description, topics)  
- Validate branch protections if applicable  
- Confirm governance alignment  

Acceptance Criteria:  
- Repo ready for public-facing framework distribution  
- Governance files untouched  
- No CI/CD content migration yet  

---

BL-06R — Audit: Annexes Sync Against Master 2 (Chapters-Only Canon Update)
Status: TODO
Scope:
- Validate whether the annexes (migrated from Master 1 / Annexes manuscript) remain consistent with the revised Chapter content in Master 2.
- Check for:
  - Terminology drift (e.g., IMM-P® usage)
  - Role/tier naming drift (Lab/Hub/NCU)
  - Governance references that changed in chapters but remain stale in annexes
  - Cross-reference integrity (annex references to chapters that changed wording/anchors)

Acceptance Criteria:
- A short audit report is added to `docs/ops/` (e.g., `docs/ops/annex-sync-audit.md`) listing:
  - “In sync” annexes
  - Annexes requiring edits + exact diffs required (no rewrites)
- Any required annex edits are implemented with build gate before commit
- npm run build passes

Evidence:
- Commit(s): TBD

Notes:
- Master 2 contains chapters only; annex source-of-truth remains the annex manuscript + prior migration commits, pending this audit.

---

BL-06A — Migration Conventions + Index Page  
Status: DONE
Evidence (Commit ID): 6804b58
Scope:  
- Create a public “Migration Notes / Index” page under /docs explaining rules of migration (no rewriting)  
- Define front-matter conventions for migrated chapters/annexes  
Acceptance Criteria:  
- Page exists under docs/migration.md (public)  
- Conventions documented briefly (no ops links)  
- npm run build succeeds  

---

BL-06B0 — Migrate Chapter 00 (Executive Summary) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): 978c545  
Scope:  
- Create docs/chapters/00.mdx by migrating Chapter 00 content from manuscript (Executive Summary + 00a overview)  
- Preserve wording and headings; adjust only for MDX compliance  

Acceptance Criteria:  
- Content present in docs/chapters/00.mdx  
- Sidebar includes Chapter 00 before Chapter 01  
- npm run build succeeds  

---

BL-06B — Migrate Chapter 01 (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): 58ade2b
Scope:  
- Create docs/chapters/01.mdx by migrating Chapter 01 content from manuscript  
- Preserve wording and headings; adjust only for MDX compliance  
Notes:  
- This item exists in the backlog but the DONE evidence is not recorded in this section. Verify whether Chapter 01 is already migrated; if yes, update to DONE with commit evidence.  
Acceptance Criteria:  
- Content present in docs/chapters/01.mdx  
- Sidebar continues to work (same doc id)  
- No broken links; npm run build succeeds  

---

BL-06C — Migrate Annex 01 (ToR — Labs Tier-0) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): b923048  
Scope:  
- Create docs/annexes/01.mdx by migrating Annex 01 content from manuscript  
- Preserve wording and headings; adjust only for MDX compliance  
Acceptance Criteria:  
- Content present in docs/annexes/01.mdx  
- Sidebar continues to work (same doc id)  
- No broken links; npm run build succeeds  

---

BL-06D — Migrate Annex 02 (ToR — Hubs Tier-1) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): 9318f5e  
Scope:  
- Create docs/annexes/02.mdx by migrating Annex 02 content from manuscript  
- Preserve wording and headings; adjust only for MDX compliance  
Acceptance Criteria:  
- Content present in docs/annexes/02.mdx  
- Sidebar continues to work (same doc id)  
- npm run build succeeds  

---

BL-06E — Migrate Annex 03 (ToR — Network Coordination Unit Tier-2) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): 25cf9ff  
Scope:  
- Create docs/annexes/03.mdx by migrating Annex 03 content from manuscript  
- Preserve wording and headings; adjust only for MDX compliance  
Acceptance Criteria:  
- Content present in docs/annexes/03.mdx  
- Sidebar continues to work (same doc id)  
- npm run build succeeds  

---

BL-06F — Migrate Annex 04 (Multi-Institutional MoU Template) (Manuscript → MDX)  
Status: TODO  
Scope:  
- Create docs/annexes/04.mdx by migrating Annex 04 content from manuscript  
- Preserve wording and headings; adjust only for MDX compliance  

Acceptance Criteria:  
- Content present in docs/annexes/04.mdx  
- Template preserved verbatim (use fenced block if needed)  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

BL-06G — Migrate Annex 05 (Governance Decision Rights Matrix — IGF) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): 60f90e2  
Scope:  
- Create docs/annexes/05.mdx by migrating Annex 05 content from manuscript  
- Preserve wording and headings; keep the decision matrix table verbatim  

Acceptance Criteria:  
- Content present in docs/annexes/05.mdx  
- Table renders correctly  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

BL-06H — Migrate Annex 06 (MEL Checklists & Scorecards) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): 0ee6724  
Scope:  
- Create docs/annexes/06.mdx by migrating Annex 06 content from manuscript  
- Preserve wording and headings; keep checklists and tables verbatim  

Acceptance Criteria:  
- Content present in docs/annexes/06.mdx  
- Tables render correctly  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

BL-06I — Migrate Annex 07 (Documentation & Evidence Standards) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): e91f5e1  
Scope:  
- Create docs/annexes/07.mdx by migrating Annex 07 content from manuscript  
- Preserve wording and headings; preserve repository structure block verbatim  

Acceptance Criteria:  
- Content present in docs/annexes/07.mdx  
- Code/folder blocks render correctly  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

BL-06J — Migrate Annex 08 (Risk & Ethics Protocols — IGF-Aligned) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): a62f80b  
Scope:  
- Create docs/annexes/08.mdx by migrating Annex 08 content from manuscript  
- Preserve wording and headings; keep escalation thresholds table verbatim  

Acceptance Criteria:  
- Content present in docs/annexes/08.mdx  
- Table renders correctly  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

BL-06K — Migrate Annex 09 (Innovation Project Intake & Prioritization Form) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): 9675038  
Scope:  
- Create docs/annexes/09.mdx by migrating Annex 09 content from manuscript  
- Preserve wording and headings; keep form sections verbatim  

Acceptance Criteria:  
- Content present in docs/annexes/09.mdx  
- Markdown renders cleanly  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

BL-06L — Migrate Annex 10 (Challenge Fund Governance Pack) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): 9765ade  
Scope:  
- Create docs/annexes/10.mdx by migrating Annex 10 content from manuscript  
- Preserve wording and headings; keep tables verbatim  

Acceptance Criteria:  
- Content present in docs/annexes/10.mdx  
- Tables render correctly  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

BL-06M — Migrate Annex 11 (Accreditation Rubric — Lab / Hub / NCU) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): ed403ac  
Scope:  
- Create docs/annexes/11.mdx by migrating Annex 11 content from manuscript  
- Preserve wording and headings; keep criteria and outcomes verbatim  

Acceptance Criteria:  
- Content present in docs/annexes/11.mdx  
- Markdown renders cleanly  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

BL-06N — Migrate Annex 12 (Hub Capability Development Playbook) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): d1d0b48  
Scope:  
- Create docs/annexes/12.mdx by migrating Annex 12 content from manuscript  
- Preserve wording and headings; keep lists and module structure verbatim  

Acceptance Criteria:  
- Content present in docs/annexes/12.mdx  
- Markdown renders cleanly  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

BL-06O — Migrate Annex 13 (Innovation Lab Archetype Library) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): c99f5c3  
Scope:  
- Create docs/annexes/13.mdx by migrating Annex 13 content from manuscript  
- Preserve wording and headings; keep archetype sections verbatim  

Acceptance Criteria:  
- Content present in docs/annexes/13.mdx  
- Markdown renders cleanly  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

BL-06P — Migrate Annex 14 (National Deployment Guide) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): 31b9212  
Scope:  
- Create docs/annexes/14.mdx by migrating Annex 14 content from manuscript  
- Preserve wording and headings; keep authorization note verbatim  

Acceptance Criteria:  
- Content present in docs/annexes/14.mdx  
- Markdown renders cleanly  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

BL-06Q — Migrate Annex 15 (Glossary Expansion) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): cf4e49f  
Scope:  
- Create docs/annexes/15.mdx by migrating Annex 15 content from manuscript  
- Preserve wording and headings; keep definitions verbatim  

Acceptance Criteria:  
- Content present in docs/annexes/15.mdx  
- Markdown renders cleanly  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

Status: DONE  
Evidence (Commit ID): 25cf9ff  
Scope:  
- Create docs/annexes/03.mdx by migrating Annex 03 content from manuscript  
- Preserve wording and headings; adjust only for MDX compliance  

Acceptance Criteria:  
- Content present in docs/annexes/03.mdx  
- Sidebar continues to work (same doc id)  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

Status: DONE  
Evidence (Commit ID): 9318f5e  
Scope:  
- Create docs/annexes/02.mdx by migrating Annex 02 content from manuscript  
- Preserve wording and headings; adjust only for MDX compliance  

Acceptance Criteria:  
- Content present in docs/annexes/02.mdx  
- Sidebar continues to work (same doc id)  
- npm run build succeeds  
- Closeout includes commit id evidence  

---

Status: DONE  
Evidence (Commit ID): b923048  
Scope:  
- Create docs/annexes/01.mdx by migrating Annex 01 content from manuscript  
- Preserve wording and headings; adjust only for MDX compliance  
Acceptance Criteria:  
- Content present in docs/annexes/01.mdx  
- Sidebar continues to work (same doc id)  
- No broken links; npm run build succeeds  

---

BL-07 - Cloudflare Pages Configuration  
Status: DONE  
Evidence:  
- Production domain: vilf.doulab.net  
- Cloudflare Pages project connected to GitHub repo: micro-canvas-framework/vilf  
- Production deploy commit SHA: a9ba75b67b6788a2b46556ffb4cbd8d0b2037f18  
- Cloudflare deployment/build URL: https://7a251f8b.vilf.pages.dev/  
Notes:  
- Cloudflare Pages is configured and serving production at vilf.doulab.net.  

---

BL-07X — Record Cloudflare Deploy Evidence (SHA + Build URL)
Status: TODO
Scope:
- Replace the remaining TBD placeholders in BL-07 and BL-11A with:
  - Production deploy commit SHA
  - Cloudflare Pages build/deployment URL (or equivalent)
Acceptance Criteria:
- BL-07 and BL-11A contain concrete SHA + URL (no TBD)
- Backlog-only change
- npm run build passes

---

BL-07A — Migrate Chapter 02 (Ecosystem Diagnostic) (Manuscript → MDX)  
Status: DONE  
Evidence (Commit ID): e6446c9  
Scope:  
- Create docs/chapters/02.mdx from manuscript Chapter 02 (verbatim)  
- Remove placeholder docs/chapters/02.md if it exists  
Acceptance Criteria:  
- Content present in docs/chapters/02.mdx  
- No duplicate doc ids  
- npm run build succeeds  
- Closeout includes commit id evidence  
Notes: Verbatim manuscript content; placeholder removed earlier.  

BL-07B — Migrate Chapter 03 (System Architecture) to MDX  
Status: DONE  
Evidence (Commit ID): 6c9b452  
Notes: Verbatim manuscript content; placeholder removed if present.  

BL-07C — Migrate Chapter 04 (Operating Model) to MDX  
Status: DONE  
Evidence (Commit ID): 4f9ebc1  
Scope: create docs/chapters/04.mdx (verbatim), remove placeholder docs/chapters/04.md if present, ensure sidebar remains stable, build gate.  
Notes: Verbatim manuscript content; placeholder removed if present.  

BL-07D — Migrate Chapter 05 (Funding Model) to MDX  
Status: DONE  
Evidence (Commit ID): 40e44a0  
Scope: create docs/chapters/05.mdx (verbatim), remove placeholder docs/chapters/05.md if present, ensure sidebar stable.  

BL-07E — Migrate Chapter 06 (Benchmarking) to MDX  
Status: DONE  
Evidence (Commit ID): 88ddb32  
Scope: create docs/chapters/06.mdx (verbatim), remove placeholder docs/chapters/06.md if present, ensure sidebar stable.  

BL-07F — Migrate Chapter 07 (KPIs & Scorecard — MEL Core System)  
Status: DONE  
Evidence (Commit ID): 95603ea  
Scope: create docs/chapters/07.mdx (verbatim), remove placeholder 07.md if present, keep sidebar stable.  

BL-07G — Migrate Chapter 08 (Roadmap & Phasing)  
Status: DONE  
Evidence (Commit ID): bf7a0b8  
Scope: create docs/chapters/08.mdx (verbatim), remove placeholder 08.md if present, keep sidebar stable.  

BL-07H — Migrate Chapter 09 (Governance & Legal Toolkit)  
Status: DONE  
Evidence (Commit ID): 5a8cf57  
Scope: create docs/chapters/09.mdx (verbatim), remove placeholder 09.md if present, keep sidebar stable.  

BL-07I — Migrate Chapter 10 (Templates & Tools)  
Status: DONE  
Evidence (Commit ID): a25e5cb  
Scope: create docs/chapters/10.mdx (verbatim), remove placeholder 10.md if present, keep sidebar stable.  

BL-07J — Migrate Chapters 11–15 (References → Annexes)  
Status: DONE  
Evidence (Commit ID): 6de968b  
Scope: create docs/chapters/11.mdx ... 15.mdx (verbatim), remove placeholders 11.md..15.md if present, keep sidebar stable.  

BL-08 — Docusaurus Readiness Audit  
Status: DONE
Evidence (Commit IDs): c51cdd5, d114ec9
Notes:
- Superseded: migration completed and pre-release gates + first push were executed successfully.
Scope:  
- Validate readiness for chapter import  
- Check AGENTS.md compliance  
- Confirm diagram, citation, and MDX constraints  

Acceptance Criteria:  
- Explicit “ready for content migration” confirmation  
- No structural blockers identified  
- Audit notes recorded  

---

BL-09 - Chapter Migration Plan (Design Only)  
Status: DONE  
Evidence (Commit IDs): 7a46af4, 5605f4c, 87698b4  
Notes: Audit of public ops exposure completed; homepage CTA cleanup (BL-09A) and ops unlisted (BL-09B) applied; build gates passed.  
Scope:  
- Define chapter-to-MDX mapping  
- Define front-matter schema  
- Define diagram conversion rules  

Acceptance Criteria:  
- Written migration plan approved  
- No chapter files generated  
- No content modified  

---

BL-09A - Consistency + Navigation + Build Audit  
Status: DONE  
Evidence (Commit ID): 7a46af4  
Scope:  
- Validate public navigation and remove any ops exposure  
- Ensure build passes after corrections  

Acceptance Criteria:  
- No /docs/ops links in public homepage  
- npm run build succeeds  

---

BL-10 - Post-migration cleanup notes  
Status: DONE  
Scope:  
- Document placeholder-only commits created due to staged migration workflow / pathspec issues  
Outcome:  
- No code changes; documentation only  

Notes:  
- Placeholder-only commits kept as-is to preserve auditable migration steps; optional squash possible later.  
- Known placeholder-only commits: 42e3f6f, 95dec4e, fcd179d, a4fb29f, 027772f, 40b1741, b1490a4, 12b7a68, 2f09385, ec12ab3, 2f9362f  

Evidence (Commit ID): da1f8bd  

## Phase 4 - Final Gates
### BL-11 - Pre-Release Verification
**Status:** DONE  
Evidence (Commit ID): c51cdd5  
Notes: Local gates (typecheck/build) passed prior to push; GitHub push completed (origin/main at d114ec9); Cloudflare deployment is tracked separately (BL-07 / BL-11A).  
**Acceptance Criteria:**
- Terminology consistency passes.
- Cross-references resolve correctly.
- Mermaid renders.
- Build and deploy pass.
- Release artifacts prepared (LICENSE/CHANGELOG/RELEASE as applicable).

### BL-11A — Cloudflare Pages Deployment & Smoke Test
---

BL-02I — Governance: Canonical Source + Terminology Rule (Master 2 + IMM-P®)
Status: DONE
Scope:
- Track the newly adopted governance rules (already implemented in code/docs) as a backlog item:
  - Canonical manuscript source for VILF v1.0 chapters is `manuscript/VILF-1.0-master_2.md`
  - Canonical terminology is **IMM-P®** (normalize any variants)
  - Any new governance/process/quality rule must be added to AGENTS.md and tracked in backlog

Acceptance Criteria:
- Backlog item exists with explicit rule statement (this entry)
- Evidence includes the commits that implemented the rule + terminology normalization:
  - ed9a1d0
  - 9018cbd
- npm run build passes

Evidence:
- Commit(s): ed9a1d0, 9018cbd

Notes:
- Master 2 is chapters-only; annexes are sourced elsewhere and audited separately (see BL-06R).

---


### BL-07X — Fill Cloudflare Deploy Evidence (SHA + URL)
Status: DONE  
Evidence:
- Cloudflare deploy commit SHA: a9ba75b67b6788a2b46556ffb4cbd8d0b2037f18
- Cloudflare Pages URL: https://7a251f8b.vilf.pages.dev/
Notes:
- Evidence sourced from Cloudflare Pages deploy logs; production mapped to vilf.doulab.net.


Status: DONE  
Evidence:
- Production URL: vilf.doulab.net  
- Cloudflare deploy commit SHA: a9ba75b67b6788a2b46556ffb4cbd8d0b2037f18  
- Cloudflare deployment/build URL: https://7a251f8b.vilf.pages.dev/  

Smoke test (PASS):
- /  
- /docs/intro  
- /docs/roadmap  
- /docs/chapters/00  
- /docs/annexes/01  

Notes:
- Verified ops is not exposed in public navigation.  

### BL-12 - Tag and Publish VILF 1.0
**Status:** DONE  
Evidence: tag v1.0.0 @ ebb166b  
**Acceptance Criteria:**
- Version tag created.
- Release notes updated.
- Public deployment confirmed.

### BL-13 - Governance: Canonical Source + Terminology Rule
Status: DONE  
Evidence (Commit IDs): 9018cbd, ed9a1d0  
Notes:
- AGENTS.md codifies canonical manuscript source as manuscript/VILF-1.0-master_2.md.
- IMM-P® terminology normalized and enforced as canonical spelling.

---

## Next Execution Tasks (Pre-Editorial)
Execute and close the remaining TODO items before starting BL-14:
1) BL-06A (Migration Conventions + Index Page)
2) BL-06B (Chapter 01) — verify/migrate + record evidence
3) BL-06F (Annex 04 MoU Template)
4) BL-04 (Landing Page Construction) — if still required
5) BL-05 (Sitemap & Navigation Configuration) — if still required
6) BL-08 (Docusaurus Readiness Audit)
7) BL-07X (Fill Cloudflare SHA + Build URL evidence)








## Phase 3 — Annex Sync (Post-Canon Update)
### Atomic Annex Sync Tasks (from BL-06R audit)
Source audit: `docs/ops/audits/bl-06r-annex-sync-audit.md`

---
### BL-06S01 — Annex 01 Sync (MISMATCH)
Status: DONE  
Scope:
- Re-sync docs/annexes/01.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 01).
- Record any unavoidable MDX normalization in Notes.
Evidence (Commit ID): 8bceae98324b3c6d8f796e2ab48e2b6c08845305

Acceptance Criteria:
- docs/annexes/01.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 01 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=66. First-diff snippet (canon): "# 01.1 Purpose
---
### BL-06S02 — Annex 02 Sync (MISMATCH)
Status: DONE  
Scope:
- Re-sync docs/annexes/02.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 02).
- Record any unavoidable MDX normalization in Notes.
Evidence (Commit ID): 8fa92d2948c1fa5d1b9bd9eeaccf0bfdcaa4db82

Acceptance Criteria:
- docs/annexes/02.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 02 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=55. First-diff snippet (canon): "# 02.1 Purpose
---
### BL-06S03 — Annex 03 Sync (MISMATCH)
Status: DONE  
Scope:
- Re-sync docs/annexes/03.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 03).
- Record any unavoidable MDX normalization in Notes.
Evidence (Commit ID): 1feccd8fabb0fb405dd6ec7a69207fd5b407338b

Acceptance Criteria:
- docs/annexes/03.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 03 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=76. First-diff snippet (canon): "# 03.1 Purpose
---
### BL-06S04 — Annex 04 Sync (MISMATCH)
Status: DONE
Evidence: d1e1bc3
Scope:
- Re-sync docs/annexes/04.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 04).
- Record any unavoidable MDX normalization in Notes.

Acceptance Criteria:
- docs/annexes/04.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 04 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=26. First-diff snippet (canon): "# 04.1 Purpose
---
### BL-06S05 — Annex 05 Sync (MISMATCH)
Status: DONE
Evidence (Commit ID): 230edef
Scope:
- Re-sync docs/annexes/05.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 05).
- Record any unavoidable MDX normalization in Notes.

Acceptance Criteria:
- docs/annexes/05.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 05 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=54. First-diff snippet (canon): "# 05.1 Purpose
---
### BL-06S06 — Annex 06 Sync (MISMATCH)
Status: DONE
Evidence (Commit ID): 8599900
Scope:
- Re-sync docs/annexes/06.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 06).
- Record any unavoidable MDX normalization in Notes.

Acceptance Criteria:
- docs/annexes/06.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 06 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=47. First-diff snippet (canon): "# 06.1 Purpose
---
### BL-06S07 — Annex 07 Sync (MISMATCH)
Status: DONE
Evidence (Commit ID): efcb930
Scope:
- Re-sync docs/annexes/07.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 07).
- Record any unavoidable MDX normalization in Notes.

Acceptance Criteria:
- docs/annexes/07.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 07 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=-52. First-diff snippet (canon): "# 07.1 Purpose
---
### BL-06S08 — Annex 08 Sync (MISMATCH)
Status: DONE
Evidence (Commit ID): f565343
Scope:
- Re-sync docs/annexes/08.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 08).
- Record any unavoidable MDX normalization in Notes.

Acceptance Criteria:
- docs/annexes/08.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 08 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=52. First-diff snippet (canon): "# 08.1 Purpose
---
### BL-06S09 — Annex 09 Sync (MISMATCH)
Status: DONE
Evidence (Commit ID): 6425704
Scope:
- Re-sync docs/annexes/09.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 09).
- Record any unavoidable MDX normalization in Notes.

Acceptance Criteria:
- docs/annexes/09.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 09 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=67. First-diff snippet (canon): "# 09.1 Purpose
---
### BL-06S10 — Annex 10 Sync (MISMATCH)
Status: DONE
Evidence (Commit ID): 39e49de
Scope:
- Re-sync docs/annexes/10.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 10).
- Record any unavoidable MDX normalization in Notes.

Acceptance Criteria:
- docs/annexes/10.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 10 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=45. First-diff snippet (canon): "# 10.1 Purpose
---
### BL-06S11 — Annex 11 Sync (MISMATCH)
Status: TODO  
Scope:
- Re-sync docs/annexes/11.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 11).
- Record any unavoidable MDX normalization in Notes.

Acceptance Criteria:
- docs/annexes/11.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 11 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=53. First-diff snippet (canon): "# 11.1 Purpose
---
### BL-06S12 — Annex 12 Sync (MISMATCH)
Status: TODO  
Scope:
- Re-sync docs/annexes/12.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 12).
- Record any unavoidable MDX normalization in Notes.

Acceptance Criteria:
- docs/annexes/12.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 12 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=55. First-diff snippet (canon): "# 12.1 Purpose
---
### BL-06S13 — Annex 13 Sync (MISMATCH)
Status: TODO  
Scope:
- Re-sync docs/annexes/13.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 13).
- Record any unavoidable MDX normalization in Notes.

Acceptance Criteria:
- docs/annexes/13.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 13 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=47. First-diff snippet (canon): "# 13.1 Purpose
---
### BL-06S14 — Annex 14 Sync (MISMATCH)
Status: TODO  
Scope:
- Re-sync docs/annexes/14.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 14).
- Record any unavoidable MDX normalization in Notes.

Acceptance Criteria:
- docs/annexes/14.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 14 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=65. First-diff snippet (canon): "# 14.1 Purpose
---
### BL-06S15 — Annex 15 Sync (MISMATCH)
Status: TODO  
Scope:
- Re-sync docs/annexes/15.mdx to match manuscript annex text (verbatim)
- Preserve wording/headings; adjust only for MDX compliance (front-matter, escaping, code fences).
- Keep existing doc id stable (Annex 15).
- Record any unavoidable MDX normalization in Notes.

Acceptance Criteria:
- docs/annexes/15.mdx renders cleanly in Docusaurus.
- Content matches `VILF-1.0-Annexes.md` for Annex 15 under agreed normalization.
- npm run typecheck passes.
- npm run build passes.
- Backlog item closed with commit evidence.

Notes:
- Audit note: Normalized text differs. lenΔ=33. First-diff snippet (canon): "# 15.1 Purpose
