export interface Scene {
  id: string;
  type: "title" | "narration" | "code-demo" | "split" | "summary";
  durationInFrames: number;
  narrationText: string;
  headline?: string;
  body?: string;
  visualType?: "chat-bubbles" | "terminal" | "diagram" | "icon" | "before-after";
  codeSnippet?: string;
  bulletPoints?: string[];
  leftContent?: string;
  rightContent?: string;
}

export interface VideoScript {
  id: string;
  title: string;
  subtitle: string;
  themeColor: string;
  totalDurationInFrames: number;
  scenes: Scene[];
}
