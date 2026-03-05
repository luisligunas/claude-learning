import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 450 + 240 = 3000

const script: VideoScript = {
  id: 'hooks-guide',
  title: 'Hooks: Event-Driven Automation',
  subtitle: 'Guardrails that run themselves',
  themeColor: '#f59e0b',
  totalDurationInFrames: 5448,
  scenes: [
    {
      id: 'hooks-title',
      type: 'title',
      durationInFrames: 214,
      narrationText:
        'In ninety seconds, you will learn how to set up invisible guardrails that automatically catch mistakes before they ever reach your codebase.',
      headline: 'Hooks: Event-Driven Automation',
      body: 'Guardrails that run themselves',
    },
    {
      id: 'hooks-why',
      type: 'narration',
      durationInFrames: 969,
      narrationText:
        "Here is something that will sound familiar. Claude writes code for you, and it is good. But every now and then, it does something you do not want. Maybe it adds a console dot log you will forget to remove. Maybe it uses an old API pattern your team deprecated last month. Maybe it writes a function without error handling. You catch it in review, you fix it, and you move on. But here is the problem: you are the guardrail. And humans are terrible guardrails. We get tired. We get distracted. We miss things on Friday afternoons. What if the guardrails could run themselves? What if Claude could check its own work against your rules, automatically, every single time?",
      headline: 'Humans Are Terrible Guardrails',
      visualType: 'icon',
    },
    {
      id: 'hooks-aha',
      type: 'narration',
      durationInFrames: 1164,
      narrationText:
        "That is exactly what Hooks do. Hooks are event-driven automations that trigger at specific moments in Claude's workflow. Think of them like git hooks, but for Claude itself. When Claude is about to write a file, your Hook can intercept it and run checks. When Claude finishes editing code, your Hook can verify it meets your standards. When a conversation starts, your Hook can load the right context. There are three key pieces to every Hook. First, the event: what triggers it. Things like file write, command run, or conversation start. Second, the matcher: which files or patterns does this Hook care about. And third, the action: what happens when the Hook fires. It could run a linter, check for banned patterns, enforce naming conventions, or anything else you can express as a command.",
      headline: 'Git Hooks, But for Claude',
      visualType: 'diagram',
    },
    {
      id: 'hooks-demo',
      type: 'code-demo',
      durationInFrames: 1132,
      narrationText:
        "Let me show you what this looks like in practice. Here is a hooks configuration in your settings file. The first hook fires before any file edit and runs your linter. If the linter fails, Claude knows immediately and fixes the issue before moving on. The second hook is a quality guardrail: after Claude edits any TypeScript file, it checks for console dot log statements and bare catch blocks. If it finds them, it flags the issue right there in the conversation. The third hook fires when a new conversation starts and automatically loads your project conventions from a context file. Notice how specific these are. You are not telling Claude to be careful. You are giving it concrete, automated checks that fire without you lifting a finger. That is the difference between hoping for quality and engineering it.",
      headline: 'Hooks in Practice',
      codeSnippet:
        '// .claude/settings.json\n{\n  "hooks": {\n    "preFileEdit": [\n      {\n        "matcher": "**/*.{ts,tsx}",\n        "command": "npx eslint --fix $FILE"\n      }\n    ],\n    "postFileEdit": [\n      {\n        "matcher": "**/*.ts",\n        "command": "scripts/check-quality.sh",\n        "rules": [\n          "No console.log in production",\n          "No bare catch blocks",\n          "All async functions need\n           error boundaries"\n        ]\n      }\n    ],\n    "onConversationStart": [\n      {\n        "command": "cat .claude/context.md"\n      }\n    ]\n  }\n}',
      visualType: 'terminal',
    },
    {
      id: 'hooks-patterns',
      type: 'split',
      durationInFrames: 1279,
      narrationText:
        "Here is how experts build their hook systems. They think in layers. Layer one is formatting: auto-fix style issues on every file write so you never argue about tabs versus spaces again. Layer two is correctness: run type checks, catch banned patterns, verify imports are valid. Layer three is standards: enforce team conventions like requiring doc comments on public APIs or ensuring error messages include context. And layer four is intelligence: trigger notifications, update documentation, or log metrics. The key insight is that each layer catches a different class of mistake. Formatting hooks catch trivial issues. Correctness hooks catch bugs. Standards hooks catch design problems. And intelligence hooks keep the team in sync. Without hooks, you are relying on memory and discipline. With hooks, you are relying on automation and code.",
      headline: 'The Four Layers of Hooks',
      leftContent:
        'Layer 1: Formatting\nAuto-fix style on every write\n\nLayer 2: Correctness\nType checks, banned patterns\n\nLayer 3: Standards\nDoc comments, error context\n\nLayer 4: Intelligence\nNotifications, metrics, docs',
      rightContent:
        'Without Hooks:\nRelying on memory\nRelying on discipline\nRelying on review\nRelying on luck\n\nWith Hooks:\nAutomated formatting\nAutomated correctness\nAutomated standards\nAutomated sync',
      visualType: 'before-after',
    },
    {
      id: 'hooks-summary',
      type: 'summary',
      durationInFrames: 450,
      narrationText:
        'Hooks turn your coding standards from documentation nobody reads into automated guardrails that run every time. Set them up once, and they catch issues forever. Stop being the guardrail. Build the guardrail.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Hooks are event-driven automations that trigger during Claude workflows',
        'Every Hook has three parts: event, matcher, and action',
        'Build in layers: formatting, correctness, standards, intelligence',
        'Automated guardrails beat human discipline every single time',
      ],
    },
    {
      id: 'hooks-cta',
      type: 'title',
      durationInFrames: 240,
      narrationText:
        'Add one hook today. Start with a linter that runs on every file edit. Once you see it catch the first issue automatically, you will want to add ten more.',
      headline: 'Try It Now',
      body: 'Add your first hook: auto-lint on every file edit',
    },
  ],
};

export default script;
