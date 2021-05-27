import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setupAxiosInterceptors } from "./shared/axios-interceptor.js";

Vue.config.productionTip = false;
// Vue.use(VueCookie);
setupAxiosInterceptors(() => console.log("Unauthorized!"));

new Vue({
  router,
  store,

  render: (h) => h(App),
}).$mount("#app");
