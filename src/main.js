import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faEnvelope);
Vue.config.productionTip = false;
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
