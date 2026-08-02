# Working on this repo

This repo is a set of agent skills for coding-interview practice. Every file is a prompt; there is no application code.

Before finishing any change, run:

```bash
node scripts/validate-skills.mjs
```

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
- Each base skill's `SKILL.md` carries its own copy of the ladder so it works when installed alone. Change one, change all of them.
- Long or occasional material goes in `references/` and gets linked from the `SKILL.md`, so it loads only when needed.
- Never duplicate a reference file across two skills. Link to the sibling.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full conventions.
