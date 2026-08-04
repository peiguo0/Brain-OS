# Brain-OS Schema & Standards

## 📁 Directory Hierarchy
- `00_Inbox/`: Temporary staging for raw thoughts.
- `01_Concepts/`: Atomic, refined knowledge (principles, definitions).
- `02_Blueprints/`: Actionable plans, checklists, and architectures.
- `03_Threads/`: Active discussion lines. Supports branching and iteration.
- `04_Meta/`: Templates and Maps of Content (MOCs).

## 📝 Metadata Standard
Every note MUST have this YAML frontmatter:
```yaml
---
id: YYYYMMDDHHMM
title: "Title"
domain: [Tag1, Tag2]
type: Thread | Concept | Blueprint
status: Active | Refined | Archived
parent: "[[Optional_Parent_Link]]"
branch_type: Iteration | Branch
context_snapshot: "One sentence summary of current state."
---
```

## 🗺️ Indexing Rules
1. Every new note should be linked in a domain-specific MOC in `04_Meta/MOCs/`.
2. If the domain MOC doesn't exist, create it and link it in `04_Meta/MOCs/Index_MOC.md`.
