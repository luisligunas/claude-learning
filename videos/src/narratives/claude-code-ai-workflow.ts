import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 450 + 240 = 3000

const script: VideoScript = {
  id: 'claude-code-ai-workflow',
  title: 'Claude Code: The High-Productivity Workflow',
  subtitle: 'Why developers are making the switch',
  themeColor: '#06b6d4',
  totalDurationInFrames: 5439,
  scenes: [
    {
      id: 'cc-workflow-title',
      type: 'title',
      durationInFrames: 195,
      narrationText:
        'In ninety seconds, you will see why developers who try Claude Code stop reaching for Copilot and Cursor within a week.',
      headline: 'Claude Code: The High-Productivity Workflow',
      body: 'Why developers are making the switch',
    },
    {
      id: 'cc-workflow-why',
      type: 'narration',
      durationInFrames: 1004,
      narrationText:
        "Let me paint a picture you probably recognize. You are in VS Code with Copilot or Cursor open. You get a suggestion, you tab to accept, you tweak it, you tab again. It feels productive. But then you zoom out and realize something uncomfortable. You are still doing all the thinking, all the planning, all the architecture. The AI is just a fast typist that occasionally guesses your next line. It is autocomplete on steroids, and autocomplete has a ceiling. You cannot autocomplete your way through a complex refactor. You cannot tab-complete a migration strategy. These tools live inside your editor and they think one line at a time. What if your AI could think at the project level instead?",
      headline: 'The Autocomplete Ceiling',
      visualType: 'icon',
    },
    {
      id: 'cc-workflow-aha',
      type: 'split',
      durationInFrames: 1074,
      narrationText:
        "Here is the fundamental difference. Editor-based AI tools work inside your files. They see the file you have open, maybe a few related imports, and they predict your next keystroke. Claude Code works across your entire project. It reads your directory structure, your config files, your tests, your git history. When you say refactor the authentication flow, Copilot does not even know what that means. Claude Code finds every file involved, understands how they connect, builds a plan, and executes the changes across all of them. It is the difference between an AI that finishes your sentences and an AI that understands your codebase. One is a typing assistant. The other is a thinking partner that happens to also write code.",
      headline: 'Editor AI vs. Project AI',
      leftContent:
        'Editor AI (Copilot/Cursor):\n- Sees current file only\n- Predicts next line\n- You drive every decision\n- Works inside your editor',
      rightContent:
        'Claude Code:\n- Reads entire codebase\n- Plans multi-file changes\n- Understands architecture\n- Works from your terminal',
      visualType: 'before-after',
    },
    {
      id: 'cc-workflow-demo',
      type: 'code-demo',
      durationInFrames: 1226,
      narrationText:
        "Let me show you what a high-productivity Claude Code workflow actually looks like. You open your terminal and start Claude. First, you set up your CLAUDE.md file. This is your project memory. It tells Claude about your stack, your conventions, your testing patterns. You write it once. From then on, every session starts with Claude already understanding your project. Then you work in natural language. You say things like: add rate limiting to the API endpoints using our Redis instance, match the pattern in the auth middleware. Claude reads your existing middleware, finds the Redis config, and implements rate limiting that looks like your code, not generic Stack Overflow code. And here is the workflow secret: you keep Claude running in one terminal while you code in another. You go back and forth. Think of it as a persistent pair programming session.",
      headline: 'The Power Workflow',
      codeSnippet:
        '# 1. Set up project memory\n$ cat CLAUDE.md\n  Stack: Next.js 14, TypeScript, Prisma\n  Tests: Vitest with MSW for mocking\n  Style: Functional, no classes\n  Deploy: Vercel with preview branches\n\n# 2. Start your session\n$ claude\n\n> Add rate limiting to all API routes\n  using our Redis instance. Match the\n  pattern in src/middleware/auth.ts\n\nClaude: Found your Redis config and\n  auth middleware pattern. I will:\n  1. Create src/middleware/rateLimit.ts\n  2. Apply to all /api routes\n  3. Add tests matching your Vitest setup\n  \n  Making changes across 4 files...',
      visualType: 'terminal',
    },
    {
      id: 'cc-workflow-pattern',
      type: 'narration',
      durationInFrames: 1250,
      narrationText:
        "Here is the workflow pattern that the most productive Claude Code developers use. They call it the architect loop. Step one: think about what you want to build at a high level. Not code, just intent. Step two: describe it to Claude in plain English with enough context. Step three: review what Claude produces. Do not just accept blindly. Read the diff, understand the approach. Step four: iterate. Say, this is good, but use a different pattern for the error handling, or, split this into two smaller functions. And step five: commit and move to the next task. The key insight is that your job shifts. You stop being the person who writes code and start being the person who reviews and directs code. You become the architect. Your throughput goes up dramatically because you are thinking at a higher level while Claude handles the implementation details.",
      headline: 'The Architect Loop',
      visualType: 'diagram',
    },
    {
      id: 'cc-workflow-summary',
      type: 'summary',
      durationInFrames: 450,
      narrationText:
        'Claude Code moves you from line-level autocomplete to project-level thinking. Set up your CLAUDE.md, use the architect loop, and let Claude handle implementation while you focus on design decisions. Your role shifts from typist to architect, and your output multiplies.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Editor AI predicts lines; Claude Code understands your whole project',
        'CLAUDE.md gives Claude persistent memory of your stack and conventions',
        'The architect loop: think, describe, review, iterate, commit',
        'Your job shifts from writing code to directing code',
      ],
    },
    {
      id: 'cc-workflow-cta',
      type: 'title',
      durationInFrames: 240,
      narrationText:
        'Create a CLAUDE.md in your project today and try the architect loop on your next feature. You will not go back to tab-completing your way through code.',
      headline: 'Try It Now',
      body: 'Create a CLAUDE.md and start the architect loop',
    },
  ],
};

export default script;
