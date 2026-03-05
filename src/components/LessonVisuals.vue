<script setup>
import { computed } from 'vue'

const props = defineProps({
  lessonId: { type: String, required: true },
  themeColor: { type: String, default: '#F5A623' },
  size: { type: Number, default: 200 },
})

const c = computed(() => props.themeColor)
const s = computed(() => props.size)
</script>

<template>
  <div class="lesson-visual" :style="{ width: s + 'px', height: s + 'px' }">

    <!-- intro-claude: Chat bubbles between user and Claude -->
    <svg v-if="lessonId === 'intro-claude'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <circle cx="45" cy="100" r="28" :fill="c" opacity="0.12" />
      <circle cx="45" cy="100" r="18" fill="#555" opacity="0.3" />
      <path d="M38 95 h14 M38 100 h10 M38 105 h12" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity="0.7" />
      <circle cx="155" cy="100" r="28" :fill="c" opacity="0.15" />
      <circle cx="155" cy="100" r="18" :fill="c" opacity="0.6" />
      <path d="M149 97 l4 4 8-8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <g class="bubble-flow">
        <rect x="78" y="62" width="44" height="22" rx="11" :fill="c" opacity="0.2" class="bubble-1" />
        <rect x="82" y="116" width="36" height="18" rx="9" :fill="c" opacity="0.15" class="bubble-2" />
        <rect x="75" y="88" width="50" height="24" rx="12" :fill="c" opacity="0.25" class="bubble-3" />
      </g>
      <path d="M73 100 L127 100" :stroke="c" stroke-width="1" stroke-dasharray="4 3" opacity="0.2" class="flow-line" />
    </svg>

    <!-- artifacts-intro: Browser window with blocks assembling -->
    <svg v-else-if="lessonId === 'artifacts-intro'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <rect x="25" y="30" width="150" height="140" rx="8" stroke="#555" stroke-width="1.5" fill="#1a1a2e" opacity="0.5" />
      <rect x="25" y="30" width="150" height="20" rx="8" fill="#555" opacity="0.2" />
      <circle cx="40" cy="40" r="3" fill="#ff5f57" />
      <circle cx="52" cy="40" r="3" fill="#ffbd2e" />
      <circle cx="64" cy="40" r="3" fill="#28c940" />
      <rect x="45" y="65" width="30" height="25" rx="4" :fill="c" opacity="0.3" class="block-1" />
      <rect x="85" y="65" width="30" height="25" rx="4" :fill="c" opacity="0.4" class="block-2" />
      <rect x="125" y="65" width="30" height="25" rx="4" :fill="c" opacity="0.5" class="block-3" />
      <rect x="45" y="100" width="50" height="30" rx="4" :fill="c" opacity="0.2" class="block-4" />
      <rect x="105" y="100" width="50" height="30" rx="4" :fill="c" opacity="0.35" class="block-5" />
      <rect x="45" y="140" width="110" height="16" rx="4" :fill="c" opacity="0.15" class="block-6" />
    </svg>

    <!-- projects-intro: Folders flowing into workspace -->
    <svg v-else-if="lessonId === 'projects-intro'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <g class="folder-1">
        <path d="M20 60 h25 l5-8 h20 v-2 H50 l-5 8 H20 z" :fill="c" opacity="0.3" />
        <rect x="20" y="60" width="50" height="35" rx="3" :fill="c" opacity="0.2" />
      </g>
      <g class="folder-2">
        <path d="M20 110 h25 l5-8 h20 v-2 H50 l-5 8 H20 z" :fill="c" opacity="0.4" />
        <rect x="20" y="110" width="50" height="35" rx="3" :fill="c" opacity="0.25" />
      </g>
      <path d="M80 85 L115 95 M80 130 L115 110" :stroke="c" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.3" class="flow-arrows" />
      <rect x="115" y="65" width="70" height="90" rx="6" :fill="c" opacity="0.1" stroke="#555" stroke-width="1" />
      <rect x="125" y="80" width="50" height="8" rx="2" :fill="c" opacity="0.3" />
      <rect x="125" y="95" width="40" height="8" rx="2" :fill="c" opacity="0.2" />
      <rect x="125" y="110" width="45" height="8" rx="2" :fill="c" opacity="0.25" />
      <rect x="125" y="125" width="35" height="8" rx="2" :fill="c" opacity="0.15" />
    </svg>

    <!-- claude-code-beginner: Terminal with typing cursor -->
    <svg v-else-if="lessonId === 'claude-code-beginner'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <rect x="20" y="30" width="160" height="140" rx="8" fill="#0d1117" stroke="#333" stroke-width="1" />
      <rect x="20" y="30" width="160" height="22" rx="8" fill="#1a1a2e" />
      <circle cx="35" cy="41" r="4" fill="#ff5f57" />
      <circle cx="48" cy="41" r="4" fill="#ffbd2e" />
      <circle cx="61" cy="41" r="4" fill="#28c940" />
      <text x="34" y="72" font-family="monospace" font-size="10" fill="#6b6b80">$</text>
      <text x="44" y="72" font-family="monospace" font-size="10" :fill="c" class="type-line-1">claude</text>
      <rect x="34" y="82" width="80" height="8" rx="2" :fill="c" opacity="0.15" class="code-line-1" />
      <rect x="34" y="96" width="100" height="8" rx="2" :fill="c" opacity="0.1" class="code-line-2" />
      <rect x="34" y="110" width="60" height="8" rx="2" :fill="c" opacity="0.12" class="code-line-3" />
      <rect x="34" y="124" width="90" height="8" rx="2" :fill="c" opacity="0.08" class="code-line-4" />
      <rect x="34" y="142" width="2" height="12" :fill="c" opacity="0.8" class="cursor-blink" />
    </svg>

    <!-- claude-code-engineering: Blueprint with connected modules -->
    <svg v-else-if="lessonId === 'claude-code-engineering'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <rect x="60" y="30" width="80" height="35" rx="6" :stroke="c" stroke-width="1.5" fill="none" opacity="0.5" />
      <text x="100" y="52" text-anchor="middle" font-size="9" :fill="c" opacity="0.7" font-weight="600">API</text>
      <rect x="15" y="100" width="60" height="30" rx="5" :stroke="c" stroke-width="1.5" fill="none" opacity="0.4" />
      <text x="45" y="119" text-anchor="middle" font-size="8" :fill="c" opacity="0.6">Auth</text>
      <rect x="125" y="100" width="60" height="30" rx="5" :stroke="c" stroke-width="1.5" fill="none" opacity="0.4" />
      <text x="155" y="119" text-anchor="middle" font-size="8" :fill="c" opacity="0.6">DB</text>
      <rect x="60" y="155" width="80" height="30" rx="5" :stroke="c" stroke-width="1.5" fill="none" opacity="0.4" />
      <text x="100" y="174" text-anchor="middle" font-size="8" :fill="c" opacity="0.6">Services</text>
      <line x1="80" y1="65" x2="45" y2="100" :stroke="c" stroke-width="1" opacity="0.3" class="module-conn" />
      <line x1="120" y1="65" x2="155" y2="100" :stroke="c" stroke-width="1" opacity="0.3" class="module-conn" />
      <line x1="45" y1="130" x2="80" y2="155" :stroke="c" stroke-width="1" opacity="0.3" class="module-conn" />
      <line x1="155" y1="130" x2="120" y2="155" :stroke="c" stroke-width="1" opacity="0.3" class="module-conn" />
      <circle cx="100" cy="48" r="3" :fill="c" opacity="0.5" class="node-pulse" />
    </svg>

    <!-- claude-code-context: Token funnel fading in middle -->
    <svg v-else-if="lessonId === 'claude-code-context'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <path d="M40 40 L160 40 L130 100 L160 160 L40 160 L70 100 Z" :stroke="c" stroke-width="1.5" fill="none" opacity="0.2" />
      <g class="token-flow">
        <rect x="55" y="50" width="20" height="8" rx="4" :fill="c" opacity="0.5" class="token-1" />
        <rect x="80" y="50" width="25" height="8" rx="4" :fill="c" opacity="0.45" class="token-2" />
        <rect x="110" y="50" width="18" height="8" rx="4" :fill="c" opacity="0.4" class="token-3" />
        <rect x="70" y="65" width="22" height="8" rx="4" :fill="c" opacity="0.35" class="token-4" />
        <rect x="98" y="65" width="28" height="8" rx="4" :fill="c" opacity="0.3" class="token-5" />
      </g>
      <rect x="75" y="92" width="50" height="16" rx="4" :fill="c" opacity="0.06" />
      <text x="100" y="103" text-anchor="middle" font-size="7" :fill="c" opacity="0.2">...fading...</text>
      <g class="token-out">
        <rect x="60" y="130" width="25" height="8" rx="4" :fill="c" opacity="0.4" class="token-6" />
        <rect x="90" y="130" width="20" height="8" rx="4" :fill="c" opacity="0.35" class="token-7" />
        <rect x="115" y="130" width="22" height="8" rx="4" :fill="c" opacity="0.3" class="token-8" />
      </g>
    </svg>

    <!-- claude-code-ai-workflow: Split screen IDE + terminal -->
    <svg v-else-if="lessonId === 'claude-code-ai-workflow'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <rect x="15" y="35" width="80" height="130" rx="6" fill="#1a1a2e" stroke="#444" stroke-width="1" />
      <rect x="15" y="35" width="80" height="16" rx="6" fill="#252540" />
      <text x="55" y="47" text-anchor="middle" font-size="7" fill="#888">editor.ts</text>
      <rect x="22" y="58" width="40" height="5" rx="2" :fill="c" opacity="0.2" />
      <rect x="22" y="68" width="55" height="5" rx="2" :fill="c" opacity="0.15" />
      <rect x="22" y="78" width="35" height="5" rx="2" :fill="c" opacity="0.12" />
      <rect x="22" y="88" width="60" height="5" rx="2" :fill="c" opacity="0.18" />
      <rect x="22" y="98" width="45" height="5" rx="2" :fill="c" opacity="0.1" />
      <rect x="105" y="35" width="80" height="130" rx="6" fill="#0d1117" stroke="#444" stroke-width="1" />
      <rect x="105" y="35" width="80" height="16" rx="6" fill="#1a1a2e" />
      <text x="145" y="47" text-anchor="middle" font-size="7" fill="#888">terminal</text>
      <text x="112" y="62" font-family="monospace" font-size="7" fill="#6b6b80">$</text>
      <text x="120" y="62" font-family="monospace" font-size="7" :fill="c" opacity="0.6">npm test</text>
      <rect x="112" y="70" width="55" height="4" rx="2" fill="#28c940" opacity="0.15" />
      <rect x="112" y="80" width="45" height="4" rx="2" fill="#28c940" opacity="0.1" />
      <text x="112" y="98" font-family="monospace" font-size="7" fill="#28c940" opacity="0.5">PASS</text>
      <path d="M95 75 L105 75" :stroke="c" stroke-width="2" stroke-dasharray="2 2" opacity="0.4" class="sync-line" />
      <path d="M95 100 L105 100" :stroke="c" stroke-width="2" stroke-dasharray="2 2" opacity="0.4" class="sync-line" />
    </svg>

    <!-- prompt-basics: XML tags framing content -->
    <svg v-else-if="lessonId === 'prompt-basics'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <text x="30" y="50" font-family="monospace" font-size="11" :fill="c" opacity="0.5" class="tag-open">&lt;prompt&gt;</text>
      <rect x="40" y="60" width="120" height="60" rx="6" :fill="c" opacity="0.08" />
      <rect x="50" y="72" width="80" height="6" rx="3" :fill="c" opacity="0.2" />
      <rect x="50" y="84" width="100" height="6" rx="3" :fill="c" opacity="0.15" />
      <rect x="50" y="96" width="60" height="6" rx="3" :fill="c" opacity="0.12" />
      <text x="30" y="138" font-family="monospace" font-size="11" :fill="c" opacity="0.5" class="tag-close">&lt;/prompt&gt;</text>
      <path d="M100 148 L100 160 L130 160" :stroke="c" stroke-width="1.5" opacity="0.3" marker-end="url(#arrow)" class="output-arrow" />
      <rect x="135" y="150" width="45" height="22" rx="4" :fill="c" opacity="0.2" class="output-box" />
      <rect x="140" y="157" width="30" height="4" rx="2" :fill="c" opacity="0.3" />
      <defs>
        <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0 0 L6 3 L0 6" :fill="c" opacity="0.3" />
        </marker>
      </defs>
    </svg>

    <!-- extended-thinking: Brain with thought bubbles -->
    <svg v-else-if="lessonId === 'extended-thinking'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <ellipse cx="100" cy="100" rx="40" ry="36" :fill="c" opacity="0.12" />
      <path d="M70 90 Q75 70 95 72 Q105 55 120 70 Q140 68 135 88 Q148 95 138 108 Q142 125 125 122 Q115 138 95 130 Q78 140 70 125 Q55 118 62 105 Q52 90 70 90 Z" :stroke="c" stroke-width="1.5" fill="none" opacity="0.4" />
      <circle cx="145" cy="60" r="8" :fill="c" opacity="0.15" class="thought-1" />
      <circle cx="160" cy="42" r="12" :fill="c" opacity="0.1" class="thought-2" />
      <circle cx="155" cy="140" r="6" :fill="c" opacity="0.12" class="thought-3" />
      <circle cx="50" cy="55" r="5" :fill="c" opacity="0.1" class="thought-4" />
      <path d="M90 85 Q100 75 110 85" :stroke="c" stroke-width="1" opacity="0.3" />
      <path d="M85 100 Q100 90 115 100" :stroke="c" stroke-width="1" opacity="0.25" />
      <path d="M88 112 Q100 105 112 112" :stroke="c" stroke-width="1" opacity="0.2" />
    </svg>

    <!-- prompt-design-to-code: Design morphing into code -->
    <svg v-else-if="lessonId === 'prompt-design-to-code'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <rect x="15" y="45" width="70" height="110" rx="6" :stroke="c" stroke-width="1.5" fill="none" opacity="0.3" />
      <rect x="22" y="55" width="56" height="30" rx="3" :fill="c" opacity="0.1" />
      <circle cx="50" cy="70" r="8" :fill="c" opacity="0.15" />
      <rect x="22" y="92" width="56" height="6" rx="3" :fill="c" opacity="0.12" />
      <rect x="22" y="104" width="40" height="6" rx="3" :fill="c" opacity="0.08" />
      <rect x="22" y="116" width="56" height="20" rx="3" :fill="c" opacity="0.15" />
      <path d="M92 100 L108 100" :stroke="c" stroke-width="2" opacity="0.3" class="morph-arrow" />
      <polygon points="108,95 118,100 108,105" :fill="c" opacity="0.3" class="morph-arrow" />
      <rect x="120" y="45" width="65" height="110" rx="6" fill="#0d1117" stroke="#444" stroke-width="1" />
      <text x="127" y="62" font-family="monospace" font-size="8" :fill="c" opacity="0.5">&lt;div&gt;</text>
      <text x="133" y="76" font-family="monospace" font-size="7" :fill="c" opacity="0.35">&lt;h1/&gt;</text>
      <text x="133" y="90" font-family="monospace" font-size="7" :fill="c" opacity="0.3">&lt;p/&gt;</text>
      <text x="133" y="104" font-family="monospace" font-size="7" :fill="c" opacity="0.25">&lt;img/&gt;</text>
      <text x="133" y="118" font-family="monospace" font-size="7" :fill="c" opacity="0.3">&lt;btn/&gt;</text>
      <text x="127" y="140" font-family="monospace" font-size="8" :fill="c" opacity="0.5">&lt;/div&gt;</text>
    </svg>

    <!-- skills-overview: Toolbox with skill cards floating out -->
    <svg v-else-if="lessonId === 'skills-overview'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <rect x="50" y="100" width="100" height="70" rx="6" :stroke="c" stroke-width="1.5" fill="none" opacity="0.3" />
      <rect x="70" y="95" width="60" height="10" rx="3" :fill="c" opacity="0.2" />
      <circle cx="100" cy="100" r="4" :fill="c" opacity="0.4" />
      <rect x="30" y="40" width="40" height="25" rx="5" :fill="c" opacity="0.2" class="skill-card-1" />
      <text x="50" y="56" text-anchor="middle" font-size="7" :fill="c" opacity="0.5">review</text>
      <rect x="80" y="30" width="40" height="25" rx="5" :fill="c" opacity="0.25" class="skill-card-2" />
      <text x="100" y="46" text-anchor="middle" font-size="7" :fill="c" opacity="0.5">deploy</text>
      <rect x="130" y="40" width="40" height="25" rx="5" :fill="c" opacity="0.2" class="skill-card-3" />
      <text x="150" y="56" text-anchor="middle" font-size="7" :fill="c" opacity="0.5">test</text>
    </svg>

    <!-- skills-create: SKILL.md file being written -->
    <svg v-else-if="lessonId === 'skills-create'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <rect x="40" y="25" width="120" height="150" rx="6" fill="#1a1a2e" stroke="#444" stroke-width="1" />
      <text x="55" y="48" font-family="monospace" font-size="9" :fill="c" opacity="0.5">---</text>
      <text x="55" y="62" font-family="monospace" font-size="8" :fill="c" opacity="0.4" class="fm-line-1">name: my-skill</text>
      <text x="55" y="76" font-family="monospace" font-size="8" :fill="c" opacity="0.35" class="fm-line-2">description:</text>
      <text x="55" y="90" font-family="monospace" font-size="9" :fill="c" opacity="0.5">---</text>
      <rect x="55" y="100" width="90" height="5" rx="2" :fill="c" opacity="0.12" class="md-line-1" />
      <rect x="55" y="112" width="70" height="5" rx="2" :fill="c" opacity="0.1" class="md-line-2" />
      <rect x="55" y="124" width="85" height="5" rx="2" :fill="c" opacity="0.08" class="md-line-3" />
      <rect x="55" y="136" width="60" height="5" rx="2" :fill="c" opacity="0.06" class="md-line-4" />
      <rect x="55" y="152" width="2" height="10" :fill="c" opacity="0.6" class="cursor-blink" />
    </svg>

    <!-- skills-advanced: Skill cards connecting to subagent circles -->
    <svg v-else-if="lessonId === 'skills-advanced'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <rect x="20" y="80" width="45" height="28" rx="5" :fill="c" opacity="0.2" />
      <text x="42" y="98" text-anchor="middle" font-size="7" :fill="c" opacity="0.5">skill-A</text>
      <rect x="20" y="120" width="45" height="28" rx="5" :fill="c" opacity="0.2" />
      <text x="42" y="138" text-anchor="middle" font-size="7" :fill="c" opacity="0.5">skill-B</text>
      <circle cx="120" cy="70" r="18" :stroke="c" stroke-width="1.5" fill="none" opacity="0.3" class="agent-orb-1" />
      <text x="120" y="74" text-anchor="middle" font-size="7" :fill="c" opacity="0.4">agent</text>
      <circle cx="150" cy="120" r="18" :stroke="c" stroke-width="1.5" fill="none" opacity="0.3" class="agent-orb-2" />
      <text x="150" y="124" text-anchor="middle" font-size="7" :fill="c" opacity="0.4">agent</text>
      <circle cx="110" cy="155" r="15" :stroke="c" stroke-width="1.5" fill="none" opacity="0.25" class="agent-orb-3" />
      <path d="M65 94 L102 74" :stroke="c" stroke-width="1" stroke-dasharray="3 2" opacity="0.25" />
      <path d="M65 94 L132 116" :stroke="c" stroke-width="1" stroke-dasharray="3 2" opacity="0.25" />
      <path d="M65 134 L95 150" :stroke="c" stroke-width="1" stroke-dasharray="3 2" opacity="0.25" />
    </svg>

    <!-- subagents-overview: Central node delegating to satellites -->
    <svg v-else-if="lessonId === 'subagents-overview'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="25" :fill="c" opacity="0.15" class="center-node" />
      <circle cx="100" cy="100" r="12" :fill="c" opacity="0.4" />
      <text x="100" y="104" text-anchor="middle" font-size="7" fill="#fff" font-weight="600">main</text>
      <circle cx="55" cy="45" r="16" :stroke="c" stroke-width="1.5" fill="none" opacity="0.3" class="sat-1" />
      <text x="55" y="49" text-anchor="middle" font-size="6" :fill="c" opacity="0.5">explore</text>
      <circle cx="155" cy="50" r="16" :stroke="c" stroke-width="1.5" fill="none" opacity="0.3" class="sat-2" />
      <text x="155" y="54" text-anchor="middle" font-size="6" :fill="c" opacity="0.5">plan</text>
      <circle cx="100" cy="170" r="16" :stroke="c" stroke-width="1.5" fill="none" opacity="0.3" class="sat-3" />
      <text x="100" y="174" text-anchor="middle" font-size="6" :fill="c" opacity="0.5">build</text>
      <line x1="88" y1="80" x2="65" y2="58" :stroke="c" stroke-width="1" stroke-dasharray="3 3" opacity="0.25" class="delegate-line" />
      <line x1="115" y1="82" x2="142" y2="60" :stroke="c" stroke-width="1" stroke-dasharray="3 3" opacity="0.25" class="delegate-line" />
      <line x1="100" y1="125" x2="100" y2="154" :stroke="c" stroke-width="1" stroke-dasharray="3 3" opacity="0.25" class="delegate-line" />
    </svg>

    <!-- subagents-create: Markdown file transforming into agent -->
    <svg v-else-if="lessonId === 'subagents-create'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <rect x="20" y="40" width="70" height="120" rx="5" fill="#1a1a2e" stroke="#444" stroke-width="1" />
      <text x="30" y="60" font-family="monospace" font-size="7" :fill="c" opacity="0.4">---</text>
      <text x="30" y="72" font-family="monospace" font-size="6" :fill="c" opacity="0.3">name: agent</text>
      <text x="30" y="82" font-family="monospace" font-size="6" :fill="c" opacity="0.25">tools: Read</text>
      <text x="30" y="92" font-family="monospace" font-size="7" :fill="c" opacity="0.4">---</text>
      <rect x="30" y="102" width="45" height="4" rx="2" :fill="c" opacity="0.1" />
      <rect x="30" y="112" width="50" height="4" rx="2" :fill="c" opacity="0.08" />
      <rect x="30" y="122" width="35" height="4" rx="2" :fill="c" opacity="0.06" />
      <path d="M100 100 L125 100" :stroke="c" stroke-width="2" opacity="0.3" class="transform-arrow" />
      <polygon points="125,95 135,100 125,105" :fill="c" opacity="0.3" />
      <circle cx="160" cy="100" r="30" :fill="c" opacity="0.1" class="agent-appear" />
      <circle cx="160" cy="100" r="18" :fill="c" opacity="0.25" class="agent-appear" />
      <path d="M153 97 l5 5 9-9" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.5" />
    </svg>

    <!-- subagents-advanced: Agents with memory and hooks -->
    <svg v-else-if="lessonId === 'subagents-advanced'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="80" r="22" :stroke="c" stroke-width="1.5" fill="none" opacity="0.35" />
      <text x="100" y="84" text-anchor="middle" font-size="7" :fill="c" opacity="0.5">agent</text>
      <circle cx="50" cy="140" r="20" :stroke="c" stroke-width="1.5" fill="none" opacity="0.3" />
      <text x="50" y="144" text-anchor="middle" font-size="7" :fill="c" opacity="0.5">agent</text>
      <circle cx="150" cy="140" r="20" :stroke="c" stroke-width="1.5" fill="none" opacity="0.3" />
      <text x="150" y="144" text-anchor="middle" font-size="7" :fill="c" opacity="0.5">agent</text>
      <rect x="25" y="165" width="50" height="18" rx="4" :fill="c" opacity="0.12" />
      <text x="50" y="177" text-anchor="middle" font-size="6" :fill="c" opacity="0.4">memory</text>
      <rect x="125" y="165" width="50" height="18" rx="4" :fill="c" opacity="0.12" />
      <text x="150" y="177" text-anchor="middle" font-size="6" :fill="c" opacity="0.4">memory</text>
      <path d="M105 40 L105 30 L115 25 L105 20 L115 15" :stroke="c" stroke-width="1.5" opacity="0.4" class="hook-bolt" />
      <path d="M85 40 L85 30 L75 25 L85 20 L75 15" :stroke="c" stroke-width="1.5" opacity="0.4" class="hook-bolt" />
      <line x1="85" y1="98" x2="62" y2="124" :stroke="c" stroke-width="1" stroke-dasharray="3 2" opacity="0.2" />
      <line x1="115" y1="98" x2="138" y2="124" :stroke="c" stroke-width="1" stroke-dasharray="3 2" opacity="0.2" />
    </svg>

    <!-- skills-subagents-together: Puzzle pieces interlocking -->
    <svg v-else-if="lessonId === 'skills-subagents-together'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <g class="puzzle-left">
        <path d="M30 70 h50 v15 a10 10 0 0 1 0 20 v15 h-50 v-15 a10 10 0 0 0 0-20 z" :fill="c" fill-opacity="0.15" :stroke="c" stroke-width="1" stroke-opacity="0.3" />
        <text x="55" y="108" text-anchor="middle" font-size="8" :fill="c" opacity="0.5">Skills</text>
      </g>
      <g class="puzzle-right">
        <path d="M80 70 h50 v15 a10 10 0 0 1 0 20 v15 h-50 v-15 a10 10 0 0 0 0-20 z" :fill="c" fill-opacity="0.2" :stroke="c" stroke-width="1" stroke-opacity="0.35" />
        <text x="105" y="108" text-anchor="middle" font-size="7" :fill="c" opacity="0.5">Agents</text>
      </g>
      <circle cx="160" cy="60" r="10" :fill="c" opacity="0.1" class="spark-1" />
      <circle cx="170" cy="90" r="6" :fill="c" opacity="0.08" class="spark-2" />
      <circle cx="155" cy="130" r="8" :fill="c" opacity="0.12" class="spark-3" />
      <path d="M130 105 L145 105" :stroke="c" stroke-width="1" stroke-dasharray="2 2" opacity="0.2" />
    </svg>

    <!-- mcp-intro: USB plug connecting to tools -->
    <svg v-else-if="lessonId === 'mcp-intro'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <rect x="25" y="80" width="50" height="40" rx="6" :fill="c" fill-opacity="0.2" :stroke="c" stroke-width="1.5" stroke-opacity="0.3" />
      <text x="50" y="104" text-anchor="middle" font-size="8" :fill="c" opacity="0.5">Claude</text>
      <rect x="75" y="92" width="25" height="16" rx="3" :fill="c" opacity="0.3" class="plug-connect" />
      <rect x="82" y="96" width="4" height="3" rx="1" fill="#fff" opacity="0.4" />
      <rect x="82" y="101" width="4" height="3" rx="1" fill="#fff" opacity="0.4" />
      <rect x="90" y="96" width="4" height="3" rx="1" fill="#fff" opacity="0.4" />
      <rect x="90" y="101" width="4" height="3" rx="1" fill="#fff" opacity="0.4" />
      <line x1="100" y1="85" x2="130" y2="55" :stroke="c" stroke-width="1" opacity="0.2" />
      <line x1="100" y1="100" x2="130" y2="100" :stroke="c" stroke-width="1" opacity="0.2" />
      <line x1="100" y1="115" x2="130" y2="145" :stroke="c" stroke-width="1" opacity="0.2" />
      <rect x="130" y="42" width="45" height="22" rx="4" :stroke="c" stroke-width="1" fill="none" opacity="0.25" />
      <text x="152" y="57" text-anchor="middle" font-size="6" :fill="c" opacity="0.4">GitHub</text>
      <rect x="130" y="90" width="45" height="22" rx="4" :stroke="c" stroke-width="1" fill="none" opacity="0.25" />
      <text x="152" y="105" text-anchor="middle" font-size="6" :fill="c" opacity="0.4">Slack</text>
      <rect x="130" y="138" width="45" height="22" rx="4" :stroke="c" stroke-width="1" fill="none" opacity="0.25" />
      <text x="152" y="153" text-anchor="middle" font-size="6" :fill="c" opacity="0.4">DB</text>
    </svg>

    <!-- hooks-guide: Event timeline with hook triggers -->
    <svg v-else-if="lessonId === 'hooks-guide'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <line x1="40" y1="100" x2="170" y2="100" :stroke="c" stroke-width="1.5" opacity="0.2" />
      <circle cx="60" cy="100" r="6" :fill="c" opacity="0.4" class="event-dot-1" />
      <circle cx="100" cy="100" r="6" :fill="c" opacity="0.4" class="event-dot-2" />
      <circle cx="140" cy="100" r="6" :fill="c" opacity="0.4" class="event-dot-3" />
      <path d="M60 94 L60 60 L70 55 L60 50 L70 45" :stroke="c" stroke-width="1.5" opacity="0.4" class="hook-bolt" />
      <text x="60" y="116" text-anchor="middle" font-size="6" :fill="c" opacity="0.4">pre</text>
      <path d="M100 94 L100 60 L110 55 L100 50 L110 45" :stroke="c" stroke-width="1.5" opacity="0.4" class="hook-bolt" />
      <text x="100" y="116" text-anchor="middle" font-size="6" :fill="c" opacity="0.4">post</text>
      <path d="M140 94 L140 60 L150 55 L140 50 L150 45" :stroke="c" stroke-width="1.5" opacity="0.4" class="hook-bolt" />
      <text x="140" y="116" text-anchor="middle" font-size="6" :fill="c" opacity="0.4">stop</text>
      <rect x="30" y="130" width="140" height="30" rx="5" :fill="c" opacity="0.06" />
      <rect x="40" y="140" width="50" height="5" rx="2" :fill="c" opacity="0.12" />
      <rect x="40" y="150" width="80" height="4" rx="2" :fill="c" opacity="0.08" />
    </svg>

    <!-- plugins-system: Package box opening into components -->
    <svg v-else-if="lessonId === 'plugins-system'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <rect x="55" y="100" width="90" height="70" rx="6" :stroke="c" stroke-width="1.5" fill="none" opacity="0.3" />
      <path d="M55 100 L100 80 L145 100" :stroke="c" stroke-width="1.5" fill="none" opacity="0.3" class="box-lid" />
      <rect x="35" y="40" width="35" height="22" rx="4" :fill="c" opacity="0.2" class="comp-1" />
      <text x="52" y="54" text-anchor="middle" font-size="6" :fill="c" opacity="0.5">skill</text>
      <rect x="82" y="30" width="35" height="22" rx="4" :fill="c" opacity="0.25" class="comp-2" />
      <text x="100" y="44" text-anchor="middle" font-size="6" :fill="c" opacity="0.5">agent</text>
      <rect x="130" y="40" width="35" height="22" rx="4" :fill="c" opacity="0.2" class="comp-3" />
      <text x="148" y="54" text-anchor="middle" font-size="6" :fill="c" opacity="0.5">hook</text>
      <text x="100" y="142" text-anchor="middle" font-size="9" :fill="c" opacity="0.4" font-weight="600">plugin</text>
    </svg>

    <!-- claude-md-mastery: Document with glowing sections -->
    <svg v-else-if="lessonId === 'claude-md-mastery'" :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <rect x="45" y="25" width="110" height="150" rx="6" fill="#1a1a2e" stroke="#444" stroke-width="1" />
      <text x="60" y="48" font-family="monospace" font-size="10" :fill="c" opacity="0.6" font-weight="700"># CLAUDE.md</text>
      <rect x="55" y="58" width="90" height="25" rx="4" :fill="c" opacity="0.08" class="glow-section-1" />
      <rect x="60" y="64" width="60" height="4" rx="2" :fill="c" opacity="0.2" />
      <rect x="60" y="73" width="75" height="4" rx="2" :fill="c" opacity="0.15" />
      <rect x="55" y="92" width="90" height="25" rx="4" :fill="c" opacity="0.06" class="glow-section-2" />
      <rect x="60" y="98" width="55" height="4" rx="2" :fill="c" opacity="0.18" />
      <rect x="60" y="107" width="70" height="4" rx="2" :fill="c" opacity="0.12" />
      <rect x="55" y="126" width="90" height="25" rx="4" :fill="c" opacity="0.04" class="glow-section-3" />
      <rect x="60" y="132" width="65" height="4" rx="2" :fill="c" opacity="0.15" />
      <rect x="60" y="141" width="45" height="4" rx="2" :fill="c" opacity="0.1" />
      <circle cx="160" cy="50" r="15" :fill="c" opacity="0.06" class="reader-glow" />
      <path d="M155 46 l3 3 6-6" :stroke="c" stroke-width="1.5" stroke-linecap="round" opacity="0.3" />
    </svg>

    <!-- Fallback: generic icon -->
    <svg v-else :width="s" :height="s" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="50" :fill="c" opacity="0.1" />
      <circle cx="100" cy="100" r="30" :fill="c" opacity="0.2" />
      <circle cx="100" cy="100" r="14" :fill="c" opacity="0.6" />
      <path d="M93 100 l5 5 10-10" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  </div>
