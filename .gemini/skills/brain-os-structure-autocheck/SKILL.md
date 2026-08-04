---
name: brain-os-structure-autocheck
description: Audit the Brain_OS repository for structural integrity. Use this to verify that all notes have proper metadata, no broken links, and are correctly indexed in MOCs.
---

# Brain_OS Autocheck

This skill provides a deterministic audit of the Brain_OS structure to ensure metadata compliance and discoverability.

## 🛠️ Workflow

### 1. Run Audit
Execute the automated audit script to identify issues:
```bash
node scripts/audit_os.cjs [path_to_brain_os]
```

### 2. Remediate Issues
Based on the script output:
- **Missing Metadata**: Apply the appropriate template from `04_Meta/Templates/`.
- **Orphaned Notes**: Identify the correct domain and link the note in the corresponding Map of Content (MOC) in `04_Meta/MOCs/`.
- **Broken Links**: Search for the correct note name and update the `[[Link]]`.

## 📝 Standards
- Every note in `01`, `02`, `03` folders MUST be linked in at least one MOC.
- Every note MUST contain a YAML frontmatter with `id`, `title`, and `type`.

## 🚀 Commands
- **Check Health**: Run the full structural audit and report errors.
- **Fix Orphans**: Automatically suggest MOC placements for orphaned notes.
