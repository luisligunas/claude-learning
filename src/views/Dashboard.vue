<script setup>
import { computed } from 'vue'
import { learningPaths, courses, featuredVideos, quickWins } from '../data/courses.js'
import PathCard from '../components/PathCard.vue'
import VideoCard from '../components/VideoCard.vue'
import CourseCard from '../components/CourseCard.vue'
import QuickWinCard from '../components/QuickWinCard.vue'

const pathsWithCounts = computed(() =>
  learningPaths.map(p => ({
    ...p,
    courseCount: courses.filter(c => c.pathId === p.id).length,
  }))
)

const allCourses = computed(() => courses)
</script>

<template>
  <div class="dashboard">
    <div class="content-area">
      <!-- Header -->
      <div class="welcome-banner">
        <div class="welcome-text">
          <h1>Master Claude AI</h1>
          <p>Your personalized learning hub for getting the most out of Claude — from first prompt to power-user workflows.</p>
        </div>
        <div class="welcome-visual">
          <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
            <rect x="10" y="20" width="50" height="60" rx="8" fill="#FEF3D9" />
            <rect x="15" y="30" width="40" height="4" rx="2" fill="#F5A623" opacity="0.5" />
            <rect x="15" y="38" width="30" height="4" rx="2" fill="#F5A623" opacity="0.3" />
            <rect x="15" y="46" width="35" height="4" rx="2" fill="#F5A623" opacity="0.4" />
            <circle cx="105" cy="50" r="28" fill="#F5A623" opacity="0.15" />
            <circle cx="105" cy="50" r="18" fill="#F5A623" opacity="0.25" />
            <path d="M98 50l5 5 10-10" stroke="#F5A623" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M70 30 Q80 15 95 25" stroke="#F5A623" stroke-width="1.5" stroke-dasharray="3 3" fill="none" />
          </svg>
        </div>
      </div>

      <!-- Learning Paths -->
      <section class="section">
        <h2 class="section-title">Learning Paths</h2>
        <div class="paths-grid">
          <PathCard
            v-for="path in pathsWithCounts"
            :key="path.id"
            :path="path"
            :courseCount="path.courseCount"
          />
        </div>
      </section>

      <!-- Featured Videos -->
      <section class="section">
        <h2 class="section-title">Featured Videos</h2>
        <div class="videos-grid">
          <VideoCard
            v-for="video in featuredVideos"
            :key="video.id"
            :videoId="video.id"
            :title="video.title"
            :creator="video.creator"
            :description="video.description"
          />
        </div>
      </section>

      <!-- All Courses -->
      <section class="section">
        <h2 class="section-title">All Lessons</h2>
        <div class="courses-list">
          <CourseCard
            v-for="course in allCourses"
            :key="course.id"
            :course="course"
          />
        </div>
      </section>
    </div>

    <!-- Right Sidebar -->
    <aside class="right-sidebar">
      <!-- Stats -->
      <div class="stats-card">
        <h3 class="stats-heading">Your Progress</h3>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">{{ learningPaths.length }}</span>
            <span class="stat-label">Learning Paths</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ courses.length }}</span>
            <span class="stat-label">Lessons</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">{{ featuredVideos.length }}</span>
            <span class="stat-label">Videos</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">11h</span>
            <span class="stat-label">Total Content</span>
          </div>
        </div>
      </div>

      <!-- Quick Wins -->
      <div class="quick-wins-section">
        <h3 class="sidebar-heading">Quick Wins</h3>
        <p class="sidebar-subtitle">Highest impact, lowest effort</p>
        <div class="quick-wins-list">
          <QuickWinCard
            v-for="(win, i) in quickWins"
            :key="i"
            :win="win"
          />
        </div>
      </div>

      <!-- Latest from Claude -->
      <div class="news-card">
        <h3 class="sidebar-heading">What's New</h3>
        <div class="news-list">
          <a href="https://www.anthropic.com/news/claude-opus-4-5" target="_blank" class="news-item">
            <span class="news-badge">New</span>
            <div>
              <p class="news-title">Claude Opus 4.6</p>
              <p class="news-desc">Latest model with adaptive thinking & agent teams</p>
            </div>
          </a>
          <a href="https://www.anthropic.com/news/model-context-protocol" target="_blank" class="news-item">
            <span class="news-badge">MCP</span>
            <div>
              <p class="news-title">MCP goes to Linux Foundation</p>
              <p class="news-desc">Open standard now governed by the Agentic AI Foundation</p>
            </div>
          </a>
          <a href="https://www.morphllm.com/claude-code-plugins" target="_blank" class="news-item">
            <span class="news-badge hot">Hot</span>
            <div>
              <p class="news-title">Claude Code Plugins</p>
              <p class="news-desc">Install complete feature bundles with one command</p>
            </div>
          </a>
          <a href="https://code.claude.com/docs/en/hooks" target="_blank" class="news-item">
            <span class="news-badge">Update</span>
            <div>
              <p class="news-title">HTTP Hooks</p>
              <p class="news-desc">POST JSON to URLs for webhook-style automation</p>
            </div>
          </a>
        </div>
      </div>
    </aside>
  </div>
</template>

<style scoped>
.dashboard {
  display: flex;
  gap: 20px;
}

.content-area {
  flex: 1;
  min-width: 0;
}

.right-sidebar {
  width: 300px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Welcome Banner */
.welcome-banner {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: 28px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: var(--shadow-sm);
  margin-bottom: 24px;
}

.welcome-text h1 {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.welcome-text p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  max-width: 420px;
  line-height: 1.5;
}

.welcome-visual {
  flex-shrink: 0;
}

/* Sections */
.section {
  margin-bottom: 28px;
}

.section-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 14px;
}

/* Paths Grid */
.paths-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px;
}

/* Videos Grid */
.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
}

/* Courses List */
.courses-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* Stats Card */
.stats-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-sm);
}

.stats-heading {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 14px;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.stat-item {
  text-align: center;
  padding: 10px;
  background: var(--bg-hover);
  border-radius: var(--radius-sm);
}

.stat-number {
  display: block;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--accent-dark);
}

.stat-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  font-weight: 500;
}

/* Quick Wins */
.quick-wins-section {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-sm);
}

.sidebar-heading {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.sidebar-subtitle {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.quick-wins-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* News Card */
.news-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-sm);
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
}

.news-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
  transition: opacity 0.2s;
}

.news-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.news-item:hover {
  opacity: 0.8;
}

.news-badge {
  font-size: 0.6rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--accent-light);
  color: var(--accent-dark);
  white-space: nowrap;
  margin-top: 2px;
  text-transform: uppercase;
}

.news-badge.hot {
  background: #fce7f3;
  color: #9d174d;
}

.news-title {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.news-desc {
  font-size: 0.72rem;
  color: var(--text-secondary);
  line-height: 1.3;
  margin-top: 2px;
}

@media (max-width: 1200px) {
  .right-sidebar {
    width: 260px;
    min-width: 260px;
  }
}

@media (max-width: 1024px) {
  .dashboard {
    flex-direction: column;
  }

  .right-sidebar {
    width: 100%;
    min-width: 0;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .right-sidebar > * {
    flex: 1;
    min-width: 280px;
  }
}

@media (max-width: 640px) {
  .welcome-visual {
    display: none;
  }

  .welcome-banner {
    padding: 20px;
  }

  .welcome-text h1 {
    font-size: 1.3rem;
  }

  .paths-grid {
    grid-template-columns: 1fr 1fr;
  }

  .videos-grid {
    grid-template-columns: 1fr;
  }
}
</style>
