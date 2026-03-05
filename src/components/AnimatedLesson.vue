<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import LessonVisuals from './LessonVisuals.vue'

const props = defineProps({
  title: String,
  description: String,
  steps: Array,
  tags: { type: Array, default: () => [] },
  difficulty: { type: String, default: 'Beginner' },
  lessonId: { type: String, default: '' },
})

const currentSlide = ref(0)
const isPlaying = ref(false)
const textProgress = ref(0)
const narrationEnabled = ref(false)
const musicEnabled = ref(false)
let interval = null
let textInterval = null

// Audio context for ambient music
let audioCtx = null
let osc1 = null
let osc2 = null
let gainNode = null
let filterNode = null
let musicStarted = false

// Load narration preference from localStorage
try {
  const saved = localStorage.getItem('lesson-narration')
  if (saved === 'true') narrationEnabled.value = true
} catch {}

const totalSlides = computed(() => (props.steps?.length || 0) + 1)

const currentStep = computed(() => {
  if (currentSlide.value === 0) return null
  return props.steps?.[currentSlide.value - 1] || null
})

const progressPct = computed(() => ((currentSlide.value + 1) / totalSlides.value) * 100)

const themeColor = computed(() => {
  const tag = props.tags?.[0] || ''
  const colors = {
    basics: '#F5A623', 'claude.ai': '#F5A623', 'getting-started': '#F5A623',
    artifacts: '#7B68EE', prototyping: '#7B68EE', interactive: '#7B68EE',
    projects: '#4ECDC4', organization: '#4ECDC4', connectors: '#4ECDC4',
    'claude-code': '#6366f1', setup: '#6366f1', CLI: '#6366f1', beginner: '#6366f1',
    workflow: '#3b82f6', engineering: '#3b82f6', production: '#3b82f6',
    context: '#f97316', tokens: '#f97316', performance: '#f97316', memory: '#f97316',
    productivity: '#06b6d4', comparison: '#06b6d4', IDE: '#06b6d4',
    prompts: '#10b981', fundamentals: '#10b981', 'best-practices': '#10b981', XML: '#10b981',
    thinking: '#8b5cf6', reasoning: '#8b5cf6', ultrathink: '#8b5cf6',
    design: '#ec4899', implementation: '#ec4899', figma: '#ec4899',
    skills: '#e056a0', SKILL: '#e056a0', 'SKILL.md': '#e056a0', frontmatter: '#e056a0',
    subagents: '#ef4444', architecture: '#ef4444', 'built-in-agents': '#ef4444',
    'custom-agents': '#f43f5e', 'hands-on': '#f43f5e', configuration: '#f43f5e',
    'agent-teams': '#dc2626', worktrees: '#dc2626', advanced: '#dc2626',
    recipes: '#c026d3', automation: '#c026d3',
    MCP: '#0ea5e9', integrations: '#0ea5e9', tools: '#0ea5e9', servers: '#0ea5e9',
    hooks: '#f59e0b', events: '#f59e0b', quality: '#f59e0b',
    plugins: '#84cc16', extensibility: '#84cc16',
    'CLAUDE.md': '#a855f7', conventions: '#a855f7',
  }
  return colors[tag] || '#F5A623'
})

const stepIconType = computed(() => {
  if (currentSlide.value === 0) return 'intro'
  const step = currentStep.value
  if (!step) return 'default'
  const t = step.title.toLowerCase()
  if (t.includes('install') || t.includes('setup') || t.includes('create') || t.includes('build')) return 'build'
  if (t.includes('understand') || t.includes('what') || t.includes('how') || t.includes('learn')) return 'learn'
  if (t.includes('test') || t.includes('try') || t.includes('verify') || t.includes('debug')) return 'test'
  if (t.includes('use') || t.includes('run') || t.includes('execute') || t.includes('start')) return 'run'
  if (t.includes('config') || t.includes('write') || t.includes('define') || t.includes('add')) return 'config'
  if (t.includes('share') || t.includes('distribute') || t.includes('team') || t.includes('deploy')) return 'share'
  if (t.includes('control') || t.includes('restrict') || t.includes('manage') || t.includes('enable')) return 'control'
  if (t.includes('combine') || t.includes('chain') || t.includes('connect') || t.includes('integrate')) return 'connect'
  if (t.includes('iterate') || t.includes('refine') || t.includes('improve') || t.includes('update')) return 'iterate'
  if (t.includes('describe') || t.includes('provide') || t.includes('assign') || t.includes('specify')) return 'describe'
  if (t.includes('break') || t.includes('split') || t.includes('separate') || t.includes('toggle')) return 'split'
  if (t.includes('browse') || t.includes('discover') || t.includes('explore') || t.includes('search')) return 'explore'
  return 'default'
})

