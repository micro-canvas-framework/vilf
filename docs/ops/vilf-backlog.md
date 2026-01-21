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
### BL-01 — Create AGENTS.md (Governance Contract)
**Status:** DONE  
**Notes:** Created and locked by human copy/paste. The file is authoritative.

### BL-02 — Define Canon / Book / Annex File Map (Pre-Docusaurus)
**Status:** TODO  
**Goal:** Produce a definitive file map that splits VILF into Canon/Core vs Book/Guide vs Annexes and defines the target Docusaurus paths and ordering.  
**Deliverable:** `docs/ops/vilf-file-map.md`  
**Acceptance Criteria:**
- Every chapter (00–15) is listed.
- Every annex (01–15) is listed.
- Each item has exactly one classification: `CANON`, `BOOK`, or `ANNEX`.
- Each item has a proposed Docusaurus target path (e.g., `/docs/core/...`, `/docs/guide/...`, `/docs/annexes/...`).
- Ordering rules are explicit (reading order + sidebar order).
- Canon items are explicitly marked as protected (per AGENTS.md).
- No prose is rewritten in this task.

### BL-03 — Define Docusaurus Migration Plan (VIF-Style)
**Status:** TODO  
**Goal:** Specify the exact migration sequence and gates: setup first (styling + landing + Cloudflare), then chapter/annex file generation.  
**Deliverable:** `docs/ops/vilf-docusaurus-plan.md`  
**Acceptance Criteria:**
- Plan explicitly states: Docusaurus setup is completed before producing chapter files.
- Plan explicitly states: Mermaid diagrams go inside `:::info` admonitions.
- Plan includes: repo + GitHub + Cloudflare Pages steps and gates.
- Plan includes: sitemap and sidebar approach aligned with VIF.

---

## Phase 2 — Docusaurus Setup (Must precede content file generation)
### BL-04 — Initialize Docusaurus Site Skeleton
**Status:** TODO  
**Acceptance Criteria:**
- Docusaurus project created and boots locally.
- Mermaid support is enabled per project conventions.
- Docs routing works.

### BL-05 — Port VIF Styling (Exact Match)
**Status:** TODO  
**Blocked On:** Access to VIF CSS and landing implementation assets if not already present in this repo.  
**Acceptance Criteria:**
- Styling matches VIF exactly (tokens, components, typography, spacing).
- No regressions in build.

### BL-06 — Build Landing Page and Site Structure (VIF Sitemap Pattern)
**Status:** TODO  
**Acceptance Criteria:**
- Landing includes hero + cards + sections consistent with VIF pattern.
- Sitemap and navigation are implemented.
- Sidebars are ready to receive docs but docs are not yet migrated.

### BL-07 — GitHub Repo Hygiene + Cloudflare Pages Integration
**Status:** TODO  
**Acceptance Criteria:**
- Repo structure is clean and documented.
- Cloudflare Pages configured and deploying main branch successfully.
- Build gates and logs are reproducible.

---

## Phase 3 — Content Migration (After Phase 2 complete)
### BL-08 — Generate Docusaurus-Ready Chapter Files (Book)
**Status:** TODO  
**Acceptance Criteria:**
- Each chapter is a separate file with correct front matter.
- Ordering is correct and consistent with file map.
- Mermaid diagrams are in `:::info` admonitions.
- Content is strictly the locked text (no drift).

### BL-09 — Generate Docusaurus-Ready Canon/Core Files
**Status:** TODO  
**Acceptance Criteria:**
- Canon artifacts placed in `/docs/core/...` with explicit protection markers.
- No Canon changes without approval and versioning.

### BL-10 — Generate Docusaurus-Ready Annex Files
**Status:** TODO  
**Acceptance Criteria:**
- Annexes are split into separate files with correct front matter.
- Any “Requires Authorization” constraints are preserved verbatim.

---

## Phase 4 — Final Gates
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
