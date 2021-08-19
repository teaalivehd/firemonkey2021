import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },


  // {
  //   path: '/:id',
  //   name: 'pharmacy_id',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import('../views/_id.vue')
  // }
]

const defaultTitle = 'FireMonkey2021';


const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes
})

//路由動態更改網頁標題
router.beforeEach((to, from, next) => { 
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  next();
});

export default router