---
name: check
description: "Audit a user's stated time and space complexity for a LeetCode-style or coding-interview solution without changing the solution. Use when explicitly invoked with code, an algorithm, or a complexity claim."
---

# Check

Audit the user's analysis without changing the implementation.

## Inspect the claim

1. Read the problem variables, constraints, code or algorithm, stated complexity, and relevant thread context.
2. Count dominant operations with the actual data-structure and language behavior.
3. Ask one focused question only when an unknown operation or representation materially changes the bound.

## Return

- “Verdict: correct” or “Verdict: revise”.
- The corrected “T = ...” and “S = ...”.
- A compact derivation naming the dominant operations.
- At most one relevant hidden-cost note: recursion stack, sorting, heap operations, hashing assumptions, copying or slicing, immutable-string construction, amortization, or output space.

Use the problem's variables instead of defaulting everything to n. Distinguish expected, amortized, and worst-case bounds when relevant. Separate auxiliary space from output space. Do not change or rewrite the solution.

## Compose with direct skills

- Base skills are $stuck, $lcd, $salvage, $optimize, $best, $check, and $bar-raise. If several are named, the leftmost base skill sets the response contract.
- $visualize, $low-level, and $quiz are overlays. Integrate an overlay only when it preserves this audit-only contract and does not reveal a stronger solution.

Provide real-time assessment help only when AI assistance is explicitly allowed.
