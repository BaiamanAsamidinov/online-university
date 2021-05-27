import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import { mapGetters } from "vuex";
import { userStore } from "../store/moduls";
import store from "../store";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/students",
    name: "Students",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/students/Students.vue"),
    meta: {
      requiresAuth: true,
    },
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
      requiresAuth: true,
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
  let authenticated = userStore.state.authenticated;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!authenticated) {
      const token =
        localStorage.getItem("authenticationToken") ||
        sessionStorage.getItem("authenticationToken");
      const user = JSON.parse(localStorage.getItem("user1"));
      console.log(`user`, localStorage.getItem("user1"));
      if (token && user) {
        store.commit("setUser", {
          username: user.username,
          authorities: user.authorities,
        });
        store.commit("setAuthenticated", true);
        next();
      } else {
        next({
          path: "/login",
          query: { redirect: to.fullPath },
        });
      }
    } else {
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
