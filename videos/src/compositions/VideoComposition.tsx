import React from "react";
import {
  Sequence,
  Audio,
  useVideoConfig,
  useCurrentFrame,
  staticFile,
} from "remotion";
import { VideoScript, Scene } from "../types";
import TitleCard from "../scenes/TitleCard";
import NarrationScene from "../scenes/NarrationScene";
import CodeDemo from "../scenes/CodeDemo";
import SplitScene from "../scenes/SplitScene";
import SummaryCard from "../scenes/SummaryCard";
import SubtitleBar from "../scenes/SubtitleBar";
import ProgressBar from "../scenes/ProgressBar";

interface VideoCompositionProps {
  script: VideoScript;
}

const renderScene = (scene: Scene, themeColor: string) => {
  switch (scene.type) {
    case "title":
      return (
        <TitleCard
          title={scene.headline || ""}
          subtitle={scene.body || ""}
          themeColor={themeColor}
        />
      );
    case "narration":
      return (
        <NarrationScene
          headline={scene.headline}
          body={scene.body}
          narrationText={scene.narrationText}
          visualType={scene.visualType}
          themeColor={themeColor}
        />
      );
    case "code-demo":
      return (
        <CodeDemo
          codeSnippet={scene.codeSnippet || ""}
          headline={scene.headline}
          themeColor={themeColor}
        />
      );
    case "split":
      return (
        <SplitScene
          leftContent={scene.leftContent || ""}
          rightContent={scene.rightContent || ""}
          headline={scene.headline}
          themeColor={themeColor}
        />
      );
    case "summary":
      return (
        <SummaryCard
          bulletPoints={scene.bulletPoints || []}
          title={scene.headline || "Key Takeaways"}
          themeColor={themeColor}
        />
      );
    default:
      return null;
  }
};

const VideoComposition: React.FC<VideoCompositionProps> = ({ script }) => {
  const { durationInFrames } = useVideoConfig();
  const frame = useCurrentFrame();

  let frameOffset = 0;
  const progress = frame / durationInFrames;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* Background music — continuous across all scenes */}
      <Audio
        src={staticFile("audio/music/ambient-pad.mp3")}
        volume={0.08}
        loop
      />

      {script.scenes.map((scene, sceneIndex) => {
        const from = frameOffset;
        frameOffset += scene.durationInFrames;

        return (
          <Sequence
            key={scene.id}
            from={from}
            durationInFrames={scene.durationInFrames}
            name={scene.id}
          >
            {renderScene(scene, script.themeColor)}

            {/* Subtitle bar — shows narration text word-by-word */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <SubtitleBar
                text={scene.narrationText}
                themeColor={script.themeColor}
              />
            </div>

            {/* Per-scene TTS narration */}
            <Audio
              src={staticFile(
                `audio/narration/${script.id}/scene-${sceneIndex}.mp3`
              )}
              volume={0.9}
            />
          </Sequence>
        );
      })}

      {/* Progress bar overlays all scenes */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <ProgressBar progress={progress} themeColor={script.themeColor} />
      </div>
    </div>
  );
};

export default VideoComposition;
