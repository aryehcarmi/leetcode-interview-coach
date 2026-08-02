#!/usr/bin/env node
// Validates every skill under skills/. No dependencies; run with `node scripts/validate-skills.mjs`.
//
// Catches the failure modes that actually bite a skills repo:
//   1. A directory renamed without renaming the skill inside it (or vice versa).
//   2. Frontmatter that an agent runtime will reject or silently never trigger on.
//   3. Relative links to files that no longer exist.
//   4. Cross-references to a skill name that no longer exists.
//   5. Reference files nothing loads — dead weight that drifts out of sync.

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { join, dirname, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SKILLS_DIR = join(ROOT, 'skills')
const MAX_DESCRIPTION = 1024 // Claude Code's frontmatter description limit.

const errors = []
const fail = (file, message) => errors.push(`${relative(ROOT, file)}: ${message}`)

/** Parse `---`-delimited YAML frontmatter. Only flat `key: value` pairs are supported. */
function parseFrontmatter(source) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source)
  if (!match) return null
  const fields = {}
  for (const line of match[1].split(/\r?\n/)) {
    const pair = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(line)
    if (!pair) continue
    fields[pair[1]] = pair[2].trim().replace(/^["'](.*)["']$/s, '$1')
  }
  return fields
}

/** Every markdown link with a relative target, as [text](target). */
function relativeLinks(source) {
  return [...source.matchAll(/\[[^\]]*\]\(([^)\s]+)\)/g)]
    .map((m) => m[1])
    .filter((target) => !/^(https?:|mailto:|#)/.test(target))
}

function filesMatching(dir, pattern) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) return []
    const path = join(dir, entry.name)
    if (entry.isDirectory()) return filesMatching(path, pattern)
    return pattern.test(entry.name) ? [path] : []
  })
}

const markdownFiles = (dir) => filesMatching(dir, /\.md$/)

const skillDirs = readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort()

if (skillDirs.length === 0) {
  console.error('No skills found under skills/.')
  process.exit(1)
}

const skillNames = new Set(skillDirs)

for (const dirName of skillDirs) {
  const skillDir = join(SKILLS_DIR, dirName)
  const skillFile = join(skillDir, 'SKILL.md')

  if (!existsSync(skillFile)) {
    fail(skillDir, 'missing SKILL.md')
    continue
  }

  const source = readFileSync(skillFile, 'utf8')
  const frontmatter = parseFrontmatter(source)

  if (!frontmatter) {
    fail(skillFile, 'missing or malformed YAML frontmatter')
    continue
  }

  // 1. Directory name and skill name must agree, or the skill loads under a name nobody types.
  if (!frontmatter.name) {
    fail(skillFile, 'frontmatter is missing `name`')
  } else if (frontmatter.name !== dirName) {
    fail(skillFile, `frontmatter name "${frontmatter.name}" does not match directory "${dirName}"`)
  } else if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(frontmatter.name)) {
    fail(skillFile, `name "${frontmatter.name}" is not lowercase kebab-case`)
  }

  // 2. Without a description saying when to trigger, the agent never reaches for the skill.
  const description = frontmatter.description ?? ''
  if (!description) {
    fail(skillFile, 'frontmatter is missing `description`')
  } else if (description.length > MAX_DESCRIPTION) {
    fail(skillFile, `description is ${description.length} chars, over the ${MAX_DESCRIPTION} limit`)
  } else if (!/\buse\b/i.test(description)) {
    fail(skillFile, 'description does not say when to use the skill (expected a "Use ..." clause)')
  }

  // 5. A reference file no SKILL.md links to is dead weight; it drifts out of sync unnoticed.
  const referencesDir = join(skillDir, 'references')
  if (existsSync(referencesDir) && statSync(referencesDir).isDirectory()) {
    const linked = new Set(
      markdownFiles(skillDir)
        .flatMap((file) => relativeLinks(readFileSync(file, 'utf8')).map((t) => resolve(dirname(file), t)))
    )
    for (const entry of readdirSync(referencesDir)) {
      const referenceFile = join(referencesDir, entry)
      if (!linked.has(referenceFile)) {
        fail(referenceFile, 'is never linked from a SKILL.md in this repo')
      }
    }
  }
}

// 3. Every relative link target resolves.
for (const file of markdownFiles(ROOT)) {
  for (const target of relativeLinks(readFileSync(file, 'utf8'))) {
    const resolved = resolve(dirname(file), target.split('#')[0])
    if (!existsSync(resolved)) fail(file, `broken link to ${target}`)
  }
}

// 4. Every $skill token — in prose and in Codex metadata alike — names a skill that exists.
for (const file of [...markdownFiles(ROOT), ...filesMatching(ROOT, /\.ya?ml$/)]) {
  for (const [, name] of readFileSync(file, 'utf8').matchAll(/\$([a-z][a-z0-9-]*)/g)) {
    if (!skillNames.has(name)) fail(file, `references $${name}, which is not a skill in skills/`)
  }
}

if (errors.length > 0) {
  console.error(`${errors.length} problem(s) found:\n`)
  for (const error of errors) console.error(`  ✗ ${error}`)
  process.exit(1)
}

console.log(`✓ ${skillDirs.length} skills valid: ${skillDirs.join(', ')}`)