</template>

<style scoped>
.lesson-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Floating animation */
.lesson-visual svg {
  animation: lvFloat 4s ease-in-out infinite;
}

@keyframes lvFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* Chat bubble flow */
.bubble-1 { animation: bubbleUp 3s ease-in-out infinite; }
.bubble-2 { animation: bubbleUp 3s ease-in-out 1s infinite; }
.bubble-3 { animation: bubbleUp 3s ease-in-out 2s infinite; }

@keyframes bubbleUp {
  0%, 100% { opacity: 0.15; transform: translateY(0); }
  50% { opacity: 0.35; transform: translateY(-4px); }
}

/* Block assembly */
.block-1 { animation: blockAppear 2s ease-out 0.0s both; }
.block-2 { animation: blockAppear 2s ease-out 0.3s both; }
.block-3 { animation: blockAppear 2s ease-out 0.6s both; }
.block-4 { animation: blockAppear 2s ease-out 0.9s both; }
.block-5 { animation: blockAppear 2s ease-out 1.2s both; }
.block-6 { animation: blockAppear 2s ease-out 1.5s both; }

@keyframes blockAppear {
  0% { opacity: 0; transform: translateY(8px); }
  100% { opacity: 1; }
}

/* Cursor blink */
.cursor-blink { animation: blink 1s step-end infinite; }

