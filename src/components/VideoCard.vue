<script setup>
const props = defineProps({
  videoId: String,
  title: String,
  creator: String,
  description: String,
  compact: { type: Boolean, default: false },
})
</script>

<template>
  <div class="video-card" :class="{ compact }">
    <div class="video-wrapper">
      <iframe
        :src="`https://www.youtube.com/embed/${videoId}`"
        :title="title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="video-info">
      <h3 class="video-title">{{ title }}</h3>
      <p v-if="creator" class="video-creator">{{ creator }}</p>
      <p v-if="description && !compact" class="video-desc">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.video-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s, box-shadow 0.2s;
}

.video-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  background: #1a1a2e;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

.video-creator {
  font-size: 0.8rem;
  color: var(--accent-dark);
  font-weight: 500;
  margin-bottom: 6px;
}

.video-desc {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.4;
}

.compact .video-info {
  padding: 10px 12px;
}

.compact .video-title {
  font-size: 0.85rem;
}
</style>
