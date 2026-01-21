# AGENTS.md — Governance & Collaboration Contract  
## Vigía Innovation Lab Framework (VILF)

---

## 1. Purpose of This File

This document defines the governance, roles, workflow rules, and quality gates that apply to all work conducted in this repository for the Vigía Innovation Lab Framework (VILF).

AGENTS.md is the single source of truth for how human contributors and AI systems collaborate on VILF. All contributions, edits, refactors, exports, and migrations must comply with the rules defined here.

Any work that violates this contract is considered invalid and must be reverted.

---

## 2. Canon / Core vs Book / Guide Model

VILF follows a strict two-layer architecture.

### Canon / Core
The Canon (also referred to as Core) defines the authoritative specification of the framework. It includes:
- formal definitions,
- system architecture,
- roles and entities,
- governance logic,
- taxonomies and terminology,
- cross-framework alignment (MCF 2.1, IMM, IMM-P®, IGF, MEL).

The Canon is normative. Changes to the Canon require explicit approval and versioning decisions.

### Book / Guide
The Book (or Guide) layer provides:
- pedagogical explanations,
- narrative structure,
- examples and illustrations,
- operational guidance.

The Book must never redefine, contradict, or extend the Canon. The Book is constrained by the Canon at all times.

Rule: Canon constrains the Book. The Book does not redefine the Canon.

---

## 3. Roles and Authorities

### Framework Architect (Human)
- Ultimate authority over Canon and Book.
- Approves structural, conceptual, and versioning changes.

### Academic Integrity Reviewer
- Verifies correctness of concepts.
- Ensures alignment with established literature and frameworks.
- Blocks speculative or unsupported claims.

### Systems & Governance Reviewer
- Ensures alignment with IGF and governance logic.
- Reviews decision rights, escalation paths, and institutional roles.

### Pedagogy & Book-Structure Reviewer
- Ensures the framework reads as a coherent book.
- Validates chapter sequencing, transitions, and conceptual buildup.

### Semantic Consistency Reviewer
- Enforces consistent terminology across the entire framework.
- Prevents drift in definitions and meanings.

### Citation & Reference Auditor
- Verifies that all citations are real, verifiable, and correctly formatted.
- Ensures in-text citations exist where required.

### Diagram & Visual Systems Reviewer
- Validates diagrams against Canon.
- Ensures diagrams are explanatory and not contradictory.

### Documentation Engineer
- Prepares content for Docusaurus.
- Ensures front matter, ordering, and formatting are production-ready.

### AI Co-Author
- Provides drafting, refactoring, and consistency support.
- Has no authority to introduce new concepts or redefine Canon.
- All AI output is subject to human approval.

---

## 4. Workflow Rules

All work follows explicit phases:
1. Analysis
2. Draft
3. Review
4. Lock
5. Export

Locked content may not be modified unless the lock is explicitly lifted.

Silent rewrites, retroactive conceptual changes, and undocumented restructuring are prohibited.

Structural changes require an explicit mapping and approval before execution.

---

## 5. Quality Gates (Hard Stops)

The following gates are mandatory:
- Conceptual consistency across chapters.
- Terminology consistency across the entire framework.
- Alignment with MCF 2.1 stages:
  - Pre-Discovery
  - Discovery
  - Validation
  - Efficiency
  - Scaling
  - Continuous Improvement
- Governance alignment with IGF.
- Evidence discipline aligned with MEL.
- Academic integrity and citation validity.

If any gate fails, work must stop until corrected.

---

## 6. Citation and Evidence Rules

- Harvard citation style is mandatory.
- Citations must appear in the relevant chapters, not only in the references section.
- No fabricated, placeholder, or inferred sources are allowed.

First-party works must be cited as:
- Author: Luis Alberto Santiago Arias
- Publisher / Distributor: Santiago Arias Consulting (Doulab)

---

## 7. Diagrams and Visuals

- Mermaid is the standard for diagrams.
- Diagrams must be enclosed in Docusaurus `info` admonitions.
- Diagrams are explanatory unless explicitly marked as normative.
- Visuals must align with Canon definitions.

---

## 8. Docusaurus Readiness Rule

No chapter files may be produced until:
- Docusaurus is fully installed and configured.
- Styling matches the Vigía Incubation Framework (VIF) exactly.
- The landing page, navigation, and sitemap are complete.
- GitHub repository and Cloudflare Pages integration are live.

All chapter files must be:
- sequentially ordered,
- front-matter complete,
- Mermaid-enabled,
- ready to be placed directly into `/docs`.

---

## 9. Change Control and Versioning

- Patch releases fix errors without conceptual change.
- Minor releases add clarifications or extensions without breaking Canon.
- Major releases introduce structural or conceptual redesigns.

Canon changes require explicit approval and documentation in release notes.

## Backlog Closure Rule (Mandatory)

When any backlog item (e.g. BL-XX) is marked as **DONE**, the closure **must include the Git commit ID(s)** that implement the work.

Rules:
- A backlog item **cannot** be marked as DONE without at least one commit hash.
- If multiple commits are involved, **all relevant commit IDs must be listed**.
- Commit IDs must already exist on the authoritative branch.
- “DONE” without commit reference is considered **invalid and non-compliant** with governance.

This rule applies retroactively to all future backlog updates.

---

## 10. Non-Goals

This repository explicitly does not:
- invent speculative theories,
- introduce marketing language,
- generate AI-authored authority claims,
- allow silent restructuring,
- mix unrelated frameworks without authorization.

---

End of AGENTS.md
