import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { theme } from "../theme";

interface SubtitleBarProps {
  text: string;
  themeColor: string;
}

const SubtitleBar: React.FC<SubtitleBarProps> = ({ text, themeColor }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  if (!text) return null;

  const words = text.split(" ");
  const totalWords = words.length;

  // Reveal words across 85% of scene duration (leave last 15% fully visible)
  const revealEnd = Math.floor(durationInFrames * 0.85);
  const wordsToShow = Math.min(
    totalWords,
    Math.floor(
      interpolate(frame, [8, revealEnd], [0, totalWords], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
      })
    )
  );

  const displayText = words.slice(0, wordsToShow).join(" ");

  // Fade in the bar
  const barOpacity = interpolate(frame, [3, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out near end
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 15, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        position: "absolute",
        bottom: 24,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        zIndex: 50,
        opacity: barOpacity * fadeOut,
        padding: "0 120px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(26, 26, 46, 0.82)",
          borderRadius: 14,
          padding: "18px 36px",
          maxWidth: 1400,
          minHeight: 60,
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            fontFamily: theme.fonts.main,
            fontSize: 24,
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.95)",
            lineHeight: 1.5,
            textAlign: "center",
          }}
        >
          {displayText}
          {wordsToShow < totalWords && (
            <span
              style={{
                display: "inline-block",
                width: 2,
                height: 20,
                backgroundColor: themeColor,
                marginLeft: 4,
                verticalAlign: "middle",
                opacity: Math.floor(frame / 12) % 2 === 0 ? 1 : 0,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SubtitleBar;
