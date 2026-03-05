<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  course: Object,
})

const router = useRouter()

function goToCourse() {
  router.push(`/course/${props.course.id}`)
}

const typeColors = {
  video: '#7B68EE',
  text: '#4ECDC4',
}
</script>

<template>
  <div class="course-card" @click="goToCourse">
    <div class="card-left">
      <div class="course-icon" :style="{ background: typeColors[course.type] + '20', color: typeColors[course.type] }">
        <svg v-if="course.type === 'video'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      </div>
      <div class="course-info">
        <h3 class="course-title">{{ course.title }}</h3>
        <p class="course-desc">{{ course.description }}</p>
      </div>
    </div>
    <div class="card-right">
      <div class="course-meta">
        <span class="meta-badge" :class="course.difficulty.toLowerCase()">{{ course.difficulty }}</span>
        <span class="meta-duration">{{ course.duration }}</span>
      </div>
      <div class="rating">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span>{{ course.rating }}</span>
      </div>
      <button class="view-btn" @click.stop="goToCourse">View Course</button>
    </div>
  </div>
</template>

<style scoped>
.course-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-card);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  box-shadow: var(--shadow-sm);
  transition: all 0.2s;
  cursor: pointer;
  gap: 16px;
}

.course-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.card-left {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
  min-width: 0;
}

.course-icon {
  width: 42px;
  height: 42px;
  min-width: 42px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.course-info {
  min-width: 0;
}

.course-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.course-desc {
  font-size: 0.78rem;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 400px;
}

.card-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}

.course-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

.meta-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.meta-badge.beginner {
  background: #d1fae5;
  color: #065f46;
}

.meta-badge.intermediate {
  background: #dbeafe;
  color: #1e40af;
}

.meta-badge.advanced {
  background: #fce7f3;
  color: #9d174d;
}

.meta-duration {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
}

.view-btn {
  padding: 6px 16px;
  border: 1.5px solid var(--accent);
  border-radius: var(--radius-sm);
  color: var(--accent-dark);
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.2s;
  white-space: nowrap;
}

.view-btn:hover {
  background: var(--accent);
  color: white;
}

@media (max-width: 768px) {
  .course-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .card-right {
    width: 100%;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid var(--border);
    margin-top: 4px;
  }

  .course-desc {
    white-space: normal;
    max-width: none;
  }
}
</style>
