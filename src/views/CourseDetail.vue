<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { courses } from '../data/courses.js'
import VideoCard from '../components/VideoCard.vue'
import AnimatedLesson from '../components/AnimatedLesson.vue'
import LocalVideoCard from '../components/LocalVideoCard.vue'

const route = useRoute()
const router = useRouter()

const course = computed(() => courses.find(c => c.id === route.params.id))

const relatedCourses = computed(() => {
  if (!course.value) return []
  return courses
    .filter(c => c.pathId === course.value.pathId && c.id !== course.value.id)
    .slice(0, 3)
})

function goBack() {
  router.back()
}
</script>

<template>
  <div v-if="course" class="course-detail">
    <!-- Back Button -->
    <button class="back-btn" @click="goBack">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
      Back
    </button>

    <div class="detail-layout">
      <div class="detail-main">
        <!-- Header -->
        <div class="detail-header">
          <div class="header-meta">
            <span class="meta-badge" :class="course.difficulty.toLowerCase()">{{ course.difficulty }}</span>
            <span class="meta-type">{{ course.type === 'video' ? 'Video Lesson' : 'Text Guide' }}</span>
            <span class="meta-duration">{{ course.duration }}</span>
          </div>
          <h1 class="detail-title">{{ course.title }}</h1>
          <p class="detail-desc">{{ course.description }}</p>
          <div v-if="course.tags" class="tags-row">
            <span v-for="tag in course.tags" :key="tag" class="tag">#{{ tag }}</span>
          </div>
        </div>

        <!-- Pre-Recorded Video Lesson -->
        <div v-if="course.localVideo" class="video-section">
          <div class="video-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Video Lesson
          </div>
          <LocalVideoCard
            :src="course.localVideo"
            :title="course.title"
            :description="course.description"
          />
        </div>

        <!-- Generated Animated Lesson Video -->
        <div v-if="course.steps" class="video-section">
          <div class="video-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            Animated Lesson
          </div>
          <AnimatedLesson
            :title="course.title"
            :description="course.description"
            :steps="course.steps"
            :tags="course.tags"
            :difficulty="course.difficulty"
            :lessonId="course.id"
          />
        </div>

        <!-- YouTube Video (when available) -->
        <div v-if="course.videoId" class="video-section">
          <div class="video-label">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="color: #ff0000"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            YouTube Video
          </div>
          <VideoCard
            :videoId="course.videoId"
            :title="course.title"
          />
        </div>

        <div v-if="course.externalUrl" class="external-video-notice">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          <div>
            <p class="notice-title">Official documentation</p>
            <a :href="course.externalUrl" target="_blank" class="notice-link">
              Read more on the official site
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Step by Step Guide -->
        <div v-if="course.steps" class="steps-section">
          <h2 class="section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            Step-by-Step Guide
          </h2>
          <div class="steps-list">
            <div v-for="(step, i) in course.steps" :key="i" class="step-item">
              <div class="step-number">{{ i + 1 }}</div>
              <div class="step-content">
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-detail">{{ step.detail }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <aside class="detail-sidebar">
        <!-- Resources -->
        <div v-if="course.resources" class="resources-card">
          <h3 class="sidebar-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            Learn More
          </h3>
          <div class="resources-list">
            <a
              v-for="(res, i) in course.resources"
              :key="i"
              :href="res.url"
              target="_blank"
              class="resource-link"
            >
              <span class="resource-title">{{ res.title }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Related -->
        <div v-if="relatedCourses.length" class="related-card">
          <h3 class="sidebar-title">Related Lessons</h3>
          <div class="related-list">
            <router-link
              v-for="rc in relatedCourses"
              :key="rc.id"
              :to="`/course/${rc.id}`"
              class="related-item"
            >
              <div class="related-icon" :class="rc.type">
                <svg v-if="rc.type === 'video'" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <div>
                <p class="related-title">{{ rc.title }}</p>
                <p class="related-meta">{{ rc.duration }} &middot; {{ rc.difficulty }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </aside>
    </div>
  </div>

  <div v-else class="not-found">
    <h2>Course not found</h2>
    <router-link to="/" class="back-home">Back to Dashboard</router-link>
  </div>
</template>

<style scoped>
.course-detail {
  max-width: 1100px;
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

.detail-layout {
  display: flex;
  gap: 20px;
}

.detail-main {
  flex: 1;
  min-width: 0;
}

.detail-sidebar {
  width: 280px;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Header */
.detail-header {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: 28px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
}

.header-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.meta-badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 10px;
  text-transform: uppercase;
}

.meta-badge.beginner { background: #d1fae5; color: #065f46; }
.meta-badge.intermediate { background: #dbeafe; color: #1e40af; }
.meta-badge.advanced { background: #fce7f3; color: #9d174d; }

.meta-type, .meta-duration {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.detail-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 8px;
  line-height: 1.3;
}

.detail-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 12px;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 0.75rem;
  color: var(--accent-dark);
  background: var(--accent-light);
  padding: 2px 10px;
  border-radius: 10px;
  font-weight: 500;
}

/* Video */
.video-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 8px;
}

.video-section {
  margin-bottom: 16px;
}

.external-video-notice {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
}

.notice-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.notice-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent-dark);
  transition: opacity 0.2s;
}

.notice-link:hover {
  opacity: 0.7;
}

/* Steps */
.steps-section {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: 24px;
  box-shadow: var(--shadow-sm);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 18px;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.step-item {
  display: flex;
  gap: 14px;
}

.step-number {
  width: 32px;
  height: 32px;
  min-width: 32px;
  background: var(--accent);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  margin-top: 2px;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.step-detail {
  font-size: 0.84rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Sidebar Cards */
.resources-card, .related-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-sm);
}

.sidebar-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 14px;
}

.resources-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.resource-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  border-radius: var(--radius-sm);
  transition: background 0.2s;
}

.resource-link:hover {
  background: var(--bg-hover);
}

.resource-title {
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--accent-dark);
}

.related-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.related-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: var(--radius-sm);
  transition: background 0.2s;
}

.related-item:hover {
  background: var(--bg-hover);
}

.related-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.related-icon.video {
  background: #7B68EE20;
  color: #7B68EE;
}

.related-icon.text {
  background: #4ECDC420;
  color: #4ECDC4;
}

.related-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.related-meta {
  font-size: 0.72rem;
  color: var(--text-muted);
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

@media (max-width: 768px) {
  .detail-layout {
    flex-direction: column;
  }

  .detail-sidebar {
    width: 100%;
    min-width: 0;
  }

  .detail-header {
    padding: 20px;
  }

  .detail-title {
    font-size: 1.2rem;
  }
}
</style>
