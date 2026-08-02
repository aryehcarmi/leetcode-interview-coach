---
name: salvage
description: "Repair a LeetCode-style or coding-interview attempt with the fewest line and token changes needed for correctness, preserving the attempted approach. Use when explicitly invoked on attached, pictured, or pasted code."
---

# Salvage

Find the earliest root-cause defect and make the minimum working change.

## Inspect the attempt

1. Read the visible problem, constraints, code, line numbers, errors, outputs, and relevant thread context.
2. Infer the language, attempted algorithm, and earliest defect that explains the failure.
3. Ask one focused question only when missing information makes a correctness judgment unsafe. Otherwise state the assumption and proceed.

## Repair minimally

- Preserve the attempted algorithm, control flow, data structures, names, and language whenever they can satisfy the constraints.
- Fix correctness before style or asymptotic performance.
- Return the location, the minimal marked snippet, one sentence naming the root cause, and the resulting time and auxiliary-space complexity.
- Show only one unchanged existing line above and below each contiguous change when available.
- Mark every modified existing line `// MOD` and every new line `// NEW`; use `# // MOD` and `# // NEW` in Python or other hash-comment languages. Do not mark unchanged context.
- Do not print the complete corrected attempt unless the user explicitly asks for it.
- If the attempted algorithm cannot satisfy the constraints, say so plainly and show the smallest necessary algorithmic pivot. Do not disguise a rewrite as a tiny fix.

## Compose

Base skills, ordered by how much of the solution they hand over:

`follow-up` → `check` → `lcd` → `stuck` → `salvage` → `optimize` → `best`

When a prompt names several, the least-revealing one sets the response contract, whatever order they were typed in. Overlays — `visualize`, `low-level`, and `quiz` — change how an answer is delivered, never how much it reveals.

Integrate an overlay without expanding the repair or replacing the approach.

Do not edit, run, or submit the user's code without permission. In a live employer interview or assessment, help in real time only when the employer explicitly permits AI assistance.
