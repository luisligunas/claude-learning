import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 480 | CTA: 210
// Total: 150 + 540 + 540 + 540 + 540 + 480 + 210 = 3000

const script: VideoScript = {
  id: 'claude-code-engineering',
  title: 'Real Engineering with Claude Code',
  subtitle: 'Plan mode, context management, and GitHub workflows',
  themeColor: '#3b82f6',
  totalDurationInFrames: 4680,
  scenes: [
    {
      id: 'cc-eng-title',
      type: 'title',
      durationInFrames: 195,
      narrationText:
        'In ninety seconds, you will learn the workflows that separate developers who dabble with AI from teams that ship twice as fast.',
      headline: 'Real Engineering with Claude Code',
      body: 'Plan mode, context management, and GitHub workflows',
    },
    {
      id: 'cc-eng-why',
      type: 'narration',
      durationInFrames: 944,
      narrationText:
        "You have tried Claude Code. You asked it to fix a bug, it worked, and that felt great. But then you tried something bigger. Implement this feature across six files. And it went sideways. It changed the wrong file. It forgot about a dependency. It solved the problem in a way that broke something else. Here is why that happens. When you give Claude Code a complex task without a plan, it does what any developer would do without a plan: it starts coding immediately and makes mistakes along the way. The problem is not that Claude Code cannot handle complexity. The problem is that nobody told it to stop and think first. And that is exactly what plan mode is for.",
      headline: 'When Complexity Breaks Down',
      visualType: 'icon',
    },
    {
      id: 'cc-eng-plan',
      type: 'code-demo',
      durationInFrames: 1123,
      narrationText:
        "Plan mode is a game changer. You activate it by pressing shift plus tab to toggle into plan mode, or you just say: plan this before coding. Claude Code switches from execution mode to architect mode. Instead of immediately editing files, it reads the relevant code, maps dependencies, and produces a step-by-step implementation plan. It tells you: here are the five files we need to touch, here is the order we should change them, and here are the edge cases we need to handle. You review the plan, adjust it if needed, and then say go. Now Claude Code executes with precision because it is following a blueprint, not improvising. This is exactly how senior engineers work. They plan first, code second. And with plan mode, Claude Code does the same.",
      headline: 'Plan Mode: Think Before Coding',
      codeSnippet:
        '> Add role-based access control to\n  our API endpoints [plan mode]\n\nClaude: Here\'s my implementation plan:\n\n1. Create src/middleware/rbac.ts\n   - Define Role enum (admin, editor,\n     viewer)\n   - Create requireRole() middleware\n\n2. Update src/types/user.ts\n   - Add role field to User interface\n\n3. Modify 4 route files:\n   - /admin/* → requireRole(admin)\n   - /content/* → requireRole(editor)\n   - /read/* → requireRole(viewer)\n\n4. Add migration for roles column\n5. Update tests (12 test cases)\n\nShall I proceed?',
      visualType: 'terminal',
    },
    {
      id: 'cc-eng-github',
      type: 'code-demo',
      durationInFrames: 540,
      narrationText:
        "Now let me show you where Claude Code really shines in a team workflow: GitHub integration. You can point Claude Code at a GitHub issue and say: implement this. Claude Code reads the issue, reads the comments, understands the acceptance criteria, and builds the solution. But it does not stop there. When you are done, you say: create a pull request. Claude Code writes a detailed PR description, links it to the issue, and summarizes every change it made. Your teammates review it just like any other PR. And here is the workflow that elite teams use: they pipe their GitHub issues directly into Claude Code. A bug comes in, Claude Code picks it up, creates a branch, implements the fix, runs the tests, and opens a PR. The human reviews and merges. That is not science fiction. That is how teams are shipping today.",
      headline: 'GitHub-Native Workflows',
      codeSnippet:
        '# Start from a GitHub issue\n$ claude\n\n> Implement GitHub issue #247:\n  "Add CSV export to analytics\n   dashboard"\n\nClaude: Reading issue #247 and\n  comments... The acceptance criteria\n  require export of filtered data\n  with column selection.\n\n  [implements across 3 files]\n\n> Create a PR for this\n\nClaude: Created PR #251:\n  "Add CSV export to analytics\n   dashboard"\n  \n  Linked to issue #247\n  Changed: 3 files (+142, -8)\n  Tests: 6 new, all passing',
      visualType: 'terminal',
    },
    {
      id: 'cc-eng-context',
      type: 'split',
      durationInFrames: 1153,
      narrationText:
        "The last piece of the puzzle is context management. Claude Code has access to your whole codebase, but it cannot read every file at once. Smart developers learn to guide its attention. The amateur approach is to dump a vague request and hope for the best. The expert approach is to scope the work. You say: look at the files in the auth directory, especially middleware dot ts and the test file, then implement this change. You use CLAUDE dot md files in your repo to give Claude standing instructions: here is our architecture, here is how we handle errors, here is our testing convention. Think of CLAUDE dot md as onboarding documentation for your AI teammate. The developers who master context management are the ones who get reliable, production-quality output from Claude Code every single time.",
      headline: 'Guiding Claude\'s Attention',
      leftContent:
        '"Add authentication to the app"\n\nVague. Claude has to guess which files, which auth pattern, which framework conventions.',
      rightContent:
        '"Look at src/auth/middleware.ts and src/auth/middleware.test.ts. Add JWT refresh token rotation following our existing pattern in handleAuth()."\n\nScoped. Claude knows exactly where to look and what pattern to follow.',
      visualType: 'before-after',
    },
    {
      id: 'cc-eng-summary',
      type: 'summary',
      durationInFrames: 480,
      narrationText:
        'Real engineering with Claude Code means using plan mode for complex tasks, leveraging GitHub integration for team workflows, and mastering context management to guide Claude to the right files. Plan first, scope your context, and let Claude Code handle the implementation.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Use plan mode for any task touching more than two files',
        'Point Claude Code at GitHub issues for end-to-end implementation',
        'Scope your requests — tell Claude which files and patterns to follow',
        'Use CLAUDE.md files to onboard Claude to your project conventions',
      ],
    },
    {
      id: 'cc-eng-cta',
      type: 'title',
      durationInFrames: 245,
      narrationText:
        'Pick a GitHub issue from your backlog right now, open Claude Code in plan mode, and let it draft the implementation. Review the plan before you let it code.',
      headline: 'Try It Now',
      body: 'Start with plan mode on your next feature',
    },
  ],
};

export default script;
