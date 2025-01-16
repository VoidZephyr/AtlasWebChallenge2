import { createRouter, createWebHistory } from 'vue-router'
import ArticlesView from '../views/ArticlesView.vue'
import SampleView from '@/views/SampleView.vue'

// This is the vue router. It lets us choose what to show in the <RouterView />,
// dependant on the URL.

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ArticlesView,
    },
    {
      path: '/sample',
      name: 'sample',
      component: SampleView,
    },
  ],
})

export default router
