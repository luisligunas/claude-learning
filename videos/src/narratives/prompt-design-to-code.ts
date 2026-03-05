import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 450 + 240 = 3000

const script: VideoScript = {
  id: 'prompt-design-to-code',
  title: 'Design to Code with AI',
  subtitle: 'From screenshots to pixel-perfect components',
  themeColor: '#ec4899',
  totalDurationInFrames: 6009,
  scenes: [
    {
      id: 'design-code-title',
      type: 'title',
      durationInFrames: 255,
      narrationText:
        'In ninety seconds, you will learn how to turn any design, whether it is a Figma file, a screenshot, or a napkin sketch, into production-ready code.',
      headline: 'Design to Code with AI',
      body: 'From screenshots to pixel-perfect components',
    },
    {
      id: 'design-code-why',
      type: 'narration',
      durationInFrames: 1219,
      narrationText:
        "Every developer knows this pain. The designer hands you a beautiful mockup. Pixel-perfect spacing, carefully chosen colors, elegant interactions. And then you spend the next three hours squinting at Figma, eyeballing padding values, and writing CSS that gets close but never quite matches. You go back and forth: is that twelve pixels or sixteen? Is that font weight five hundred or six hundred? And the worst part is, this is not even creative work. It is translation. You are a human compiler converting visual intent into code. This is exactly the kind of tedious, detail-oriented translation that AI should be doing for you. And with Claude's vision capabilities, it finally can. You give Claude the design, and it gives you the code. Not a rough approximation. The actual, pixel-accurate implementation.",
      headline: 'The Translation Tax',
      visualType: 'icon',
    },
    {
      id: 'design-code-aha',
      type: 'code-demo',
      durationInFrames: 1115,
      narrationText:
        "Here is how it works. Claude can see images. That means you can paste a screenshot directly into your conversation, or in Claude Code, you can reference an image file. The magic is in how you frame the request. Do not just say, build this. Give Claude the context it needs. Tell it your component library. Tell it your CSS framework. Specify whether you want Tailwind or styled components or plain CSS. And here is the technique that makes the difference between a rough draft and a pixel-perfect result: be specific about what matters. Say, match the exact border radius, use the precise color values from the image, and preserve the spacing ratios. Claude's vision is remarkably good at extracting these details when you tell it to pay attention to them.",
      headline: 'Vision Meets Code Generation',
      codeSnippet:
        '> Here is a screenshot of our new\n  pricing page design.\n  [image: pricing-page.png]\n\n  Convert this to a React component\n  using our Tailwind setup. Match:\n  - Exact colors (extract from image)\n  - Spacing ratios precisely\n  - Border radius values\n  - Font sizes and weights\n  Use our existing Button and Card\n  components from src/components/ui\n\nClaude: I can see the design. Let me\n  extract the details:\n  - Primary: #6366f1 (indigo-500)\n  - Cards: 16px radius, 24px padding\n  - Heading: 36px/bold, Body: 16px\n  \n  Creating PricingPage.tsx...',
      visualType: 'terminal',
    },
    {
      id: 'design-code-demo',
      type: 'split',
      durationInFrames: 1291,
      narrationText:
        "Let me show you the two workflows that designers and developers are using right now. The first is screenshot-driven. You literally take a screenshot of any UI you like, paste it into Claude, and say, rebuild this with my stack. This works shockingly well for landing pages, dashboards, and standard UI patterns. The second workflow is Figma-driven. You export a frame from Figma, or even just screenshot it, and give Claude the specific design tokens: your color palette, your spacing scale, your typography system. This second approach gets you closer to production quality because Claude is not guessing your design system. It is working within it. Either way, the key is iteration. Claude's first pass gets you eighty to ninety percent there. Then you say, the card spacing is too tight, or, the hover state needs a subtle shadow. Two or three rounds and you have production-ready code.",
      headline: 'Two Workflows That Work',
      leftContent:
        'Screenshot-Driven:\n1. Screenshot any UI\n2. Paste into Claude\n3. Specify your stack\n4. Iterate on details\n\nBest for: landing pages,\ndashboards, inspiration',
      rightContent:
        'Figma-Driven:\n1. Export frame from Figma\n2. Include design tokens\n3. Reference your components\n4. Iterate to pixel-perfect\n\nBest for: production features,\ndesign system compliance',
      visualType: 'before-after',
    },
    {
      id: 'design-code-pattern',
      type: 'narration',
      durationInFrames: 1439,
      narrationText:
        "Here is the expert pattern that separates good results from great ones. Experts do not just throw a screenshot at Claude and hope. They layer their requests. First pass: get the layout and structure right. Forget about colors and fine details. Just nail the grid, the component hierarchy, and the responsive behavior. Second pass: dial in the visual details. Colors, typography, spacing, shadows, border radius. Third pass: add interactions. Hover states, transitions, animations, loading states. This layered approach works because Claude can focus on one concern at a time, and you can catch structural problems before you waste time polishing details. The other expert move is to always reference your existing components. Do not let Claude reinvent your button component. Tell it to use the one you already have. This is how you get code that actually fits into your codebase, not a standalone demo that looks nice but lives on an island.",
      headline: 'The Layered Approach',
      visualType: 'diagram',
    },
    {
      id: 'design-code-summary',
      type: 'summary',
      durationInFrames: 450,
      narrationText:
        'Claude turns visual designs into production code. Use screenshots or Figma exports, specify your stack and design tokens, and iterate in layers: structure first, then visuals, then interactions. Stop being a human compiler and let Claude handle the translation.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Claude vision extracts colors, spacing, and typography from images',
        'Always specify your stack, components, and design tokens',
        'Layer your requests: structure, then visuals, then interactions',
        'Reference existing components — do not let Claude reinvent your UI library',
      ],
    },
    {
      id: 'design-code-cta',
      type: 'title',
      durationInFrames: 240,
      narrationText:
        'Screenshot a UI you admire, paste it into Claude, and tell it your stack. In five minutes you will have a working component. Try it today.',
      headline: 'Try It Now',
      body: 'Screenshot a design and let Claude build it',
    },
  ],
};

export default script;
