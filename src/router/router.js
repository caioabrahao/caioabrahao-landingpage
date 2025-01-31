import { createRouter, createWebHistory } from 'vue-router';

import Home from '/src/pages/Home.vue';
import About from '/src/pages/About.vue';
import Portfolio from '../pages/Portfolio.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Caio Abrahão' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'Caio Abrahão | About' }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: { title: 'Caio Abrahão | Projects' }
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title';
  next();
});

export default router;
