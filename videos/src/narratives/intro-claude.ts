import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 510 | CTA: 180
// Total: 150 + 540 + 540 + 540 + 540 + 510 + 180 = 3000

const script: VideoScript = {
  id: 'intro-claude',
  title: 'Getting Started with Claude.ai',
  subtitle: 'Your AI thinking partner',
  themeColor: '#F5A623',
  totalDurationInFrames: 4381,
  scenes: [
    {
      id: 'intro-claude-title',
      type: 'title',
      durationInFrames: 150,
      narrationText:
        'In ninety seconds, you will learn how to stop Googling and start thinking with Claude.',
      headline: 'Getting Started with Claude.ai',
      body: 'Your AI thinking partner',
    },
    {
      id: 'intro-claude-why',
      type: 'narration',
      durationInFrames: 788,
      narrationText:
        "Imagine you just hired a brilliant colleague. They have read millions of books, they can write code, draft emails, and analyze data. But here is the thing most people get wrong: they treat this colleague like a search engine. They walk up and say, tell me about Python. That is like hiring a world-class consultant and asking them to read you a Wikipedia article. The real power of Claude is not in getting answers. It is in thinking together. Claude is a thinking partner, not a lookup tool. And once you understand that difference, everything changes.",
      headline: 'The Mistake Everyone Makes',
      visualType: 'chat-bubbles',
    },
    {
      id: 'intro-claude-aha',
      type: 'split',
      durationInFrames: 898,
      narrationText:
        "Here is the moment that changes everything. Watch what happens when we transform a vague prompt into a specific one. Instead of saying, help me with my resume, you say: I am a senior backend engineer with five years of Python experience applying for a staff role at a fintech startup. Review my resume and suggest three changes that highlight my system design skills. See the difference? The first prompt gives Claude almost nothing to work with. The second gives context, a specific task, and a clear format. Claude does not read your mind, but give it the right context and it thinks at an extraordinary level.",
      headline: 'Vague vs. Specific',
      leftContent:
        '"Help me with my resume"',
      rightContent:
        '"I am a senior backend engineer with 5 years of Python experience applying for a staff role at a fintech startup. Review my resume and suggest 3 changes that highlight system design skills."',
      visualType: 'before-after',
    },
    {
      id: 'intro-claude-demo',
      type: 'code-demo',
      durationInFrames: 884,
      narrationText:
        "Let me show you this in action. You open claude dot ai, and you start a conversation. But here is what separates beginners from power users: the follow-up. After Claude responds, you do not just say thanks. You push back. You say, that is good, but can you make option two more concise? Or, what would you change if the hiring manager is non-technical? This is multi-turn conversation, and it is where the magic lives. Each message builds on the last. Claude remembers your entire conversation. Think of it less like a query and more like a working session with a colleague who never gets tired.",
      headline: 'Multi-Turn Conversations',
      codeSnippet:
        'You: Review my resume for a staff engineer role.\n\nClaude: Here are 3 suggestions...\n  1. Lead with system design impact\n  2. Quantify your scaling work\n  3. Add a "Technical Leadership" section\n\nYou: Great. Make option 2 more concise\n     and assume a non-technical hiring\n     manager.\n\nClaude: Here\'s a revised version...\n  "Scaled payment systems to handle\n   2M+ daily transactions — reducing\n   processing costs by 40%."',
      visualType: 'chat-bubbles',
    },
    {
      id: 'intro-claude-pattern',
      type: 'narration',
      durationInFrames: 971,
      narrationText:
        "So how do experts actually think about Claude? They follow a simple pattern. First, set the stage: tell Claude who you are and what you are working on. Second, give it a clear job: not just a topic, but a task with a deliverable. Third, iterate: treat the first response as a draft, not a final answer. And fourth, push for depth. Ask why. Ask for alternatives. Ask Claude to challenge its own reasoning. The people who get the most from Claude are not prompt engineering wizards. They are just good at having conversations. They treat Claude like the smartest colleague they have ever worked with, and they are not afraid to ask follow-up questions.",
      headline: 'How Experts Think About Claude',
      visualType: 'diagram',
    },
    {
      id: 'intro-claude-summary',
      type: 'summary',
      durationInFrames: 510,
      narrationText:
        'Remember: Claude is a thinking partner, not a search engine. Give context, iterate, and push for depth. The people who get the most from Claude are the ones who treat it like a conversation, not a command line. Now go start a real conversation about something you are actually working on.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Claude is a thinking partner, not a search engine',
        'Specific prompts with context get dramatically better results',
        'Multi-turn conversation is where the real power lives',
        'Iterate like you would with a brilliant colleague',
      ],
    },
    {
      id: 'intro-claude-cta',
      type: 'title',
      durationInFrames: 180,
      narrationText:
        'Open claude dot ai right now and try it. Start with something you are actually working on today.',
      headline: 'Try It Now',
      body: 'Open claude.ai and start a real conversation',
    },
  ],
};

export default script;
