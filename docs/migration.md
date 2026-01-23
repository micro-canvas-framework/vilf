---
id: migration
title: Migration Notes
sidebar_label: Migration Notes
description: "Rules and conventions used to migrate the VILF 1.0 manuscript into this Docusaurus site."
---

# Migration Notes

This page documents the conventions used to migrate the **VILF 1.0** manuscript into MDX pages.

## What “migration” means here

- We migrated content from the canonical manuscript under `/manuscript` into `/docs`.
- The goal was **format compliance and navigability**, not rewriting.
- Changes were limited to:
  - front-matter and stable doc IDs,
  - Markdown/MDX syntax fixes,
  - link/path adjustments to keep builds passing,
  - removal of placeholder pages once real content was migrated.

## Non-goals

- No editorial rewriting or narrative expansion during the migration phase.
- No new diagrams added during migration.
- No new academic citations added during migration.

These improvements are tracked separately in post-release backlog items.

## Doc IDs and paths

- Chapters: `/docs/chapters/NN.mdx` (NN = 00–15)
- Annexes: `/docs/annexes/NN.mdx` (NN = 01–15)

Doc IDs are treated as stable identifiers. Once a doc ID is published, it should not change.

## Formatting conventions

- Use fenced code blocks for templates, forms, and anything that must remain verbatim.
- Keep headings and bullet structure aligned with the manuscript unless MDX requires a minimal adjustment.
- Avoid HTML-like placeholders such as `<FILL>` (they may be parsed as JSX by MDX). Use `TBD` instead.

## Governance and quality gates

All commits must pass the repository gates defined in `/AGENTS.md`, including:

- `npm run typecheck`
- `npm run build`

## Where to look next

If you are looking for the normative framework content, start at:

- **Introduction** (`/docs/intro`)
- **Roadmap** (`/docs/roadmap`)
- **Chapters** (`/docs/chapters/00`)
