import { VideoScript } from '../types';

// Frame budget: 30fps, target ~102 seconds = 3060 frames
// Title: 150 | Scene1: 540 | Scene2: 570 | Scene3: 540 | Scene4: 540 | Summary: 480 | CTA: 240
// Total: 150 + 540 + 570 + 540 + 540 + 480 + 240 = 3060

const script: VideoScript = {
  id: 'mcp-intro',
  title: 'Model Context Protocol',
  subtitle: 'Connect Claude to everything',
  themeColor: '#FF6B6B',
  totalDurationInFrames: 5400,
  scenes: [
    {
      id: 'mcp-title',
      type: 'title',
      durationInFrames: 219,
      narrationText:
        'In ninety seconds, you will understand how MCP turns Claude from a brain in a jar into an AI that can actually do things in the real world.',
      headline: 'Model Context Protocol',
      body: 'Connect Claude to everything',
    },
    {
      id: 'mcp-why',
      type: 'narration',
      durationInFrames: 966,
      narrationText:
        "Here is the fundamental limitation of every AI model. Claude is incredibly smart, but out of the box, it is trapped in a box. It cannot check your database. It cannot read your Jira tickets. It cannot look at your production logs or query your analytics dashboard. You have to copy and paste everything in, and then copy and paste the results back out. It is like having a brilliant advisor locked in a room with no phone, no computer, no internet. You keep running back and forth, sliding papers under the door. That is how most people use AI today: as a brain in a jar. But what if you could give Claude hands? What if it could reach out and interact with your tools directly?",
      headline: 'The Brain in a Jar Problem',
      visualType: 'icon',
    },
    {
      id: 'mcp-aha',
      type: 'narration',
      durationInFrames: 1223,
      narrationText:
        "That is exactly what the Model Context Protocol does. MCP is like USB-C for AI. Think about what USB-C did for hardware. Before USB-C, every device had its own proprietary connector. Your phone, your laptop, your camera, your headphones, all different cables. USB-C created one standard that works with everything. MCP does the same thing for AI. It is an open standard that lets Claude connect to any tool, any data source, any service, through one consistent interface. A developer writes an MCP server for Slack, and suddenly Claude can read and send messages. Someone else writes one for PostgreSQL, and Claude can query your database. GitHub, Google Drive, your internal APIs, they all plug in the same way. One protocol to connect them all.",
      headline: 'USB-C for AI',
      visualType: 'diagram',
    },
    {
      id: 'mcp-demo',
      type: 'code-demo',
      durationInFrames: 1059,
      narrationText:
        "Let me show you how simple this is. You configure MCP servers in a JSON file. Here is a real example. You define a GitHub server that gives Claude access to your repositories: it can read issues, create pull requests, check CI status. You add a Postgres server so Claude can query your database directly. And maybe a Slack server so it can post updates. Each server entry is just a command and some arguments. Once configured, Claude automatically discovers what tools are available and can use them naturally. You do not have to tell Claude to use the GitHub tool. You just say, what are the open bugs assigned to me this sprint, and Claude figures out that it needs to query GitHub, does it, and gives you the answer.",
      headline: 'Configuring MCP Servers',
      codeSnippet:
        '// .claude/mcp_servers.json\n{\n  "mcpServers": {\n    "github": {\n      "command": "npx",\n      "args": [\n        "-y", "@anthropic/mcp-github"\n      ],\n      "env": {\n        "GITHUB_TOKEN": "ghp_xxx"\n      }\n    },\n    "postgres": {\n      "command": "npx",\n      "args": [\n        "-y", "@anthropic/mcp-postgres",\n        "postgresql://localhost/mydb"\n      ]\n    },\n    "slack": {\n      "command": "npx",\n      "args": [\n        "-y", "@anthropic/mcp-slack"\n      ]\n    }\n  }\n}',
      visualType: 'terminal',
    },
    {
      id: 'mcp-pattern',
      type: 'narration',
      durationInFrames: 1213,
      narrationText:
        "Here is how experts think about MCP. The pattern is: tools extend capabilities infinitely. Every MCP server you add is like giving Claude a new superpower. And the real insight is that this compounds. Claude with GitHub access is useful. Claude with GitHub plus your database plus Slack is transformative. Now you can say things like: look at the latest error in our logs, find the related GitHub issue, draft a fix, and post a summary in the engineering Slack channel. One sentence, four different tools, all orchestrated automatically. And because MCP is an open standard, the ecosystem keeps growing. The community is building servers for everything: Notion, Linear, Figma, AWS, you name it. The more servers that exist, the more capable Claude becomes. That is the power of an open protocol.",
      headline: 'Tools Extend Capabilities Infinitely',
      visualType: 'diagram',
    },
    {
      id: 'mcp-summary',
      type: 'summary',
      durationInFrames: 480,
      narrationText:
        'MCP is USB-C for AI. It connects Claude to your tools through one open standard. One JSON config file, and Claude can reach any service you use. The more you connect, the more powerful it becomes.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'MCP is an open standard: USB-C for AI connections',
        'One JSON config connects Claude to any tool or data source',
        'Claude auto-discovers available tools and uses them naturally',
        'Capabilities compound — each new server multiplies what Claude can do',
      ],
    },
    {
      id: 'mcp-cta',
      type: 'title',
      durationInFrames: 240,
      narrationText:
        'Pick one tool your team uses every day and connect it to Claude with MCP. Start with GitHub or your database. You will wonder how you worked without it.',
      headline: 'Try It Now',
      body: 'Connect your first MCP server today',
    },
  ],
};

export default script;
