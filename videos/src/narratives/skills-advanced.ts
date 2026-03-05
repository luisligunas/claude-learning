import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Scene5: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 540 + 450 + 240 = 3540

const script: VideoScript = {
  id: 'skills-advanced',
  title: 'Advanced Skill Patterns',
  subtitle: 'Controlling invocation, restricting tools, and bundled skills',
  themeColor: '#ef4444',
  totalDurationInFrames: 6135,
  scenes: [
    {
      id: 'skills-adv-title',
      type: 'title',
      durationInFrames: 251,
      narrationText:
        'In the next ninety seconds, you will learn how to take Skills from simple recipes to precision instruments that trigger exactly when you want and do exactly what you need.',
      headline: 'Advanced Skill Patterns',
      body: 'Controlling invocation, restricting tools, and bundled skills',
    },
    {
      id: 'skills-adv-problem',
      type: 'narration',
      durationInFrames: 911,
      narrationText:
        "So you have written a few Skills and they are working great. But now you hit a problem. Your code review skill fires when you just want a quick opinion. Your deployment skill tries to run shell commands when you only wanted a checklist. And you have three separate skills for simplifying code, batch processing files, and debugging, but you keep wishing they worked as a single toolkit. This is the control problem. Basic Skills are like a light switch: on or off. But real workflows need dimmer switches, circuit breakers, and smart home automation. You need to control when Skills trigger, what tools they can access, and how they compose together.",
      headline: 'The Control Problem',
      visualType: 'icon',
    },
    {
      id: 'skills-adv-invocation',
      type: 'code-demo',
      durationInFrames: 1030,
      narrationText:
        "Let us start with controlling when a skill fires. By default, Claude reads all your skill files and decides when they are relevant. But you can be explicit. Add an invocation block to your skill's frontmatter. You can set it to automatic, which is the default behavior where Claude decides. You can set it to slash-command, which means the skill only runs when you type its name as a command, like slash simplify. Or you can set it to instructed, which means Claude will only use it when the conversation naturally calls for it but never proactively. This is powerful because it means your dangerous skills, the ones that modify files or run deployments, only fire when you explicitly ask for them. No more accidental triggers.",
      headline: 'Controlling When Skills Fire',
      codeSnippet:
        '# .claude/skills/simplify.md\n---\ninvocation: slash-command\nslash-command: simplify\ndescription: Simplify complex code\n---\n\n## Instructions\nWhen invoked with /simplify:\n1. Identify the target code block\n2. Reduce nesting depth\n3. Extract helper functions\n4. Simplify conditionals\n5. Preserve all behavior — no\n   functional changes allowed',
      visualType: 'terminal',
    },
    {
      id: 'skills-adv-tools',
      type: 'split',
      durationInFrames: 1154,
      narrationText:
        "Next, tool restrictions. Here is a scenario that keeps people up at night. You write a skill that analyzes your codebase, but it also has access to the terminal. One wrong instruction and it could run a destructive command. Tool restrictions solve this. In your skill file, you add an allowed tools section that lists exactly which tools the skill can use. On the left, a skill with no restrictions. It can read files, write files, run bash commands, anything. On the right, a restricted skill. It can only read files and search with grep. It literally cannot modify anything. Think of tool restrictions as the principle of least privilege applied to AI. Your analysis skills should not be able to write. Your documentation skills should not be able to run shell commands. Lock them down.",
      headline: 'Tool Restrictions',
      leftContent:
        'Unrestricted Skill:\n- Read files\n- Write files\n- Run bash commands\n- Access network\n\nRisk: Unintended side effects',
      rightContent:
        'Restricted Skill:\nallowed_tools:\n  - read\n  - grep\n\nCannot modify anything.\nAnalysis only.\n\nSafe by design.',
      visualType: 'before-after',
    },
    {
      id: 'skills-adv-bundled',
      type: 'code-demo',
      durationInFrames: 1049,
      narrationText:
        "Now the real power move: bundled skills. Instead of writing one skill per task, you create a toolkit. Imagine a slash debug command that bundles three capabilities. First, it reads the error message and stack trace. Second, it searches your codebase for related code paths. Third, it suggests a fix with a clear explanation. Or a slash batch command that takes a transformation and applies it across every file matching a pattern. You define these as a single skill file but with multiple phases. Each phase can have its own tool restrictions. The search phase is read-only. The apply phase gets write access. The verify phase goes back to read-only. You are building workflows, not just instructions.",
      headline: 'Bundled Skills as Toolkits',
      codeSnippet:
        '# .claude/skills/debug.md\n---\ninvocation: slash-command\nslash-command: debug\ndescription: Diagnose and fix errors\n---\n\n## Phase 1: Diagnose (read-only)\nallowed_tools: [read, grep, glob]\n- Read the error and stack trace\n- Find related code paths\n- Identify root cause\n\n## Phase 2: Fix (write access)\nallowed_tools: [read, write, edit]\n- Propose a minimal fix\n- Apply only with user approval\n\n## Phase 3: Verify (read-only)\nallowed_tools: [read, bash]\n- Run existing tests\n- Confirm the fix resolves the error',
      visualType: 'terminal',
    },
    {
      id: 'skills-adv-pattern',
      type: 'narration',
      durationInFrames: 1050,
      narrationText:
        "Here is how advanced users think about this. They build a skill library the same way a senior engineer builds a personal toolkit. Every skill has a clear trigger, minimal permissions, and a defined scope. They use slash commands for anything destructive or expensive. They use automatic invocation for lightweight analysis skills that are always helpful. And they compose bundled skills into workflows that mirror how they actually work. The mental model is: a skill is not just instructions, it is a contract. It says: I will trigger under these conditions, I will use only these tools, and I will follow these steps. When you think of Skills as contracts, your entire Claude workflow becomes predictable, safe, and composable.",
      headline: 'Skills as Contracts',
      visualType: 'diagram',
    },
    {
      id: 'skills-adv-summary',
      type: 'summary',
      durationInFrames: 450,
      narrationText:
        'Control invocation to decide exactly when skills fire. Restrict tools to enforce least privilege. Bundle skills into phased workflows. Treat every skill as a contract with clear triggers, permissions, and scope. Build your toolkit once, trust it forever.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Use invocation modes: automatic, slash-command, or instructed',
        'Restrict tools to enforce least privilege — analysis skills should not write',
        'Bundle skills into phased workflows with per-phase permissions',
        'Think of skills as contracts: trigger, permissions, and scope',
      ],
    },
    {
      id: 'skills-adv-cta',
      type: 'title',
      durationInFrames: 240,
      narrationText:
        'Take your most-used skill and add an invocation mode and tool restrictions today. Then build a bundled slash debug or slash batch command.',
      headline: 'Try It Now',
      body: 'Add invocation controls and tool restrictions to your top skill',
    },
  ],
};

export default script;
