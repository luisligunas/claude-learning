<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  path: Object,
  courseCount: Number,
})

const router = useRouter()

function goToPath() {
  router.push(`/path/${props.path.id}`)
}
</script>

<template>
  <div class="path-card" @click="goToPath">
    <div class="path-thumbnail" :style="{ background: path.color + '15' }">
      <span class="path-emoji">{{ path.icon }}</span>
    </div>
    <div class="path-info">
      <h3 class="path-title">{{ path.title }}</h3>
      <div class="path-meta">
        <span class="path-count">{{ courseCount }} lessons</span>
        <span class="path-dot">&middot;</span>
        <span class="path-time">{{ path.estimatedTime }}</span>
      </div>
    </div>
    <div class="path-difficulty">
      <span class="difficulty-badge" :class="path.difficulty.toLowerCase()">{{ path.difficulty }}</span>
    </div>
  </div>
</template>

<style scoped>
.path-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all 0.2s;
}

.path-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.path-thumbnail {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.path-emoji {
  font-size: 3rem;
}

.path-info {
  padding: 14px 16px 6px;
}

.path-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 6px;
  line-height: 1.3;
}

.path-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: var(--text-muted);
}

.path-difficulty {
  padding: 6px 16px 14px;
}

.difficulty-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 10px;
  text-transform: uppercase;
}

.difficulty-badge.beginner {
  background: #d1fae5;
  color: #065f46;
}

.difficulty-badge.intermediate {
  background: #dbeafe;
  color: #1e40af;
}

.difficulty-badge.advanced {
  background: #fce7f3;
  color: #9d174d;
}
</style>
