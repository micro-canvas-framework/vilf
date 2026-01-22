# VILF 1.0 — Backlog (Authoritative)
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
Status: CANCELLED  
Evidence (Commit ID): 9ccca0b  
Notes: docs/docs nesting not present in current repo state; no action required; item cancelled to avoid redundant work.  
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
Status: PLANNED  
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
Status: PLANNED  
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
Status: PLANNED  
Scope:  
- Configure repo metadata (description, topics)  
- Validate branch protections if applicable  
- Confirm governance alignment  

Acceptance Criteria:  
- Repo ready for public-facing framework distribution  
- Governance files untouched  
- No CI/CD content migration yet  

---

BL-06A — Migration Conventions + Index Page  
Status: PLANNED  
Scope:  
- Create a public “Migration Notes / Index” page under /docs explaining rules of migration (no rewriting)  
- Define front-matter conventions for migrated chapters/annexes  
Acceptance Criteria:  
- Page exists under docs/migration.md (public)  
- Conventions documented briefly (no ops links)  
- npm run build succeeds  

---

BL-06B — Migrate Chapter 01 (Manuscript → MDX)  
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

Status: PLANNED  
Scope:  
- Create docs/chapters/01.mdx by migrating Chapter 01 content from manuscript  
- Preserve wording and headings; adjust only for MDX compliance  
Acceptance Criteria:  
- Content present in docs/chapters/01.mdx  
- Sidebar continues to work (same doc id)  
- No broken links; npm run build succeeds  

---

BL-06C — Migrate Annex 01 (Manuscript → MDX)  
BL-06D — Migrate Annex 02 (ToR — Hubs Tier-1) (Manuscript → MDX)  
BL-06E — Migrate Annex 03 (ToR — Network Coordination Unit Tier-2) (Manuscript → MDX)  
BL-06F — Migrate Annex 04 (Multi-Institutional MoU Template) (Manuscript → MDX)  
Status: PLANNED  
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
Status: PLANNED  
Scope:  
- Configure Cloudflare Pages deployment  
- Bind to correct branch and build command  
- Ensure environment parity with VIF  

Acceptance Criteria:  
- Successful Cloudflare build & deploy  
- Public preview URL available  
- No private or draft content exposed  

---

BL-08 — Docusaurus Readiness Audit  
Status: PLANNED  
Scope:  
- Validate readiness for chapter import  
- Check AGENTS.md compliance  
- Confirm diagram, citation, and MDX constraints  

Acceptance Criteria:  
- Explicit “ready for content migration” confirmation  
- No structural blockers identified  
- Audit notes recorded  

---

BL-09 — Chapter Migration Plan (Design Only)  
Status: PLANNED  
Scope:  
- Define chapter-to-MDX mapping  
- Define front-matter schema  
- Define diagram conversion rules  

Acceptance Criteria:  
- Written migration plan approved  
- No chapter files generated  
- No content modified  

---

BL-10 — Phase Gate: Pre-Migration Closeout  
Status: PLANNED  
Scope:  
- Final verification of BL-02 → BL-09  
- Governance, backlog, and infra consistency check  
- Prepare batch push  

Acceptance Criteria:  
- All prior backlog items satisfied  
- All local commits accounted for  
- Explicit approval to push accumulated commits  

## Phase 4 - Final Gates
### BL-11 — Pre-Release Verification
**Status:** TODO  
**Acceptance Criteria:**
- Terminology consistency passes.
- Cross-references resolve correctly.
- Mermaid renders.
- Build and deploy pass.
- Release artifacts prepared (LICENSE/CHANGELOG/RELEASE as applicable).

### BL-12 — Tag and Publish VILF 1.0
**Status:** TODO  
**Acceptance Criteria:**
- Version tag created.
- Release notes updated.
- Public deployment confirmed.

---

## Next Execution Task
**BL-02 — Define Canon / Book / Annex File Map (Pre-Docusaurus)**






