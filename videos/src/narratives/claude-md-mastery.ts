import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 450 + 240 = 3000

const script: VideoScript = {
  id: 'claude-md-mastery',
  title: 'CLAUDE.md Mastery',
  subtitle: 'Your most powerful configuration file',
  themeColor: '#a855f7',
  totalDurationInFrames: 6013,
  scenes: [
    {
      id: 'claude-md-title',
      type: 'title',
      durationInFrames: 200,
      narrationText:
        'In ninety seconds, you will discover why a single markdown file is the most powerful tool in your entire Claude Code setup.',
      headline: 'CLAUDE.md Mastery',
      body: 'Your most powerful configuration file',
    },
    {
      id: 'claude-md-why',
      type: 'narration',
      durationInFrames: 1056,
      narrationText:
        "Imagine you hire a brilliant contractor. They are fast, skilled, and eager to help. But on their first day, you hand them a laptop and say, good luck, figure it out. No onboarding doc. No architecture overview. No explanation of your conventions. What happens? They waste days asking basic questions. They make assumptions that clash with your patterns. They write code that works but does not feel like it belongs in your codebase. This is exactly what happens when you use Claude Code without a CLAUDE dot md file. Claude is the brilliant contractor, and CLAUDE dot md is the onboarding document. Without it, Claude has to guess. And even a great AI guessing is not as good as an average AI with the right context.",
      headline: 'The Missing Onboarding Doc',
      visualType: 'icon',
    },
    {
      id: 'claude-md-anatomy',
      type: 'code-demo',
      durationInFrames: 1284,
      narrationText:
        "Let me show you the anatomy of a great CLAUDE dot md file. It has four sections, and each one dramatically changes how Claude behaves. First, the project briefing: one paragraph that tells Claude what this project is, who uses it, and what matters most. Second, the architecture overview: not a full design doc, just enough for Claude to know where things live. Your source directory structure, your key modules, how data flows. Third, conventions: this is where the magic happens. Your naming patterns, your error handling approach, your testing philosophy. And fourth, boundaries: things Claude should never do. Never modify the database schema directly. Never use any-type in TypeScript. Never skip error handling. These four sections turn Claude from a generic assistant into a teammate who understands your project like they have been here for months.",
      headline: 'The Four Sections',
      codeSnippet:
        '# CLAUDE.md\n\n## Project Briefing\nThis is Acme Payments, a fintech API\nhandling 2M+ daily transactions.\nReliability and security are paramount.\n\n## Architecture\n- src/api/     → Express route handlers\n- src/core/    → Business logic\n- src/db/      → Prisma models & queries\n- src/workers/ → Background job processors\nData flows: API → Core → DB → Workers\n\n## Conventions\n- Functions: verbNoun (e.g. createUser)\n- Errors: always wrap with AppError\n- Tests: colocated as *.test.ts files\n- Commits: conventional commits format\n\n## Boundaries\n- NEVER modify db/schema.prisma directly\n- NEVER use `any` type in TypeScript\n- NEVER skip error handling on async',
      visualType: 'terminal',
    },
    {
      id: 'claude-md-structure',
      type: 'split',
      durationInFrames: 1246,
      narrationText:
        "Here is the difference in action. Watch what happens when you ask Claude to add a new endpoint, with and without a CLAUDE dot md file. Without it, Claude generates a perfectly functional route handler. But it uses a different naming convention. It puts the file in the wrong directory. It handles errors with a generic try-catch instead of your AppError wrapper. It works, but it does not belong. Now watch with CLAUDE dot md. Claude generates the same feature, but it uses your verbNoun naming. It places the file in the correct directory based on your architecture section. It wraps errors with AppError exactly the way your team does. It colocates the test file. Same AI, same prompt, dramatically different output. The only difference is the context you provided. CLAUDE dot md is not configuration. It is context. And in AI, context is everything.",
      headline: 'With vs. Without',
      leftContent:
        'Without CLAUDE.md:\n\nrouter.get("/user/:id", async (req, res) => {\n  try {\n    const user = await db.user.findUnique(...);\n    res.json(user);\n  } catch (e) {\n    res.status(500).json({ error: e.message });\n  }\n});\n\nWrong location, generic error handling, no tests.',
      rightContent:
        'With CLAUDE.md:\n\n// src/api/users.ts\nexport async function getUser(req, res) {\n  const user = await findUserById(req.params.id)\n    .catch(e => throw new AppError("USER_NOT_FOUND", e));\n  res.json(user);\n}\n\n// src/api/users.test.ts (colocated)\nRight directory, team conventions, test included.',
      visualType: 'before-after',
    },
    {
      id: 'claude-md-levels',
      type: 'narration',
      durationInFrames: 1503,
      narrationText:
        "Here is the expert move that most people miss. CLAUDE dot md files are hierarchical. You can have one at the project root for global conventions, and additional ones in subdirectories for module-specific context. Your root CLAUDE dot md says: we use TypeScript, we follow conventional commits, errors use AppError. Then inside your API directory, a local CLAUDE dot md adds: routes follow RESTful naming, all endpoints require authentication middleware, responses use our standard envelope format. Inside your workers directory, another CLAUDE dot md says: jobs must be idempotent, always log start and completion, use exponential backoff for retries. Claude reads all of them, with the most specific one taking priority. This means your frontend team, your backend team, and your infrastructure team can each have their own conventions, and Claude respects all of them automatically. It is like having a different onboarding doc for every department, and Claude reads the right one depending on where it is working.",
      headline: 'Hierarchical Configuration',
      visualType: 'diagram',
    },
    {
      id: 'claude-md-summary',
      type: 'summary',
      durationInFrames: 450,
      narrationText:
        'CLAUDE dot md is your most powerful tool because context beats intelligence every time. Four sections: project briefing, architecture, conventions, and boundaries. Use hierarchical files for team-specific rules. Write it once, and every interaction with Claude gets better.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'CLAUDE.md is the onboarding doc that turns Claude into a teammate',
        'Four sections: briefing, architecture, conventions, boundaries',
        'Same prompt produces dramatically better output with the right context',
        'Hierarchical files let different teams define their own conventions',
      ],
    },
    {
      id: 'claude-md-cta',
      type: 'title',
      durationInFrames: 274,
      narrationText:
        'Create a CLAUDE dot md file in your project root right now. Start with just the project briefing and three conventions. You will notice the difference in your very next conversation.',
      headline: 'Try It Now',
      body: 'Create your CLAUDE.md with 4 sections today',
    },
  ],
};

export default script;
