import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 450 + 240 = 3000

const script: VideoScript = {
  id: 'plugins-system',
  title: 'Plugins: Extend Claude Code',
  subtitle: 'Install, browse, and build your own',
  themeColor: '#84cc16',
  totalDurationInFrames: 5914,
  scenes: [
    {
      id: 'plugins-title',
      type: 'title',
      durationInFrames: 217,
      narrationText:
        'In ninety seconds, you will learn how plugins turn Claude Code from a single tool into an entire ecosystem you can customize and extend.',
      headline: 'Plugins: Extend Claude Code',
      body: 'Install, browse, and build your own',
    },
    {
      id: 'plugins-why',
      type: 'narration',
      durationInFrames: 1175,
      narrationText:
        "Think about the most powerful software you use every day. VS Code. Your browser. Your phone. What makes them powerful is not the app itself. It is the ecosystem of extensions and plugins built around them. VS Code without extensions is a text editor. VS Code with extensions is an entire development environment. Claude Code has the same potential. Out of the box, it is an incredible pair programmer. But every team has unique workflows, niche tools, and specific needs that no single product can anticipate. Maybe you need Claude to understand your company's design system. Maybe you want it to integrate with an internal deployment tool. Maybe you need a linter for a language Claude has never seen. Plugins are how you bridge that gap. They are how Claude Code evolves from a product into a platform.",
      headline: 'From Product to Platform',
      visualType: 'icon',
    },
    {
      id: 'plugins-install',
      type: 'code-demo',
      durationInFrames: 1237,
      narrationText:
        "Installing a plugin is dead simple. You use the slash install command inside Claude Code and point it at a package or repository. That is it. The plugin loads immediately and Claude gains new capabilities on the spot. Want to browse what is available? The slash plugins command shows you the full registry. You can filter by category: code quality, deployment, testing, documentation, whatever fits your workflow. Let me show you a concrete example. Say you install a database plugin. Suddenly, Claude can inspect your schema, suggest migrations, and even generate type-safe query builders that match your actual tables. Before the plugin, Claude could only guess at your database structure. After the plugin, it knows your schema as well as you do. One command, and Claude just got dramatically smarter about your specific stack.",
      headline: 'Install in One Command',
      codeSnippet:
        '# Browse available plugins\n> /plugins\n\nAvailable plugins:\n  db-schema     - Database inspection\n  figma-bridge  - Design token sync\n  k8s-helper    - Kubernetes workflows\n  api-docs      - OpenAPI generation\n  perf-check    - Performance analysis\n\n# Install a plugin\n> /install db-schema\n\nInstalled db-schema v2.1.0\nNew capabilities:\n  + Inspect database schema\n  + Generate type-safe queries\n  + Suggest migrations\n  + Validate foreign key refs\n\n> Show me the users table schema\n\nClaude: Reading your database...\n  users: id, email, name, created_at\n  with index on email (unique)',
      visualType: 'terminal',
    },
    {
      id: 'plugins-create',
      type: 'code-demo',
      durationInFrames: 1194,
      narrationText:
        "Here is where it gets really interesting: building your own plugin. A plugin is just a directory with a manifest file and one or more tool definitions. The manifest describes what the plugin does, what permissions it needs, and what commands it exposes to Claude. Let me walk you through a real example. Say your team has an internal style guide that lives in a wiki. You build a plugin called style-guide that fetches the latest rules from your wiki API and makes them available to Claude as context. The tool definition tells Claude when to use it: whenever someone asks about code style or naming conventions, fetch the latest guide. Now every developer on your team gets consistent style advice, and when the guide updates, the plugin pulls the new rules automatically. You did not have to update a prompt or edit a CLAUDE dot md file. The plugin handles it.",
      headline: 'Build Your Own Plugin',
      codeSnippet:
        '# my-plugin/manifest.json\n{\n  "name": "style-guide",\n  "version": "1.0.0",\n  "description": "Fetch team style\n    guide from internal wiki",\n  "permissions": ["network"],\n  "tools": [\n    {\n      "name": "get_style_rules",\n      "description": "Fetch latest\n        coding standards from wiki",\n      "trigger": "When asked about\n        code style or conventions",\n      "handler": "tools/fetch-guide.ts"\n    }\n  ]\n}\n\n# tools/fetch-guide.ts\nexport async function handler() {\n  const rules = await fetch(\n    "https://wiki.internal/api/style"\n  );\n  return rules.json();\n}',
      visualType: 'terminal',
    },
    {
      id: 'plugins-pattern',
      type: 'narration',
      durationInFrames: 1385,
      narrationText:
        "Here is how experts think about the plugin ecosystem. They build plugins for three categories. First, connectors: plugins that bridge Claude to internal tools your team already uses. Your deployment system, your monitoring dashboard, your feature flag service. These are the plugins that save the most time because they eliminate context-switching. Second, knowledge plugins: these inject domain-specific knowledge that Claude would not otherwise have. Your API documentation, your architecture decisions, your compliance requirements. They turn Claude from a general assistant into a team member who actually understands your business. And third, workflow plugins: these automate multi-step processes specific to your organization. Your release checklist, your incident response playbook, your onboarding guide. The best teams treat plugins as institutional knowledge that compounds over time. Every plugin you build makes Claude smarter for everyone on the team.",
      headline: 'The Plugin Playbook',
      visualType: 'diagram',
    },
    {
      id: 'plugins-summary',
      type: 'summary',
      durationInFrames: 450,
      narrationText:
        'Plugins turn Claude Code into a platform you can customize endlessly. Install community plugins in one command. Build your own to connect internal tools and encode team knowledge. Every plugin you create makes Claude smarter for everyone.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Plugins extend Claude Code with new capabilities and integrations',
        'Install with one command — browse the registry to find what you need',
        'Build your own: a manifest file plus tool definitions is all it takes',
        'Three categories: connectors, knowledge, and workflow plugins',
      ],
    },
    {
      id: 'plugins-cta',
      type: 'title',
      durationInFrames: 256,
      narrationText:
        'Browse the plugin registry and install one that fits your stack. Then think about one internal tool your team uses daily and build a plugin for it. It is easier than you think.',
      headline: 'Try It Now',
      body: 'Install your first plugin or build one for your team',
    },
  ],
};

export default script;
