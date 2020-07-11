import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import Argon from "./plugins/argon-kit";
<<<<<<< HEAD
// import './registerServiceWorker'

import store from './store'
import { auth } from './firebase'
// import './assets/scss/app.scss'
=======
>>>>>>> RecognizeCatPage

Vue.config.productionTip = false
Vue.use(Argon);

let app
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  if (user) {
    store.dispatch('fetchUserProfile', user)
  }
})