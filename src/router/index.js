import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Home.vue'

const routes = [
  {
    path: '/',
    name: '홈 화면',
    component: Home,
  },
  {
    path: '/apart',
    name: '아파트 매매',
    component: () => import('@/views/Apart_01')
  },
  {
    path: '/apart/offer',
    name: '아파트 신축',
    component: () => import('@/views/Apart_02')
  },
  {
    path: '/apart/population',
    name: '아파트 인구흐름',
    component: () => import('@/views/Apart_03')
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
