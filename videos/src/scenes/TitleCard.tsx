import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { theme } from "../theme";
import Background from "./Background";

interface TitleCardProps {
  title: string;
  subtitle: string;
  themeColor: string;
  hook?: string;
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  subtitle,
  themeColor,
  hook,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height, durationInFrames } = useVideoConfig();

  // Only show hook if it's short enough (title-card opening hooks)
  const showHook = hook && hook.length < 80;

  // Hook text animation
  const hookOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const hookY = interpolate(frame, [0, 15], [-20, 0], {
    extrapolateRight: "clamp",
  });

  // Title spring animation
  const titleSpring = spring({
    frame: frame - (showHook ? 12 : 5),
    fps,
    config: { damping: 14, stiffness: 120, mass: 0.8 },
  });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [50, 0]);

  // Subtitle animation (delayed)
  const subtitleSpring = spring({
    frame: frame - (showHook ? 24 : 15),
    fps,
    config: { damping: 14, stiffness: 100, mass: 0.8 },
  });
  const subtitleOpacity = interpolate(subtitleSpring, [0, 1], [0, 1]);
  const subtitleY = interpolate(subtitleSpring, [0, 1], [30, 0]);

  // Decorative accent line
  const lineStart = showHook ? 18 : 10;
  const lineWidth = interpolate(frame, [lineStart, lineStart + 25], [0, 200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Gentle floating motion to keep scene alive during long holds
  const floatY = Math.sin(frame * 0.03) * 4;

  // Fade out near end of scene
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 10, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div style={{ position: "relative", width, height }}>
      <Background themeColor={themeColor} />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          opacity: fadeOut,
          transform: `translateY(${floatY}px)`,
        }}
      >
        {/* Hook text — only for short hooks */}
        {showHook && (
          <div
            style={{
              opacity: hookOpacity,
              transform: `translateY(${hookY}px)`,
              fontFamily: theme.fonts.main,
              fontSize: 24,
              fontWeight: 500,
              color: themeColor,
              marginBottom: 40,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              textAlign: "center",
              maxWidth: 900,
              padding: "0 80px",
            }}
          >
            {hook}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            fontFamily: theme.fonts.main,
            fontSize: 80,
            fontWeight: 800,
            color: theme.colors.textPrimary,
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: 1400,
            padding: "0 80px",
          }}
        >
          {title}
        </div>

        {/* Accent line */}
        <div
          style={{
            width: lineWidth,
            height: 4,
            backgroundColor: themeColor,
            borderRadius: 2,
            marginTop: 32,
            marginBottom: 32,
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
            fontFamily: theme.fonts.main,
            fontSize: 36,
            fontWeight: 400,
            color: theme.colors.textSecondary,
            textAlign: "center",
            maxWidth: 1000,
            lineHeight: 1.4,
            padding: "0 80px",
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