// ── Narration (Web Speech API) ──
function speakText(text) {
  if (!narrationEnabled.value || !('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.rate = 0.95
  utterance.pitch = 1.0
  // Prefer a natural voice
  const voices = window.speechSynthesis.getVoices()
  const preferred = voices.find(v =>
    v.name.includes('Google UK English Female') ||
    v.name.includes('Samantha') ||
    v.name.includes('Karen') ||
    (v.lang.startsWith('en') && v.name.includes('Female'))
  ) || voices.find(v => v.lang.startsWith('en')) || voices[0]
  if (preferred) utterance.voice = preferred
  window.speechSynthesis.speak(utterance)
}

function stopNarration() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
}

function narrateCurrentSlide() {
  if (!narrationEnabled.value) return
  if (currentSlide.value === 0) {
    speakText(`${props.title}. ${props.description}`)
  } else if (currentStep.value) {
    speakText(`Step ${currentSlide.value}. ${currentStep.value.title}. ${currentStep.value.detail}`)
  }
}

function toggleNarration() {
  narrationEnabled.value = !narrationEnabled.value
  try { localStorage.setItem('lesson-narration', String(narrationEnabled.value)) } catch {}
  if (narrationEnabled.value && isPlaying.value) {
    narrateCurrentSlide()
  } else {
    stopNarration()
  }
}

// ── Ambient Music (Web Audio API) ──
// Chord progressions using midi-like note values
const chords = [
  [261.63, 329.63], // C4, E4
  [293.66, 369.99], // D4, F#4
  [246.94, 311.13], // B3, Eb4
  [220.00, 277.18], // A3, C#4
  [233.08, 293.66], // Bb3, D4
  [196.00, 246.94], // G3, B3
]

function initAudio() {
  if (audioCtx) return
  audioCtx = new (window.AudioContext || window.webkitAudioContext)()

  filterNode = audioCtx.createBiquadFilter()
  filterNode.type = 'lowpass'
  filterNode.frequency.value = 400
  filterNode.Q.value = 0.5

  gainNode = audioCtx.createGain()
  gainNode.gain.value = 0
  gainNode.connect(audioCtx.destination)
  filterNode.connect(gainNode)

  osc1 = audioCtx.createOscillator()
  osc1.type = 'sine'
  osc1.frequency.value = chords[0][0]

  osc2 = audioCtx.createOscillator()
  osc2.type = 'sine'
  osc2.frequency.value = chords[0][1]
  osc2.detune.value = 5

  osc1.connect(filterNode)
  osc2.connect(filterNode)
}

function startMusic() {
  if (!audioCtx) initAudio()
  if (audioCtx.state === 'suspended') audioCtx.resume()
  if (!musicStarted) {
    osc1.start()
    osc2.start()
    musicStarted = true
  }
  // Fade in
  gainNode.gain.cancelScheduledValues(audioCtx.currentTime)
  gainNode.gain.setTargetAtTime(0.05, audioCtx.currentTime, 0.5)
}

function stopMusic() {
  if (!audioCtx || !gainNode) return
  // Fade out
  gainNode.gain.cancelScheduledValues(audioCtx.currentTime)
  gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0.3)
}

function updateMusicChord() {
  if (!audioCtx || !osc1 || !musicEnabled.value) return
  const chordIdx = currentSlide.value % chords.length
  const chord = chords[chordIdx]
  const now = audioCtx.currentTime
  osc1.frequency.cancelScheduledValues(now)
  osc1.frequency.setTargetAtTime(chord[0], now, 0.8)
  osc2.frequency.cancelScheduledValues(now)
  osc2.frequency.setTargetAtTime(chord[1], now, 0.8)
}

