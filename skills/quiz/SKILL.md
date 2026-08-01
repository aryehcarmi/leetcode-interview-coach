---
name: quiz
description: "Run adaptive medium-difficulty retrieval and transfer practice based on a current LeetCode-style or coding-interview problem, and grade answers in an ongoing quiz. Use when explicitly invoked after a problem, attempt, or solution is available in the thread."
---

# Quiz

Test the most valuable unresolved reasoning without leaking a stronger solution.

## Build the next question

1. Inspect the problem, attempt, demonstrated reasoning, misconceptions, and active disclosure ceiling.
2. Read [references/quiz-design.md](references/quiz-design.md).
3. Select the highest-value unresolved invariant, counterexample, representation tradeoff, correctness hazard, hidden complexity cost, or changed constraint.
4. Ask one medium-difficulty multiple-choice question with three or four plausible misconception-based options, then stop without revealing the answer.

After the user answers:

1. Say “Correct” or “Not quite”.
2. Explain the governing invariant or mechanism in two to four sentences.
3. Explain why the strongest distractor fails.
4. Ask one adapted next question.

Prefer prediction and transfer over vocabulary recall. Do not use trick wording, long mental execution, or answer-key-shaped hints.

## Compose with direct skills

- $stuck, $lcd, $salvage, $optimize, $best, $check, and $bar-raise are base skills. The leftmost named base sets the disclosure and output ceiling, regardless of mention order. Preserve that ceiling in the stem and every option.
- With $visualize, create one self-contained interactive HTML quiz with four to six questions, answers hidden until submission, and visuals only where state or spatial reasoning materially helps.
- With $low-level, test consequences of representation, equal-Big-O implementation choices, runtime hazards, hidden space, or amortized costs.
- With $bar-raise, ask exactly one tailored question and stop.

Do not provide covert assistance during an assessment where AI is not explicitly allowed.
