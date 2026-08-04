# 🧠 Brain-OS: AI Interaction Protocol (v1.0)

This directory is a **Structured Brain OS** designed to be a "Memory Operating System" for human-AI collaboration. Any AI agent entering this workspace MUST adhere to the following protocols to ensure consistency, discoverability, and long-term knowledge evolution.

## 📁 System Architecture (File System)

- `00_Inbox/`: **STAGING**. Raw captures, unsorted snippets.
- `01_Concepts/`: **KERNEL**. Atomic, refined knowledge. Use `Concept_Template.md`.
- `02_Blueprints/`: **EXECUTION**. Concrete plans, architectures. **Folder-first** (one folder per project).
- `03_Threads/`: **PROCESSOR**. Active, iterative discussions. **Folder-first** (one folder per topic).
- `04_Meta/`: **SYSTEM CONFIG**. Templates, MOCs, and these instructions.

### 📐 Organizational Logic
1. **Folder-First Architecture**: For `03_Threads` and `02_Blueprints`, prefer creating a dedicated directory for each topic/project rather than standalone files. This facilitates the inclusion of artifacts (images, scripts, logs) and ensures long-term extensibility.
2. **Note Naming**: Within a folder, the primary record should share the folder's name (e.g., `Topic_A/Topic_A.md`).

## 🛠️ Interaction Protocols

### 1. Research & Context Recovery
Before starting a new task or resuming a topic:
- Search `03_Threads/` for existing topics.
- Read the `_Log.md` and the latest `v*.md` in the relevant thread.
- Identify the `parent` and `context_snapshot` to recover the "state".

### 2. Distillation & Storage (Memory Write)
When a conclusion is reached:
- **Do not** just dump chat logs. 
- **Distill** into a new note using the appropriate template in `04_Meta/Templates/`:
  - `Thread_Template.md` → for ongoing discussions & project logs
  - `Concept_Template.md` → for atomic principles & facts
  - `Blueprint_Template.md` → for actionable plans & checklists
- Update the **Lineage Metadata** (`parent`, `branch_type`).

### 3. Iteration & Branching (Process Forking)
- **Iteration:** Create a new `v(n+1)_Main.md` if the topic is evolving linearly.
- **Branching:** Create a `b*_Topic.md` if exploring a different possibility. Update the `parent` link to the source version.

### 4. Navigation Maintenance (Indexing)
- After creating a new note, check if it belongs to a **Map of Content (MOC)** in `04_Meta/MOCs/`. If so, add a link to it.

## 📝 Metadata Standard (The "Header")

Every Markdown file (except MOCs/Logs) MUST include:
```yaml
---
id: YYYYMMDDHHMM
title: "Clear Title"
domain: [CategoryA, CategoryB]
type: Thread | Concept | Blueprint
status: Active | Refined | Archived
parent: "[[Optional_Link_To_Parent]]"
branch_type: Iteration | Branch
context_snapshot: "One sentence on the current state/blockers."
---
```

## 🤖 Agent-Specific Triggers
- **Gemini CLI:** Follows `GEMINI.md`.
- **Claude Code:** Read this `INSTRUCTIONS.md` upon entry.
- **Copilot/Cursor:** Adhere to `.cursorrules` (if present) which points here.

## 📦 Skill Distribution
Three skills are bundled with this OS to automate the knowledge lifecycle:
- **`brain-os-import-knowledge`**: Distill discussions or import projects into Brain-OS.
  - Install: `gemini skills install .gemini/skills/brain-os-import-knowledge.skill.zip`
- **`brain-os-start-new-topic`**: Captures ongoing conversations into Brain-OS Threads. Use when the user wants to save multi-turn discussions as persistent knowledge.
  - Command: `brain-os-start-new-topic start "<Topic Name>"`
  - Install: `gemini skills install .gemini/skills/brain-os-start-new-topic.skill.zip`
- **`brain-os-structure-autocheck`**: Audits the repository for structural integrity — detects missing YAML metadata and orphaned notes not linked in any MOC.
  - Command: `node .gemini/skills/brain-os-structure-autocheck/scripts/audit_os.cjs <path_to_brain_os>`


---
*This protocol ensures that knowledge is not just stored, but is **actionable and evolvable** across different AI sessions and platforms.*
