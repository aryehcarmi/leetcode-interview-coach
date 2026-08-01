---
name: visualize
description: "Create a disclosure-safe interactive visual explanation of a LeetCode-style problem, attempted solution, bug divergence, or established algorithm. Use when explicitly invoked with an attached, pictured, pasted, or previously discussed coding-interview problem."
---

# Visualize

Create one focused, colorful, interactive HTML mental model whose content respects the user's current solution-reveal boundary.

## Choose the storyboard

- Before a solution is established, show inputs, legal operations, constraints, tiny examples, choices, failure cases, or the next invariant. Do not encode an unrevealed algorithm in pointer motion, pseudocode, labels, or answer choices.
- After a solution is established, animate deterministic state snapshots on the smallest revealing example. Each step should show visible state, changed items, labels, one concise explanation, and the invariant.
- While debugging, place expected and observed state on the same timeline and stop at the earliest meaningful divergence. Reveal the cause or repair only when the active base skill permits it.

## Build the artifact

1. Create one self-contained HTML file in the designated user-facing output directory, or the current workspace when none is designated.
2. Use semantic HTML with inline CSS and JavaScript, no network calls, and no build step.
3. Use one dominant visual with stable semantic roles such as current, candidate, committed, rejected, and output. Pair color with text, shape, border, or icon.
4. For playback, provide Previous, Next, Play/Pause, and visible progress. Add reset, speed, or a scrubber only when useful.
5. Honor prefers-reduced-motion; never loop motion or waste animation on initial appearance.
6. Treat the HTML as an artifact, not as a suggested code change. Do not add “// NEW” or “// MOD” markers to it.
7. Open or render it for visual QA before delivery, then return a concise absolute file link.

## Compose with direct skills

- Base skills are $stuck, $lcd, $salvage, $optimize, $best, $check, and $bar-raise. The leftmost named base skill sets the disclosure and output ceiling, regardless of mention order. Satisfy this overlay only where compatible.
- With $quiz, create an interactive quiz with four to six medium-difficulty questions, native radio inputs, score and progress, and no answer-revealing feedback before submission.
- With $low-level, layer logical algorithm state, runtime representation, and relevant reads, writes, allocations, pointer motion, stack changes, or memory access. Label invented addresses and cache boundaries “illustrative, not to scale”.
- With $bar-raise, preserve the exactly-one-question contract.

## Verify

Check that controls update deterministic state, JavaScript identifiers are defined, no external requests exist, labels do not clip at approximately 736 px and 320 px, keyboard controls have visible labels, reduced-motion works, and no initial frame leaks an answer beyond the active ceiling.

Do not provide covert assistance during an assessment where AI is not explicitly allowed.
