import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setupAxiosInterceptors } from "./shared/axios-interceptor.js";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
// Vue.use(VueCookie);
setupAxiosInterceptors(() => console.log("Unauthorized!"));

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
