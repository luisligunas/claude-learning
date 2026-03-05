import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 480 | CTA: 210
// Total: 150 + 540 + 540 + 540 + 540 + 480 + 210 = 3000

const script: VideoScript = {
  id: 'artifacts-intro',
  title: 'Claude Artifacts: Build Without Code',
  subtitle: 'From idea to interactive app in one conversation',
  themeColor: '#7B68EE',
  totalDurationInFrames: 5095,
  scenes: [
    {
      id: 'artifacts-title',
      type: 'title',
      durationInFrames: 237,
      narrationText:
        'In ninety seconds, you will see how to build interactive apps, dashboards, and visualizations without writing a single line of code yourself.',
      headline: 'Claude Artifacts: Build Without Code',
      body: 'From idea to interactive app in one conversation',
    },
    {
      id: 'artifacts-why',
      type: 'narration',
      durationInFrames: 978,
      narrationText:
        "You have an idea. Maybe it is a calculator for your sales team, a visualization of your company data, or an interactive prototype for a feature you want to pitch. In the old world, you had two options. Option one: learn to code, spend weeks building it, and probably give up halfway through. Option two: file a ticket with engineering, wait three sprints, and get something that is not quite what you imagined. Either way, the gap between your idea and a working thing was enormous. Most ideas die in that gap. They stay trapped in slide decks and spreadsheets, never becoming something people can actually touch and interact with. What if that gap just disappeared?",
      headline: 'The Idea-to-Reality Gap',
      visualType: 'icon',
    },
    {
      id: 'artifacts-aha',
      type: 'split',
      durationInFrames: 1037,
      narrationText:
        "This is where Artifacts changes everything. When you ask Claude to create something, it does not just give you a text response. It builds a live, interactive artifact right in the conversation. On the left side of your screen, you are chatting with Claude. On the right side, a fully working application appears. A React component. A data visualization. A working calculator. An interactive diagram. And here is the magic: you can use it immediately. Click buttons, enter data, interact with it, all right there. No deployment. No hosting. No install. It just works. And if something is not quite right, you tell Claude what to change, and the artifact updates in real time.",
      headline: 'Chat on the Left, App on the Right',
      leftContent:
        '"Build me an interactive mortgage calculator that shows monthly payments and a breakdown of principal vs interest over time"',
      rightContent:
        'A live mortgage calculator appears: input fields for loan amount, interest rate, and term. An interactive chart shows the amortization schedule. Sliders update the visualization in real time.',
      visualType: 'before-after',
    },
    {
      id: 'artifacts-demo',
      type: 'code-demo',
      durationInFrames: 1083,
      narrationText:
        "Let me show you real examples of what people build with Artifacts every day. A product manager says: create a prioritization matrix where I can drag and drop features between quadrants. Done. A teacher says: build a quiz app that tests multiplication tables and tracks the student score. Done. A founder says: make an interactive landing page mockup for my startup with a hero section, pricing table, and signup form. Done. Each of these would normally take a developer hours or days. With Artifacts, they take minutes. And the person building them is not an engineer. They are describing what they want in plain English and iterating on the result. That is the real revolution. The people closest to the problem can now build the solution.",
      headline: 'What People Are Building',
      codeSnippet:
        '> "Create a priority matrix where I\n   can drag features between quadrants"\n→ Interactive Kanban-style board appears\n\n> "Build a quiz app for multiplication\n   tables that tracks scores"\n→ Gamified quiz with progress tracking\n\n> "Make a landing page mockup with\n   hero, pricing, and signup form"\n→ Responsive page with live components\n\n> "Add a dark mode toggle and make\n   the pricing table sortable"\n→ Artifact updates instantly',
      visualType: 'chat-bubbles',
    },
    {
      id: 'artifacts-pattern',
      type: 'narration',
      durationInFrames: 1070,
      narrationText:
        "Here is how power users think about Artifacts. They treat them as rapid prototypes with zero cost. The mental model is this: if you can describe it, you can build it. Start rough. Say, I want a dashboard that shows our team velocity. Claude builds a first version. Then iterate. Add a date range filter. Make the chart a stacked bar instead of a line. Add a section that calculates sprint burndown. Each iteration takes seconds, not hours. And when you have something you like, you can publish it with a link, share it with your team, or even remix artifacts other people have shared. The best part? You can open any artifact to see the code behind it, copy it into your own project, or use it as a starting point for something bigger.",
      headline: 'Rapid Prototyping at Zero Cost',
      visualType: 'diagram',
    },
    {
      id: 'artifacts-summary',
      type: 'summary',
      durationInFrames: 480,
      narrationText:
        'Artifacts turn Claude from a chatbot into a builder. Describe what you want, get an interactive app. Iterate in seconds. Share with a link. No code required, no deployment needed. The gap between idea and reality just collapsed.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Artifacts create live, interactive apps right in the conversation',
        'Describe what you want in plain English and iterate in real time',
        'Anyone can build — no coding or deployment needed',
        'Share, publish, and remix artifacts with a single link',
      ],
    },
    {
      id: 'artifacts-cta',
      type: 'title',
      durationInFrames: 210,
      narrationText:
        'Open claude dot ai right now and say: build me an interactive tool for something you do every week. Watch what happens.',
      headline: 'Try It Now',
      body: 'Ask Claude to build something you need today',
    },
  ],
};

export default script;
