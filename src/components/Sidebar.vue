<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const emit = defineEmits(['navigate'])

const navItems = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' },
  { path: '/path/getting-started', label: 'Getting Started', icon: 'rocket' },
  { path: '/path/claude-code', label: 'Claude Code', icon: 'code' },
  { path: '/path/prompt-engineering', label: 'Prompting', icon: 'edit' },
  { path: '/path/advanced-features', label: 'Advanced', icon: 'bolt' },
  { path: '/resources', label: 'Resources', icon: 'link' },
]

const currentPath = computed(() => route.path)

function handleNav() {
  emit('navigate')
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="logo">
        <div class="logo-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" fill="#F5A623" />
            <path d="M9 14l3 3 7-7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <span class="logo-text">Claude<span class="logo-accent">Learn</span></span>
      </div>
    </div>

    <nav class="nav-list">
      <router-link
        v-for="item in navItems"
        :key="item.path"
        :to="item.path"
        class="nav-item"
        :class="{ active: currentPath === item.path }"
        @click="handleNav"
      >
        <div class="nav-icon">
          <svg v-if="item.icon === 'dashboard'" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <rect x="2" y="2" width="7" height="7" rx="2" />
            <rect x="11" y="2" width="7" height="7" rx="2" />
            <rect x="2" y="11" width="7" height="7" rx="2" />
            <rect x="11" y="11" width="7" height="7" rx="2" />
          </svg>
          <svg v-else-if="item.icon === 'rocket'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          <svg v-else-if="item.icon === 'code'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <svg v-else-if="item.icon === 'edit'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          <svg v-else-if="item.icon === 'bolt'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <svg v-else-if="item.icon === 'link'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </div>
        <span class="nav-label">{{ item.label }}</span>
      </router-link>
    </nav>

    <div class="sidebar-footer">
      <div class="footer-illustration">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none">
          <circle cx="60" cy="70" r="30" fill="#FEF3D9" />
          <circle cx="60" cy="45" r="20" fill="#F5A623" opacity="0.3" />
          <path d="M50 55 Q60 35 70 55" stroke="#F5A623" stroke-width="2" fill="none" />
          <circle cx="53" cy="48" r="2" fill="#1a1a2e" />
          <circle cx="67" cy="48" r="2" fill="#1a1a2e" />
          <path d="M55 58 Q60 63 65 58" stroke="#1a1a2e" stroke-width="1.5" fill="none" stroke-linecap="round" />
        </svg>
      </div>
      <p class="footer-text">Learn smarter with Claude</p>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 240px;
  min-width: 240px;
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);
  height: fit-content;
  position: sticky;
  top: 20px;
}

.sidebar-header {
  padding: 0 8px 20px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 16px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-text {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
}

.logo-accent {
  color: var(--accent);
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.nav-item:hover {
  background: var(--bg-hover);
  color: var(--text-primary);
}

.nav-item.active {
  background: var(--accent-light);
  color: var(--accent-dark);
}

.nav-item.active .nav-icon {
  color: var(--accent);
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.sidebar-footer {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  text-align: center;
}

.footer-illustration {
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.footer-text {
  font-size: 0.8rem;
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 1024px) {
  .sidebar {
    position: fixed;
    left: -280px;
    top: 0;
    height: 100vh;
    border-radius: 0 var(--radius-xl) var(--radius-xl) 0;
    z-index: 1000;
    transition: left 0.3s ease;
    overflow-y: auto;
  }

  .sidebar.open {
    left: 0;
  }
}
</style>
