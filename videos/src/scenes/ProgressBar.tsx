import React from "react";
import { useVideoConfig } from "remotion";
import { theme } from "../theme";

interface ProgressBarProps {
  progress: number;
  themeColor: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, themeColor }) => {
  const { width } = useVideoConfig();

  const clampedProgress = Math.max(0, Math.min(1, progress));

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width,
        height: 4,
        backgroundColor: `${theme.colors.textMuted}33`,
        zIndex: 100,
      }}
    >
      <div
        style={{
          height: "100%",
          width: clampedProgress * width,
          backgroundColor: themeColor,
          borderRadius: "0 2px 2px 0",
          boxShadow: `0 0 8px ${themeColor}80`,
        }}
      />
    </div>
  );
};

export default ProgressBar;
