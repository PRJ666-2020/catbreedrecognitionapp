import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Resetpassword from "./views/Resetpassword.vue";
import ChangePassword from "./views/ChangePassword.vue"
import PostDetail from "./views/PostDetail.vue"
import BreedList from "./views/BreedList.vue"
import BreedDetail from "./views/BreedDetail.vue"
import RecognizeResult from "./views/RecognizeResult.vue"
import CatProfile from "./views/catprofile.vue"
import Posts from "./views/Posts.vue"
import RecognizeBreed from "./views/recognizebreed.vue"
import Homepage from "./views/Homepage.vue"

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },

    {
      path: "/recognize",
      name: "recognize",
      components: {
        header: AppHeader,
        default: RecognizeBreed,
        footer: AppFooter
      }
    },

    {
      path: "/components",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },

    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },

    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },

    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },

    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
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
      path: "/changepassword",
      name: "changepassword",
      components: {
        header: AppHeader,
        default: ChangePassword,
        footer: AppFooter
      }
    },

    {
      path: "/changepassword",
      name: "changepassword",
      components: {
        header: AppHeader,
        default: ChangePassword,
        footer: AppFooter
      }
    },

    {
      path: "/postdetail",
      name: "postdetail",
      components: {
        header: AppHeader,
        default: PostDetail,
        footer: AppFooter
      }
    },

    {
      path: "/breedlist",
      name: "breedlist",
      components: {
        header: AppHeader,
        default: BreedList,
      }
    },

    {

      path: "/breedlist",
      name: "breedlist",
      components: {
        header: AppHeader,
        default: BreedList,
      }
    },
    {
      path: "/catprofile",
      name: "catprofile",
      components: {
        header: AppHeader,
        default: CatProfile,

        footer: AppFooter
      }
    },

    {
      path: "/breeddetail",
      name: "breeddetail",
      components: {
        header: AppHeader,
        default: BreedDetail,
        footer: AppFooter
      }
    },

    {
      path: "/result",
      name: "result",
      components: {
        header: AppHeader,
        default: RecognizeResult,
        footer: AppFooter
      }
    },

    {
      path: "/breeddetail",
      name: "breeddetail",
      components: {
        header: AppHeader,
        default: BreedDetail,
        footer: AppFooter
      }
    },

    {
      path: "/result",
      name: "result",
      components: {
        header: AppHeader,
        default: RecognizeResult,
      }
    },
    {
      path: "/posts",
      name: "posts",
      components: {
        header: AppHeader,
        default: Posts,
        footer: AppFooter
      }
    },

    {
      path: "/home",
      name: "homepage",
      components: {
        header: AppHeader,
        default: Homepage,
        footer: AppFooter
      }
    }
  ],

  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
