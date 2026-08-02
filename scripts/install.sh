#!/usr/bin/env bash
# Install these skills into the agent homes on this machine.
#
#   ./scripts/install.sh                 symlink into every agent found
#   ./scripts/install.sh --copy          install independent copies instead
#   ./scripts/install.sh --force         replace skills that are already there
#   ./scripts/install.sh --target DIR    install into a specific directory
#
# Symlinking is the default so you can edit the skills in this repo and see the
# change in your agent immediately, and still `git pull` for updates. Use --copy
# if you would rather fork them and never think about this repo again.

set -euo pipefail

SOURCE="$(cd "$(dirname "${BASH_SOURCE[0]}")/../skills" && pwd)"
MODE=link
FORCE=0
TARGETS=()

while [ $# -gt 0 ]; do
  case "$1" in
    --copy) MODE=copy ;;
    --link) MODE=link ;;
    --force) FORCE=1 ;;
    --target) shift; TARGETS+=("$1") ;;
    -h|--help) sed -n '2,11p' "$0" | cut -c3-; exit 0 ;;
    *) echo "unknown option: $1" >&2; exit 1 ;;
  esac
  shift
done

if [ ${#TARGETS[@]} -eq 0 ]; then
  [ -d "$HOME/.claude" ] && TARGETS+=("$HOME/.claude/skills")
  # Codex reads both locations. Prefer the shared cross-agent one so a machine
  # with both directories does not end up with every skill installed twice.
  if [ -d "$HOME/.agents" ]; then
    TARGETS+=("$HOME/.agents/skills")
  elif [ -d "$HOME/.codex" ]; then
    TARGETS+=("$HOME/.codex/skills")
  fi
fi

if [ ${#TARGETS[@]} -eq 0 ]; then
  echo "No agent directory found (~/.claude, ~/.agents, ~/.codex)." >&2
  echo "Pass --target DIR to install somewhere specific." >&2
  exit 1
fi

for target in "${TARGETS[@]}"; do
  mkdir -p "$target"
  installed=0
  skipped=0

  # Drop leftovers from an earlier install whose source has since been renamed.
  for entry in "$target"/*; do
    [ -L "$entry" ] && [ ! -e "$entry" ] || continue
    case "$(readlink "$entry")" in
      "$SOURCE"/*) rm "$entry"; echo "  removed stale link $(basename "$entry")" ;;
    esac
  done

  for skill in "$SOURCE"/*/; do
    skill="${skill%/}"
    name="$(basename "$skill")"
    dest="$target/$name"

    if [ -e "$dest" ] || [ -L "$dest" ]; then
      already_ours=0
      [ -L "$dest" ] && [ "$(readlink "$dest")" = "$skill" ] && already_ours=1
      if [ "$already_ours" -eq 0 ] && [ "$FORCE" -eq 0 ]; then
        echo "  skip $name (already exists; --force to replace)"
        skipped=$((skipped + 1))
        continue
      fi
      rm -rf "$dest"
    fi

    if [ "$MODE" = copy ]; then
      cp -R "$skill" "$dest"
    else
      ln -s "$skill" "$dest"
    fi
    installed=$((installed + 1))
  done

  echo "$target — $installed installed, $skipped skipped ($MODE)"
done
