---
name: salvage
description: "Repair a LeetCode-style or coding-interview attempt with the fewest line and token changes needed for correctness while preserving the attempted approach. Use when explicitly invoked on attached, pictured, or pasted code."
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
- Return the location, the minimal marked snippet, one sentence explaining the root cause, and the resulting time and auxiliary-space complexity.
- Show only one unchanged existing line above and below each contiguous suggested change when available.
- Mark every modified existing line “// MOD” and every new line “// NEW”; use “# // MOD” and “# // NEW” in Python or other hash-comment languages. Do not mark unchanged context.
- Do not print the complete corrected attempt unless the user explicitly requests it.
- If the attempted algorithm cannot satisfy the constraints, say so plainly and show the smallest necessary algorithmic pivot. Do not disguise a rewrite as a tiny fix.

## Compose with direct skills

- Base skills are $stuck, $lcd, $salvage, $optimize, $best, $check, and $bar-raise. If several are named, the leftmost base skill sets the response contract and disclosure ceiling.
- $visualize, $low-level, and $quiz are overlays. Integrate compatible overlays without expanding the repair or replacing the approach.

Do not edit or submit the user's solution or run it without permission. Provide real-time assessment help only when AI assistance is explicitly allowed.
