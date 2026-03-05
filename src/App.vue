<script setup>
import Sidebar from './components/Sidebar.vue'
import { ref } from 'vue'

const sidebarOpen = ref(false)
</script>

<template>
  <div class="app-layout">
    <button class="mobile-menu-btn" @click="sidebarOpen = !sidebarOpen">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>
    <div class="sidebar-overlay" :class="{ active: sidebarOpen }" @click="sidebarOpen = false" />
    <Sidebar :class="{ open: sidebarOpen }" @navigate="sidebarOpen = false" />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  min-height: 100vh;
  padding: 20px;
  gap: 20px;
  max-width: 1600px;
  margin: 0 auto;
}

.main-content {
  flex: 1;
  min-width: 0;
}

.mobile-menu-btn {
  display: none;
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1001;
  background: var(--bg-card);
  border-radius: var(--radius-sm);
  padding: 8px;
  box-shadow: var(--shadow-md);
  color: var(--text-primary);
}

.sidebar-overlay {
  display: none;
}

@media (max-width: 1024px) {
  .app-layout {
    padding: 16px;
    padding-top: 60px;
  }

  .mobile-menu-btn {
    display: block;
  }

  .sidebar-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
  }

  .sidebar-overlay.active {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
