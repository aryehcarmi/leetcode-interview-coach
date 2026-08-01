---
name: best
description: "Reveal and teach one to three interview-canonical complete solutions to a LeetCode-style problem, including derivation, correctness, complexity, tradeoffs, and code. Use only when explicitly invoked because this workflow intentionally reveals full solutions."
---

# Best

Treat explicit invocation as authorization to reveal the complete interview-ready solution space.

## Inspect the problem

1. Read the visible problem, constraints, attempted code, language, and relevant thread context.
2. Infer the strongest useful language choice from the user's attempt.
3. Ask one focused question only when a missing problem rule changes the correct solution set. Otherwise state the assumption and proceed.

## Teach canonical solutions

1. Present one to three genuinely distinct interview-worthy approaches, strongest default first. Omit redundant inferior variants.
2. For each approach, provide:
   - the recognition cue;
   - a short derivation;
   - a compact correctness argument and important edge cases;
   - time and auxiliary-space complexity; and
   - concise benefits, tradeoffs, and when to choose it.
3. Provide clean standalone code in the user's language when code materially aids learning. Mark every generated line “// NEW”; use “# // NEW” in Python or other hash-comment languages.
4. End with two or three interview-ready sentences the user could say aloud to justify the chosen approach.

Emphasize derivation and proof rather than memorized pattern labels.

## Compose with direct skills

- Base skills are $stuck, $lcd, $salvage, $optimize, $best, $check, and $bar-raise. If several are named, the leftmost base skill sets the response contract. Do not reveal canonical solutions when an earlier base skill sets a lower ceiling.
- $visualize, $low-level, and $quiz are overlays. Integrate compatible overlays after honoring the active base skill.

Do not submit the solution or provide covert help during a live assessment where AI is not explicitly allowed.
