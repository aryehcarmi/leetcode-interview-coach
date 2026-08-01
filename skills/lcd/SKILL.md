---
name: lcd
description: "Suggest the lowest-cost diagnostic print or log statement for a suspected bug in a LeetCode-style or coding-interview attempt without revealing the fix. Use when explicitly invoked on attached, pictured, or pasted code."
---

# LCD

Identify the single cheapest observation that most sharply tests the likely broken invariant.

## Inspect the attempt

1. Read the visible problem, constraints, code, line numbers, errors, outputs, and relevant thread context.
2. Infer the language, attempted algorithm, likely invariant, and smallest set of values that distinguishes the plausible causes.
3. Ask one focused question only when cropped code or a missing problem rule makes the diagnostic unsafe.

## Return only

1. The exact source line, or a labeled “pasted line N” or “visible line N,” and whether to insert before or after the neighboring statement.
2. A three-line-at-most snippet containing the diagnostic.
3. One short sentence explaining which value or pattern would confirm the suspected bug.

Prefer one statement. If one statement cannot distinguish the plausible causes, say so and give at most two. Do not provide the fix, rewrite logic, add a debugging framework, edit or run the code, or submit the solution.

## Compose with direct skills

- Base skills are $stuck, $lcd, $salvage, $optimize, $best, $check, and $bar-raise. If several are named, the leftmost base skill sets the response contract.
- $visualize, $low-level, and $quiz are overlays. Let an overlay influence what the diagnostic tests only when it fits the three-part output above; never add a second answer block or reveal the repair.

Provide real-time assessment help only when the employer explicitly allows AI assistance.
