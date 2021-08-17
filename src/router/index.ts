import { createRouter, createWebHashHistory } from 'vue-router';
//路由类型
import type { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/components/login/Login.vue')
  },
  {
    path: '/main',
    component: () => import('@/components/main/Main.vue')
  }
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
