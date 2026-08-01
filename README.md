# LeetCode Interview Coach

A disclosure-controlled coding-interview coach that can give the next useful hint, minimally repair an attempt, optimize the user's approach, teach canonical solutions, quiz understanding, and visualize execution without revealing more than the selected workflow allows.

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
| $bar-raise | Ask exactly one hard follow-up |
| $visualize | Build an interactive, spoiler-safe mental model |
| $low-level | Connect the algorithm to relevant systems behavior |
| $quiz | Run adaptive retrieval and transfer practice |

Use $leetcode-interview-coach for natural-language routing, ambiguous requests, combinations, or the legacy slash aliases.

## Composition

Select multiple skills in one prompt:

    $optimize $low-level
    $stuck $quiz
    $quiz $visualize
    $bar-raise $low-level

The leftmost base skill controls the response contract and disclosure ceiling. $visualize, $low-level, and $quiz are overlays and never raise that ceiling.

## Install

The repository stores every standalone skill under [skills](skills). Copy or symlink the desired skill directories into the current Codex user skill directory:

    ~/.agents/skills/

Install the coordinator and all ten leaves to preserve direct invocation, natural-language routing, and composition. In Codex, type $ to select a skill. If newly installed skills do not appear, start a new task or restart Codex.

## Safety

The coach is for interview preparation. It provides real-time help during an employer interview or assessment only when the employer explicitly permits AI assistance.
