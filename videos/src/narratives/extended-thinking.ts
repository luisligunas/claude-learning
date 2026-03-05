import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 450 + 240 = 3000

const script: VideoScript = {
  id: 'extended-thinking',
  title: 'Extended Thinking & Ultrathink',
  subtitle: 'When to let Claude think deeply',
  themeColor: '#8b5cf6',
  totalDurationInFrames: 5449,
  scenes: [
    {
      id: 'thinking-title',
      type: 'title',
      durationInFrames: 232,
      narrationText:
        'In ninety seconds, you will learn when to let Claude think deeply, when to keep it fast, and why saying think step by step is usually a mistake.',
      headline: 'Extended Thinking & Ultrathink',
      body: 'When to let Claude think deeply',
    },
    {
      id: 'thinking-why',
      type: 'narration',
      durationInFrames: 1069,
      narrationText:
        "Here is something most people do not realize. When Claude answers quickly, it is doing the AI equivalent of thinking off the top of its head. For simple questions, that is fine. But for complex reasoning, multi-step problems, or anything involving tradeoffs, you are leaving quality on the table. Imagine asking a senior engineer to design your database schema, but telling them they have thirty seconds. They would give you something that works, but it would not be great. Now give that same engineer ten minutes to really think it through, and you get a fundamentally different answer. Claude works the same way. Extended thinking gives Claude dedicated reasoning time before it responds. It is not a gimmick. It is how you unlock Claude's best work on hard problems.",
      headline: 'Quick Answers Leave Quality on the Table',
      visualType: 'icon',
    },
    {
      id: 'thinking-aha',
      type: 'split',
      durationInFrames: 1025,
      narrationText:
        "Here is the key insight that changes how you use this. Claude Code has a simple keyword system for thinking depth. You type think and Claude uses moderate extended thinking. You type think hard or think harder and it goes deeper. And then there is ultrathink. That is the maximum. Claude takes as long as it needs to reason through every angle before responding. But here is the part nobody tells you: do not use ultrathink for everything. It is slower and costs more tokens. Use it surgically. Simple tasks like rename this variable or fix this typo do not need deep thinking. Complex tasks like design a caching strategy that handles our specific edge cases, that is where ultrathink shines. The right tool for the right job.",
      headline: 'The Thinking Spectrum',
      leftContent:
        'Quick (no keyword):\n- Simple edits and fixes\n- Renaming, formatting\n- Straightforward additions\n\nthink:\n- Moderate reasoning tasks\n- Code review, bug finding',
      rightContent:
        'think hard / think harder:\n- Architecture decisions\n- Complex refactors\n- Multi-file planning\n\nultrathink:\n- System design from scratch\n- Subtle bugs with tradeoffs\n- Security audits',
      visualType: 'before-after',
    },
    {
      id: 'thinking-demo',
      type: 'code-demo',
      durationInFrames: 1139,
      narrationText:
        "Now let me address the elephant in the room. You have probably seen advice online saying you should add think step by step to your prompts. Here is why that is outdated advice for Claude. When you say think step by step, you are asking Claude to show its work in the response itself. That eats up output tokens, clutters the answer, and actually constrains the model to a linear chain of thought. Extended thinking is fundamentally different. It gives Claude a private scratchpad to reason before it even starts writing the answer. The thinking happens behind the scenes, where it can explore multiple paths, backtrack, reconsider. Then you get a clean, well-reasoned response. So instead of writing think step by step in your prompt, just use the think keyword in Claude Code. It is better in every way.",
      headline: 'Why "Think Step by Step" Is Outdated',
      codeSnippet:
        '# BAD: Old-school chain of thought\n> Think step by step about how to\n  optimize this database query\n\n# Claude wastes tokens showing work:\n"Step 1: First, I\'ll look at...\n Step 2: Next, I consider...\n Step 3: Then I\'ll analyze..."\n# Cluttered, constrained, linear\n\n# GOOD: Extended thinking keyword\n> ultrathink\n  Optimize this database query for\n  our read-heavy workload. Consider\n  indexing, caching, and query\n  restructuring.\n\n# Claude reasons privately, then:\n"Here\'s my recommendation:\n  Add a composite index on (user_id,\n  created_at) and restructure the\n  subquery as a JOIN. Here\'s why..."',
      visualType: 'terminal',
    },
    {
      id: 'thinking-pattern',
      type: 'narration',
      durationInFrames: 1294,
      narrationText:
        "Here is the mental model that expert Claude users follow. They match thinking depth to task complexity. For rote tasks, they keep it fast. For anything involving judgment, tradeoffs, or multiple interacting concerns, they reach for extended thinking. And they have learned to recognize the signals. If Claude gives you an answer that feels shallow or misses edge cases, that is a signal you needed more thinking depth, not a better prompt. Try the same prompt again with think hard and watch the quality jump. The other expert pattern is using ultrathink for planning, then fast mode for execution. You say: ultrathink, plan how to migrate our authentication from sessions to JWT tokens. Claude produces a detailed, well-reasoned plan. Then you execute each step with normal-speed Claude. Deep thinking for the design, fast execution for the implementation. That is the pattern.",
      headline: 'Match Depth to Complexity',
      visualType: 'diagram',
    },
    {
      id: 'thinking-summary',
      type: 'summary',
      durationInFrames: 450,
      narrationText:
        'Extended thinking gives Claude a private scratchpad to reason deeply before responding. Use think, think hard, and ultrathink to match reasoning depth to task complexity. Drop think step by step from your vocabulary and use the thinking keywords instead. Plan deeply, execute quickly.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Extended thinking is a private scratchpad, not visible chain of thought',
        'Use think, think hard, and ultrathink to dial up reasoning depth',
        '"Think step by step" wastes tokens — use thinking keywords instead',
        'Expert pattern: ultrathink for planning, fast mode for execution',
      ],
    },
    {
      id: 'thinking-cta',
      type: 'title',
      durationInFrames: 240,
      narrationText:
        'Take a complex problem you have been struggling with and try it with ultrathink. Compare the result to what you got before. The difference will speak for itself.',
      headline: 'Try It Now',
      body: 'Try ultrathink on your hardest problem today',
    },
  ],
};

export default script;
