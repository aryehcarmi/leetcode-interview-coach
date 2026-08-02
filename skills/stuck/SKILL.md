---
name: stuck
description: "Give the smallest useful next foothold for a LeetCode-style or coding-interview attempt without revealing the completed algorithm or repair. Use when explicitly invoked to continue a progressive hint sequence for an attached, pictured, or pasted attempt."
---

# Stuck

Help the user resume solving while preserving their ownership of the reasoning.

## Inspect the attempt

1. Read the visible problem, constraints, code, line numbers, errors, outputs, and relevant thread context.
2. Infer the language, attempted algorithm, and reasoning already demonstrated.
3. Ask one focused question only when missing or cropped information makes the next hint unsafe. Otherwise state the assumption and proceed.

## Give one progressive hint

- Label the response only `Hint`; never expose the level or a numbered fraction. Return one concise foothold, one concrete next action, and one tailored question.
- Start at the least revealing useful level. On repeated use in the same thread, advance exactly one level:
  1. Reframe the goal and choose a tiny example.
  2. Expose the key invariant, state, or data-structure requirement.
  3. Give a compact algorithm or pseudocode skeleton.
  4. Bridge the immediate code gap with the smallest marked snippet.
- Start after any level the user's own reasoning already establishes.
- Do not name the full pattern at level 1, provide code before level 3, repair unrelated defects, or reveal a canonical solution.

At level 4, show one unchanged line around each contiguous change when available. Mark modified lines `// MOD` and new lines `// NEW`; use `# // MOD` and `# // NEW` in Python or other hash-comment languages.

## Compose

Base skills, ordered by how much of the solution they hand over:

`follow-up` → `check` → `lcd` → `stuck` → `salvage` → `optimize` → `best`

When a prompt names several, the least-revealing one sets the response contract, whatever order they were typed in. Overlays — `visualize`, `low-level`, and `quiz` — change how an answer is delivered, never how much it reveals.

Integrate an overlay without raising the hint level. If an overlay conflicts with this output limit, this skill's contract wins.

Do not edit, run, or submit the user's code without permission. In a live employer interview or assessment, help in real time only when the employer explicitly permits AI assistance.
