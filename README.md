# 🧠 Brain-OS

> **Your AI conversations shouldn't be ephemeral. They should be assets.**

Brain-OS is a **Structured Memory Operating System** designed to bridge the gap between fast-paced AI dialogues and long-term knowledge evolution. It moves your intelligence out of disposable chat tabs and into a local-first, Git-versioned, and multi-agent-ready framework.

---

## 🚀 The Core Problem
Most AI interactions suffer from **"Memory Leak"**: once a chat ends, the refined logic and project context are lost. You're forced to repeat yourself in every new session. 

**Brain-OS fixes this.** It provides a persistent "External Brain" that any AI agent (Gemini, Claude, Copilot) can read, update, and branch from.

## 🏛️ The Architecture
Brain-OS organizes knowledge into a high-fidelity hierarchy:

*   **`01_Concepts/`**: The **Kernel**. Atomic, reusable principles and facts.
*   **`02_Blueprints/`**: The **Execution**. Actionable plans, checklists, and architectures.
*   **`03_Threads/`**: The **Processor**. Iterative discussion lines that support branching and lineage.
*   **`04_Meta/`**: The **System Config**. Templates and Maps of Content (MOCs).
    *   *What is an MOC? A Map of Content acts as a table of contents or a dashboard for a specific domain (e.g., Software Engineering or Life Philosophy), helping you and the AI easily navigate related notes.*

## ⚡ Key Features
- **Lineage Tracking**: Every thought has a parent. Branch out into alternative ideas without losing the main line.
- **Context Recovery**: Metadata allows AI agents to instantly "remember" where a discussion left off.
- **Multi-Agent Protocol**: A universal `INSTRUCTIONS.md` makes your knowledge accessible to any AI tool.
- **Local-First & Git-Backed**: You own your intelligence. Version control every thought.

## 🤖 How It Works (Show, Don't Just Tell)
Instead of manually categorizing your notes, you let your AI agent do the heavy lifting using the built-in system instructions.

**You:** *"I just dropped a messy meeting transcript into `00_Inbox/`. Clean it up."*

**Brain-OS AI:**
> 1. Reads `INSTRUCTIONS.md` to understand the system architecture.
> 2. Extracts the core principles into a new `01_Concepts/` note using the `Concept_Template.md`.
> 3. Creates an actionable plan in `02_Blueprints/` using the `Blueprint_Template.md`.
> 4. Automatically adds links to both new files inside your `Dashboard.md` and the relevant MOC.
> 5. Deletes the raw transcript from `00_Inbox/`.

## 🛠️ Quick Start (Day 1 Guide)

1. **Clone & Setup**:
   ```bash
   git clone https://github.com/your-username/Brain-OS.git
   cd Brain-OS
   ```
2. **Install Built-in AI Skills** *(Optional but highly recommended if using Gemini CLI)*:
   ```bash
   gemini skills install .gemini/skills/brain-os-import-knowledge.skill.zip
   gemini skills install .gemini/skills/brain-os-start-new-topic.skill.zip
   ```
3. **Explore the System**: Open the folder in **Obsidian** (or your favorite Markdown editor). Start at `Dashboard.md` to navigate through your Maps of Content.
4. **Capture a Thought**: Have a messy idea or chat log? Drop it into `00_Inbox/`. Don't worry about formatting yet.
5. **Distill with AI**: Open your AI terminal (Gemini CLI, Claude Code) in this directory and tell it to clean up your inbox:
   > *"Read my latest note in 00_Inbox. Distill it into a Concept or a Blueprint using the templates in 04_Meta, and link it in the appropriate MOC."*
6. **Verify Health**: Run the included auditing tool to ensure your brain stays structurally healthy:
   ```bash
   node .gemini/skills/brain-os-structure-autocheck/scripts/audit_os.cjs ./
   ```
7. **For AI Agents**: Point your AI to `INSTRUCTIONS.md`—it contains the complete protocol your AI must follow to maintain this OS.

---

## 🗺️ Navigation
- [📜 System Philosophy](./PHILOSOPHY.md) - Deep dive into the methodology.
- [🤖 AI Protocol](./INSTRUCTIONS.md) - Technical instructions for AI agents.
- [🗺️ Map of Content](./04_Meta/MOCs/Index_MOC.md) - The high-level index of domains.

---
*Built for the era of Human-AI symbiosis.*
