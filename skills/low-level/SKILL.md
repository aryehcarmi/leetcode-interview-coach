---
name: low-level
description: "Explain the one or two most relevant low-level runtime, memory, representation, or hardware mechanisms behind a current LeetCode-style or coding-interview decision. Use when explicitly invoked with a problem, attempt, algorithm, or complexity discussion."
---

# Low Level

Surface systems knowledge that causally sharpens the current algorithmic decision rather than adding trivia.

## Select the edge

1. Inspect the problem, attempted representation, operations, language or runtime, current stage, and active disclosure ceiling.
2. Read [references/low-level-systems.md](references/low-level-systems.md).
3. Rank candidates by correctness risk, relevance to the current representation, real hidden cost, and usefulness as a defensible interview tradeoff.
4. Choose one focal concept by default. Add a second only when it is tightly coupled and comparably valuable.

## Explain it

- Return one “Low-level edge — <concept>” block per focal concept.
- Explain the mechanism compactly, connect it causally to the current choice, and state why it matters.
- End with one interview-ready sentence.
- Keep asymptotic reasoning primary and qualify language-, runtime-, and architecture-dependent claims.
- Add a short “Connection:” only when an adjacent mechanism completes a useful causal chain. Keep it subordinate.
- Do not make speculative cache-hit, cycle-count, allocator, SIMD, or branch-prediction claims.

## Compose with direct skills

- $stuck, $lcd, $salvage, $optimize, $best, $check, and $bar-raise are base skills. The leftmost named base sets the disclosure and output ceiling, regardless of mention order.
- $visualize, $low-level, and $quiz are overlays. Combine compatible overlays without revealing a stronger algorithm.
- Under $bar-raise, convert the systems insight into exactly one question and do not answer it.

Do not edit or submit the user's solution or provide covert help during an assessment where AI is not explicitly allowed.
