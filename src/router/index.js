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
import { auth } from '../firebase'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Profile',
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
// export default new Router({
//   linkExactActiveClass: "active",
//   routes: [
//     {
//       path: "/",
//       name: "",
//       components: {
//         header: AppHeader,
//         default: Login,
//         footer: AppFooter
//       }
//     },
//     {
//       path: "/login",
//       name: "login",
//       components: {
//         header: AppHeader,
//         default: Login,
//         footer: AppFooter
//       }
//     },

//     {
//       path: "/landing",
//       name: "landing",

//       components: {
//         header: AppHeader,
//         default: Landing,
//         footer: AppFooter
//       }

//     },

//     {
//       path: "/register",
//       name: "register",
//       components: {
//         header: AppHeader,
//         default: Register,
//         footer: AppFooter
//       }
//     },
//     {
//       path: "/profile",
//       name: "profile",
//       components: {
//         header: AppHeader,
//         default: Profile,
//         footer: AppFooter
//       }
//     },
//     {
//       path: "/resetpassword",
//       name: "resetpassword",
//       components: {
//         header: AppHeader,
//         default: Resetpassword,

//       }
//     },
//     {
//       path: "/postdetail",
//       name: "postdetail",
//       components: {
//         header: AppHeader,
//         default: PostDetail,
//         footer: AppFooter
//       }
//     }
//   ],

//   scrollBehavior: to => {
//     if (to.hash) {
//       return { selector: to.hash };
//     } else {
//       return { x: 0, y: 0 };
//     }
//   }
// });
