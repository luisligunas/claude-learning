import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 450 + 240 = 3000

const script: VideoScript = {
  id: 'skills-create',
  title: 'Creating Skills: A Hands-On Guide',
  subtitle: 'Build your first SKILL.md from scratch',
  themeColor: '#e056a0',
  totalDurationInFrames: 5704,
  scenes: [
    {
      id: 'skills-create-title',
      type: 'title',
      durationInFrames: 241,
      narrationText:
        'In ninety seconds, you will build a working Skill file from scratch, complete with frontmatter, argument passing, and a real test to prove it works.',
      headline: 'Creating Skills: A Hands-On Guide',
      body: 'Build your first SKILL.md from scratch',
    },
    {
      id: 'skills-create-why',
      type: 'narration',
      durationInFrames: 949,
      narrationText:
        "You have heard that Skills are powerful. Maybe you have even seen the overview. But there is a gap between knowing what Skills are and actually building one that works. Most people get stuck right here. They open their editor, create a markdown file, and then stare at a blank page. What goes in the frontmatter? How do you pass arguments? How do you test it before sharing it with your team? These are the practical questions that documentation glosses over. Today we are going to build a real Skill from scratch. Not a toy example. A genuinely useful one that you will actually keep. By the end, you will have the muscle memory to create any Skill in under five minutes.",
      headline: 'From Theory to Practice',
      visualType: 'icon',
    },
    {
      id: 'skills-create-aha',
      type: 'code-demo',
      durationInFrames: 1179,
      narrationText:
        "Let us build a commit message Skill. Every team has a commit format they want enforced, and most people waste time explaining it to Claude every session. First, create the file. Skills live in dot claude slash skills in your project. The file is plain markdown, but it starts with YAML frontmatter between triple dashes. The frontmatter has three critical fields. Name is the human-readable label. Description tells Claude when this skill is relevant, so write it like you are explaining to a colleague. And trigger defines when the skill activates. You can use slash command triggers or auto-detection. After the frontmatter, you write the instructions in plain markdown. Be specific. Include examples. Show Claude what a good result looks like and what a bad one looks like. The more concrete you are, the more consistent the results.",
      headline: 'Anatomy of a SKILL.md File',
      codeSnippet:
        '# .claude/skills/commit-message.md\n---\nname: Commit Message Writer\ndescription: >\n  Generates conventional commit\n  messages following our team format.\n  Analyzes staged changes and writes\n  a clear, scoped commit message.\ntrigger: /commit\n---\n\n## Instructions\nAnalyze the staged git changes and\nwrite a commit message following our\nformat:\n\n## Format\n<type>(<scope>): <short summary>\n\n<body explaining WHY, not what>\n\n## Types\n- feat: new feature\n- fix: bug fix\n- refactor: code restructuring\n- docs: documentation only\n- test: adding or updating tests\n\n## Example\nfeat(auth): add token refresh flow\n\nUsers were getting logged out after\n1 hour because tokens expired with\nno refresh mechanism.',
      visualType: 'terminal',
    },
    {
      id: 'skills-create-demo',
      type: 'code-demo',
      durationInFrames: 1233,
      narrationText:
        "Now here is where it gets really powerful: argument passing. Skills can accept arguments, which means one Skill file can handle many variations of the same task. In the frontmatter, you define arguments with a name, a description, and whether they are required or optional. Then in the instructions body, you reference those arguments with curly brace syntax. So our commit message Skill can accept a scope argument and a type override. When someone invokes the Skill with slash commit dash m scope equals auth, Claude knows exactly what to fill in. This turns your Skills from static recipes into flexible tools. And testing is straightforward. You invoke the skill in Claude Code, check the output, tweak the instructions, and try again. Iterate until it reliably produces what you want. Then commit the Skill file to your repo so the whole team benefits.",
      headline: 'Arguments and Testing',
      codeSnippet:
        '# Adding arguments to your Skill\n---\nname: Commit Message Writer\ndescription: >\n  Generates conventional commits.\ntrigger: /commit\narguments:\n  - name: scope\n    description: "Module scope for\n      the commit (e.g., auth, api)"\n    required: false\n  - name: type\n    description: "Override commit type\n      (feat, fix, refactor, etc.)"\n    required: false\n---\n\n## Instructions\nAnalyze staged changes and write\na commit message.\n{{#if scope}}Scope: {{scope}}{{/if}}\n{{#if type}}Type: {{type}}{{/if}}\n\n# Testing your Skill\n$ claude\n> /commit\n> /commit scope=auth\n> /commit type=fix scope=api',
      visualType: 'terminal',
    },
    {
      id: 'skills-create-pattern',
      type: 'narration',
      durationInFrames: 1412,
      narrationText:
        "Here is the expert pattern for creating Skills that actually stick. First, do not start with a blank page. Start with a real conversation. The next time you find yourself giving Claude detailed instructions for a task, stop and save that conversation. Those instructions are your Skill draft. Second, include negative examples. Telling Claude what not to do is just as important as telling it what to do. If you do not want verbose commit messages, say: do not exceed fifty words in the summary line. Third, version your Skills with your code. Put them in dot claude slash skills, commit them to git, and review them in pull requests just like code. When someone on your team improves a Skill, everyone benefits on their next git pull. And fourth, keep Skills focused. One Skill per task. A Skill that tries to handle code review and commit messages and documentation will do all three poorly. Small, focused Skills compose better than large, sprawling ones.",
      headline: 'Expert Patterns for Great Skills',
      visualType: 'diagram',
    },
    {
      id: 'skills-create-summary',
      type: 'summary',
      durationInFrames: 450,
      narrationText:
        'Skills are markdown files with YAML frontmatter that turn your best practices into reusable recipes. Add arguments to make them flexible. Test by invoking them directly in Claude Code. Keep them focused, include negative examples, and commit them to git so your whole team benefits.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'SKILL.md files use YAML frontmatter for name, description, and trigger',
        'Arguments make Skills flexible — one file handles many variations',
        'Test iteratively in Claude Code before sharing with your team',
        'Keep Skills focused, include negative examples, and version them in git',
      ],
    },
    {
      id: 'skills-create-cta',
      type: 'title',
      durationInFrames: 240,
      narrationText:
        'Take those instructions you keep repeating to Claude and turn them into a SKILL.md file right now. Five minutes of setup saves hours every month.',
      headline: 'Try It Now',
      body: 'Turn your most repeated instructions into a SKILL.md',
    },
  ],
};

export default script;
