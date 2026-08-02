# Contributing

Thanks for wanting to improve this. Issues and pull requests are both welcome.

Run the validator before you open a PR:

```bash
node scripts/validate-skills.mjs
```

It requires Node 18+ and has no dependencies. CI runs the same command.

## What makes a good change here

These skills are prompts, so the bar is behavioral: does the agent actually do the thing? If you change a skill, say in the PR what you asked the agent, what it did before, and what it does now. A one-line transcript is worth more than an argument.

## Conventions

**One skill, one directory.** `skills/<name>/SKILL.md`, where `<name>` is lowercase kebab-case and matches the `name` in the frontmatter exactly. The validator enforces this — it exists because renaming one and not the other silently breaks the skill.

**Frontmatter stays portable.** Only `name` and `description`. Every agent runtime understands those two; anything else is a bet on one vendor. Codex-specific display metadata goes in `agents/openai.yaml`, which other agents ignore.

**Descriptions say what *and* when.** The agent decides whether to load a skill from its description alone. `"Audit a user's stated complexity without changing the solution. Use when explicitly invoked with code, an algorithm, or a complexity claim."` — the first sentence is the contract, the second is the trigger.

**Refer to skills by bare name.** Write `` `stuck` ``, not `/stuck` or `$stuck`. Claude Code uses `/`, Codex uses `$`, and the same `SKILL.md` is read by both. The prefixes belong in the README, where we can explain them once.

**Put long material in `references/`.** A `SKILL.md` should fit in an agent's head. Anything the skill needs only sometimes — lookup tables, calibration data, design checklists — goes in `references/` and gets linked from the `SKILL.md`, so it loads on demand. The validator flags reference files nothing links to.

**Don't duplicate a reference across skills.** Link to the sibling copy instead. The two copies will drift; the drift is what caused half the cleanup in this repo's history.

## Adding a skill

A new base skill has to earn a rung on the disclosure ladder:

```
follow-up → check → lcd → stuck → salvage → optimize → best
```

Say where it sits and why. If it doesn't reveal more than the rung below it and less than the rung above it, it's probably an overlay (like `visualize`, `low-level`, and `quiz`) or a variation of a skill that already exists.

Then update, in the same PR:

- the ladder line in every other `SKILL.md` — each skill carries its own copy so it works when installed alone
- the tables in `skills/leetcode-interview-coach/SKILL.md`
- the tables in `README.md`
