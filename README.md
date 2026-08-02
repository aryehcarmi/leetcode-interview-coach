# LeetCode Interview Coach

A disclosure-controlled coding-interview coach that can give the next useful hint, minimally repair an attempt, optimize the user's approach, teach optimal solutions, quiz understanding, and visualize the relevant concept(s)/pattern(s) without revealing more than the selected workflow allows.

## Direct skills

Each workflow is independently selectable:

| Skill Title | Codex Invocation | Claude Code Invocation | Purpose |
|---|---|---|---|
| Stuck | $stuck | /stuck | Gives you the smallest hint to get unstuck, without spoiling the solution |
| L.C. (Leetcode) Debug | $lcd | /lcd | Suggests a quick debugging approach (rather than debugging it for you), to facilitate your debugging abilities |
| Salvage | $salvage | /salvage | Preserves your approach as much as possible while showing you how to make it work |
| Optimize | $optimize | /optimize | Suggests an optimization for your code without replacing its core ideas |
| Best | $best | /best | Shows you the interview-best-practice solutions |
| Check | $check | /check | Checks the correctness of your algorithmic analysis if you wrote it in comments, otherwise checks your code for correctness |
| Follow-Up | $follow-up | /follow-up | Ask a hard follow-up question, akin to the kind you might get from an interviewer |
| Visualize | $visualize | /visualize | Builds an interactive, spoiler-safe (unless combined with a skill that could give you a solution) mental model |
| Low-Level | $low-level | /low-level | Connects the algorithm to relevant low-level systems concepts |
| Quiz | $quiz | /quiz | Get an interactive HTML quiz file |

Use $leetcode-interview-coach (/leetcode-interview-coach in Claude Code) for your agent to choose the best skill routing (including combinations).

## Composition

Stacking multiple skills in one prompt composes them. Examples:

    /optimize /low-level

For a low-level-systems optimization suggestion from your agent.

    /stuck /quiz

For an HTML file (can open it in any browser) containing an interactive quiz, which guides your learning such that you'll get unstuck.

    /quiz /visualize

For an HTML file containing a quiz with embedded visuals.

    /follow-up /low-level

For a hard follow-up question that pushes you to demonstrate mastery of low-level systems concepts.

The leftmost base skill controls the response contract and disclosure ceiling. Use it to moderate how much of a spoiler the response will be. $visualize, $low-level, and $quiz are overlays and never raise that ceiling.

## Install

The repository stores every standalone skill under [skills](skills). Copy or symlink the desired skill directories into the current Codex user skill directory:

    ~/.agents/skills/

Install the coordinator and all ten leaves to preserve direct invocation, natural-language routing, and composition. In Codex, type $ to select a skill. If newly installed skills do not appear, start a new task or restart Codex.
