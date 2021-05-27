import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupAxiosInterceptors } from './shared/axios-interceptor.js';
import vuetify from './plugins/vuetify'
// import VueRouter from "vue-router";
// import VueSidebarMenu from "vue-sidebar-menu";
// import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
// Vue.use(VueRouter);
// Vue.use(VueSidebarMenu);

// const Installation = {
//   template: "<div>Installation</div>"
// };
//
// const BasicUsage = {
//   template: "<div>basic-usage</div>"
// };
//
// const router = new VueRouter({
//   routes: [
//     {
//       path: "/",
//       name: "Installation",
//       component: Installation
//     },
//     {
//       path: "/basic-usage",
//       name: "BasicUsage",
//       component: BasicUsage
//     }
//   ]
// });

Vue.config.productionTip = false;
// Vue.use(VueCookie);
setupAxiosInterceptors(() => console.log('Unauthorized!'));

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