@keyframes blink {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0; }
}

/* Code lines appearing */
.code-line-1 { animation: lineSlide 2.5s ease-out 0.5s both; }
.code-line-2 { animation: lineSlide 2.5s ease-out 1.0s both; }
.code-line-3 { animation: lineSlide 2.5s ease-out 1.5s both; }
.code-line-4 { animation: lineSlide 2.5s ease-out 2.0s both; }

@keyframes lineSlide {
  0% { opacity: 0; transform: translateX(-10px); }
  100% { opacity: 1; transform: translateX(0); }
}

/* Module connections pulsing */
.module-conn { animation: connPulse 2s ease-in-out infinite; }

@keyframes connPulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.5; }
}

/* Node pulse */
.node-pulse { animation: nodePulse 2s ease-in-out infinite; }

@keyframes nodePulse {
  0%, 100% { r: 3; opacity: 0.5; }
  50% { r: 5; opacity: 0.8; }
}

/* Token flow */
.token-1 { animation: tokenDrift 4s linear infinite; }
.token-2 { animation: tokenDrift 4s linear 0.5s infinite; }
.token-3 { animation: tokenDrift 4s linear 1s infinite; }
.token-4 { animation: tokenDrift 4s linear 1.5s infinite; }
.token-5 { animation: tokenDrift 4s linear 2s infinite; }

