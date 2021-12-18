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
  {
    path: '/oneroom',
    name: 'oneroom',
    component: () => import('@/views/OneRoom/OneRoom_01'),
    children: [
      {
        path: ':search',
        props: true,
        component: () => import('@/views/OneRoom/OneRoom_01')
      }
    ]
  },
  {
    path: '/oneroom/picked',
    component: () => import('@/views/OneRoom/OneRoom_02')
  },
  {
    path: '/oneroom/takeout',
    component: () => import('@/views/OneRoom/OneRoom_03')
  },
  {
    path: '/officetel',
    name: 'officetel',
    component: () => import('@/views/Officetel/Officetel_01'),
    children: [
      {
        path: ':search',
        props: true,
        component: () => import('@/views/Officetel/Officetel_01')
      }
    ]
  },
  {
    path: '/officetel/picked',
    component: () => import('@/views/Officetel/Officetel_02')
  },
  {
    path: '/officetel/takeout',
    component: () => import('@/views/Officetel/Officetel_03')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/Store/Store_01'),
    children: [
      {
        path: ':search',
        props: true,
        component: () => import('@/views/Store/Store_01')
      }
    ]
  },
  {
    path: '/store/picked',
    component: () => import('@/views/Store/Store_02')
  },
  {
    path: '/store/takeout',
    component: () => import('@/views/Store/Store_03')
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
