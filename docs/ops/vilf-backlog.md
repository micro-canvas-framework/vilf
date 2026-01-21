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

BL-02 — Docusaurus Base Setup (Infrastructure Only)  
Status: PLANNED  
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

BL-02G — Governance: Track Governance Changes in AGENTS + Backlog  
Status: PLANNED  
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
Status: PLANNED  
Scope:  
- Apply exact VIF visual language (colors, layout, components)  
- Configure hero, cards, and section components  
- No content rendering beyond placeholders  

Acceptance Criteria:  
- Visual parity with VIF confirmed  
- Styling assets isolated and reusable  
- No deviation from VIF component structure  

---

BL-04 — Landing Page Construction (VILF)  
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

BL-05 — Sitemap & Navigation Configuration  
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

BL-06 — GitHub Repository Configuration  
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

BL-07 — Cloudflare Pages Configuration  
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