@keyframes tokenDrift {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.15; }
}

/* Sync line */
.sync-line { animation: syncPulse 1.5s ease-in-out infinite; }

@keyframes syncPulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.6; }
}

/* Tags appearing */
.tag-open { animation: tagFade 3s ease-in-out infinite; }
.tag-close { animation: tagFade 3s ease-in-out 1.5s infinite; }

@keyframes tagFade {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}

/* Output arrow */
.output-arrow { animation: arrowPush 2s ease-in-out infinite; }

@keyframes arrowPush {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.5; }
}

/* Thought bubbles */
.thought-1 { animation: thoughtGrow 3s ease-in-out infinite; }
.thought-2 { animation: thoughtGrow 3s ease-in-out 0.7s infinite; }
.thought-3 { animation: thoughtGrow 3s ease-in-out 1.4s infinite; }
.thought-4 { animation: thoughtGrow 3s ease-in-out 2.1s infinite; }

@keyframes thoughtGrow {
  0%, 100% { opacity: 0.1; transform: scale(1); }
  50% { opacity: 0.25; transform: scale(1.15); }
}

/* Morph arrow */
.morph-arrow { animation: morphPulse 2s ease-in-out infinite; }

@keyframes morphPulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.5; }
}

/* Skill cards floating out */
.skill-card-1 { animation: cardFloat 3s ease-in-out infinite; }
.skill-card-2 { animation: cardFloat 3s ease-in-out 0.5s infinite; }
.skill-card-3 { animation: cardFloat 3s ease-in-out 1s infinite; }

