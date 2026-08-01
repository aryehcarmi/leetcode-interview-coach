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

- Start with “Current: T ..., S ... → Suggested: T ..., S ...”.
- Rank only material improvements by impact.
- Prefer data-structure choices within the same approach, repeated-work removal, allocation reduction, tighter loop bounds, and early exits before naming or cosmetic cleanup.
- Provide minimal marked snippets rather than a wholesale rewrite.
- Show only one unchanged existing line above and below each contiguous suggested change when available.
- Mark modified lines “// MOD” and new lines “// NEW”; use “# // MOD” and “# // NEW” in Python or other hash-comment languages.
- If the solution is already asymptotically optimal, say so and suggest at most three high-value cleanliness or constant-factor improvements.
- Do not switch to a fundamentally different algorithm. That degree of replacement belongs to $best.
- Separate auxiliary space from output space when relevant.

## Compose with direct skills

- Base skills are $stuck, $lcd, $salvage, $optimize, $best, $check, and $bar-raise. If several are named, the leftmost base skill sets the response contract and disclosure ceiling.
- $visualize, $low-level, and $quiz are overlays. Integrate compatible overlays while preserving the user's algorithm family.

Do not edit or submit the solution or run it without permission. Provide real-time assessment help only when AI assistance is explicitly allowed.
