#!/bin/bash
# Generate ambient background music using ffmpeg's audio synthesis
# Creates a gentle, warm ambient pad for video backgrounds
# Usage: cd videos && ./scripts/generate-music.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
OUTPUT="$PROJECT_DIR/public/audio/music/ambient-pad.mp3"

mkdir -p "$(dirname "$OUTPUT")"

if [ -f "$OUTPUT" ]; then
  echo "ambient-pad.mp3 already exists. Delete to regenerate."
  exit 0
fi

if ! command -v ffmpeg &> /dev/null; then
  echo "Error: ffmpeg not found. Install with: brew install ffmpeg"
  exit 1
fi

echo "Generating ambient pad..."

# Generate a 120-second ambient pad by layering sine waves
# Low bass drone + mid harmony + gentle high shimmer
ffmpeg -y \
  -f lavfi -i "sine=frequency=110:duration=120" \
  -f lavfi -i "sine=frequency=165:duration=120" \
  -f lavfi -i "sine=frequency=220:duration=120" \
  -f lavfi -i "sine=frequency=330:duration=120" \
  -filter_complex "
    [0:a]volume=0.15[a0];
    [1:a]volume=0.08[a1];
    [2:a]volume=0.06[a2];
    [3:a]volume=0.04[a3];
    [a0][a1][a2][a3]amix=inputs=4:duration=longest[mixed];
    [mixed]lowpass=f=800,highpass=f=60,afade=t=in:d=3,afade=t=out:st=117:d=3[out]
  " \
  -map "[out]" \
  -acodec libmp3lame -ab 128k -ar 44100 \
  "$OUTPUT" 2>/dev/null

echo "Done: $OUTPUT"
ls -lh "$OUTPUT"
