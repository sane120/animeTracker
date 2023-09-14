import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Two from '@/views/two.vue';
import Three from '@/views/three.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/two',
    name: 'Two',
    component: Two,
  },
  {
    path: '/three',
    name: 'Three',
    component: Three,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
