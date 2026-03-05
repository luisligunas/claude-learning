import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 480 | CTA: 210
// Total: 150 + 540 + 540 + 540 + 540 + 480 + 210 = 3000

const script: VideoScript = {
  id: 'claude-code-context',
  title: 'Mastering the Context Window',
  subtitle: 'How to keep Claude Code sharp on long tasks',
  themeColor: '#f97316',
  totalDurationInFrames: 5939,
  scenes: [
    {
      id: 'cc-ctx-title',
      type: 'title',
      durationInFrames: 209,
      narrationText:
        'In ninety seconds, you will understand why Claude sometimes forgets what you told it, and exactly how to prevent that from happening.',
      headline: 'Mastering the Context Window',
      body: 'How to keep Claude Code sharp on long tasks',
    },
    {
      id: 'cc-ctx-why',
      type: 'narration',
      durationInFrames: 1230,
      narrationText:
        "You are deep into a coding session with Claude Code. It has been going great for twenty minutes. Then you ask it to modify a file you discussed earlier and it seems confused. It suggests changes that contradict something you agreed on ten messages ago. Or it re-reads a file it already analyzed, wasting time and tokens. What just happened? You hit the context window wall. Think of the context window as Claude's working memory. It is like a desk. Everything Claude needs to think about has to fit on this desk: your conversation, the files it has read, the code it has written, all of it. When the desk fills up, things start falling off the edges. And here is the critical insight most people miss: Claude does not forget evenly. It remembers the beginning and the end of the conversation best. The middle gets fuzzy. Researchers call this the lost-in-the-middle problem.",
      headline: 'When Claude Forgets',
      visualType: 'icon',
    },
    {
      id: 'cc-ctx-middle',
      type: 'split',
      durationInFrames: 1097,
      narrationText:
        "Let me make this concrete. Imagine your conversation is a book. Claude reads the first chapter clearly. It reads the last chapter clearly. But chapters four through eight? Those get blurry. This is not a bug. It is how attention mechanisms work in large language models. The information at the start of the context gets strong attention because it sets the frame. The information at the end gets strong attention because it is recent. Everything in the middle competes for a limited attention budget. So what does this mean for you? It means that a critical instruction you gave in message twelve of a thirty-message conversation might effectively be invisible. Claude is not ignoring you. It literally cannot attend to everything equally. Understanding this changes how you structure your work sessions entirely.",
      headline: 'The Lost-in-the-Middle Problem',
      leftContent:
        'Strong recall:\nMessages 1-3 (beginning)\nMessages 28-30 (recent)\n\nClaude remembers these clearly because attention is strongest at the start and end of context.',
      rightContent:
        'Weak recall:\nMessages 10-20 (middle)\n\nCritical decisions, file analyses, and agreed-upon patterns buried here may be forgotten or misapplied.',
      visualType: 'before-after',
    },
    {
      id: 'cc-ctx-compact',
      type: 'code-demo',
      durationInFrames: 1154,
      narrationText:
        "This is where the slash compact command becomes your best friend. When you type slash compact, Claude Code compresses your entire conversation into a dense summary. It is like cleaning off your desk and replacing a hundred scattered papers with one well-organized brief. All your key decisions, the files you have discussed, the patterns you have agreed on, everything gets distilled into a fraction of the space. Suddenly Claude has a clean context with room to think again. The pros use slash compact proactively, not reactively. They do not wait until Claude starts acting confused. They compact after every major milestone. Finished planning? Compact. Implemented the feature? Compact. About to start a new subtask? Compact. Think of it as clearing the whiteboard between working sessions.",
      headline: '/compact: Your Context Reset Button',
      codeSnippet:
        '# After a long implementation session\n> /compact\n\nClaude: Compacting conversation...\n\n  Summary of session:\n  - Implemented RBAC middleware in\n    src/auth/rbac.ts\n  - Updated 4 route files with role\n    checks\n  - Added migration for roles column\n  - 12 tests written, all passing\n  - Agreed pattern: use requireRole()\n    middleware, not inline checks\n\n  Context reduced from 94% to 23%\n  Ready for next task.\n\n> Now add role management to the\n  admin dashboard',
      visualType: 'terminal',
    },
    {
      id: 'cc-ctx-strategies',
      type: 'narration',
      durationInFrames: 1467,
      narrationText:
        "Here is the complete context management playbook. First, keep sessions focused. One task per conversation when possible. Do not try to refactor your entire codebase in a single session. Second, use CLAUDE dot md to move standing knowledge out of the conversation. Your architecture decisions, coding conventions, and project structure should live in CLAUDE dot md, not in your chat history. That way they are always at the start of the context, right where Claude pays the most attention. Third, compact after milestones, not after failures. Fourth, when you notice Claude getting confused, do not repeat yourself three times. Instead, compact and restate your key requirement once, cleanly. And fifth, for truly large tasks, break them into sub-tasks across separate sessions. Each session gets a fresh context, a clear objective, and full attention from Claude. The developers who manage context well do not fight the model. They work with how it thinks.",
      headline: 'The Context Management Playbook',
      visualType: 'diagram',
    },
    {
      id: 'cc-ctx-summary',
      type: 'summary',
      durationInFrames: 480,
      narrationText:
        'The context window is Claude is working memory. It fades in the middle. Use slash compact proactively to reset, put standing knowledge in CLAUDE dot md, and keep sessions focused on one task. Work with how Claude thinks, not against it.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'The context window is a fixed-size desk — when it fills up, things fall off',
        'Lost-in-the-middle: Claude recalls beginnings and ends best',
        '/compact compresses your session — use it after every milestone',
        'Put project conventions in CLAUDE.md so they always get top attention',
      ],
    },
    {
      id: 'cc-ctx-cta',
      type: 'title',
      durationInFrames: 302,
      narrationText:
        'Next time you start a long Claude Code session, try this: compact after your first big task is done, then check how much sharper the next response is. You will feel the difference immediately.',
      headline: 'Try It Now',
      body: 'Use /compact after your next milestone',
    },
  ],
};

export default script;
