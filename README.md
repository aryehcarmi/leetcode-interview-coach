# LeetCode Interview Coach

A disclosure-controlled coding-interview coach that can give the next useful hint, minimally repair an attempt, optimize the user's approach, teach optimal solutions, quiz understanding, and visualize the relevant concept(s)/pattern(s) without revealing more than the selected workflow allows.

## Direct skills

Each workflow is independently selectable:

| Skill | Purpose |
|---|---|
| $stuck | Give the smallest useful progressive hint |
| $lcd | Add the lowest-cost diagnostic |
| $salvage | Make the minimum working repair |
| $optimize | Improve the attempt without replacing its idea |
| $best | Teach interview-canonical complete solutions |
| $check | Audit time and space complexity |
| $follow-up | Ask exactly one hard follow-up |
| $visualize | Build an interactive, spoiler-safe mental model |
| $low-level | Connect the algorithm to relevant systems behavior |
| $quiz | Run adaptive retrieval and transfer practice |

Use $leetcode-interview-coach for natural-language routing, ambiguous requests, combinations, or the legacy slash aliases.

## Composition

Stacking multiple skills in one prompt composes them. Examples:

    $optimize $low-level

For a low-level-systems optimization suggestion from your agent.

    $stuck $quiz

To get an HTML file (can open it in any browser) containing an interactive quiz, which guides your learning such that you'll get unstuck.

    $quiz $visualize

To get an HTML file containing a quiz with embedded visuals.

    $follow-up $low-level

Ask exactly one hard follow-up that pushes you to demonstrate mastery of low-level systems concepts.

The leftmost base skill controls the response contract and disclosure ceiling. Use it to moderate how much of a spoiler the response will be. $visualize, $low-level, and $quiz are overlays and never raise that ceiling.

## Install

The repository stores every standalone skill under [skills](skills). Copy or symlink the desired skill directories into the current Codex user skill directory:

    ~/.agents/skills/

Install the coordinator and all ten leaves to preserve direct invocation, natural-language routing, and composition. In Codex, type $ to select a skill. If newly installed skills do not appear, start a new task or restart Codex.
