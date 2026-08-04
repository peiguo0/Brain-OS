---
name: brain-os-import-knowledge
description: Integrate projects or chat conclusions into the Brain-OS knowledge base. Use when absorbing legacy data or distilling current discussions into Threads, Concepts, and Blueprints.
---

# Brain-OS Import Knowledge

This skill facilitates the seamless integration of external content and existing project data into the Brain-OS knowledge base. It automates the process of analyzing, sanitizing, and structuring information into Threads, Concepts, and Blueprints.

## 🛠️ Workflow

### 1. Source Identification
The user specifies the source of the content to be imported:
- A local directory (e.g., `/Users/user/Github/MyOldProject`)
- A specific file path
- A summary of a past conversation.

### 2. Analysis & Distillation
The skill analyzes the source material, identifying:
- **Threads**: Narrative of discussions, project progress.
- **Concepts**: Atomic principles, facts, or definitions.
- **Blueprints**: Actionable plans, procedures, or architectures.

### 3. Sanitization (If applicable)
For importing content that might have been previously used in a public context or requires cleaning, the skill can apply sanitization rules (referencing `references/sanitization.md` for patterns).

### 4. Integration
- Create new files in the appropriate Brain-OS directories (`01_Concepts/`, `02_Blueprints/`, `03_Threads/`).
- Apply standard Brain-OS metadata (ID, title, domain, type, status, parent, branch\_type, context\_snapshot).
- Use templates from `assets/` for consistency.
- Update relevant MOCs in `04_Meta/MOCs/` to link the new content.

## 📝 Standards
- Follow Brain-OS metadata and linking conventions rigorously.
- Ensure all imported content is distilled and well-structured.

## 🚀 Commands
- **Import Project:** `brain-os-import-knowledge project <path_to_project_dir>`
- **Import File:** `brain-os-import-knowledge file <path_to_file>`
- **Distill Chat:** `brain-os-import-knowledge chat "<summary_text>"`
