import { VideoScript } from '../types';

// Frame budget: 30fps, target ~100 seconds = 3000 frames
// Title: 150 | Scene1: 540 | Scene2: 540 | Scene3: 540 | Scene4: 540 | Summary: 450 | CTA: 240
// Total: 150 + 540 + 540 + 540 + 540 + 450 + 240 = 3000

const script: VideoScript = {
  id: 'prompt-basics',
  title: 'Prompt Engineering Fundamentals',
  subtitle: 'Talk to AI like a human',
  themeColor: '#4ECDC4',
  totalDurationInFrames: 5184,
  scenes: [
    {
      id: 'prompt-basics-title',
      type: 'title',
      durationInFrames: 186,
      narrationText:
        'In ninety seconds, you will learn the one framework that turns mediocre AI results into genuinely useful ones.',
      headline: 'Prompt Engineering Fundamentals',
      body: 'Talk to AI like a human',
    },
    {
      id: 'prompt-basics-why',
      type: 'narration',
      durationInFrames: 1182,
      narrationText:
        "Here is a question most people never think to ask: why do some people get incredible results from Claude while others get generic, unhelpful responses? It is not intelligence. It is not some secret trick. It is the same reason some people get great work from their teams and others do not. Delegation. Think about it. If you walked up to a brilliant new hire and said, make me a presentation, what would you get? Something generic and probably useless. But if you said, I am presenting our Q3 results to the board on Thursday, they care most about customer retention, here is last quarter's deck for reference, create a ten-slide presentation that leads with the retention wins, now you would get something great. AI works the exact same way. The quality of the output is directly proportional to the quality of the input.",
      headline: 'Why Most People Get Mediocre Results',
      visualType: 'icon',
    },
    {
      id: 'prompt-basics-aha',
      type: 'split',
      durationInFrames: 1011,
      narrationText:
        "Here is the framework that changes everything. Three letters: C, T, F. Context, Task, Format. Context is who you are and what situation you are in. Task is what you specifically need done. Format is how you want the output structured. That is it. No magic words. No secret incantations. Just those three things. When your prompt has clear context, a specific task, and a defined format, Claude has everything it needs to give you a genuinely useful response. Most bad prompts are missing at least two of these three elements. Once you see this pattern, you cannot unsee it. Every great prompt follows it, whether the person writing it knows it or not.",
      headline: 'The CTF Framework',
      leftContent:
        'Context: Who you are, what situation\nTask: What you need done specifically\nFormat: How the output should look',
      rightContent:
        'Missing context = generic answers\nMissing task = rambling responses\nMissing format = unusable output',
      visualType: 'diagram',
    },
    {
      id: 'prompt-basics-demo',
      type: 'code-demo',
      durationInFrames: 1137,
      narrationText:
        "Let me show you this in action with a real before and after. Here is the before prompt: write me an email about the project delay. What does Claude do with this? It writes a generic, bland email that you would never actually send. Now here is the same request with the CTF framework. Context: I am a project manager and my client is a hospital CTO who values transparency. Task: Write an email explaining our two-week delay on the patient portal migration, including what caused it and our mitigation plan. Format: Keep it under two hundred words, professional but warm tone, with a bullet list of next steps. Same task. Wildly different output. The second version gives you an email you can actually copy, personalize for thirty seconds, and send.",
      headline: 'Before and After',
      codeSnippet:
        '# BEFORE (no framework)\n"Write me an email about the\n project delay"\n\n=> Generic, unusable email\n\n# AFTER (CTF framework)\n"Context: I\'m a PM. My client is a\n hospital CTO who values transparency.\n\n Task: Write an email explaining our\n 2-week delay on the patient portal\n migration. Include cause and\n mitigation plan.\n\n Format: Under 200 words. Professional\n but warm. Bullet list of next steps."\n\n=> Email you can actually send',
      visualType: 'before-after',
    },
    {
      id: 'prompt-basics-pattern',
      type: 'narration',
      durationInFrames: 978,
      narrationText:
        "Here is how the best prompt engineers actually think. They do not memorize templates. They think in terms of delegation. Before they type anything, they ask themselves: if I were handing this task to a smart intern on their first day, what would they need to know? They would need to know the background, the specific deliverable, and what good looks like. That is it. That is the entire mental model. And here is the beautiful thing: you probably already know how to do this. You delegate to humans all the time. The only shift is applying that same skill to AI. Stop thinking about prompt engineering as a technical skill. Start thinking about it as a communication skill you already have.",
      headline: 'Think Like a Delegator',
      visualType: 'diagram',
    },
    {
      id: 'prompt-basics-summary',
      type: 'summary',
      durationInFrames: 450,
      narrationText:
        'Remember the CTF framework: Context, Task, Format. Think like a delegator, not a programmer. The better you communicate what you need, the better Claude performs. It is not about magic words. It is about clear communication.',
      headline: 'Key Takeaways',
      bulletPoints: [
        'Use the CTF framework: Context, Task, Format',
        'Bad prompts are missing context, not magic words',
        'Think: what would a smart intern need to know?',
        'Prompt engineering is a communication skill, not a technical one',
      ],
    },
    {
      id: 'prompt-basics-cta',
      type: 'title',
      durationInFrames: 240,
      narrationText:
        'Take your last mediocre prompt and rewrite it with Context, Task, and Format. You will notice the difference immediately.',
      headline: 'Try It Now',
      body: 'Rewrite one prompt with CTF and see the difference',
    },
  ],
};

export default script;