function toggleMusic() {
  musicEnabled.value = !musicEnabled.value
  if (musicEnabled.value) {
    startMusic()
    updateMusicChord()
  } else {
    stopMusic()
  }
}

// ── Playback Controls ──
function play() {
  isPlaying.value = true
  clearInterval(interval)
  animateText()
  if (narrationEnabled.value) narrateCurrentSlide()
  if (musicEnabled.value) startMusic()
  interval = setInterval(() => {
    if (currentSlide.value < totalSlides.value - 1) {
      nextSlide()
    } else {
      pause()
    }
  }, 8000)
}

function pause() {
  isPlaying.value = false
  clearInterval(interval)
  clearInterval(textInterval)
  if (narrationEnabled.value) stopNarration()
  if (musicEnabled.value) stopMusic()
}

function nextSlide() {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value++
    textProgress.value = 0
    if (isPlaying.value) {
      animateText()
      if (narrationEnabled.value) narrateCurrentSlide()
    }
    if (musicEnabled.value) updateMusicChord()
  }
}

function prevSlide() {
  if (currentSlide.value > 0) {
    currentSlide.value--
    textProgress.value = 0
    if (isPlaying.value) {
      animateText()
      if (narrationEnabled.value) narrateCurrentSlide()
    }
    if (musicEnabled.value) updateMusicChord()
  }
}

function goToSlide(i) {
  currentSlide.value = i
  textProgress.value = 0
  if (isPlaying.value) {
    animateText()
    if (narrationEnabled.value) narrateCurrentSlide()
  }
  if (musicEnabled.value) updateMusicChord()
}

function animateText() {
  clearInterval(textInterval)
  textProgress.value = 0
  textInterval = setInterval(() => {
    if (textProgress.value < 100) {
      textProgress.value += 2
    } else {
      clearInterval(textInterval)
    }
  }, 50)
}

function togglePlay() {
  if (isPlaying.value) pause()
  else play()
}

onMounted(() => {
  animateText()
  // Load voices (some browsers load async)
  if ('speechSynthesis' in window) {
    window.speechSynthesis.getVoices()
  }
})

onUnmounted(() => {
  clearInterval(interval)
  clearInterval(textInterval)
  stopNarration()
  if (audioCtx) {
    stopMusic()
    if (musicStarted) {
      try { osc1.stop(); osc2.stop() } catch {}
    }
    audioCtx.close()
    audioCtx = null
    musicStarted = false
  }
})

watch(currentSlide, () => {
  if (!isPlaying.value) animateText()
})
</script>

