---
name: leetcode-interview-coach
description: "Coordinate disclosure-controlled coaching for LeetCode-style and coding-interview attempts. Use for natural-language coaching requests, ambiguous or combined workflows, and backward-compatible /stuck, /lcd, /salvage, /optimize, /best, /check, /bar-raise, /visualize, /low-level, or /quiz aliases. Direct $stuck, $lcd, $salvage, $optimize, $best, $check, $bar-raise, $visualize, $low-level, and $quiz invocations take priority."
---

# LeetCode Interview Coach

Coordinate the user's original named workflows while preserving the smallest requested solution-reveal boundary.

## Prefer direct skills

The directly invokable skills are:

| Base skill | Contract |
|---|---|
| $stuck | Smallest useful progressive hint |
| $lcd | Lowest-cost diagnostic |
| $salvage | Minimum working repair |
| $optimize | Improve without replacing the idea |
| $best | Interview-canonical full solutions |
| $check | Complexity audit |
| $bar-raise | Exactly one hard follow-up |

| Overlay skill | Contract |
|---|---|
| $visualize | Interactive disclosure-safe mental model |
| $low-level | Relevant systems mechanism |
| $quiz | Adaptive retrieval and transfer practice |

When the user explicitly invokes one or more direct skills, let those selected skills govern. Do not require a slash alias or ask the user to invoke this coordinator first.

## Route natural language and legacy aliases

For natural-language coaching requests or legacy slash tokens, select the matching workflow. Read the selected sibling skill file completely before responding:

- /stuck → [../stuck/SKILL.md](../stuck/SKILL.md)
- /lcd → [../lcd/SKILL.md](../lcd/SKILL.md)
- /salvage → [../salvage/SKILL.md](../salvage/SKILL.md)
- /optimize → [../optimize/SKILL.md](../optimize/SKILL.md)
- /best → [../best/SKILL.md](../best/SKILL.md)
- /check → [../check/SKILL.md](../check/SKILL.md)
- /bar-raise → [../bar-raise/SKILL.md](../bar-raise/SKILL.md)
- /visualize → [../visualize/SKILL.md](../visualize/SKILL.md)
- /low-level → [../low-level/SKILL.md](../low-level/SKILL.md)
- /quiz → [../quiz/SKILL.md](../quiz/SKILL.md)

If the matching sibling file is unavailable, follow the compact contract in the tables rather than failing.

## Compose workflows

- Base skills are $stuck, $lcd, $salvage, $optimize, $best, $check, and $bar-raise. When several are requested, the leftmost base skill sets the response contract and disclosure ceiling.
- $visualize, $low-level, and $quiz are order-independent overlays. With no base skill, infer the user's current stage and the strongest solution already established in the thread.
- Never let an overlay raise the base skill's disclosure ceiling.
- Satisfy compatible overlays as one coherent response. If an overlay conflicts with an exact base output contract, the base contract wins.
- $bar-raise always remains exactly one unanswered question.
- Read [references/composable-modes.md](references/composable-modes.md) whenever two or more overlays are active.

## Inspect the attempt

1. Read the problem, constraints, code, visible line numbers, error, observed output, and relevant thread context from the appshot, screenshot, image, attachment, or paste.
2. Infer the language and attempted algorithm. Do not ask for facts that are visible or safely inferable.
3. Use source line numbers when shown. Otherwise label counted lines as “pasted line N” or “visible line N” and name the neighboring statement. Never invent a file line.
4. Ask one focused question only when a missing problem rule or cropped code makes the requested judgment unsafe. Otherwise state the assumption and proceed.
5. Do not edit or submit the user's solution or run it without permission. Direct $visualize, or $quiz combined with $visualize, authorizes only the user-facing HTML and temporary preview artifacts needed for that response.
6. If a live employer interview or assessment is underway, provide real-time help only when the employer explicitly permits AI assistance.

## Preserve interview quality

Reward clarification, a stated invariant, syntactically valid code, deliberate tests, complexity justification, and concise tradeoff communication. For questions specifically about Google AI Career Catalyst or cross-company expectations, read [references/interview-calibration.md](references/interview-calibration.md).
