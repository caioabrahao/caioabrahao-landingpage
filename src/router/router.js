import { createRouter, createWebHistory } from 'vue-router';

import Home from '/src/pages/Home.vue';
import About from '/src/pages/About.vue';


const routes = [
  {
    path: '/', // Root path
    name: 'Home',
    component: Home,
  },
  {
    path: '/about', // Root path
    name: 'About',
    component: About,
  },
];

// Create and export the router
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

export default router;
