<script setup>
import { externalResources } from '../data/courses.js'

const categoryIcons = {
  'Official Documentation': 'book',
  'Community Guides': 'users',
  'Video Courses': 'video',
  'Articles & Blog Posts': 'edit',
}
</script>

<template>
  <div class="resources-page">
    <div class="page-header">
      <h1 class="page-title">Resources</h1>
      <p class="page-desc">Curated links to the best Claude learning materials across the web.</p>
    </div>

    <div class="categories">
      <div v-for="category in externalResources" :key="category.category" class="category-card">
        <div class="category-header">
          <div class="category-icon">
            <svg v-if="categoryIcons[category.category] === 'book'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <svg v-else-if="categoryIcons[category.category] === 'users'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <svg v-else-if="categoryIcons[category.category] === 'video'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </div>
          <h2 class="category-title">{{ category.category }}</h2>
        </div>
        <div class="items-list">
          <a
            v-for="item in category.items"
            :key="item.url"
            :href="item.url"
            target="_blank"
            class="resource-item"
          >
            <div class="item-info">
              <p class="item-title">{{ item.title }}</p>
              <p class="item-desc">{{ item.description }}</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resources-page {
  max-width: 900px;
}

.page-header {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: 28px;
  box-shadow: var(--shadow-sm);
  margin-bottom: 24px;
}

.page-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.page-desc {
  font-size: 0.92rem;
  color: var(--text-secondary);
}

.categories {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.category-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  padding: 20px;
  box-shadow: var(--shadow-sm);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.category-icon {
  width: 36px;
  height: 36px;
  background: var(--accent-light);
  color: var(--accent-dark);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.items-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.resource-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  transition: background 0.2s;
  gap: 12px;
}

.resource-item:hover {
  background: var(--bg-hover);
}

.item-title {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--accent-dark);
  margin-bottom: 2px;
}

.item-desc {
  font-size: 0.78rem;
  color: var(--text-secondary);
}

@media (max-width: 640px) {
  .page-header {
    padding: 20px;
  }
}
</style>