@keyframes cardFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Frontmatter lines appearing */
.fm-line-1 { animation: lineSlide 2s ease-out 0.3s both; }
.fm-line-2 { animation: lineSlide 2s ease-out 0.6s both; }
.md-line-1 { animation: lineSlide 2s ease-out 1.0s both; }
.md-line-2 { animation: lineSlide 2s ease-out 1.3s both; }
.md-line-3 { animation: lineSlide 2s ease-out 1.6s both; }
.md-line-4 { animation: lineSlide 2s ease-out 1.9s both; }

/* Agent orbs */
.agent-orb-1 { animation: orbPulse 3s ease-in-out infinite; }
.agent-orb-2 { animation: orbPulse 3s ease-in-out 1s infinite; }
.agent-orb-3 { animation: orbPulse 3s ease-in-out 2s infinite; }

@keyframes orbPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.55; }
}

/* Satellite agents */
.sat-1 { animation: satOrbit 4s ease-in-out infinite; }
.sat-2 { animation: satOrbit 4s ease-in-out 1.3s infinite; }
.sat-3 { animation: satOrbit 4s ease-in-out 2.6s infinite; }

@keyframes satOrbit {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.08); }
}

/* Delegate lines */
.delegate-line { animation: delegatePulse 2s ease-in-out infinite; }

