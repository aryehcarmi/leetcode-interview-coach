# Working on this repo

This repo is a skills-only plugin for coding-interview practice. `.codex-plugin/plugin.json` packages the eleven workflows under `skills/` as one installable unit. Every skill file is a prompt; there is no application code, build, or test suite. The only executable script, `scripts/install.sh`, symlinks the skills into agent directories for direct installation and local development.

Validate plugin and skill metadata structurally. Behavioral changes are verified by using the skill and reading what the agent produces — not by inspecting the file and declaring it correct.

## What the skills are

Eleven skills under `skills/`. Seven are base skills forming a disclosure ladder, ordered by how much of the solution they hand to the user:

```
follow-up → check → lcd → stuck → salvage → optimize → best
```

When a prompt names several, the least-revealing one governs, regardless of the order they were typed in. Three overlays — `visualize`, `low-level`, `quiz` — change how an answer is delivered but never how much it reveals. `leetcode-interview-coach` routes natural-language requests to the rest.

The whole point of the repo is that ceiling. A change that lets a skill reveal more than its rung allows is a bug, not a feature, even when it makes the answer more helpful.

## Editing rules

- Keep `SKILL.md` frontmatter to `name` and `description`. Vendor-specific metadata belongs in `agents/`.
- The directory name and the frontmatter `name` must match.
- Refer to other skills by bare name in backticks — `` `stuck` ``, never `/stuck` or `$stuck`. These files are read by both Claude Code and Codex, which use different prefixes.
- Two blocks are duplicated on purpose, so each skill works when installed alone: the disclosure ladder, and the `## Mark the changes` section in the skills that emit patches. When changing one in this repo, change the rest so the set stays coherent. Nothing enforces this; a user's own partially edited copy is valid.
- `NEW` and `MOD` markers are a diff notation. They only make sense against code the user already has, and they are written in the target language's own comment syntax. A complete solution or an artifact this repo authors is returned unmarked.
- Long or occasional material goes in `references/` and gets linked from the `SKILL.md`, so it loads only when needed.
- Never duplicate a reference file across two skills. Link to the sibling.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full conventions.
