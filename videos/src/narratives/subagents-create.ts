import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Scene5: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 540 + 450 + 240 = 3540

const script: VideoScript = {
  id: 'subagents-create',
  title: 'Creating Custom Subagents',
  subtitle: 'Build your own specialist team',
  themeColor: '#f43f5e',
  totalDurationInFrames: 5399,
  scenes: [
    {
      id: 'subagents-create-title',
      type: 'title',
      durationInFrames: 258,
      narrationText:
        'In the next ninety seconds, you will learn how to create your own custom subagents that work exactly the way you want, with the tools you choose and the instructions you define.',
      headline: 'Creating Custom Subagents',
      body: 'Build your own specialist team',
    },
    {
      id: 'subagents-create-why',
      type: 'narration',
      durationInFrames: 991,
      narrationText:
        "The built-in subagents are great, but here is the thing: they are generalists. They do not know about your specific architecture, your team conventions, or the weird edge cases in your codebase. Imagine you want a subagent that specifically reviews database migrations against your company's standards. Or one that audits API endpoints for your security checklist. Or one that writes tests following your exact testing patterns. The built-in agents cannot do any of that out of the box. You need custom subagents. And the beautiful part is that creating one is almost exactly like writing a skill file. If you can write markdown, you can build a specialist agent that knows your domain inside and out.",
      headline: 'Why Custom Subagents',
      visualType: 'icon',
    },
    {
      id: 'subagents-create-command',
      type: 'code-demo',
      durationInFrames: 972,
      narrationText:
        "Let us start with the agents command. Type slash agents in Claude Code and you will see all your configured agents. To create a new one, you make a markdown file in your dot claude slash agents directory. The format is straightforward. At the top, frontmatter with the agent's name, a description, and its configuration. Then a markdown body with the system instructions. Here is the critical part: the name you give it is how you will invoke it. If you name it migration-reviewer, Claude can spin it up as a subagent whenever migration review is needed. The description helps Claude understand when to delegate to this agent automatically. Think of it as writing a job description for a new hire.",
      headline: 'The /agents Command',
      codeSnippet:
        '> /agents\n\nConfigured agents:\n  - migration-reviewer\n  - api-auditor\n  - test-writer\n\n# Creating a new agent:\n# .claude/agents/migration-reviewer.md\n---\nname: migration-reviewer\ndescription: Reviews database\n  migrations for safety and\n  compliance\n---\n\n## Role\nYou are a database migration\nspecialist...',
      visualType: 'terminal',
    },
    {
      id: 'subagents-create-anatomy',
      type: 'code-demo',
      durationInFrames: 1204,
      narrationText:
        "Let me walk you through a complete custom subagent file. This is a test writer agent. The frontmatter declares the name, description, and crucially, the allowed tools. This agent can read files and write files but cannot run bash commands. That is intentional. You do not want your test writer accidentally running tests and getting into a loop. The body contains the system instructions. You tell it your testing framework, your file naming conventions, your assertion style, everything. Notice how specific this is. It is not just write tests. It says: use vitest, follow the arrange act assert pattern, put test files next to source files with a dot test dot ts extension, and mock external dependencies. This level of specificity is what turns a generic agent into your team's test-writing specialist.",
      headline: 'Anatomy of a Custom Subagent',
      codeSnippet:
        '# .claude/agents/test-writer.md\n---\nname: test-writer\ndescription: Writes unit tests\n  following team conventions\nallowed_tools:\n  - read\n  - write\n  - edit\n  - grep\n  - glob\n---\n\n## Role\nYou write unit tests for our\nTypeScript codebase.\n\n## Conventions\n- Framework: vitest\n- Pattern: Arrange / Act / Assert\n- Location: co-located, *.test.ts\n- Mocking: vi.mock for externals\n- Coverage: test happy path, edge\n  cases, and error states\n\n## Rules\n- Never import from test utilities\n  that do not exist yet\n- Always check the source file first\n  to understand the function signature',
      visualType: 'terminal',
    },
    {
      id: 'subagents-create-restrict',
      type: 'split',
      durationInFrames: 1191,
      narrationText:
        "Tool restrictions on subagents deserve special attention because they are your primary safety mechanism. On the left, an unrestricted agent. It can do anything: read, write, run commands, access the network. This is fine for exploration, but dangerous for automated tasks. On the right, a properly restricted agent. Your security auditor can only read and grep. It can analyze everything but change nothing. Your test writer can read and write but not run bash. Your deployment checker can read files and run a specific set of commands but cannot write to the codebase. The principle is simple: give each agent the minimum tools it needs to do its job. Nothing more. This is not just about safety. Restricted agents actually produce better results because they cannot get distracted by capabilities outside their scope.",
      headline: 'Tool Restrictions as Guardrails',
      leftContent:
        'Unrestricted Agent:\nallowed_tools: [all]\n\n- Can read anything\n- Can write anything\n- Can run any command\n- Can access network\n\nFlexible but risky.',
      rightContent:
        'Restricted Agents:\n\nSecurity Auditor:\n  tools: [read, grep]\n  (analyze only)\n\nTest Writer:\n  tools: [read, write, edit]\n  (no shell access)\n\nDeploy Checker:\n  tools: [read, bash]\n  (read + run checks)',
      visualType: 'before-after',
    },
    {
      id: 'subagents-create-summary',
      type: 'summary',
      durationInFrames: 505,
      narrationText:
        'Custom subagents are markdown files with a name, description, tool restrictions, and detailed instructions. Use slash agents to manage them. Restrict tools to minimum required. Write instructions like a job description: specific, actionable, and opinionated. Your agents will be as good as the instructions you give them.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Custom agents live in .claude/agents/ as markdown files',
        'Use /agents to list and manage your configured agents',
        'Tool restrictions are your primary safety mechanism',
        'Write specific, opinionated instructions — not vague guidelines',
      ],
    },
    {
      id: 'subagents-create-cta',
      type: 'title',
      durationInFrames: 278,
      narrationText:
        'Think about one repetitive task on your team that requires specialized knowledge. Write a custom subagent for it today. Start with tight tool restrictions and expand only if needed.',
      headline: 'Try It Now',
      body: 'Create a custom subagent for a task your team repeats weekly',
    },
  ],
};

export default script;
