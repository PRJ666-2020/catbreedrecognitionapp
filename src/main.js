
import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
// import './registerServiceWorker'

import store from './store'
import { auth } from './firebase'
// import './assets/scss/app.scss'

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
