import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 480 | CTA: 210
// Total: 150 + 540 + 540 + 540 + 540 + 480 + 210 = 3000

const script: VideoScript = {
  id: 'projects-intro',
  title: 'Projects & Connectors',
  subtitle: 'Give Claude persistent memory for your work',
  themeColor: '#4ECDC4',
  totalDurationInFrames: 5302,
  scenes: [
    {
      id: 'projects-title',
      type: 'title',
      durationInFrames: 212,
      narrationText:
        'In ninety seconds, you will learn how to stop repeating yourself and give Claude the context it needs to become a true long-term collaborator.',
      headline: 'Projects & Connectors',
      body: 'Give Claude persistent memory for your work',
    },
    {
      id: 'projects-why',
      type: 'narration',
      durationInFrames: 964,
      narrationText:
        "Here is a frustration you have definitely felt. You have a great conversation with Claude. It understands your codebase, your writing style, your brand voice, everything. Then you start a new chat and it is like meeting a stranger. You are back to explaining who you are, what you are working on, and how you like things done. It is like having a brilliant coworker who gets amnesia every time they leave the room. Every conversation starts from zero. You end up pasting the same context over and over. Your style guide, your API docs, your project requirements. It is exhausting, and it wastes the most valuable thing in your conversation: your context window.",
      headline: 'The Amnesia Problem',
      visualType: 'icon',
    },
    {
      id: 'projects-aha',
      type: 'narration',
      durationInFrames: 1100,
      narrationText:
        "Projects solve this completely. A Project is a persistent workspace where Claude always has the context it needs. Think of it like a shared office for you and Claude. You set it up once, and every conversation inside that project starts with Claude already knowing your world. You add a custom instruction that says: you are helping me build a SaaS product using Next.js and Supabase, we follow a specific naming convention, we write tests for every feature. Then you upload your key documents: your technical spec, your design system guide, your database schema. Now every single conversation in that project starts with Claude already understanding all of this. No more copy-pasting. No more re-explaining. Claude remembers because the context is always there.",
      headline: 'Your Persistent Workspace',
      visualType: 'diagram',
    },
    {
      id: 'projects-demo',
      type: 'code-demo',
      durationInFrames: 1160,
      narrationText:
        "But here is where it gets really powerful: Connectors. Instead of manually uploading files that go stale, you connect Claude directly to your living knowledge bases. Connect your Google Drive and Claude can read your product docs, meeting notes, and specs in real time. Connect your GitHub repository and Claude always has access to your latest code. These are not static snapshots. When your docs change, Claude sees the changes. When your code updates, Claude knows. It is the difference between giving someone a printed report and giving them a login to your dashboard. The data is always current. And you can mix and match: one project might have Google Docs for requirements, a GitHub repo for code, and custom instructions for your workflow. Claude stitches it all together into a coherent understanding of your work.",
      headline: 'Connectors: Live Knowledge Bases',
      codeSnippet:
        'Project: "Acme SaaS Platform"\n\nCustom Instructions:\n  "We use Next.js 14 + Supabase.\n   Follow our naming conventions.\n   Always suggest tests."\n\nConnected Sources:\n  📁 Google Drive → /Product/Specs\n  📁 Google Drive → /Design/System\n  🔗 GitHub → acme/platform (main)\n\nKnowledge Files:\n  📄 database-schema.sql\n  📄 api-conventions.md\n  📄 brand-voice-guide.pdf\n\nEvery chat in this project starts\nwith Claude already knowing all of it.',
      visualType: 'diagram',
    },
    {
      id: 'projects-pattern',
      type: 'narration',
      durationInFrames: 1164,
      narrationText:
        "Here is how expert users organize their work. They do not have one big project. They create focused projects for different contexts. A Marketing project with their brand guide, tone of voice document, and audience personas connected. An Engineering project with their codebase, architecture docs, and coding standards. A Strategy project with their competitive analysis, roadmap, and board deck. Each project is a different hat Claude wears. When you open the Marketing project, Claude thinks like your marketing partner. When you switch to Engineering, it thinks like a senior developer who knows your stack. The people who get the most from Claude are the ones who invest ten minutes setting up their projects. That ten minutes saves hours every single week, because Claude never forgets and never needs to be caught up.",
      headline: 'One Project Per Context',
      visualType: 'diagram',
    },
    {
      id: 'projects-summary',
      type: 'summary',
      durationInFrames: 480,
      narrationText:
        'Projects give Claude persistent memory. Set your custom instructions once, connect your documents and repos, and every conversation starts with full context. Create separate projects for different domains. Spend ten minutes setting up and save hours every week.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Projects eliminate copy-pasting context into every chat',
        'Custom instructions set the rules Claude follows automatically',
        'Connectors link live data from Google Drive, GitHub, and more',
        'Create focused projects: one per domain or workstream',
      ],
    },
    {
      id: 'projects-cta',
      type: 'title',
      durationInFrames: 222,
      narrationText:
        'Create your first Project right now. Add your most-used document and a custom instruction. You will never go back to blank conversations.',
      headline: 'Try It Now',
      body: 'Create a Project for your current workstream',
    },
  ],
};

export default script;
