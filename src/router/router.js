import { createRouter, createWebHistory } from 'vue-router';

import Home from '/src/pages/Home.vue';
import About from '/src/pages/About.vue';
import Portfolio from '../pages/Portfolio.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
];


// Create and export the router
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

export default router;
