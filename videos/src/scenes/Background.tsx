import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { theme } from "../theme";

interface BackgroundProps {
  themeColor: string;
}

const Background: React.FC<BackgroundProps> = ({ themeColor }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const circles = [
    { size: 400, startX: 200, startY: 150, speedX: 0.3, speedY: 0.2, opacity: 0.08 },
    { size: 300, startX: 1400, startY: 700, speedX: -0.25, speedY: 0.15, opacity: 0.06 },
    { size: 500, startX: 800, startY: 500, speedX: 0.15, speedY: -0.2, opacity: 0.05 },
    { size: 250, startX: 1600, startY: 200, speedX: -0.2, speedY: 0.25, opacity: 0.07 },
    { size: 350, startX: 400, startY: 800, speedX: 0.2, speedY: -0.15, opacity: 0.06 },
  ];

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width,
        height,
        background: `linear-gradient(135deg, ${theme.colors.bgPage} 0%, ${themeColor}15 40%, ${theme.colors.bgPage} 70%, ${themeColor}10 100%)`,
        overflow: "hidden",
      }}
    >
      {circles.map((circle, i) => {
        const x = circle.startX + Math.sin(frame * circle.speedX * 0.02 + i) * 60;
        const y = circle.startY + Math.cos(frame * circle.speedY * 0.02 + i * 1.5) * 40;
        const scale = 1 + Math.sin(frame * 0.01 + i * 0.8) * 0.1;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x - circle.size / 2,
              top: y - circle.size / 2,
              width: circle.size,
              height: circle.size,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${themeColor}${Math.round(circle.opacity * 255).toString(16).padStart(2, "0")} 0%, transparent 70%)`,
              transform: `scale(${scale})`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Background;
