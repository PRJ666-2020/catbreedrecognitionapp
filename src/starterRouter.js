import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/starter/StarterHeader";
import Footer from "./layout/starter/StarterFooter";
import Starter from "./views/Starter.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "starter",
      components: {
        header: Header,
        default: Starter,
       footer: Footer
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: Header,
        default: Landing,
        footer: Footer
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: Header,
        default: Login,
        footer: Footer
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: Header,
        default: Register,
        footer: Footer
      }
    }
  ]
});
