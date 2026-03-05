import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Scene5: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 540 + 450 + 240 = 3540

const script: VideoScript = {
  id: 'subagents-overview',
  title: 'Understanding Subagents',
  subtitle: 'Delegate, isolate, and conquer',
  themeColor: '#6366f1',
  totalDurationInFrames: 5265,
  scenes: [
    {
      id: 'subagents-ovw-title',
      type: 'title',
      durationInFrames: 240,
      narrationText:
        'In the next ninety seconds, you will learn how to stop doing everything in one conversation and start delegating to specialized agents that work in parallel.',
      headline: 'Understanding Subagents',
      body: 'Delegate, isolate, and conquer',
    },
    {
      id: 'subagents-ovw-problem',
      type: 'narration',
      durationInFrames: 994,
      narrationText:
        "Here is a situation you have definitely been in. You are working with Claude on a big task, say refactoring a module, and mid-conversation you realize you need to explore a different part of the codebase to answer a question. So you ask Claude to go look at it. But now your conversation is polluted. Claude's context is full of code from that side investigation, and when you try to get back to the refactoring, things get confused. The responses are less focused. The context window is filling up. You are essentially asking one person to do two jobs at the same time while keeping both trains of thought perfectly separated. Humans cannot do that well, and neither can a single Claude conversation.",
      headline: 'The Context Pollution Problem',
      visualType: 'icon',
    },
    {
      id: 'subagents-ovw-concept',
      type: 'narration',
      durationInFrames: 997,
      narrationText:
        "Subagents solve this problem elegantly. A subagent is a separate Claude instance that your main Claude conversation can spin up to handle a specific task. The key insight is context isolation. The subagent gets its own fresh context. It does its job, returns a result, and then it is done. Your main conversation never gets cluttered. Think of it like a manager delegating to a team. The manager does not need to know every detail of every sub-task. They hand off work, get back results, and keep the big picture clear. That is exactly how subagents work. The main Claude is the manager. Each subagent is a specialist who handles one focused task and reports back.",
      headline: 'What Subagents Actually Are',
      visualType: 'diagram',
    },
    {
      id: 'subagents-ovw-builtin',
      type: 'code-demo',
      durationInFrames: 1158,
      narrationText:
        "Claude Code ships with built-in subagents that you are probably already using without realizing it. The first is Explore. When Claude needs to understand a part of your codebase, it can spin up an Explore subagent that reads files, searches for patterns, and maps out the architecture, all without polluting the main conversation's context. The second is Plan. When you ask Claude to plan a complex task, it can spin up a Plan subagent that thinks through the approach, identifies risks, and produces a step-by-step plan. And then there is the general-purpose subagent, which Claude can use for any focused sub-task that benefits from a clean context. You do not have to configure any of these. They are available out of the box. Claude decides when to use them based on the complexity of your request.",
      headline: 'Built-in Subagents',
      codeSnippet:
        '# Built-in subagents in Claude Code\n\n## Explore Agent\nPurpose: Investigate codebase\nTools:  read, grep, glob, ls\nUse:    "Find all auth middleware"\n        Searches → returns summary\n\n## Plan Agent\nPurpose: Plan complex changes\nTools:  read, grep, glob\nUse:    "Plan a migration to React 19"\n        Analyzes → returns step plan\n\n## General-Purpose Agent\nPurpose: Any isolated sub-task\nTools:  configurable\nUse:    Focused tasks that benefit\n        from a clean context window',
      visualType: 'terminal',
    },
    {
      id: 'subagents-ovw-isolation',
      type: 'split',
      durationInFrames: 1101,
      narrationText:
        "Let me make context isolation concrete. On the left, you have a single conversation trying to do everything. You ask Claude to refactor a module, then explore how the auth system works, then check the test coverage, then get back to refactoring. By the end, Claude's context window is packed with unrelated information and the quality of every response suffers. On the right, the subagent approach. Your main conversation stays focused on the refactoring. When you need to understand the auth system, Claude spawns a subagent. That subagent explores, produces a concise summary, and disappears. Your main context stays clean. You get better results on every task because each conversation has exactly the context it needs and nothing more.",
      headline: 'Context Isolation in Practice',
      leftContent:
        'Single Conversation:\n1. Refactor module...\n2. Explore auth system...\n3. Check test coverage...\n4. Back to refactoring...\n\nContext: cluttered\nQuality: degraded',
      rightContent:
        'With Subagents:\nMain: Focused on refactoring\n\nSubagent 1 -> auth summary\nSubagent 2 -> coverage report\n\nMain context: clean\nQuality: consistent',
      visualType: 'before-after',
    },
    {
      id: 'subagents-ovw-summary',
      type: 'summary',
      durationInFrames: 466,
      narrationText:
        'Subagents are isolated Claude instances for focused sub-tasks. Context isolation keeps your main conversation clean and your results sharp. Built-in agents like Explore and Plan handle the most common delegation patterns automatically. Think like a manager: delegate, get results, stay focused.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Subagents are separate Claude instances with their own context',
        'Context isolation prevents pollution and keeps results focused',
        'Built-in agents: Explore, Plan, and general-purpose',
        'Think like a manager — delegate sub-tasks, keep the big picture',
      ],
    },
    {
      id: 'subagents-ovw-cta',
      type: 'title',
      durationInFrames: 309,
      narrationText:
        'Next time you catch yourself going on a tangent in a Claude conversation, pause and think: should this be a subagent? Try asking Claude to explore a part of your codebase and watch the delegation happen.',
      headline: 'Try It Now',
      body: 'Ask Claude to explore a module — watch it delegate',
    },
  ],
};

export default script;
