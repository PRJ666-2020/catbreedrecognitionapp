import Vue from "vue";
import Router from "vue-router";
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Resetpassword from "../views/Resetpassword.vue";
import { auth } from '../firebase'
import Home from "../views/Home"
import CatProfile from "../views/CatProfile.vue"

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Main',
    components: {
      header: AppHeader,
      default: Home,
      footer: AppFooter
    }
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
    path: "/catprofile",
    name: "CatProfile",
    components: {
      header: AppHeader,
      default: CatProfile,
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
  }
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