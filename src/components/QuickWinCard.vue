<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  win: Object,
})

const router = useRouter()

function goToWin() {
  router.push(props.win.link)
}

const impactColors = {
  'Very High': { bg: '#fce7f3', text: '#9d174d' },
  'High': { bg: '#dbeafe', text: '#1e40af' },
  'Medium': { bg: '#fef3d9', text: '#92400e' },
}
</script>

<template>
  <div class="quick-win" @click="goToWin">
    <div class="win-header">
      <h4 class="win-title">{{ win.title }}</h4>
      <span class="impact-badge" :style="{ background: impactColors[win.impact].bg, color: impactColors[win.impact].text }">
        {{ win.impact }} Impact
      </span>
    </div>
    <p class="win-desc">{{ win.description }}</p>
    <div class="win-footer">
      <span class="effort-label">Effort: {{ win.effort }}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.quick-win {
  background: var(--bg-card);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all 0.2s;
}

.quick-win:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.win-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
}

.win-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.impact-badge {
  font-size: 0.65rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 8px;
  white-space: nowrap;
  flex-shrink: 0;
}

.win-desc {
  font-size: 0.78rem;
  color: var(--text-secondary);
  line-height: 1.4;
  margin-bottom: 8px;
}

.win-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.effort-label {
  font-size: 0.72rem;
  color: var(--text-muted);
  font-weight: 500;
}
</style>
