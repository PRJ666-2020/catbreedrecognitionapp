import Vue from "vue";
import Router from "vue-router";
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import Components from "../views/Components.vue";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Resetpassword from "../views/Resetpassword.vue";
import PostDetail from "../views/PostDetail.vue"
import recognizebreed from "../views/recognizebreed.vue"

import { auth } from '../firebase'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Login',
    components: {
      header: AppHeader,
      default: Login,
      footer: AppFooter
    },
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      header: AppHeader,
      default: Login,
      footer: AppFooter
    }
  },
  {
    path: "/register",
    name: "Register",
    components: {
      header: AppHeader,
      default: Register,
      footer: AppFooter
    }
  },
  {
    path: "/profile",
    name: "Profile",
    components: {
      header: AppHeader,
      default: Profile,
      footer: AppFooter
    },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/resetpassword",
    name: "resetpassword",
    components: {
      header: AppHeader,
      default: Resetpassword,
      footer: AppFooter
    }
  },
  {
    path: "/recognize",
    name: "Recognize",
    components: {
      header: AppHeader,
      default: recognizebreed,
      footer: AppFooter
    }
  },

]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router