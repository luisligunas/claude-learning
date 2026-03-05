#!/usr/bin/env node
// Syncs scene durationInFrames to match actual TTS audio lengths
// Usage: node scripts/sync-durations.mjs

import { execSync } from "child_process";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectDir = join(__dirname, "..");
const audioDir = join(projectDir, "public", "audio", "narration");
const narrativesDir = join(projectDir, "src", "narratives");
const FPS = 30;
const PADDING_FRAMES = 30; // 1 second padding after audio ends

const lessons = [
  "intro-claude",
  "claude-code-beginner",
  "prompt-basics",
  "skills-overview",
  "mcp-intro",
  "artifacts-intro",
  "projects-intro",
  "claude-code-engineering",
  "claude-code-context",
  "claude-code-ai-workflow",
  "extended-thinking",
  "prompt-design-to-code",
  "skills-create",
  "skills-advanced",
  "subagents-overview",
  "subagents-create",
  "subagents-advanced",
  "skills-subagents-together",
  "hooks-guide",
  "plugins-system",
  "claude-md-mastery",
];

console.log("=== Syncing scene durations to audio lengths ===\n");

for (const lessonId of lessons) {
  const tsFile = join(narrativesDir, `${lessonId}.ts`);
  const lessonAudioDir = join(audioDir, lessonId);

  if (!existsSync(tsFile)) {
    console.log(`  Skipping ${lessonId}: no TS file`);
    continue;
  }

  let content = readFileSync(tsFile, "utf-8");

  // Find all scene blocks and their durationInFrames
  const sceneRegex = /\{[^{}]*id:\s*['"]([^'"]+)['"][^{}]*durationInFrames:\s*(\d+)[^{}]*\}/gs;
  let match;
  let sceneIndex = 0;
  const changes = [];

  // Simple approach: find each durationInFrames line and update it
  const lines = content.split("\n");
  let inScenes = false;
  let currentSceneIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("scenes:")) {
      inScenes = true;
      continue;
    }
    if (!inScenes) continue;

    if (lines[i].match(/^\s*\{/)) {
      currentSceneIndex++;
    }

    const durMatch = lines[i].match(/^(\s*durationInFrames:\s*)(\d+)(,?\s*)$/);
    if (durMatch && currentSceneIndex >= 0) {
      const audioFile = join(lessonAudioDir, `scene-${currentSceneIndex}.mp3`);
      const currentFrames = parseInt(durMatch[2]);

      if (existsSync(audioFile)) {
        try {
          const duration = parseFloat(
            execSync(
              `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${audioFile}"`,
              { encoding: "utf-8" }
            ).trim()
          );
          const neededFrames = Math.ceil(duration * FPS) + PADDING_FRAMES;

          if (neededFrames > currentFrames) {
            lines[i] = `${durMatch[1]}${neededFrames}${durMatch[3]}`;
            changes.push({
              scene: currentSceneIndex,
              from: currentFrames,
              to: neededFrames,
              audioDuration: duration.toFixed(1),
            });
          }
        } catch (e) {
          // ffprobe failed, skip
        }
      }
    }
  }

  if (changes.length > 0) {
    // Recalculate totalDurationInFrames
    let newContent = lines.join("\n");

    // Extract all scene durationInFrames from updated content
    const allDurations = [];
    let inScenesRecount = false;
    for (const line of lines) {
      if (line.includes("scenes:")) {
        inScenesRecount = true;
        continue;
      }
      if (!inScenesRecount) continue;
      const dm = line.match(/durationInFrames:\s*(\d+)/);
      if (dm) {
        allDurations.push(parseInt(dm[1]));
      }
    }

    const newTotal = allDurations.reduce((a, b) => a + b, 0);

    // Update totalDurationInFrames
    newContent = newContent.replace(
      /totalDurationInFrames:\s*\d+/,
      `totalDurationInFrames: ${newTotal}`
    );

    writeFileSync(tsFile, newContent);

    console.log(`${lessonId}:`);
    for (const c of changes) {
      console.log(
        `  Scene ${c.scene}: ${c.from} → ${c.to} frames (audio: ${c.audioDuration}s)`
      );
    }
    console.log(`  Total: ${newTotal} frames (${(newTotal / FPS).toFixed(1)}s)`);
  } else {
    console.log(`${lessonId}: no changes needed`);
  }
  console.log();
}

console.log("=== Done ===");
