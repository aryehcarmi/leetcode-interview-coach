# Quiz design

## Choose the learning target

Select the highest-value unresolved idea from the current context:

1. The invariant or state transition the user is struggling to derive.
2. A counterexample that distinguishes the attempted idea from a correct one.
3. A representation or data-structure tradeoff.
4. A correctness hazard or hidden complexity cost.
5. A transfer question that changes one constraint.

Do not retest a point the user has already demonstrated unless spaced repetition or a nearby misconception makes it valuable.

## Write medium MCQs

- Ask for prediction or reasoning, not term recognition.
- Make one option unambiguously best under the stated assumptions.
- Use three or four concise options.
- Derive distractors from plausible misconceptions: off-by-one boundaries, wrong invariant, premature update, incorrect expected-versus-worst-case reasoning, copying or aliasing mistakes, or a representation mismatch.
- Keep code fragments tiny and language-valid. Do not require mental execution of long code.
- Avoid trick wording, "all of the above," and trivia detached from the current problem.
- Do not make the longest or most qualified option predictably correct.
- Preserve the active reveal ceiling in the stem and every option.

## Run the chat quiz

Ask one question and stop. Do not show the answer or an answer-key-shaped hint.

After the user answers:

1. Say `Correct` or `Not quite`.
2. Explain the governing invariant or mechanism in two to four sentences.
3. Explain why the strongest distractor fails.
4. Ask the next question, adapting its difficulty or target to the answer.

Use approximately four questions for a normal session, but continue or stop based on the user's responses.

## Add visuals selectively

A question merits a visual when the learner must reason about:

- state progression or the next algorithm step;
- pointer, frontier, stack, heap, or window movement;
- graph, tree, grid, or memory layout;
- a subtle counterexample; or
- the physical consequence of an access pattern or representation.

Freeze an answer-relevant animation before the decisive step. Reveal the transition only after submission. Do not add a visual to pure definition, straightforward complexity, or verbal tradeoff questions when it would be decoration.