@keyframes delegatePulse {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.4; }
}

/* Center node */
.center-node { animation: centerPulse 3s ease-in-out infinite; }

@keyframes centerPulse {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.25; }
}

/* Transform arrow */
.transform-arrow { animation: morphPulse 2s ease-in-out infinite; }

/* Agent appear */
.agent-appear { animation: agentGrow 3s ease-in-out infinite; }

@keyframes agentGrow {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.3; }
}

/* Hook bolts */
.hook-bolt { animation: boltFlash 2s ease-in-out infinite; }

@keyframes boltFlash {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

/* Puzzle pieces */
.puzzle-left { animation: puzzleSlide 3s ease-in-out infinite; }
.puzzle-right { animation: puzzleSlideR 3s ease-in-out infinite; }

@keyframes puzzleSlide {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(3px); }
}

@keyframes puzzleSlideR {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-3px); }
}

/* Sparks */
.spark-1 { animation: sparkle 2s ease-in-out infinite; }
.spark-2 { animation: sparkle 2s ease-in-out 0.5s infinite; }
.spark-3 { animation: sparkle 2s ease-in-out 1s infinite; }

@keyframes sparkle {
  0%, 100% { opacity: 0.08; transform: scale(1); }
  50% { opacity: 0.2; transform: scale(1.2); }
}

