import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import AccountView from '../views/AccountView.vue'
import ChatsView from '../views/ChatsView.vue'
import SettingsView from '../views/SettingsView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { path: '/dashboard', component: DashboardView },
  { path: '/account', component: AccountView },
  { path: '/chats', component: ChatsView },
  { path: '/settings', component: SettingsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
