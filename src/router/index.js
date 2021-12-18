import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: '홈 화면',
    component: Home,
  },
  {
    path: '/apart',
    name: 'apart',
    component: () => import('@/views/Apart/Apart_01'),
    children: [
      {
        path: ':search',
        props: true,
        component: () => import('@/views/Apart/Apart_01')
      }
    ]
  },
  {
    path: '/apart/offer',
    component: () => import('@/views/Apart/Apart_02')
  },
  {
    path: '/apart/population',
    component: () => import('@/views/Apart/Apart_03')
  },
  {
    path: '/villa',
    name: 'villa',
    component: () => import('@/views/Villa/Villa_01'),
    children: [
      {
        path: ':search',
        props: true,
        component: () => import('@/views/Villa/Villa_01')
      }
    ]
  },
  {
    path: '/villa/picked',
    component: () => import('@/views/Villa/Villa_02')
  },
  {
    path: '/villa/takeout',
    component: () => import('@/views/Villa/Villa_03')
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
