import React from "react";
import VideoComposition from "./VideoComposition";
import script from "../narratives/claude-code-beginner";

const ClaudeCodeBeginner: React.FC = () => {
  return <VideoComposition script={script} />;
};

export default ClaudeCodeBeginner;
