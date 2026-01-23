---
id: bl-06r-annex-sync-audit
title: "BL-06R — Annexes Sync Audit (Master 2 Canon)"
unlisted: true
---

# BL-06R — Annexes Sync Audit (Master 2 Canon)

## Purpose
Master 2 is the canonical source for chapters. Annexes were migrated from the annex manuscript (Master 1 lineage). This audit checks:
1) Whether annex MDX files match the annex canonical manuscript.
2) Whether Master 2 introduces terminology/structure changes that imply annex updates.

## Inputs
- Canonical chapters: `manuscript/VILF-1.0-master_2.md`
- Canonical annexes: `VILF-1.0-Annexes.md`
- Rendered annexes: `docs/annexes/*.mdx`

## Method
- Extract annex headings from the annex manuscript and map to `docs/annexes/NN.mdx`.
- Compute lightweight diffs (normalized whitespace) between manuscript annex text and MDX content.
- Scan Master 2 for annex-related references that may diverge from annex content (terminology, labels, names, IDs).

## Findings

### Annex MDX vs Annex Manuscript

Detected **15** annex sections in the annex manuscript.

| Annex | Status | Notes |
|---:|---|---|
| 01 | MISMATCH | Normalized text differs. lenΔ=66. First-diff snippet (canon): "# 01.1 Purpose
This ToR defines the mandate, scope, governance alignment, roles, responsibilities, and evidence requirements for **Innovation Labs (Tier-0)** op" |
| 02 | MISMATCH | Normalized text differs. lenΔ=55. First-diff snippet (canon): "# 02.1 Purpose
This ToR defines the mandate, governance alignment, capability responsibilities, and portfolio oversight for **Hubs (Tier-1)** in a VILF ecosyste" |
| 03 | MISMATCH | Normalized text differs. lenΔ=76. First-diff snippet (canon): "# 03.1 Purpose
This ToR establishes the mandate, governance authority, accreditation roles, documentation stewardship, and ecosystem-level accountability of the" |
| 04 | MISMATCH | Normalized text differs. lenΔ=26. First-diff snippet (canon): "# 04.1 Purpose
This annex provides a standardized **Memorandum of Understanding (MoU)** template for multi-institutional collaboration within the VILF ecosystem" |
| 05 | MISMATCH | Normalized text differs. lenΔ=54. First-diff snippet (canon): "# 05.1 Purpose 
This annex defines the **decision-rights matrix** for the three governance tiers of VILF, aligned with the Innovation Governance Framework (IGF)" |
| 06 | MISMATCH | Normalized text differs. lenΔ=47. First-diff snippet (canon): "# 06.1 Purpose 
This annex provides standardized MEL (Monitoring, Evaluation & Learning) checklists and scorecard templates for quarterly and annual performance" |
| 07 | MISMATCH | Normalized text differs. lenΔ=-52. First-diff snippet (canon): "# 07.1 Purpose
This annex defines the standardized documentation and evidence requirements for all VILF-compliant labs, hubs, and the Network Coordination Unit " |
| 08 | MISMATCH | Normalized text differs. lenΔ=52. First-diff snippet (canon): "# 08.1 Purpose
This annex defines the risk, ethics, and integrity protocols required for compliance with the Innovation Governance Framework (IGF). 
It ensures " |
| 09 | MISMATCH | Normalized text differs. lenΔ=67. First-diff snippet (canon): "# 09.1 Purpose
This annex provides a standardized intake and prioritization format for institutions participating in VILF. 
It ensures that innovation challenge" |
| 10 | MISMATCH | Normalized text differs. lenΔ=45. First-diff snippet (canon): "# 10.1 Purpose
This annex provides the governance structures, scoring rules, and transparency requirements for administering **Challenge Funds** within the VILF" |
| 11 | MISMATCH | Normalized text differs. lenΔ=53. First-diff snippet (canon): "# 11.1 Purpose
This annex provides accreditation criteria for:
- Innovation Labs (Tier-0) 
- Hubs (Tier-1) 
- Network Coordination Unit (Tier-2) 

Accreditation" |
| 12 | MISMATCH | Normalized text differs. lenΔ=55. First-diff snippet (canon): "# 12.1 Purpose
This annex offers a structured capability development playbook for Hubs (Tier-1). 
It guides systematic maturity progression across labs and supp" |
| 13 | MISMATCH | Normalized text differs. lenΔ=47. First-diff snippet (canon): "# 13.1 Purpose
This annex provides a non-exhaustive library of **Innovation Lab Archetypes**, enabling institutions to classify, compare, and strategically desi" |
| 14 | MISMATCH | Normalized text differs. lenΔ=65. First-diff snippet (canon): "# 14.1 Purpose
This annex provides a **high-level, non-modifiable** National Deployment Guide for VILF deployments at country scale.

Full adaptation of this gu" |
| 15 | MISMATCH | Normalized text differs. lenΔ=33. First-diff snippet (canon): "# 15.1 Purpose
This annex expands the glossary of VILF 1.0, providing authoritative definitions of all key concepts, aligned with MCF 2.1, IMM, IMM-P®, IGF, and" |

### Master 2 reference scan (signals only)

| Term | Count |
|---|---:|
| Annex | 2 |
| Annexes | 11 |
| Templates | 17 |
| ToR | 6 |
| Terms of Reference | 3 |
| Decision Rights Matrix | 2 |
| Accreditation | 9 |
| MEL | 78 |
| IGF | 44 |
| IMM-P | 30 |

## Recommended Actions

- ⚠️ Annex mismatches detected. Recommended next step: open a dedicated backlog item per annex that needs re-sync (atomic edits).

## Verdict

⚠️ Not in sync (see mismatches table). Do not edit annexes until we create per-annex atomic tasks.
