import React from "react";
import { Composition } from "remotion";
import { theme } from "./theme";
import VideoComposition from "./compositions/VideoComposition";

import introClaudeScript from "./narratives/intro-claude";
import claudeCodeBeginnerScript from "./narratives/claude-code-beginner";
import promptBasicsScript from "./narratives/prompt-basics";
import skillsOverviewScript from "./narratives/skills-overview";
import mcpIntroScript from "./narratives/mcp-intro";
import artifactsIntroScript from "./narratives/artifacts-intro";
import projectsIntroScript from "./narratives/projects-intro";
import claudeCodeEngineeringScript from "./narratives/claude-code-engineering";
import claudeCodeContextScript from "./narratives/claude-code-context";
import claudeCodeAiWorkflowScript from "./narratives/claude-code-ai-workflow";
import extendedThinkingScript from "./narratives/extended-thinking";
import promptDesignToCodeScript from "./narratives/prompt-design-to-code";
import skillsCreateScript from "./narratives/skills-create";
import skillsAdvancedScript from "./narratives/skills-advanced";
import subagentsOverviewScript from "./narratives/subagents-overview";
import subagentsCreateScript from "./narratives/subagents-create";
import subagentsAdvancedScript from "./narratives/subagents-advanced";
import skillsSubagentsTogetherScript from "./narratives/skills-subagents-together";
import hooksGuideScript from "./narratives/hooks-guide";
import pluginsSystemScript from "./narratives/plugins-system";
import claudeMdMasteryScript from "./narratives/claude-md-mastery";

const allScripts = [
  introClaudeScript,
  claudeCodeBeginnerScript,
  promptBasicsScript,
  skillsOverviewScript,
  mcpIntroScript,
  artifactsIntroScript,
  projectsIntroScript,
  claudeCodeEngineeringScript,
  claudeCodeContextScript,
  claudeCodeAiWorkflowScript,
  extendedThinkingScript,
  promptDesignToCodeScript,
  skillsCreateScript,
  skillsAdvancedScript,
  subagentsOverviewScript,
  subagentsCreateScript,
  subagentsAdvancedScript,
  skillsSubagentsTogetherScript,
  hooksGuideScript,
  pluginsSystemScript,
  claudeMdMasteryScript,
];

export const Root: React.FC = () => {
  return (
    <>
      {allScripts.map((script) => (
        <Composition
          key={script.id}
          id={script.id}
          component={VideoComposition}
          defaultProps={{ script }}
          durationInFrames={script.totalDurationInFrames}
          fps={theme.fps}
          width={theme.width}
          height={theme.height}
        />
      ))}
    </>
  );
};
