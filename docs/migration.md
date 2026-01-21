---
title: Migration Notes
sidebar_label: Migration Notes
---

# Migration Notes (Public)

This site is migrating VILF 1.0 content from the locked `/manuscript` sources into MDX under `/docs`.

## Migration rules

- **No rewriting:** migration changes format and structure only.
- **Headings preserved:** keep the original heading hierarchy unless required for MDX validity.
- **Mermaid only:** diagrams, when present, are written in Mermaid and placed inside an `info` admonition.
- **Citations:** Harvard-style citations are preserved as written. New sources are not introduced during migration.

## What is being migrated

- Chapters from `manuscript/VILF-1.0-master_1.md` and `manuscript/VILF-1.0-master_2.md`
- Annexes from `manuscript/VILF-1.0-Annexes.md`

## Status

The public sidebar will gradually replace placeholder pages with migrated MDX pages as each chapter/annex passes build gates.
