<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { learningPaths, courses } from '../data/courses.js'
import CourseCard from '../components/CourseCard.vue'

const route = useRoute()
const router = useRouter()

const path = computed(() => learningPaths.find(p => p.id === route.params.id))
const pathCourses = computed(() => courses.filter(c => c.pathId === route.params.id))

function goBack() {
  router.back()
}
</script>

<template>
  <div v-if="path" class="path-detail">
    <button class="back-btn" @click="goBack">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Back
    </button>

    <div class="path-header" :style="{ borderLeft: `4px solid ${path.color}` }">
      <div class="path-icon-large">{{ path.icon }}</div>
      <div class="path-info">
        <div class="path-meta">
          <span class="difficulty-badge" :class="path.difficulty.toLowerCase()">{{ path.difficulty }}</span>
          <span class="path-time">{{ path.estimatedTime }}</span>
          <span class="path-count">{{ pathCourses.length }} lessons</span>
        </div>
        <h1 class="path-title">{{ path.title }}</h1>
        <p class="path-desc">{{ path.description }}</p>
      </div>
    </div>

    <div class="courses-section">
      <h2 class="section-title">Lessons in this Path</h2>
      <div class="courses-list">
        <CourseCard
          v-for="course in pathCourses"
          :key="course.id"
          :course="course"
        />
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <h2>Learning path not found</h2>
    <router-link to="/" class="back-home">Back to Dashboard</router-link>
  </div>
</template>

<style scoped>
.path-detail {
  max-width: 900px;
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: var(--bg-card);
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
  transition: all 0.2s;
}

.back-btn:hover {
  color: var(--text-primary);
  box-shadow: var(--shadow-md);
}

.path-header {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: 28px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 24px;
}

.path-icon-large {
  font-size: 3.5rem;
  flex-shrink: 0;
}

.path-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}

.difficulty-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 10px;
  text-transform: uppercase;
}

.difficulty-badge.beginner { background: #d1fae5; color: #065f46; }
.difficulty-badge.intermediate { background: #dbeafe; color: #1e40af; }
.difficulty-badge.advanced { background: #fce7f3; color: #9d174d; }

.path-time, .path-count {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.path-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.path-desc {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 14px;
}

.courses-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.not-found {
  text-align: center;
  padding: 60px 20px;
}

.back-home {
  display: inline-block;
  margin-top: 12px;
  color: var(--accent-dark);
  font-weight: 600;
}

@media (max-width: 640px) {
  .path-header {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }

  .path-title {
    font-size: 1.2rem;
  }
}
</style>
