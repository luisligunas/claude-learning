import React from "react";
import VideoComposition from "./VideoComposition";
import script from "../narratives/mcp-intro";

const McpIntro: React.FC = () => {
  return <VideoComposition script={script} />;
};

export default McpIntro;
