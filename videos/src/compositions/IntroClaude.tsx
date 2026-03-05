import React from "react";
import VideoComposition from "./VideoComposition";
import script from "../narratives/intro-claude";

const IntroClaude: React.FC = () => {
  return <VideoComposition script={script} />;
};

export default IntroClaude;
