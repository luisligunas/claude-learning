#!/bin/bash
# Generate TTS audio from narrative scripts using macOS `say` command
# Output goes to videos/public/audio/narration/ so Remotion's staticFile() can find them
# Usage: cd videos && ./scripts/generate-tts.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
AUDIO_DIR="$PROJECT_DIR/public/audio/narration"

VOICE="Samantha"
RATE=220

LESSONS=(
  "intro-claude"
  "claude-code-beginner"
  "prompt-basics"
  "skills-overview"
  "mcp-intro"
  "artifacts-intro"
  "projects-intro"
  "claude-code-engineering"
  "claude-code-context"
  "claude-code-ai-workflow"
  "extended-thinking"
  "prompt-design-to-code"
  "skills-create"
  "skills-advanced"
  "subagents-overview"
  "subagents-create"
  "subagents-advanced"
  "skills-subagents-together"
  "hooks-guide"
  "plugins-system"
  "claude-md-mastery"
)

echo "=== Claude Learning TTS Generator ==="
echo "Voice: $VOICE | Rate: $RATE wpm"
echo "Output: $AUDIO_DIR"
echo ""

if ! command -v say &> /dev/null; then
  echo "Error: 'say' command not found. This script requires macOS."
  exit 1
fi

if ! command -v ffmpeg &> /dev/null; then
  echo "Error: ffmpeg not found. Install with: brew install ffmpeg"
  exit 1
fi

for lesson_id in "${LESSONS[@]}"; do
  echo "--- Processing: $lesson_id ---"
  lesson_dir="$AUDIO_DIR/$lesson_id"
  mkdir -p "$lesson_dir"

  ts_file="$PROJECT_DIR/src/narratives/${lesson_id}.ts"
  if [ ! -f "$ts_file" ]; then
    echo "  Warning: $ts_file not found, skipping."
    continue
  fi

  # Extract narrationText values from the TypeScript file
  narrations=$(node -e "
    const fs = require('fs');
    const content = fs.readFileSync('${ts_file}', 'utf-8');
    // Match narrationText across single-quoted, double-quoted, or template strings
    const regex = /narrationText:\s*(?:'([^']*(?:\\\\.[^']*)*)'|\"([^\"]*(?:\\\\.[^\"]*)*)\"|[\`]([^\`]*)[\`])/g;
    let match;
    let i = 0;
    while ((match = regex.exec(content)) !== null) {
      const text = (match[1] || match[2] || match[3] || '')
        .replace(/\\\\n/g, ' ')
        .replace(/\\\\'/g, \"'\")
        .replace(/\\\\\"/g, '\"')
        .trim();
      if (text) {
        console.log(i + '|||' + text);
        i++;
      }
    }
  " 2>/dev/null) || true

  if [ -z "$narrations" ]; then
    # Fallback: try a simpler extraction
    narrations=$(node -e "
      const fs = require('fs');
      const content = fs.readFileSync('${ts_file}', 'utf-8');
      const lines = content.split('\n');
      let inNarration = false;
      let current = '';
      let i = 0;
      for (const line of lines) {
        if (line.includes('narrationText:')) {
          inNarration = true;
          // Get everything after the first quote
          const afterColon = line.split('narrationText:')[1] || '';
          const quoteStart = afterColon.indexOf(\"'\") !== -1 ? afterColon.indexOf(\"'\") : afterColon.indexOf('\"');
          if (quoteStart !== -1) {
            current = afterColon.substring(quoteStart + 1);
          }
        } else if (inNarration) {
          current += ' ' + line.trim();
        }
        // Check if current line ends the string
        if (inNarration && (line.trimEnd().endsWith(\"',\") || line.trimEnd().endsWith('\",') || line.trimEnd().endsWith(\"'\") || line.trimEnd().endsWith('\"'))) {
          // Remove trailing quote and comma
          current = current.replace(/['\"],?\s*\$/, '').trim();
          if (current) {
            console.log(i + '|||' + current);
            i++;
          }
          inNarration = false;
          current = '';
        }
      }
    " 2>/dev/null) || true
  fi

  if [ -z "$narrations" ]; then
    echo "  Could not extract narrations, skipping."
    continue
  fi

  while IFS='|||' read -r idx text; do
    if [ -z "$text" ]; then continue; fi

    mp3_file="$lesson_dir/scene-${idx}.mp3"

    if [ -f "$mp3_file" ]; then
      echo "  Scene $idx: already exists, skipping"
      continue
    fi

    aiff_file="$lesson_dir/scene-${idx}.aiff"

    echo "  Scene $idx: generating..."
    say -v "$VOICE" -r "$RATE" -o "$aiff_file" "$text" 2>/dev/null || {
      echo "  Scene $idx: say command failed, skipping"
      continue
    }
    ffmpeg -y -i "$aiff_file" -acodec libmp3lame -ab 128k -ar 44100 "$mp3_file" 2>/dev/null || {
      echo "  Scene $idx: ffmpeg conversion failed"
      rm -f "$aiff_file"
      continue
    }
    rm -f "$aiff_file"

    # Show duration
    duration=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$mp3_file" 2>/dev/null || echo "?")
    echo "  Scene $idx: done (${duration}s)"

  done <<< "$narrations"
  echo ""
done

echo "=== TTS generation complete ==="
echo "Files:"
find "$AUDIO_DIR" -name "*.mp3" -exec ls -lh {} \; 2>/dev/null || echo "No files generated"
