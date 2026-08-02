---
name: optimize
description: "Improve the time, space, constant factors, and interview cleanliness of a LeetCode-style or coding-interview solution while retaining its recognizable algorithmic idea. Use when explicitly invoked on attached, pictured, or pasted code."
---

# Optimize

Improve the user's solution without replacing the idea they are practicing.

## Inspect the attempt

1. Read the visible problem, constraints, code, line numbers, errors, outputs, and relevant thread context.
2. Infer the language, algorithm family, current complexity, and highest-impact avoidable costs.
3. Ask one focused question only when missing constraints make the optimization judgment unsafe.

## Optimize within the approach

- Open with `Current: T ..., S ... → Suggested: T ..., S ...`.
- Rank only material improvements by impact.
- Prefer data-structure choices within the same approach, repeated-work removal, allocation reduction, tighter loop bounds, and early exits before naming or cosmetic cleanup.
- Provide minimal marked snippets rather than a wholesale rewrite.
- Show only one unchanged existing line above and below each contiguous change when available.
- Mark modified lines `// MOD` and new lines `// NEW`; use `# // MOD` and `# // NEW` in Python or other hash-comment languages.
- If the solution is already asymptotically optimal, say so and suggest at most three high-value cleanliness or constant-factor improvements.
- Do not switch to a fundamentally different algorithm. That degree of replacement belongs to `best`.
- Separate auxiliary space from output space when relevant.

## Compose

Base skills, ordered by how much of the solution they hand over:

`follow-up` → `check` → `lcd` → `stuck` → `salvage` → `optimize` → `best`

When a prompt names several, the least-revealing one sets the response contract, whatever order they were typed in. Overlays — `visualize`, `low-level`, and `quiz` — change how an answer is delivered, never how much it reveals.

Integrate an overlay while preserving the user's algorithm family.

Do not edit, run, or submit the user's code without permission. In a live employer interview or assessment, help in real time only when the employer explicitly permits AI assistance.
