import React from "react";
import { useVideoConfig } from "remotion";

interface BackgroundProps {
  themeColor: string;
}

const Background: React.FC<BackgroundProps> = ({ themeColor }) => {
  const { width, height } = useVideoConfig();

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        background: "#1a1a2e",
      }}
    />
  );
};

export default Background;
