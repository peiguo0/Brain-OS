---
name: brain-os-start-new-topic
description: Captures ongoing conversation content and structures it into Brain-OS as a new Thread. Use when the user wants to save a multi-turn discussion as a persistent knowledge entry.
---

# Brain-OS Conversation Capture

This skill facilitates the seamless integration of our dialogues into the Brain-OS knowledge base. It acts as an intelligent scribe, transforming our chat history into structured Threads.

## 🛠️ Workflow

### 1. Start Capture
The user invokes the skill and specifies a **Topic Name**.
Example prompt: "Start capturing conversation for topic: 'AI Skill Design Principles'".

### 2. Capture Mode
Once initiated, the skill enters a capture state. All subsequent user and AI turns within this session (until explicitly stopped or a new major topic is introduced) will be appended to a temporary draft note.

### 3. Finalize Thread
The user signals the end of the capture session (e.g., "Finalize this thread", "Stop capturing").
The skill will then:
- Create a new file in `03_Threads/` named `[Topic_Name].md`.
- Use a standard Thread template (from `assets/`).
- Populate the `title` and `context_snapshot` based on user input.
- **Crucial**: Assign a `parent` if contextually relevant (e.g., linking to a related concept or earlier thread).
- Commit the new Thread note to the `Brain-OS` repository.

## 📝 Standards
- All captured content must be distilled, not just raw chat logs.
- Adhere to Brain-OS metadata and linking conventions.
- Use templates from `assets/` for consistency.

## 🚀 Commands
- **Start Capture**: `brain-os-start-new-topic start "<Topic Name>"`
- **End Capture**: `brain-os-start-new-topic stop`
