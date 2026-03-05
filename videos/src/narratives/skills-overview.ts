import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 450 + 240 = 3000

const script: VideoScript = {
  id: 'skills-overview',
  title: 'Skills & Subagents Overview',
  subtitle: 'Codify your expertise',
  themeColor: '#E056A0',
  totalDurationInFrames: 5201,
  scenes: [
    {
      id: 'skills-title',
      type: 'title',
      durationInFrames: 183,
      narrationText:
        'In ninety seconds, you will learn how to teach Claude your best practices so you never have to repeat yourself again.',
      headline: 'Skills & Subagents Overview',
      body: 'Codify your expertise',
    },
    {
      id: 'skills-why',
      type: 'narration',
      durationInFrames: 995,
      narrationText:
        "Have you ever had this experience? You spend twenty minutes carefully explaining to Claude exactly how you want your code reviewed. The result is perfect. Two days later, you need another review, and you realize you have to explain the whole thing again from scratch. All that context, all those preferences, gone. It is like training a new employee every single Monday morning. This is the repetition problem, and it is the biggest hidden time cost of working with AI. You end up copying and pasting prompts, bookmarking conversations, building your own little system of workarounds. But there is a much better way. What if you could write down your expertise once and Claude would follow it every single time?",
      headline: 'The Repetition Problem',
      visualType: 'icon',
    },
    {
      id: 'skills-aha',
      type: 'narration',
      durationInFrames: 1126,
      narrationText:
        "That is exactly what Skills are. Think of a Skill as a recipe card for Claude. You know how a great restaurant does not rely on the chef remembering every dish. They have detailed recipes so that anyone in the kitchen can produce the same quality every time. Skills work the same way. You write a markdown file that describes how you want a specific task done: your code review standards, your commit message format, your documentation style, whatever process you have refined over the years. Then when you or anyone on your team asks Claude to do that task, it follows your recipe. And Subagents take this one step further. A Subagent is like delegating to a specialist. Instead of one Claude doing everything, you can spin up focused sub-tasks that each handle one piece of a larger job.",
      headline: 'Skills Are Recipes for Claude',
      visualType: 'diagram',
    },
    {
      id: 'skills-demo',
      type: 'code-demo',
      durationInFrames: 1007,
      narrationText:
        "Let me show you what a Skill file actually looks like. It is just a markdown file that lives in your project's dot claude slash skills directory. Here is a code review skill. At the top, you describe when this skill should trigger. Then you lay out the steps: check for security issues first, then look at error handling, then evaluate naming conventions, and finally assess test coverage. You include your specific standards. Maybe you require all public functions to have doc comments. Maybe you want errors to be wrapped with context. These are your standards, codified. When Claude runs a code review with this skill loaded, it does not wing it. It follows your playbook, every single time.",
      headline: 'Anatomy of a Skill File',
      codeSnippet:
        '# .claude/skills/code-review.md\n\n## Trigger\nWhen asked to review code or a PR.\n\n## Steps\n1. **Security first**: Check for\n   injection, auth issues, data leaks\n2. **Error handling**: Verify all\n   errors are caught and wrapped\n   with context\n3. **Naming**: Functions and variables\n   must be descriptive (no single\n   letters outside loops)\n4. **Tests**: Flag any public function\n   without a corresponding test\n\n## Standards\n- All public functions need doc comments\n- Errors must include stack context\n- No TODO without a linked issue',
      visualType: 'terminal',
    },
    {
      id: 'skills-pattern',
      type: 'narration',
      durationInFrames: 1200,
      narrationText:
        "Here is how experts think about Skills and Subagents. The pattern is: build once, use forever. Every time you find yourself giving Claude the same instructions twice, that is a signal. Stop and write a Skill. It takes five minutes now and saves hours over the next month. Think about your workflow. You probably have a way you like pull requests described. A way you structure documentation. A way you handle error logging. Each of those is a Skill waiting to be written. And the real power move is combining Skills with Subagents. You create a deploy-check Skill that spins up three Subagents: one reviews the code, one checks for breaking API changes, and one verifies the test coverage. They all run in parallel, each following their own Skill recipe. It is like building a team of specialists that works exactly the way you want.",
      headline: 'Build Once, Use Forever',
      visualType: 'diagram',
    },
    {
      id: 'skills-summary',
      type: 'summary',
      durationInFrames: 450,
      narrationText:
        'Skills codify your expertise into reusable recipes. Subagents let you delegate to focused specialists. Build once, use forever, and stop repeating yourself. Your future self will thank you.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Skills are markdown recipes that standardize how Claude works',
        'Subagents delegate sub-tasks to focused specialists',
        'If you explain something twice, write a Skill instead',
        'Build once, use forever — compound your expertise over time',
      ],
    },
    {
      id: 'skills-cta',
      type: 'title',
      durationInFrames: 240,
      narrationText:
        'Think of one task you keep re-explaining to Claude. Write it as a Skill file today. It takes five minutes and pays off for months.',
      headline: 'Try It Now',
      body: 'Write your first Skill for a task you repeat weekly',
    },
  ],
};

export default script;
