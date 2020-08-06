import Vue from "vue";
import Router from "vue-router";
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Resetpassword from "../views/Resetpassword.vue";
import PostDetail from "../views/PostDetail.vue"
import recognizebreed from "../views/recognizebreed.vue"
import HomePage from "../views/Homepage.vue"
import BreedList from "../views/BreedList.vue"
import { auth } from '../firebase'
import Home from "../views/Home.vue"
import { auth } from '../firebase'
import Home from "../views/Home"
import CatProfile from "../views/CatProfile.vue"
import Breedlist from "../views/BreedList.vue"

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Main',
    components: {
      header: AppHeader,
      default: Home,
      footer: AppFooter
    }
  },
  {
    path: '/breedlist',
    name: 'BreedList',
    components: {
      header: AppHeader,
      default: BreedList,
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
  {

    path: "/breedlist",
    name: "Breedlist",
    components: {
      header: AppHeader,
      default: Breedlist,
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