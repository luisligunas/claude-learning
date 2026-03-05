import { VideoScript } from '../types';

// Frame budget: 30fps, target ~102 seconds = 3060 frames
// Title: 150 | Scene1: 540 | Scene2: 570 | Scene3: 540 | Scene4: 540 | Summary: 480 | CTA: 240
// Total: 150 + 540 + 570 + 540 + 540 + 480 + 240 = 3060

const script: VideoScript = {
  id: 'claude-code-beginner',
  title: 'Claude Code: Your AI Pair Programmer',
  subtitle: 'The CLI that changes everything',
  themeColor: '#7B68EE',
  totalDurationInFrames: 4787,
  scenes: [
    {
      id: 'claude-code-title',
      type: 'title',
      durationInFrames: 165,
      narrationText:
        'In ninety seconds, you will see how one command in your terminal can replace hours of solo debugging.',
      headline: 'Claude Code: Your AI Pair Programmer',
      body: 'The CLI that changes everything',
    },
    {
      id: 'claude-code-why',
      type: 'narration',
      durationInFrames: 907,
      narrationText:
        "Picture this. It is eleven PM. You are staring at a stack trace that makes no sense. You have got fourteen browser tabs open, you have been on Stack Overflow for an hour, and you are no closer to a fix. Sound familiar? Every developer knows this feeling. The lonely late-night debugging session where you wish you could just turn to someone and say, hey, look at this, what am I missing? That is exactly what Claude Code gives you. It is not an autocomplete tool that guesses your next line. It is a pair programmer that lives in your terminal, reads your entire codebase, and thinks alongside you. The difference is like night and day.",
      headline: 'The Lonely Developer Problem',
      visualType: 'icon',
    },
    {
      id: 'claude-code-aha',
      type: 'code-demo',
      durationInFrames: 1080,
      narrationText:
        "Here is the aha moment. You install Claude Code with a single command: npm install minus g at anthropic ai slash claude code. Then you open your terminal, navigate to your project, and just type claude. That is it. Claude Code wakes up, reads your project structure, understands your codebase, and waits for you to talk to it in plain English. No special syntax. No config files. No boilerplate. You just say what you need. Fix the authentication bug in the login flow. Add input validation to the user form. Refactor this function to be more readable. And Claude Code does not just suggest code. It reads your files, understands the context, makes the edits, and shows you exactly what changed.",
      headline: 'One Command to Get Started',
      codeSnippet:
        '# Install Claude Code\n$ npm install -g @anthropic-ai/claude-code\n\n# Navigate to your project\n$ cd my-project\n\n# Start Claude Code\n$ claude\n\n> Fix the authentication bug in\n  the login flow\n\nClaude: I\'ll look at your auth files...\n  Found the issue in src/auth/login.ts\n  - Line 42: token expiry check is\n    comparing seconds to milliseconds\n  \n  Fixing now...\n  \n  Updated 1 file. Run tests to verify.',
      visualType: 'terminal',
    },
    {
      id: 'claude-code-demo',
      type: 'code-demo',
      durationInFrames: 961,
      narrationText:
        "Let me show you what this looks like in practice. Say you want to add a new API endpoint. In the old world, you would scaffold the route, write the handler, add validation, update tests, and update the docs. With Claude Code, you say: add a GET endpoint for user profiles that returns name, email, and avatar, with proper error handling and a test. Claude Code reads your existing patterns, matches your code style, creates the route, the handler, the types, the validation, and the test file. It does not just generate generic code. It writes code that looks like your code, because it has read your entire project.",
      headline: 'Natural Language to Code',
      codeSnippet:
        '> Add a GET /api/users/:id/profile\n  endpoint that returns name, email,\n  and avatar with error handling\n  and a test\n\nClaude: Analyzing your existing routes...\n  I see you use Express with Zod\n  validation. I\'ll match that pattern.\n\n  Created:\n  + src/routes/userProfile.ts\n  + src/schemas/userProfile.ts\n  + tests/userProfile.test.ts\n  \n  Modified:\n  ~ src/routes/index.ts (added route)\n\n  All files follow your existing\n  project conventions.',
      visualType: 'terminal',
    },
    {
      id: 'claude-code-pattern',
      type: 'narration',
      durationInFrames: 954,
      narrationText:
        "Here is how experienced developers think about Claude Code. They do not use it to write code from scratch. They use it as a force multiplier. The pattern is this: you do the thinking, Claude does the typing. You decide the architecture. You make the design calls. Then you describe what you want in natural language, and Claude Code handles the implementation. It is the difference between being a solo developer and leading a team. You are still the senior engineer. Claude Code is your incredibly fast, incredibly knowledgeable junior who never gets tired, never pushes back on a Friday afternoon, and reads the entire codebase before making a single change.",
      headline: 'The Expert Pattern',
      visualType: 'diagram',
    },
    {
      id: 'claude-code-summary',
      type: 'summary',
      durationInFrames: 480,
      narrationText:
        'Claude Code turns your terminal into a pair programming session. Install it with one command, talk to it in plain English, and let it handle the implementation while you focus on architecture and design decisions. You think, Claude types.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Install with one command: npm i -g @anthropic-ai/claude-code',
        'Talk in plain English — no special syntax needed',
        'Claude Code reads your codebase and matches your patterns',
        'You do the thinking, Claude does the typing',
      ],
    },
    {
      id: 'claude-code-cta',
      type: 'title',
      durationInFrames: 240,
      narrationText:
        'Install Claude Code right now and try fixing a bug you have been putting off. You will be surprised how fast it goes.',
      headline: 'Try It Now',
      body: 'npm install -g @anthropic-ai/claude-code',
    },
  ],
};

export default script;
