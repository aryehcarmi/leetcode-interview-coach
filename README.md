# LeetCode Interview Coach

A coding-interview coach for AI agents that never tells you more than you asked for.

Ask a general-purpose agent for help with a LeetCode problem and it hands you the answer. That feels productive and teaches you nothing — the reasoning you were supposed to build is the exact thing it did for you.

These eleven skills fix that. Each one is a **contract about how much it is allowed to reveal**. `/stuck` gives you the smallest next foothold and stops. `/lcd` tells you where to put one print statement, not what's wrong. `/check` audits your Big-O without touching your code. Only `/best` hands over a full solution, and only when you ask for it by name.

Works with Claude Code, Codex, and any agent that reads `SKILL.md`.

## Install

<details open>
<summary><strong>Claude Code</strong></summary>

```bash
git clone https://github.com/aryehcarmi/leetcode-interview-coach.git
mkdir -p ~/.claude/skills
cp -R leetcode-interview-coach/skills/* ~/.claude/skills/
```

Then type `/stuck`, `/best`, and so on. Use `.claude/skills/` in your project instead to scope them to one repo.

</details>

<details open>
<summary><strong>Codex</strong></summary>

```bash
git clone https://github.com/aryehcarmi/leetcode-interview-coach.git
mkdir -p ~/.agents/skills
cp -R leetcode-interview-coach/skills/* ~/.agents/skills/
```

Then type `$` and pick a skill. `~/.codex/skills/` works too. If new skills don't appear, start a new task or restart Codex.

</details>

Symlink instead of copying if you want to hack on the skills and keep your edits:

```bash
ln -s "$PWD"/leetcode-interview-coach/skills/* ~/.claude/skills/
```

Install all eleven. The skills reference each other by relative path, and composition depends on them being siblings.

## The skills

Type `/stuck` in Claude Code, `$stuck` in Codex, or just describe what you want and let the agent route it.

Base skills, **ordered by how much of the solution they hand over**:

| Skill | Reveals | What you get |
|---|---|---|
| `follow-up` | nothing | One hard interviewer-style question. It does not answer it. |
| `check` | nothing | An audit of your stated time and space complexity. Your code is untouched. |
| `lcd` | where to look | The single cheapest print statement that would confirm the bug. Not the fix. |
| `stuck` | the next step | The smallest useful hint. Ask again to advance exactly one level. |
| `salvage` | the fix | The minimum change that makes *your* approach correct. Not a rewrite. |
| `optimize` | a better version | Improvements inside the algorithm you're already practicing. |
| `best` | everything | One to three canonical solutions, with derivation, proof, and code. |

Overlays. These change *how* an answer is delivered, never *how much* it reveals:

| Skill | What you get |
|---|---|
| `visualize` | A self-contained interactive HTML animation you open in any browser. |
| `low-level` | The one or two systems mechanisms — memory layout, allocation, encoding — behind the current decision. |
| `quiz` | Adaptive multiple-choice practice on the reasoning you haven't nailed yet. |

And `leetcode-interview-coach`, a router: describe your situation in plain English and it picks the right skill.

## Composing skills

Stack skills in one prompt and they combine:

```
/optimize /low-level     a speedup argued from memory behavior, not just Big-O
/stuck /quiz             an HTML quiz that walks you to the insight you're missing
/quiz /visualize         a quiz with embedded animations
/follow-up /low-level    one hard question about what your data structure does to the machine
```

**The least-revealing skill in the prompt wins.** Order doesn't matter — `/stuck /best` and `/best /stuck` both give you a hint, because `stuck` sits lower on the ladder.

That rule is deliberate. A spoiler can't be taken back, so the ceiling always falls to the safest thing you asked for. If you wanted the higher rung, ask for it on its own.

## Repo layout

```
skills/
  <skill-name>/
    SKILL.md               the skill itself: frontmatter + instructions
    references/            loaded on demand, only when the skill needs them
    agents/openai.yaml     Codex display metadata (ignored by other agents)
```

`SKILL.md` frontmatter is the portable part — `name` and `description`, nothing agent-specific. Anything one runtime understands and another doesn't lives in `agents/`.

Run `node scripts/validate-skills.mjs` to check that every skill's directory name matches its frontmatter `name`, that descriptions say when to trigger, and that no relative link is broken. CI runs it on every push.

## Contributing

Issues and pull requests welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the conventions a new skill has to follow.

## License

[MIT](LICENSE)
