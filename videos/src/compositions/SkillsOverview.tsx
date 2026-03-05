import React from "react";
import VideoComposition from "./VideoComposition";
import script from "../narratives/skills-overview";

const SkillsOverview: React.FC = () => {
  return <VideoComposition script={script} />;
};

export default SkillsOverview;
