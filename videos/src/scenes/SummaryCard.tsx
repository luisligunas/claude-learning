import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { theme } from "../theme";
import Background from "./Background";

interface SummaryCardProps {
  bulletPoints: string[];
  title: string;
  themeColor: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  bulletPoints,
  title,
  themeColor,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height, durationInFrames } = useVideoConfig();

  // Title animation
  const titleSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, stiffness: 120, mass: 0.7 },
  });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [-30, 0]);

  // Spread bullets across ~60% of scene duration so they don't all appear at once
  const bulletSpacing = Math.floor((durationInFrames * 0.6) / bulletPoints.length);
  const firstBulletDelay = 30; // ~1 second after title

  // CTA animation (appears after last bullet + gap)
  const lastBulletFrame = firstBulletDelay + (bulletPoints.length - 1) * bulletSpacing + 30;
  const ctaSpring = spring({
    frame: frame - lastBulletFrame,
    fps,
    config: { damping: 14, stiffness: 100, mass: 0.8 },
  });
  const ctaOpacity = interpolate(ctaSpring, [0, 1], [0, 1]);
  const ctaY = interpolate(ctaSpring, [0, 1], [20, 0]);

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
          padding: "80px 200px",
        }}
      >
        {/* Title */}
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            fontFamily: theme.fonts.main,
            fontSize: 52,
            fontWeight: 800,
            color: theme.colors.textPrimary,
            marginBottom: 50,
            textAlign: "center",
          }}
        >
          {title || "Key Takeaways"}
        </div>

        {/* Bullet points */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "100%",
            maxWidth: 1100,
          }}
        >
          {bulletPoints.map((point, i) => {
            const bulletDelay = firstBulletDelay + i * bulletSpacing;
            const bulletSpringVal = spring({
              frame: frame - bulletDelay,
              fps,
              config: { damping: 14, stiffness: 110, mass: 0.7 },
            });
            const bulletOpacity = interpolate(bulletSpringVal, [0, 1], [0, 1]);
            const bulletX = interpolate(bulletSpringVal, [0, 1], [-40, 0]);

            return (
              <div
                key={i}
                style={{
                  opacity: bulletOpacity,
                  transform: `translateX(${bulletX}px)`,
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 20,
                  backgroundColor: theme.colors.bgCard,
                  borderRadius: 16,
                  padding: "22px 30px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  border: `1px solid ${themeColor}15`,
                }}
              >
                {/* Checkmark icon */}
                <div
                  style={{
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: `${themeColor}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={themeColor}
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                {/* Bullet text */}
                <div
                  style={{
                    fontFamily: theme.fonts.main,
                    fontSize: 26,
                    fontWeight: 500,
                    color: theme.colors.textPrimary,
                    lineHeight: 1.4,
                    flex: 1,
                  }}
                >
                  {point}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div
          style={{
            opacity: ctaOpacity,
            transform: `translateY(${ctaY}px)`,
            marginTop: 50,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              fontFamily: theme.fonts.main,
              fontSize: 28,
              fontWeight: 600,
              color: themeColor,
              letterSpacing: "0.01em",
            }}
          >
            Start learning at claude.ai
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={themeColor}
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
