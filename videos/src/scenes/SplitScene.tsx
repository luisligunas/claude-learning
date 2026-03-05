import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { theme } from "../theme";
import Background from "./Background";

interface SplitSceneProps {
  leftContent: string;
  rightContent: string;
  headline?: string;
  themeColor: string;
}

const SplitScene: React.FC<SplitSceneProps> = ({
  leftContent,
  rightContent,
  headline,
  themeColor,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Headline animation
  const headlineSpring = spring({
    frame: frame - 3,
    fps,
    config: { damping: 14, stiffness: 120, mass: 0.7 },
  });
  const headlineOpacity = interpolate(headlineSpring, [0, 1], [0, 1]);
  const headlineY = interpolate(headlineSpring, [0, 1], [-30, 0]);

  // Left panel slides in from left
  const leftSpring = spring({
    frame: frame - 12,
    fps,
    config: { damping: 15, stiffness: 100, mass: 0.8 },
  });
  const leftOpacity = interpolate(leftSpring, [0, 1], [0, 1]);
  const leftX = interpolate(leftSpring, [0, 1], [-80, 0]);

  // Right panel slides in from right
  const rightSpring = spring({
    frame: frame - 18,
    fps,
    config: { damping: 15, stiffness: 100, mass: 0.8 },
  });
  const rightOpacity = interpolate(rightSpring, [0, 1], [0, 1]);
  const rightX = interpolate(rightSpring, [0, 1], [80, 0]);

  // Divider line
  const dividerHeight = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const panelHeight = 500;
  const panelTop = headline ? 260 : 180;

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
          padding: "80px 100px",
          zIndex: 10,
        }}
      >
        {/* Headline */}
        {headline && (
          <div
            style={{
              opacity: headlineOpacity,
              transform: `translateY(${headlineY}px)`,
              fontFamily: theme.fonts.main,
              fontSize: 48,
              fontWeight: 700,
              color: theme.colors.textPrimary,
              textAlign: "center",
              marginBottom: 60,
            }}
          >
            {headline}
          </div>
        )}

        {/* Columns container */}
        <div
          style={{
            display: "flex",
            gap: 0,
            position: "relative",
            height: panelHeight,
          }}
        >
          {/* Left panel - "Before" */}
          <div
            style={{
              flex: 1,
              opacity: leftOpacity,
              transform: `translateX(${leftX}px)`,
              display: "flex",
              flexDirection: "column",
              paddingRight: 50,
            }}
          >
            {/* Label */}
            <div
              style={{
                fontFamily: theme.fonts.main,
                fontSize: 22,
                fontWeight: 700,
                color: theme.colors.red,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {/* X icon */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: `${theme.colors.red}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={theme.colors.red}
                  strokeWidth={3}
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              Before
            </div>

            {/* Content card */}
            <div
              style={{
                flex: 1,
                backgroundColor: theme.colors.bgCard,
                borderRadius: 16,
                padding: "32px 36px",
                border: `2px solid ${theme.colors.red}25`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                fontFamily: theme.fonts.main,
                fontSize: 24,
                lineHeight: 1.6,
                color: theme.colors.textPrimary,
                whiteSpace: "pre-wrap",
              }}
            >
              {leftContent}
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "5%",
              transform: `translateX(-50%) scaleY(${dividerHeight})`,
              transformOrigin: "top",
              width: 3,
              height: "90%",
              backgroundColor: `${theme.colors.textMuted}40`,
              borderRadius: 2,
            }}
          />

          {/* Right panel - "After" */}
          <div
            style={{
              flex: 1,
              opacity: rightOpacity,
              transform: `translateX(${rightX}px)`,
              display: "flex",
              flexDirection: "column",
              paddingLeft: 50,
            }}
          >
            {/* Label */}
            <div
              style={{
                fontFamily: theme.fonts.main,
                fontSize: 22,
                fontWeight: 700,
                color: theme.colors.green,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {/* Check icon */}
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  backgroundColor: `${theme.colors.green}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={theme.colors.green}
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              After
            </div>

            {/* Content card */}
            <div
              style={{
                flex: 1,
                backgroundColor: theme.colors.bgCard,
                borderRadius: 16,
                padding: "32px 36px",
                border: `2px solid ${theme.colors.green}25`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                fontFamily: theme.fonts.main,
                fontSize: 24,
                lineHeight: 1.6,
                color: theme.colors.textPrimary,
                whiteSpace: "pre-wrap",
              }}
            >
              {rightContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitScene;
