# Editorial Standards & Mechanics — VILF Book Layer

## 1. Purpose of This Document
This document governs editorial-only improvements for the VILF Book layer.
It applies exclusively to explanatory content and is explicitly non-normative.

## 2. Canon Protection Rules
- Canon text is frozen and authoritative.
- No rewording of definitions, governance, roles, taxonomies, or decision rights.
- Clarifications must be additive and adjacent, never inline-modifying.

## 3. Normative vs Explanatory Convention
- Normative content remains unchanged and unmarked.
- Explanatory additions are prose only.
- Explanatory text must not introduce obligations, requirements, or rules.

## 4. Bridge Paragraph Standard
- Explain why a section or chapter exists.
- Explain how it connects to previous and next chapters.
- No reinterpretation or restatement of normative rules.

## 5. Glossary Reinforcement
- Optional inline links to Annex 15 (Glossary).
- No new definitions.
- No restated definitions in prose.

## 6. Citation Placeholders (Deferred)
- Allowed placeholder: [citation-needed]
- No sources added.
- Harvard citations deferred to BL-16.

## 7. Mechanical Workflow
- One chapter per commit (atomic).
- Editorial-only commit messages.
- npm run build must pass before commit.
- Add a short "Editorial note" block at top of each edited chapter stating:
  - editorial-only changes
  - no normative modification

## 8. Explicit Non-Goals (Hard Stops)
- No diagrams (BL-15).
- No citations (BL-16).
- No governance edits.
- No terminology changes.
- No cross-framework expansion.