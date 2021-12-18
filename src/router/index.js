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
    name: 'apart',
    component: () => import('@/views/Apart_01'),
    children: [
      {
        path: ':search',
        props: true,
        component: () => import('@/views/Apart_01')
      }
    ]
  },
  {
    path: '/apart/offer',
    component: () => import('@/views/Apart_02')
  },
  {
    path: '/apart/population',
    component: () => import('@/views/Apart_03')
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
