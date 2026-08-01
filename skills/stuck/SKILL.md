---
name: stuck
description: "Give the smallest useful next foothold for a LeetCode-style or coding-interview attempt without revealing the completed algorithm or repair. Use when explicitly invoked to continue a progressive hint sequence for an attached, pictured, or pasted attempt."
---

# Stuck

Help the user resume solving while preserving ownership of the reasoning.

## Inspect the attempt

1. Read the visible problem, constraints, code, line numbers, errors, outputs, and relevant thread context.
2. Infer the language, attempted algorithm, and reasoning already demonstrated.
3. Ask one focused question only when missing or cropped information makes the next hint unsafe. Otherwise state the assumption and proceed.

## Give one progressive hint

- Return at most “Hint N/4,” one concise foothold, one concrete next action, and one tailored question.
- Start at the least revealing useful level. On repeated use in the same thread, advance only one level:
  1. Reframe the goal and choose a tiny example.
  2. Expose the key invariant, state, or data-structure requirement.
  3. Give a compact algorithm or pseudocode skeleton.
  4. Bridge the immediate code gap with the smallest marked snippet.
- Start after any level the user's own reasoning already establishes.
- Do not name the full pattern at level 1, provide code before level 3, repair unrelated defects, or reveal a canonical solution.

At level 4, show one unchanged line around each contiguous change when available. Mark modified lines “// MOD” and new lines “// NEW”; use “# // MOD” and “# // NEW” in Python or other hash-comment languages.

## Compose with direct skills

- Base skills are $stuck, $lcd, $salvage, $optimize, $best, $check, and $bar-raise. If several are named, the leftmost base skill sets the response contract and disclosure ceiling.
- Overlay skills are $visualize, $low-level, and $quiz. Integrate compatible overlays without raising this hint level, regardless of mention order.
- If an overlay conflicts with this exact output limit, preserve this skill's contract.

Do not edit or submit the user's solution, run it without permission, or provide covert help during a live assessment where AI is not explicitly allowed.
