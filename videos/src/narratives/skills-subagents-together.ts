import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 450 + 240 = 3000

const script: VideoScript = {
  id: 'skills-subagents-together',
  title: 'Skills + Subagents in Action',
  subtitle: 'Build pipelines that think',
  themeColor: '#c026d3',
  totalDurationInFrames: 5225,
  scenes: [
    {
      id: 'skills-subagents-title',
      type: 'title',
      durationInFrames: 253,
      narrationText:
        'In ninety seconds, you will see how to combine Skills and Subagents into automated pipelines that review code, debug issues, and deploy with confidence.',
      headline: 'Skills + Subagents in Action',
      body: 'Build pipelines that think',
    },
    {
      id: 'skills-subagents-why',
      type: 'narration',
      durationInFrames: 859,
      narrationText:
        "You have written a few Skills. You have played with Subagents. But here is where most people plateau: they use them in isolation. One Skill for code review. Another for writing tests. A Subagent here and there. It is like having a kitchen full of incredible chefs, but each one only makes one dish and they never talk to each other. The result? You are still the bottleneck. You are still the one orchestrating every step, copying output from one task and feeding it into the next. The real unlock is not individual Skills. It is composing them into pipelines where Claude handles the orchestration for you.",
      headline: 'The Isolation Trap',
      visualType: 'icon',
    },
    {
      id: 'skills-subagents-pipeline',
      type: 'code-demo',
      durationInFrames: 1121,
      narrationText:
        "Let me show you a code review pipeline that puts this all together. You create a Skill called review-pipeline that triggers on every pull request. Inside, it spins up three Subagents in parallel. The first Subagent runs your security-audit Skill, scanning for injection vulnerabilities, leaked secrets, and auth issues. The second runs your style-check Skill, verifying naming conventions, doc comments, and import ordering. The third runs your test-coverage Skill, checking that every new function has a corresponding test. Each Subagent works independently, follows its own recipe, and reports back. Claude collects all three reports and synthesizes them into one clean review. Three specialists, one unified output, zero manual coordination.",
      headline: 'The Code Review Pipeline',
      codeSnippet:
        '# .claude/skills/review-pipeline.md\n\n## Trigger\nWhen asked to review a PR or changeset.\n\n## Pipeline\nSpin up 3 subagents in parallel:\n\n### Subagent 1: Security Audit\n- Run skill: security-audit\n- Check injection, auth, secrets\n- Severity: critical / warning / info\n\n### Subagent 2: Style Check\n- Run skill: style-check\n- Verify naming, docs, imports\n- Auto-fix minor issues\n\n### Subagent 3: Test Coverage\n- Run skill: test-coverage\n- Flag untested public functions\n- Suggest test stubs\n\n## Output\nCombine all reports into one review\nwith sections: Security | Style | Tests',
      visualType: 'terminal',
    },
    {
      id: 'skills-subagents-debug',
      type: 'code-demo',
      durationInFrames: 1056,
      narrationText:
        "Now let me show you a debugging recipe that will change your life. You are staring at a failing test in CI. Instead of digging through logs yourself, you tell Claude: debug this failure. Your debug-pipeline Skill kicks in. The first Subagent reads the CI logs and extracts the actual error. The second Subagent traces the error back through the codebase, finding the exact commit and function that broke. The third Subagent checks if this is a known pattern, maybe a race condition or a flaky dependency, and suggests a fix based on how your team has handled similar issues before. In thirty seconds, you go from a red build to a clear diagnosis with a suggested fix. That is not a developer tool. That is a developer superpower.",
      headline: 'Debugging Recipes',
      codeSnippet:
        '# .claude/skills/debug-pipeline.md\n\n## Trigger\nWhen asked to debug a test failure\nor CI error.\n\n## Pipeline\nRun sequentially:\n\n### Step 1: Extract Error\n- Read CI logs or test output\n- Isolate the root error message\n- Identify the failing file and line\n\n### Step 2: Trace Origin\n- Git blame the failing lines\n- Find the commit that introduced\n  the change\n- Map the call stack\n\n### Step 3: Match & Fix\n- Compare against known patterns:\n  race conditions, env mismatches,\n  stale mocks\n- Suggest a fix using team patterns\n- Generate a regression test',
      visualType: 'terminal',
    },
    {
      id: 'skills-subagents-deploy',
      type: 'split',
      durationInFrames: 1215,
      narrationText:
        "Here is the expert pattern for deployment. Instead of a single deploy command and a prayer, you build a deploy-check pipeline. Before any code ships, Claude runs three parallel checks: one Subagent verifies there are no breaking API changes by comparing the current schema against production. Another checks that all environment variables referenced in the new code exist in your deployment config. And a third runs a quick smoke test against a preview environment. If any check fails, Claude blocks the deploy and tells you exactly what needs to be fixed. If everything passes, it gives you a green light with a confidence summary. Compare this to the old way: manually checking a mental checklist, hoping you did not forget anything, and deploying on a Friday because you were feeling brave. The pipeline approach turns deployment from a gamble into a process.",
      headline: 'Deploy with Confidence',
      leftContent:
        'Before: Manual checklist, hope nothing breaks, deploy and pray. Check API changes? Maybe. Environment variables? Probably forgot one. Smoke tests? No time.',
      rightContent:
        'After: Automated pipeline checks API compatibility, env vars, and smoke tests in parallel. Red means stop with a reason. Green means ship with confidence.',
      visualType: 'before-after',
    },
    {
      id: 'skills-subagents-summary',
      type: 'summary',
      durationInFrames: 451,
      narrationText:
        'The real power of Skills and Subagents is not using them alone. It is composing them into pipelines. Code review, debugging, deployment: each becomes a repeatable, automated process that catches what humans miss. Build your first pipeline today, and never go back to manual checklists.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Compose Skills into pipelines — do not use them in isolation',
        'Parallel Subagents handle review, security, and testing simultaneously',
        'Debugging recipes trace errors from logs to root cause to fix',
        'Deploy pipelines replace hope with automated confidence checks',
      ],
    },
    {
      id: 'skills-subagents-cta',
      type: 'title',
      durationInFrames: 270,
      narrationText:
        'Take your existing Skills and connect them. Build a code review pipeline that runs three checks in parallel. Once you see it work, you will never review code the old way again.',
      headline: 'Try It Now',
      body: 'Combine your Skills into your first pipeline',
    },
  ],
};

export default script;