/* Plug connection */
.plug-connect { animation: plugPulse 2s ease-in-out infinite; }

@keyframes plugPulse {
  0%, 100% { opacity: 0.25; }
  50% { opacity: 0.45; }
}

/* Event dots */
.event-dot-1 { animation: eventFire 2.5s ease-in-out infinite; }
.event-dot-2 { animation: eventFire 2.5s ease-in-out 0.8s infinite; }
.event-dot-3 { animation: eventFire 2.5s ease-in-out 1.6s infinite; }

@keyframes eventFire {
  0%, 100% { opacity: 0.3; r: 6; }
  50% { opacity: 0.7; r: 8; }
}

/* Box lid */
.box-lid { animation: lidOpen 3s ease-in-out infinite; }

@keyframes lidOpen {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Components floating out */
.comp-1 { animation: compFloat 3s ease-in-out infinite; }
.comp-2 { animation: compFloat 3s ease-in-out 0.5s infinite; }
.comp-3 { animation: compFloat 3s ease-in-out 1s infinite; }

@keyframes compFloat {
  0%, 100% { transform: translateY(0); opacity: 0.2; }
  50% { transform: translateY(-5px); opacity: 0.35; }
}

/* Glowing sections */
.glow-section-1 { animation: sectionGlow 4s ease-in-out infinite; }
.glow-section-2 { animation: sectionGlow 4s ease-in-out 1.3s infinite; }
.glow-section-3 { animation: sectionGlow 4s ease-in-out 2.6s infinite; }

@keyframes sectionGlow {
  0%, 100% { opacity: 0.04; }
  50% { opacity: 0.15; }
}

/* Reader glow */
.reader-glow { animation: readerPulse 3s ease-in-out infinite; }

@keyframes readerPulse {
  0%, 100% { opacity: 0.06; r: 15; }
  50% { opacity: 0.15; r: 20; }
}

/* Flow arrows for projects */
.flow-arrows { animation: flowDash 2s linear infinite; }

@keyframes flowDash {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 14; }
}

/* Flow line for intro */
.flow-line { animation: flowDash 3s linear infinite; }
</style>
