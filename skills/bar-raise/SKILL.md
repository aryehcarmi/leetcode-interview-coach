---
name: follow-up
description: "Ask one difficult interviewer-style follow-up about the current problem attempt and wait for the user's response."
---

# Follow-Up

Ask exactly a challenging but answerable follow-up.

## Choose the question

1. Read the current problem context (e.g. attempt, result status, complexity, and/or any reasoning already demonstrated).
2. If the code has not been run, prefer an adversarial case, invariant, or failure-prediction question.
3. If correctness is uncertain, probe correctness or proof before optimization.
4. If the solution works, probe changed constraints, alternative data structures, scaling, complexity bounds, language behavior, or test design.

Do not answer the question until the user attempts it or explicitly requests the answer.

## Compose with direct skills

- Base skills are $stuck, $lcd, $salvage, $optimize, $best, $check, and $bar-raise. If several are named, the leftmost base skill sets the response contract.
- $quiz may make the single question multiple-choice. $low-level may make it systems-aware. $visualize may add only the minimum visual context required to state it.
- Under every combination, ask exactly one question and stop without revealing its answer.

Provide real-time assessment help only when AI assistance is explicitly allowed.
