# Contributing

Issues and pull requests are both welcome.

Nothing here is enforced by a tool. These are prompts, not code — there is no build, no lint, and no CI. The conventions below are what keeps the set coherent, not rules you can fail.

## Hacking on them for yourself

You do not need a PR to change these. Install with symlinks and edit in place:

```bash
./scripts/install.sh
```

Your agent picks the changes up immediately, and `git pull` still works. If you want to diverge permanently, `./scripts/install.sh --copy` and forget this repo exists. Both are fine — fork the ladder, rewrite the wording, delete the skills you don't use.

## What makes a good PR

These skills are prompts, so the bar is behavioral: does the agent actually do the thing? Say what you asked the agent, what it did before, and what it does now. A one-line transcript is worth more than an argument. The two real bugs in this repo's history were both found that way, by reading output — not by inspecting the files.

## Conventions

**One skill, one directory.** `skills/<name>/SKILL.md`, where `<name>` is lowercase kebab-case and matches the `name` in the frontmatter exactly. Renaming one and not the other silently breaks the skill: it loads under a name nothing references.

**Frontmatter stays portable.** Only `name` and `description`. Every agent runtime understands those two; anything else is a bet on one vendor. Codex-specific display metadata goes in `agents/openai.yaml`, which other agents ignore.

**Descriptions say what *and* when.** The agent decides whether to load a skill from its description alone. `"Audit a user's stated complexity without changing the solution. Use when explicitly invoked with code, an algorithm, or a complexity claim."` — the first sentence is the contract, the second is the trigger.

**Refer to skills by bare name.** Write `` `stuck` ``, not `/stuck` or `$stuck`. Claude Code uses `/`, Codex uses `$`, and the same `SKILL.md` is read by both. The prefixes belong in the README, where we can explain them once.

**Put long material in `references/`.** A `SKILL.md` should fit in an agent's head. Anything the skill needs only sometimes — lookup tables, calibration data, design checklists — goes in `references/` and gets linked from the `SKILL.md`, so it loads on demand.

**Don't duplicate a reference across skills.** Link to the sibling copy instead. Two copies drift; that drift caused half the cleanup in this repo's history.

**Two blocks are duplicated anyway, on purpose.** The disclosure ladder and the `## Mark the changes` section have to be in context on every invocation, and each skill has to work when installed alone. If you change one in a PR, change the rest so the set stays coherent. In your own copy, change as many or as few as you like — a partially edited ladder works fine.

**Markers are a diff notation.** `NEW` and `MOD` answer "what do I edit in my file?", so they belong only on a patch against code the user already has, written in the target language's own comment syntax. Code with no existing counterpart — a solution taught from scratch, an artifact a skill authors — is returned unmarked, because a marker on every line distinguishes nothing.

## Adding a skill

A new base skill has to earn a rung on the disclosure ladder:

```
follow-up → check → lcd → stuck → salvage → optimize → best
```

Say where it sits and why. If it doesn't reveal more than the rung below it and less than the rung above it, it's probably an overlay (like `visualize`, `low-level`, and `quiz`) or a variation of a skill that already exists.

Then update, in the same PR, the ladder line in every other `SKILL.md`, the tables in `skills/leetcode-interview-coach/SKILL.md`, and the tables in `README.md`.