<template>
  <div class="animated-lesson">
    <div class="video-viewport" :style="{ '--theme': themeColor }">
      <!-- Background pattern -->
      <div class="bg-pattern">
        <svg width="100%" height="100%" viewBox="0 0 800 450" preserveAspectRatio="none" fill="none">
          <circle :cx="650 + currentSlide * 20" cy="80" r="200" :fill="themeColor" opacity="0.06" />
          <circle :cx="100 - currentSlide * 15" cy="350" r="150" :fill="themeColor" opacity="0.04" />
          <circle :cx="400" :cy="200 + currentSlide * 10" r="100" :fill="themeColor" opacity="0.03" />
        </svg>
      </div>

      <!-- Slide Content -->
      <div class="slide-content" :key="currentSlide">
        <!-- Intro Slide -->
        <div v-if="currentSlide === 0" class="slide intro-slide">
          <div class="intro-icon-area">
            <LessonVisuals
              v-if="lessonId"
              :lessonId="lessonId"
              :themeColor="themeColor"
              :size="120"
            />
            <svg v-else width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="45" :fill="themeColor" opacity="0.15" />
              <circle cx="50" cy="50" r="30" :fill="themeColor" opacity="0.25" />
              <circle cx="50" cy="50" r="16" :fill="themeColor" opacity="0.9" />
              <path d="M43 50l5 5 10-10" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="intro-text-area">
            <span class="slide-badge" :style="{ background: themeColor + '20', color: themeColor }">{{ difficulty }}</span>
            <h2 class="intro-title">{{ title }}</h2>
            <p class="intro-desc" :style="{ opacity: Math.min(1, textProgress / 30) }">{{ description }}</p>
            <div class="intro-steps-preview" :style="{ opacity: Math.min(1, (textProgress - 40) / 30) }">
              <p class="steps-count">{{ steps?.length || 0 }} steps in this lesson</p>
              <div class="step-dots">
                <div
                  v-for="(s, i) in steps"
                  :key="i"
                  class="step-dot"
                  :style="{ background: themeColor, opacity: 0.3 + (i * 0.1) }"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Step Slides -->
        <div v-else class="slide step-slide">
          <div class="step-visual">
            <div class="step-number-large" :style="{ color: themeColor }">{{ currentSlide }}</div>
            <!-- Expanded step icons (12 types) -->
            <svg v-if="stepIconType === 'build'" class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="15" y="30" width="50" height="35" rx="4" :stroke="themeColor" stroke-width="2" />
              <path d="M25 45h30M25 52h20" :stroke="themeColor" stroke-width="2" stroke-linecap="round" />
              <path d="M30 20l10 10M50 20l-10 10" :stroke="themeColor" stroke-width="2" stroke-linecap="round" />
              <circle cx="40" cy="15" r="4" :fill="themeColor" opacity="0.5" />
            </svg>
            <svg v-else-if="stepIconType === 'learn'" class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="35" r="18" :stroke="themeColor" stroke-width="2" />
              <path d="M35 35l3 3 7-7" :stroke="themeColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25 58h30" :stroke="themeColor" stroke-width="2" stroke-linecap="round" />
              <path d="M30 63h20" :stroke="themeColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <svg v-else-if="stepIconType === 'test'" class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="18" y="15" width="44" height="50" rx="4" :stroke="themeColor" stroke-width="2" />
              <path d="M28 30h24M28 38h18M28 46h20" :stroke="themeColor" stroke-width="2" stroke-linecap="round" opacity="0.6" />
              <circle cx="55" cy="55" r="12" :fill="themeColor" opacity="0.15" />
              <path d="M51 55l3 3 6-6" :stroke="themeColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg v-else-if="stepIconType === 'run'" class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <polygon points="30,20 60,40 30,60" :fill="themeColor" opacity="0.2" :stroke="themeColor" stroke-width="2" />
              <path d="M20 68h40" :stroke="themeColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <svg v-else-if="stepIconType === 'config'" class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="15" :stroke="themeColor" stroke-width="2" />
              <circle cx="40" cy="40" r="6" :fill="themeColor" opacity="0.4" />
              <path d="M40 20v5M40 55v5M20 40h5M55 40h5M26 26l3.5 3.5M50.5 50.5l3.5 3.5M54 26l-3.5 3.5M29.5 50.5l-3.5 3.5" :stroke="themeColor" stroke-width="2" stroke-linecap="round" />
            </svg>
            <svg v-else-if="stepIconType === 'share'" class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="55" cy="25" r="8" :stroke="themeColor" stroke-width="2" />
              <circle cx="25" cy="40" r="8" :stroke="themeColor" stroke-width="2" />
              <circle cx="55" cy="55" r="8" :stroke="themeColor" stroke-width="2" />
              <path d="M33 36l14-8M33 44l14 8" :stroke="themeColor" stroke-width="2" />
            </svg>
            <svg v-else-if="stepIconType === 'control'" class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="18" y="25" width="44" height="30" rx="5" :stroke="themeColor" stroke-width="2" />
              <circle cx="32" cy="40" r="6" :fill="themeColor" opacity="0.3" />
              <circle cx="48" cy="40" r="6" :stroke="themeColor" stroke-width="1.5" />
              <path d="M25 62h30" :stroke="themeColor" stroke-width="2" stroke-linecap="round" opacity="0.4" />
            </svg>
            <svg v-else-if="stepIconType === 'connect'" class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="25" cy="40" r="10" :stroke="themeColor" stroke-width="2" />
              <circle cx="55" cy="40" r="10" :stroke="themeColor" stroke-width="2" />
              <path d="M35 40h10" :stroke="themeColor" stroke-width="2" stroke-linecap="round" />
              <path d="M40 28v24" :stroke="themeColor" stroke-width="1" stroke-dasharray="3 2" opacity="0.3" />
            </svg>
            <svg v-else-if="stepIconType === 'iterate'" class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M50 25 A15 15 0 1 1 30 25" :stroke="themeColor" stroke-width="2" fill="none" />
              <polygon points="50,20 55,25 50,30" :fill="themeColor" opacity="0.6" />
              <circle cx="40" cy="40" r="5" :fill="themeColor" opacity="0.3" />
              <path d="M30 58h20" :stroke="themeColor" stroke-width="2" stroke-linecap="round" opacity="0.4" />
            </svg>
            <svg v-else-if="stepIconType === 'describe'" class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="18" y="20" width="44" height="40" rx="4" :stroke="themeColor" stroke-width="2" />
              <path d="M26 32h28M26 40h20M26 48h24" :stroke="themeColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5" />
              <path d="M40 60v8" :stroke="themeColor" stroke-width="2" stroke-linecap="round" opacity="0.3" />
            </svg>
            <svg v-else-if="stepIconType === 'split'" class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path d="M40 20v15" :stroke="themeColor" stroke-width="2" stroke-linecap="round" />
              <path d="M40 35 L25 55 M40 35 L55 55" :stroke="themeColor" stroke-width="2" stroke-linecap="round" />
              <circle cx="25" cy="58" r="5" :fill="themeColor" opacity="0.3" />
              <circle cx="55" cy="58" r="5" :fill="themeColor" opacity="0.3" />
            </svg>
            <svg v-else-if="stepIconType === 'explore'" class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="35" cy="35" r="15" :stroke="themeColor" stroke-width="2" />
              <path d="M46 46l12 12" :stroke="themeColor" stroke-width="2.5" stroke-linecap="round" />
              <path d="M28 35h14M35 28v14" :stroke="themeColor" stroke-width="1.5" stroke-linecap="round" opacity="0.4" />
            </svg>
            <svg v-else class="step-icon" width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect x="15" y="22" width="50" height="36" rx="6" :stroke="themeColor" stroke-width="2" />
              <path d="M25 35h20M25 42h30M25 49h15" :stroke="themeColor" stroke-width="2" stroke-linecap="round" opacity="0.5" />
            </svg>
          </div>
          <div class="step-text-area">
            <h3 class="step-title-large" :style="{ opacity: Math.min(1, textProgress / 20) }">
              {{ currentStep?.title }}
            </h3>
            <p class="step-detail-text" :style="{ opacity: Math.min(1, (textProgress - 15) / 40) }">
              {{ currentStep?.detail }}
            </p>
          </div>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="progress-track">
        <div class="progress-fill" :style="{ width: progressPct + '%', background: themeColor }" />
      </div>

      <!-- Controls -->
      <div class="controls">
        <button class="ctrl-btn" @click="prevSlide" :disabled="currentSlide === 0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        </button>
        <button class="ctrl-btn play-btn" @click="togglePlay" :style="{ background: themeColor }">
          <svg v-if="!isPlaying" width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
        </button>
        <button class="ctrl-btn" @click="nextSlide" :disabled="currentSlide >= totalSlides - 1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        <!-- Narration toggle -->
        <button
          class="ctrl-btn toggle-btn"
          :class="{ active: narrationEnabled }"
          :style="narrationEnabled ? { background: themeColor + '30', color: themeColor } : {}"
          @click="toggleNarration"
          title="Toggle narration"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path v-if="narrationEnabled" d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path v-else d="M17 9l-5 5M12 9l5 5" />
          </svg>
        </button>

        <!-- Music toggle -->
        <button
          class="ctrl-btn toggle-btn"
          :class="{ active: musicEnabled }"
          :style="musicEnabled ? { background: themeColor + '30', color: themeColor } : {}"
          @click="toggleMusic"
          title="Toggle ambient music"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" :fill="musicEnabled ? 'currentColor' : 'none'" />
            <circle cx="18" cy="16" r="3" :fill="musicEnabled ? 'currentColor' : 'none'" />
          </svg>
        </button>

        <div class="slide-counter">{{ currentSlide + 1 }} / {{ totalSlides }}</div>
        <div class="slide-dots-nav">
          <button
            v-for="i in totalSlides"
            :key="i"
            class="dot-btn"
            :class="{ active: currentSlide === i - 1 }"
            :style="currentSlide === i - 1 ? { background: themeColor } : {}"
            @click="goToSlide(i - 1)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animated-lesson {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.video-viewport {
  position: relative;
  background: #0f0f1a;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.bg-pattern {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bg-pattern svg {
  transition: all 0.8s ease;
}

