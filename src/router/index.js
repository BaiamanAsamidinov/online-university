import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/students',
    name: 'Students',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/students/Students.vue')
  },
  {
    path: '/professors',
    name: 'Professors',
    component: () => import('../views/professors/Professors.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/courses/Courses.vue')
  },
  {
    path: '/departments',
    name: 'Departments',
    component: () => import('../views/departments/Departments.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
