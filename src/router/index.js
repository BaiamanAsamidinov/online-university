import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { mapGetters } from "vuex";
import { userStore } from "../store/moduls";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/students",
    name: "Students",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/students/Students.vue"),
  },
  {
    path: "/professors",
    name: "Professors",
    component: () => import("../views/professors/Professors.vue"),
    meta: {
      authorities: ["Admin", "Teacher", "Student"],
      requiresAuth: true,
    },
  },
  {
    path: "/attendance",
    name: "Attendance",
    component: () => import("../views/attendance/Attendance.vue"),
    meta: {
      // authorities: ["Admin", "Teacher", "Student"],
      // requiresAuth: true,
    },
  },
  {
    path: "/courses",
    name: "Courses",
    component: () => import("../views/courses/Courses.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/departments",
    name: "Departments",
    component: () => import("../views/departments/Departments.vue"),
    meta: { authorities: ["Admin"], requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let authorities = userStore.state.user.authorities;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let authenticated = mapGetters(["authenticated"]);
    if (!authenticated) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      console.log(`to.meta.authorities`, to.meta.authorities);
      console.log(`authorities`, authorities);
      if (to.matched.some((record) => record.meta.authorities)) {
        let authoritiesFromRout = to.meta.authorities;
        if (!authoritiesFromRout.includes(authorities)) {
          alert("you have not permissions");
        } else {
          next();
        }
      } else {
        next(); // make sure to always call next()!
      }
    }
  } else {
    next(); // make sure to always call next()!
  }
});
export default router;
