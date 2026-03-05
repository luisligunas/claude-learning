import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Scene5: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 540 + 450 + 240 = 3540

const script: VideoScript = {
  id: 'subagents-advanced',
  title: 'Advanced Subagent Patterns',
  subtitle: 'Persistent memory, hooks, worktrees, and agent teams',
  themeColor: '#dc2626',
  totalDurationInFrames: 5878,
  scenes: [
    {
      id: 'subagents-adv-title',
      type: 'title',
      durationInFrames: 307,
      narrationText:
        'In the next ninety seconds, you will learn the advanced patterns that turn subagents from useful helpers into a coordinated team that remembers, reacts, and works in parallel without stepping on each other.',
      headline: 'Advanced Subagent Patterns',
      body: 'Persistent memory, hooks, worktrees, and agent teams',
    },
    {
      id: 'subagents-adv-memory',
      type: 'code-demo',
      durationInFrames: 1193,
      narrationText:
        "Let us start with the most requested feature: persistent memory. By default, a subagent is stateless. It does its job and forgets everything. But what if your code review agent could remember past review decisions? What if your architecture agent could build up a knowledge base of your system over time? You do this with memory files. In your agent definition, you point to a memory file in your dot claude directory. Every time the agent finishes a task, it appends a summary to that file. Next time it spins up, it reads the file first. Over weeks, this memory becomes incredibly valuable. Your migration reviewer remembers that you decided to keep backward compatibility with the v2 API. Your test writer remembers that the payments module uses a specific mocking pattern. The agent gets better the more you use it.",
      headline: 'Persistent Memory',
      codeSnippet:
        '# .claude/agents/arch-reviewer.md\n---\nname: arch-reviewer\nmemory: .claude/memory/arch.md\n---\n\n## Instructions\nBefore starting, read your memory\nfile for past decisions.\n\nAfter finishing, append a summary:\n- Date and what was reviewed\n- Key decisions made\n- Patterns to remember\n\n# .claude/memory/arch.md\n## 2026-02-15: Auth refactor\n- Decided: keep session-based auth\n- Pattern: middleware chain, not\n  decorator-based\n\n## 2026-03-01: API v3 migration\n- Decided: maintain v2 backward\n  compatibility for 6 months',
      visualType: 'terminal',
    },
    {
      id: 'subagents-adv-hooks',
      type: 'code-demo',
      durationInFrames: 1121,
      narrationText:
        "Next, hooks. Hooks let you run code before or after a subagent executes. This is where subagents go from assistants to automated pipeline stages. A pre-hook might check that the branch is clean before a refactoring agent starts work. A post-hook might run your linter after a code generation agent finishes. Or a post-hook might automatically commit the changes with a standardized message. Think about what you normally do manually after Claude finishes a task. You run tests. You lint the code. You check the diff. All of that can be automated with hooks. The agent does its work, the post-hook validates it, and if something fails, you get a clear error instead of discovering the problem later. Hooks close the loop between AI-generated changes and your existing quality gates.",
      headline: 'Hooks for Automation',
      codeSnippet:
        '# .claude/agents/refactor-agent.md\n---\nname: refactor-agent\nhooks:\n  pre:\n    - command: git diff --quiet\n      on_fail: abort\n      message: "Clean branch required"\n  post:\n    - command: npm run lint\n      on_fail: retry\n      message: "Fix lint errors"\n    - command: npm run test\n      on_fail: report\n      message: "Tests failed"\n---\n\n## Instructions\nRefactor the specified module.\nKeep all existing tests passing.\n\n## Pre-conditions\nBranch must be clean (enforced\nby pre-hook). This ensures we can\ncleanly revert if needed.',
      visualType: 'terminal',
    },
    {
      id: 'subagents-adv-worktree',
      type: 'split',
      durationInFrames: 1212,
      narrationText:
        "Now here is where things get really interesting: worktree isolation. When you have multiple subagents working at the same time, they need to be editing different files or you get merge conflicts. Git worktrees solve this beautifully. Each subagent gets its own worktree, which is a separate working directory backed by the same git repository. Agent one is refactoring the authentication module in worktree one. Agent two is updating the API documentation in worktree two. Agent three is writing tests in worktree three. They all work simultaneously on isolated copies, and when they are done, you merge the results. On the left, agents sharing one working directory, constantly conflicting. On the right, each agent in its own worktree, working freely in parallel. This is how you go from sequential to parallel AI workflows.",
      headline: 'Worktree Isolation',
      leftContent:
        'Shared Directory:\nAgent 1 edits auth.ts\nAgent 2 edits auth.ts\nAgent 3 edits auth.test.ts\n\nConflicts everywhere.\nAgents overwrite each other.\nSequential only.',
      rightContent:
        'Git Worktrees:\nWorktree 1 -> Agent 1 (auth)\nWorktree 2 -> Agent 2 (docs)\nWorktree 3 -> Agent 3 (tests)\n\nFull parallel execution.\nNo conflicts.\nMerge when done.',
      visualType: 'before-after',
    },
    {
      id: 'subagents-adv-teams',
      type: 'narration',
      durationInFrames: 1306,
      narrationText:
        "The final pattern is agent teams, and this is where everything comes together. An agent team is a group of subagents that work together on a complex task, coordinated by your main Claude conversation. Here is a real example: you ask Claude to prepare a release. Claude spins up a team. The changelog agent scans all commits since the last tag and drafts release notes. The dependency agent checks for outdated or vulnerable packages. The migration agent writes the database migration guide. The test agent runs the full suite and reports coverage changes. Each agent has persistent memory from past releases. Each runs in its own worktree. Each has hooks that validate its output. And the main Claude conversation orchestrates everything, waits for results, resolves any conflicts, and produces a final release package. You just went from a four-hour manual process to a coordinated AI team.",
      headline: 'Agent Teams',
      visualType: 'diagram',
    },
    {
      id: 'subagents-adv-summary',
      type: 'summary',
      durationInFrames: 450,
      narrationText:
        'Persistent memory makes agents smarter over time. Hooks automate your quality gates before and after agent work. Worktree isolation enables true parallel execution without conflicts. And agent teams coordinate multiple specialists into complex workflows. These patterns turn Claude from an assistant into an engineering team.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Persistent memory lets agents learn from past decisions',
        'Hooks automate pre- and post-checks for quality and safety',
        'Git worktrees give each agent an isolated working directory',
        'Agent teams coordinate specialists for complex, multi-step workflows',
      ],
    },
    {
      id: 'subagents-adv-cta',
      type: 'title',
      durationInFrames: 289,
      narrationText:
        'Start small. Add a memory file to your most-used custom agent. Then add a post-hook that runs your linter. Once that feels natural, try running two agents in parallel with worktrees.',
      headline: 'Try It Now',
      body: 'Add persistent memory to one agent and a post-hook to another',
    },
  ],
};

export default script;
