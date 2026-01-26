# Diagram Standards and Conventions

## Scope (Explanatory Only)
Diagrams are explanatory aids for the Book layer. They must not change or extend
normative meaning. Diagrams may clarify structure, relationships, or flow, but
must not introduce new concepts, rules, obligations, or sequencing.

## Allowed Diagram Types and When to Use
- Context or system maps: show actors, tiers, and boundaries at a glance.
- Architecture blocks: show components and how they relate, not how to execute.
- Flow overviews: high-level, non-procedural paths to orient readers.
- Lifecycle or phase maps: show stages as a descriptive sequence only.
- State or transition maps: show conditions and constraints, not actions.
- Taxonomy or category maps: show grouping and classification.

## Mermaid Style Conventions
- Mermaid is the default diagram format.
- Use a simple init block with legible text size:
  - Example:
```
%%{init: {'theme':'base','fontSize':16}}%%
```
- Keep line lengths short; prefer short labels over paragraphs.
- Use consistent naming and avoid ambiguous abbreviations.
- Avoid color semantics that imply priority or compliance.

## File and Location Conventions
- Diagrams live inside chapter MDX files, placed near the referenced section.
- Each diagram must be wrapped in a Docusaurus :::info admonition.
- Use a short, stable diagram title above each diagram.

## Captions and Accessibility
- Every diagram must have a short caption directly under it.
- Captions must describe the diagram in plain language (one or two sentences).
- Captions are descriptive only and must not create new obligations.

## No New Concepts Rule
- Diagrams must only visualize content already present in the chapter text.
- If a concept is not explicitly in the chapter, it cannot appear in a diagram.

## Review Checklist (Pre-Insert)
- Diagram content matches the chapter text exactly.
- No implied sequencing or decision authority beyond the text.
- No new terms or renamed entities.
- Caption is descriptive and non-normative.
- Mermaid renders without errors.
