// router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Two from '@/views/two.vue';
import Three from '@/views/three.vue';
import Four from '@/views/four.vue';

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
    props: (route) => ({ appModel: route.meta.appModel }),
  },
  {
    path: '/three',
    name: 'Three',
    component: Three,
    props: true, // Enable route props for this route
  },
  {
    path: '/four',
    name: 'Four',
    component: Four,
    props: true, // Enable route props for this route
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
