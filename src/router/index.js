import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../components/Register.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import( '../views/ChatView.vue')
    },
    {
      path: '/chat-choose',
      name: 'Chat-Choose',
      component: () => import('../views/ChooseChat.vue')
    },
    {
      path: '/chat-index',
      name: 'Chat-Index',
      component: () => import('../views/ChatIndex.vue')
    },
  ]
})

export default router




