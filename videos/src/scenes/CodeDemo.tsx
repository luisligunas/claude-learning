import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { theme } from "../theme";
import Background from "./Background";

interface CodeDemoProps {
  codeSnippet: string;
  headline?: string;
  themeColor: string;
}

const CodeDemo: React.FC<CodeDemoProps> = ({
  codeSnippet,
  headline,
  themeColor,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  // Terminal window entrance
  const terminalSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, stiffness: 100, mass: 0.9 },
  });
  const terminalOpacity = interpolate(terminalSpring, [0, 1], [0, 1]);
  const terminalScale = interpolate(terminalSpring, [0, 1], [0.92, 1]);

  // Headline animation
  const headlineOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateRight: "clamp",
  });
  const headlineY = interpolate(frame, [0, 12], [-20, 0], {
    extrapolateRight: "clamp",
  });

  // Typing animation: characters revealed over time
  const typingStartFrame = 15;
  const charsPerFrame = 0.6;
  const totalCharsToShow = Math.max(
    0,
    Math.floor((frame - typingStartFrame) * charsPerFrame)
  );

  // Cursor blink (toggles every ~15 frames = 0.5s at 30fps)
  const cursorVisible = Math.floor(frame / 15) % 2 === 0;

  // Split code into lines for rendering
  const codeLines = codeSnippet.split("\n");
  let charsConsumed = 0;

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
          padding: "60px 160px",
        }}
      >
        {/* Optional headline */}
        {headline && (
          <div
            style={{
              opacity: headlineOpacity,
              transform: `translateY(${headlineY}px)`,
              fontFamily: theme.fonts.main,
              fontSize: 44,
              fontWeight: 700,
              color: theme.colors.textPrimary,
              marginBottom: 40,
              textAlign: "center",
            }}
          >
            {headline}
          </div>
        )}

        {/* Terminal window */}
        <div
          style={{
            opacity: terminalOpacity,
            transform: `scale(${terminalScale})`,
            width: "100%",
            maxWidth: 1200,
            backgroundColor: theme.colors.bgDark,
            borderRadius: 16,
            overflow: "hidden",
            boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)`,
          }}
        >
          {/* Chrome bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "14px 20px",
              backgroundColor: "#12122a",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: "#ff5f57",
              }}
            />
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: "#febc2e",
              }}
            />
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: "#28c840",
              }}
            />
            <div
              style={{
                flex: 1,
                textAlign: "center",
                fontFamily: theme.fonts.mono,
                fontSize: 13,
                color: theme.colors.textMuted,
              }}
            >
              Terminal
            </div>
          </div>

          {/* Code content */}
          <div
            style={{
              padding: "24px 28px",
              minHeight: 300,
              fontFamily: theme.fonts.mono,
              fontSize: 20,
              lineHeight: 1.7,
            }}
          >
            {codeLines.map((line, lineIndex) => {
              const lineLength = line.length;
              // How many characters of THIS line should we show?
              const charsAvailableForLine = totalCharsToShow - charsConsumed;
              const charsToShowInLine = Math.min(
                lineLength,
                Math.max(0, charsAvailableForLine)
              );
              const displayText = line.substring(0, charsToShowInLine);
              const isCurrentLine =
                charsAvailableForLine >= 0 &&
                charsAvailableForLine < lineLength;

              // Advance consumed count (line chars + 1 for newline)
              charsConsumed += lineLength + 1;

              // Don't render lines we haven't reached yet
              if (charsAvailableForLine < 0 && lineIndex > 0) {
                return (
                  <div
                    key={lineIndex}
                    style={{ minHeight: 34, whiteSpace: "pre" }}
                  />
                );
              }

              // Determine line color (basic syntax highlighting)
              let lineColor = theme.colors.white;
              const trimmed = line.trimStart();
              if (
                trimmed.startsWith("//") ||
                trimmed.startsWith("#") ||
                trimmed.startsWith("--")
              ) {
                lineColor = theme.colors.textMuted;
              } else if (
                trimmed.startsWith("import") ||
                trimmed.startsWith("export") ||
                trimmed.startsWith("const") ||
                trimmed.startsWith("let") ||
                trimmed.startsWith("function") ||
                trimmed.startsWith("return") ||
                trimmed.startsWith("$")
              ) {
                lineColor = theme.colors.purple;
              } else if (trimmed.startsWith(">") || trimmed.startsWith("//")) {
                lineColor = theme.colors.green;
              }

              return (
                <div
                  key={lineIndex}
                  style={{
                    whiteSpace: "pre",
                    color: lineColor,
                    minHeight: 34,
                  }}
                >
                  {displayText}
                  {/* Cursor at typing position */}
                  {isCurrentLine && cursorVisible && (
                    <span
                      style={{
                        display: "inline-block",
                        width: 10,
                        height: 22,
                        backgroundColor: theme.colors.green,
                        marginLeft: 1,
                        verticalAlign: "middle",
                        borderRadius: 1,
                      }}
                    />
                  )}
                </div>
              );
            })}

            {/* Show cursor at end when all text is typed */}
            {totalCharsToShow >= codeSnippet.length && cursorVisible && (
              <span
                style={{
                  display: "inline-block",
                  width: 10,
                  height: 22,
                  backgroundColor: theme.colors.green,
                  borderRadius: 1,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeDemo;
