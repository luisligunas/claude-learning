<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: String,
  title: String,
  description: String,
})

const videoRef = ref(null)
const isPlaying = ref(false)
const hasError = ref(false)

function togglePlay() {
  if (!videoRef.value) return
  if (videoRef.value.paused) {
    videoRef.value.play()
    isPlaying.value = true
  } else {
    videoRef.value.pause()
    isPlaying.value = false
  }
}

function onPlay() {
  isPlaying.value = true
}

function onPause() {
  isPlaying.value = false
}

function onError() {
  hasError.value = true
}
</script>

<template>
  <div class="local-video-card" :class="{ playing: isPlaying }">
    <div class="video-wrapper">
      <video
        ref="videoRef"
        :src="src"
        :title="title"
        controls
        preload="metadata"
        @play="onPlay"
        @pause="onPause"
        @error="onError"
      />
      <div v-if="hasError" class="video-error">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <p>Video not yet rendered. Run the render script first.</p>
      </div>
    </div>
    <div v-if="title || description" class="video-info">
      <h3 v-if="title" class="video-title">{{ title }}</h3>
      <p v-if="description" class="video-desc">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.local-video-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s, box-shadow 0.2s;
}

.local-video-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.video-wrapper {
  position: relative;
  background: #1a1a2e;
  aspect-ratio: 16 / 9;
}

.video-wrapper video {
  width: 100%;
  height: 100%;
  display: block;
}

.video-error {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--text-muted);
  background: #1a1a2e;
  font-size: 0.85rem;
}

.video-info {
  padding: 16px;
}

.video-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
  line-height: 1.3;
}

.video-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.4;
}
</style>
