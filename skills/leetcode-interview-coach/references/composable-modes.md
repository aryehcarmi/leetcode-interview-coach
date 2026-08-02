# Composable modes

Read this file when two or more of `visualize`, `low-level`, and `quiz` are active.

## Preserve precedence

- The least-revealing active base skill sets the response contract and disclosure ceiling.
- Overlay order must not affect the disclosure class, the selected learning target, or answer visibility.
- If an overlay conflicts with an exact base format, the base contract wins.
- Under `follow-up`, every combination remains exactly one unanswered question.

## Combine `visualize` and `low-level`

Create a textbook-style layered diagram:

1. Logical algorithm state.
2. Physical or runtime representation.
3. A synchronized progression of relevant reads, writes, pointer traversals, allocations, stack-frame changes, or memory access.
4. A short causal explanation of how the mechanism affects the actual tradeoff.

Give visual depth to only the best one or two systems concepts. Show adjacent connections as smaller annotations or causal arrows. Label invented addresses and cache-line boundaries `illustrative, not to scale`; never manufacture exact cache hits, cycle counts, or allocator behavior.

## Combine `quiz` and `low-level`

Test the consequences of representation changes, equal-Big-O implementation choices, language or runtime correctness hazards, hidden space, or amortized costs. Explain mechanisms rather than rewarding terminology. Preserve the base skill's disclosure ceiling in every option.

## Combine `quiz` and `visualize`

Create one self-contained interactive HTML quiz with four to six medium-difficulty questions:

- Use native radio inputs and keyboard behavior.
- Require submission before revealing correctness, a decisive transition, or an answer-bearing diagram.
- After submission, explain the governing idea, every option briefly, and the strongest distractor specifically.
- Track progress and score without timers or forced randomization.
- Add visuals only where state, motion, spatial layout, memory layout, or a counterexample materially deepens understanding.

## Combine all three overlays

Use the interactive quiz contract above, focused on the strongest low-level transfer questions. Add systems diagrams only where spatial or temporal reasoning helps; do not overload every item.

## Verify HTML

Before delivery, check that:

- the first frame is useful and controls update deterministic state;
- JavaScript identifiers are defined and no network calls exist;
- labels do not overlap or clip at approximately 736 px and 320 px;
- controls work by keyboard and have visible labels;
- motion honors reduced-motion preferences; and
- no diagram, option, or initially visible feedback leaks an answer beyond the active ceiling.
