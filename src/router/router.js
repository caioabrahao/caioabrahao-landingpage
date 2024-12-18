import { createRouter, createWebHistory } from 'vue-router';

import Home from '/src/pages/Home.vue';


const routes = [
  {
    path: '/', // Root path
    name: 'Home',
    component: Home,
  },
];

// Create and export the router
const router = createRouter({
  history: createWebHistory(), // Use HTML5 history mode
  routes,
});

export default router;