.slide-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 40px;
  position: relative;
  z-index: 1;
  animation: slideIn 0.5s ease;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide {
  width: 100%;
  display: flex;
  gap: 32px;
  align-items: center;
}

/* Intro slide */
.intro-slide {
  flex-direction: row;
}

.intro-icon-area {
  flex-shrink: 0;
}

.intro-text-area {
  flex: 1;
  min-width: 0;
}

.slide-badge {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}

.intro-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.3;
  margin-bottom: 10px;
}

.intro-desc {
  font-size: 0.88rem;
  color: #a0a0b8;
  line-height: 1.6;
  transition: opacity 0.3s;
}

.intro-steps-preview {
  margin-top: 16px;
  transition: opacity 0.3s;
}

.steps-count {
  font-size: 0.75rem;
  color: #6b6b80;
  margin-bottom: 8px;
  font-weight: 500;
}

.step-dots {
  display: flex;
  gap: 4px;
}

.step-dot {
  width: 20px;
  height: 4px;
  border-radius: 2px;
}

/* Step slides */
.step-slide {
  flex-direction: row;
}

.step-visual {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.step-number-large {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  opacity: 0.4;
}

.step-icon {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.step-text-area {
  flex: 1;
  min-width: 0;
}

.step-title-large {
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.3;
  transition: opacity 0.3s;
}

.step-detail-text {
  font-size: 0.82rem;
  color: #a0a0b8;
  line-height: 1.7;
  transition: opacity 0.3s;
  white-space: pre-line;
}

/* Progress bar */
.progress-track {
  height: 3px;
  background: rgba(255, 255, 255, 0.08);
}

.progress-fill {
  height: 100%;
  transition: width 0.4s ease;
  border-radius: 0 2px 2px 0;
}

/* Controls */
.controls {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0.3);
}

.ctrl-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #a0a0b8;
  background: rgba(255, 255, 255, 0.06);
  transition: all 0.2s;
  border: none;
  cursor: pointer;
}

.ctrl-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.12);
  color: white;
}

.ctrl-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.play-btn {
  width: 36px;
  height: 36px;
  color: white;
}

.play-btn:hover {
  opacity: 0.9;
  transform: scale(1.05);
}

.toggle-btn {
  position: relative;
  transition: all 0.2s;
}

.toggle-btn.active {
  color: white;
}

.slide-counter {
  font-size: 0.72rem;
  color: #6b6b80;
  margin-left: auto;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}

.slide-dots-nav {
  display: flex;
  gap: 4px;
  margin-left: 8px;
}

.dot-btn {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s;
}

.dot-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.dot-btn.active {
  width: 16px;
  border-radius: 4px;
}

@media (max-width: 640px) {
  .slide-content {
    padding: 20px;
  }

  .slide {
    flex-direction: column;
    gap: 16px;
  }

  .intro-title {
    font-size: 1.1rem;
  }

  .step-number-large {
    font-size: 2rem;
  }

  .step-visual {
    flex-direction: row;
  }

  .controls {
    padding: 8px 12px;
  }

  .slide-dots-nav {
    display: none;
  }

  .toggle-btn {
    display: none;
  }
}
</style>
