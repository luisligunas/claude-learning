import React from "react";
import { Composition } from "remotion";
import { theme } from "./theme";

import IntroClaude from "./compositions/IntroClaude";
import ClaudeCodeBeginner from "./compositions/ClaudeCodeBeginner";
import PromptBasics from "./compositions/PromptBasics";
import SkillsOverview from "./compositions/SkillsOverview";
import McpIntro from "./compositions/McpIntro";

import introClaudeScript from "./narratives/intro-claude";
import claudeCodeBeginnerScript from "./narratives/claude-code-beginner";
import promptBasicsScript from "./narratives/prompt-basics";
import skillsOverviewScript from "./narratives/skills-overview";
import mcpIntroScript from "./narratives/mcp-intro";

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="intro-claude"
        component={IntroClaude}
        durationInFrames={introClaudeScript.totalDurationInFrames}
        fps={theme.fps}
        width={theme.width}
        height={theme.height}
      />
      <Composition
        id="claude-code-beginner"
        component={ClaudeCodeBeginner}
        durationInFrames={claudeCodeBeginnerScript.totalDurationInFrames}
        fps={theme.fps}
        width={theme.width}
        height={theme.height}
      />
      <Composition
        id="prompt-basics"
        component={PromptBasics}
        durationInFrames={promptBasicsScript.totalDurationInFrames}
        fps={theme.fps}
        width={theme.width}
        height={theme.height}
      />
      <Composition
        id="skills-overview"
        component={SkillsOverview}
        durationInFrames={skillsOverviewScript.totalDurationInFrames}
        fps={theme.fps}
        width={theme.width}
        height={theme.height}
      />
      <Composition
        id="mcp-intro"
        component={McpIntro}
        durationInFrames={mcpIntroScript.totalDurationInFrames}
        fps={theme.fps}
        width={theme.width}
        height={theme.height}
      />
    </>
  );
};
