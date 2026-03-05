import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { theme } from "../theme";
import Background from "./Background";

interface NarrationSceneProps {
  headline?: string;
  body?: string;
  narrationText?: string;
  visualType?: "chat-bubbles" | "terminal" | "diagram" | "icon" | "before-after";
  themeColor: string;
}

/* ------------------------------------------------------------------ */
/*  Visual sub-components                                              */
/* ------------------------------------------------------------------ */

const ChatBubbles: React.FC<{ frame: number; fps: number; themeColor: string }> = ({
  frame,
  fps,
  themeColor,
}) => {
  const bubbles = [
    { text: "How does this work?", align: "left" as const, delay: 5 },
    { text: "Let me explain...", align: "right" as const, delay: 20 },
    { text: "That makes sense!", align: "left" as const, delay: 35 },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        width: "100%",
        padding: "20px 0",
      }}
    >
      {bubbles.map((bubble, i) => {
        const s = spring({
          frame: frame - bubble.delay,
          fps,
          config: { damping: 14, stiffness: 120, mass: 0.6 },
        });
        const opacity = interpolate(s, [0, 1], [0, 1]);
        const translateX = interpolate(
          s,
          [0, 1],
          [bubble.align === "left" ? -40 : 40, 0]
        );

        return (
          <div
            key={i}
            style={{
              opacity,
              transform: `translateX(${translateX}px)`,
              alignSelf: bubble.align === "left" ? "flex-start" : "flex-end",
              backgroundColor:
                bubble.align === "right" ? themeColor : theme.colors.bgCard,
              color:
                bubble.align === "right"
                  ? theme.colors.white
                  : theme.colors.textPrimary,
              padding: "14px 22px",
              borderRadius: 20,
              fontFamily: theme.fonts.main,
              fontSize: 20,
              fontWeight: 500,
              maxWidth: "80%",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {bubble.text}
          </div>
        );
      })}
    </div>
  );
};

const TerminalVisual: React.FC<{ frame: number; themeColor: string }> = ({
  frame,
  themeColor,
}) => {
  const lines = ["$ claude", "> Analyzing your code...", "> Done."];
  const charsPerFrame = 0.8;

  return (
    <div
      style={{
        backgroundColor: theme.colors.bgDark,
        borderRadius: 12,
        overflow: "hidden",
        width: "100%",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 16px",
          backgroundColor: "#0d0d1a",
        }}
      >
        <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: theme.colors.red }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: theme.colors.accent }} />
        <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: theme.colors.green }} />
      </div>
      {/* Content */}
      <div style={{ padding: "16px 20px" }}>
        {lines.map((line, i) => {
          const lineStart = i * 30;
          const totalChars = Math.max(0, Math.floor((frame - lineStart) * charsPerFrame));
          const displayText = line.substring(0, totalChars);

          return (
            <div
              key={i}
              style={{
                fontFamily: theme.fonts.mono,
                fontSize: 18,
                color: i === 0 ? theme.colors.green : theme.colors.white,
                marginBottom: 8,
                minHeight: 24,
                whiteSpace: "pre",
              }}
            >
              {displayText}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DiagramVisual: React.FC<{ frame: number; fps: number; themeColor: string }> = ({
  frame,
  fps,
  themeColor,
}) => {
  const nodes = [
    { label: "Input", x: 100, y: 40, delay: 5 },
    { label: "Process", x: 100, y: 140, delay: 15 },
    { label: "Output", x: 100, y: 240, delay: 25 },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: 320 }}>
      {/* Connection lines */}
      {nodes.slice(1).map((node, i) => {
        const prevNode = nodes[i];
        const lineOpacity = interpolate(frame, [node.delay, node.delay + 10], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        return (
          <div
            key={`line-${i}`}
            style={{
              position: "absolute",
              left: prevNode.x + 60,
              top: prevNode.y + 50,
              width: 3,
              height: node.y - prevNode.y - 10,
              backgroundColor: themeColor,
              opacity: lineOpacity,
              borderRadius: 2,
            }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node, i) => {
        const s = spring({
          frame: frame - node.delay,
          fps,
          config: { damping: 14, stiffness: 120, mass: 0.6 },
        });
        const opacity = interpolate(s, [0, 1], [0, 1]);
        const scale = interpolate(s, [0, 1], [0.7, 1]);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: node.x - 20,
              top: node.y,
              opacity,
              transform: `scale(${scale})`,
              backgroundColor: theme.colors.bgCard,
              border: `2px solid ${themeColor}`,
              borderRadius: 12,
              padding: "12px 32px",
              fontFamily: theme.fonts.main,
              fontSize: 18,
              fontWeight: 600,
              color: theme.colors.textPrimary,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {node.label}
          </div>
        );
      })}
    </div>
  );
};

const IconVisual: React.FC<{ frame: number; fps: number; themeColor: string }> = ({
  frame,
  fps,
  themeColor,
}) => {
  const s = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 80, mass: 1 },
  });
  const scale = interpolate(s, [0, 1], [0.5, 1]);
  const rotation = interpolate(s, [0, 1], [-15, 0]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 280,
      }}
    >
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: `linear-gradient(135deg, ${themeColor}, ${themeColor}99)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${scale}) rotate(${rotation}deg)`,
          boxShadow: `0 12px 40px ${themeColor}40`,
        }}
      >
        {/* Lightning bolt icon */}
        <svg
          width="90"
          height="90"
          viewBox="0 0 24 24"
          fill="none"
          stroke={theme.colors.white}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>
    </div>
  );
};

