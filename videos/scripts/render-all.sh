#!/bin/bash
# Render all 5 video compositions to .mp4 files
# Usage: ./scripts/render-all.sh
# Output: ../public/videos/*.mp4

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
OUTPUT_DIR="$(dirname "$PROJECT_DIR")/public/videos"

mkdir -p "$OUTPUT_DIR"

# Composition IDs (must match Root.tsx registrations)
COMPOSITIONS=(
  "intro-claude"
  "claude-code-beginner"
  "prompt-basics"
  "skills-overview"
  "mcp-intro"
)

echo "=== Claude Learning Video Renderer ==="
echo "Output directory: $OUTPUT_DIR"
echo ""

cd "$PROJECT_DIR"

for comp_id in "${COMPOSITIONS[@]}"; do
  output_file="$OUTPUT_DIR/${comp_id}.mp4"
  echo "--- Rendering: $comp_id ---"
  echo "  Output: $output_file"

  npx remotion render src/index.ts "$comp_id" "$output_file" \
    --codec h264 \
    --crf 23 \
    --log warn

  if [ -f "$output_file" ]; then
    size=$(du -h "$output_file" | cut -f1)
    echo "  Done! Size: $size"
  else
    echo "  ERROR: Output file not created!"
  fi
  echo ""
done

echo "=== All videos rendered ==="
ls -lh "$OUTPUT_DIR"/*.mp4 2>/dev/null || echo "No .mp4 files found"
