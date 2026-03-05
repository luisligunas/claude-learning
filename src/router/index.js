import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import CourseDetail from '../views/CourseDetail.vue'
import PathDetail from '../views/PathDetail.vue'
import Resources from '../views/Resources.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/course/:id', name: 'CourseDetail', component: CourseDetail, props: true },
  { path: '/path/:id', name: 'PathDetail', component: PathDetail, props: true },
  { path: '/resources', name: 'Resources', component: Resources },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
