import React from "react";
import VideoComposition from "./VideoComposition";
import script from "../narratives/prompt-basics";

const PromptBasics: React.FC = () => {
  return <VideoComposition script={script} />;
};

export default PromptBasics;