const AbstractVisual: React.FC<{ frame: number; themeColor: string }> = ({
  frame,
  themeColor,
}) => {
  const shapes = [
    { size: 100, x: 60, y: 60, delay: 0 },
    { size: 70, x: 180, y: 30, delay: 5 },
    { size: 120, x: 120, y: 180, delay: 10 },
  ];

  return (
    <div style={{ position: "relative", width: "100%", height: 320 }}>
      {shapes.map((shape, i) => {
        const opacity = interpolate(frame, [shape.delay, shape.delay + 15], [0, 0.15], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });
        const drift = Math.sin(frame * 0.02 + i) * 10;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: shape.x,
              top: shape.y + drift,
              width: shape.size,
              height: shape.size,
              borderRadius: i % 2 === 0 ? "50%" : "30%",
              backgroundColor: themeColor,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main component                                                      */
/* ------------------------------------------------------------------ */

const NarrationScene: React.FC<NarrationSceneProps> = ({
  headline,
  body,
  narrationText,
  visualType,
  themeColor,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Left-side text animations
  const textSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, stiffness: 100, mass: 0.8 },
  });
  const textOpacity = interpolate(textSpring, [0, 1], [0, 1]);
  const textX = interpolate(textSpring, [0, 1], [-60, 0]);

  // Right-side visual animation
  const visualOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const visualX = interpolate(frame, [10, 30], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const renderVisual = () => {
    switch (visualType) {
      case "chat-bubbles":
        return <ChatBubbles frame={frame} fps={fps} themeColor={themeColor} />;
      case "terminal":
        return <TerminalVisual frame={frame} themeColor={themeColor} />;
      case "diagram":
        return <DiagramVisual frame={frame} fps={fps} themeColor={themeColor} />;
      case "icon":
        return <IconVisual frame={frame} fps={fps} themeColor={themeColor} />;
      default:
        return <AbstractVisual frame={frame} themeColor={themeColor} />;
    }
  };

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
          alignItems: "center",
          padding: "80px 100px",
          zIndex: 10,
        }}
      >
        {/* Left side: text content (60%) */}
        <div
          style={{
            flex: "0 0 58%",
            opacity: textOpacity,
            transform: `translateX(${textX}px)`,
            paddingRight: 60,
          }}
        >
          {headline && (
            <div
              style={{
                fontFamily: theme.fonts.main,
                fontSize: 52,
                fontWeight: 700,
                color: theme.colors.textPrimary,
                lineHeight: 1.15,
                marginBottom: 28,
              }}
            >
              {headline}
            </div>
          )}

          {body && (
            <div
              style={{
                fontFamily: theme.fonts.main,
                fontSize: 28,
                fontWeight: 400,
                color: theme.colors.textSecondary,
                lineHeight: 1.6,
              }}
            >
              {body}
            </div>
          )}
        </div>

        {/* Right side: visual (40%) */}
        <div
          style={{
            flex: "0 0 42%",
            opacity: visualOpacity,
            transform: `translateX(${visualX}px)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderVisual()}
        </div>
      </div>
    </div>
  );
};

export default NarrationScene;
