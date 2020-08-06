<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img src="img/brand/catlogo.png" />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <a href="https://demos.creative-tim.com/vue-argon-design-system/documentation/">
            <img src="img/brand/blue.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
<<<<<<< HEAD
        
                <base-dropdown tag="li" class="nav-item">
                    <a slot="title" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                       <router-link to="/breedlist" class="nav-link-inner--text">Breed</router-link>
                    </a>

                    <router-link to="/recognize" class="dropdown-item" >Recognize Breed</router-link>
                    <div class="dropdown-menu-inner">
                         <router-link to="/breedlist" class="nav-link-inner--text"><a href=""
                           class="media d-flex align-items-center">
                            <div >   
                                <img v-lazy="'img/theme/shorthair.jpg'" alt="Raised circle image"
                                class="img-fluid rounded-circle shadow-lg" style="width: 50px;">                             
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">American Shorthair</h5>
                                
                            </div>
                        </a></router-link>
                        <router-link to="/breedlist" class="nav-link-inner--text"><a href=""
                           class="media d-flex align-items-center">
                            <div >
                                <img v-lazy="'img/theme/bengal.jpg'" alt="Raised circle image"
                                class="img-fluid rounded-circle shadow-lg" style="width: 50px;"> 
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Bengal</h5>
                            </div>
                        </a></router-link>
                        <router-link to="/breedlist" class="nav-link-inner--text"><a href=""
                           class="media d-flex align-items-center">
                            <div >   
                                <img v-lazy="'img/theme/bombay.jpg'" alt="Raised circle image"
                                class="img-fluid rounded-circle shadow-lg" style="width: 50px;">                             
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">Bombay</h5>
                                
                            </div>
                        </a></router-link>
                        <router-link to="/breedlist" class="nav-link-inner--text"><a href=""
                           class="media d-flex align-items-center">
                            <div >
                                <img v-lazy="'img/theme/calico.jpg'" alt="Raised circle image"
                                class="img-fluid rounded-circle shadow-lg" style="width: 50px;"> 
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Calico</h5>
                            </div>
                        </a></router-link>
                        <router-link to="/breedlist" class="nav-link-inner--text"><a href=""
                           class="media d-flex align-items-center">
                            <div >   
                                <img v-lazy="'img/theme/domestic_longhair.jpg'" alt="Raised circle image"
                                class="img-fluid rounded-circle shadow-lg" style="width: 50px;">                             
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">Domestic Longhair</h5>
                                
                            </div>
                        </a></router-link>
                        <router-link to="/breedlist" class="nav-link-inner--text"><a href=""
                           class="media d-flex align-items-center">
                            <div >
                                <img v-lazy="'img/theme/domestic_short.jpg'" alt="Raised circle image"
                                class="img-fluid rounded-circle shadow-lg" style="width: 50px;"> 
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Domestic Shorthair</h5>
                            </div>
                        </a></router-link>
                        <router-link to="/breedlist" class="nav-link-inner--text"><a href=""
                           class="media d-flex align-items-center">
                            <div >
                                <img v-lazy="'img/theme/manx.jpg'" alt="Raised circle image"
                                class="img-fluid rounded-circle shadow-lg" style="width: 50px;"> 
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">Manx</h5>
                            </div>
                        </a></router-link>
                        <router-link to="/breedlist" class="nav-link-inner--text"><a href=""
                           class="media d-flex align-items-center">
                            <div >   
                                <img v-lazy="'img/theme/dt.jpg'" alt="Raised circle image"
                                class="img-fluid rounded-circle shadow-lg" style="width: 50px;">                             
                            </div>
                            <div class="media-body ml-3">
                                <h6 class="heading text-warning mb-md-1">Dilute Tortoise</h6>
                                
                            </div>
                        </a></router-link>
                        <router-link to="/breedlist" class="nav-link-inner--text"><a href=""
                           class="media d-flex align-items-center">
                            <div >
                                <img v-lazy="'img/theme/Persian.jpg'" alt="Raised circle image"
                                class="img-fluid rounded-circle shadow-lg" style="width: 50px;"> 
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-primary mb-md-1">Persian</h5>
                            </div>
                        </a></router-link>
                        <router-link to="/breedlist" class="nav-link-inner--text"><a href=""
                           class="media d-flex align-items-center">
                            <div >
                                <img v-lazy="'img/theme/ragdoll.jpg'" alt="Raised circle image"
                                class="img-fluid rounded-circle shadow-lg" style="width: 50px;"> 
                            </div>
                            <div class="media-body ml-3">
                                <h5 class="heading text-warning mb-md-1">Ragdoll</h5>
                            </div>
                        </a></router-link>                        
                    </div>
                </base-dropdown>        

=======
        <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-ui-04 d-lg-none"></i>
            <span class="nav-link-inner--text">Breed</span>
          </a>
          <div class="dropdown-menu-inner">
            <a
              href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
              class="media d-flex align-items-center"
            >
              <div>
                <img
                  v-lazy="'img/theme/shorthair.jpg'"
                  alt="Raised circle image"
                  class="img-fluid rounded-circle shadow-lg"
                  style="width: 50px;"
                />
              </div>
              <div class="media-body ml-3">
                <h6 class="heading text-primary mb-md-1">Short hair</h6>
                <p class="description d-none d-md-inline-block mb-0">Short hair list</p>
              </div>
            </a>
            <a
              href="https://demos.creative-tim.com/vue-argon-design-system/documentation/"
              class="media d-flex align-items-center"
            >
              <div>
                <img
                  v-lazy="'img/theme/longhair.jpg'"
                  alt="Raised circle image"
                  class="img-fluid rounded-circle shadow-lg"
                  style="width: 50px;"
                />
              </div>
              <div class="media-body ml-3">
                <h5 class="heading text-warning mb-md-1">Long hair</h5>
                <p class="description d-none d-md-inline-block mb-0">Long hair list</p>
              </div>
            </a>
          </div>
        </base-dropdown>
>>>>>>> ErisWorking
        <base-dropdown tag="li" class="nav-item">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">Account</span>
          </a>
<<<<<<< HEAD
          <router-link to="/profile" class="dropdown-item" v-if="loggedIn">Profile</router-link>
=======
          <router-link to="/profile" class="dropdown-item" v-if="loggedIn">Your profile</router-link>
          <!-- <router-link to="/catprofile" class="dropdown-item" v-if="loggedIn">See your cats</router-link> -->
>>>>>>> ErisWorking
          <router-link to="/login" class="dropdown-item" v-if="!loggedIn">Login</router-link>
          <router-link to="/register" class="dropdown-item" v-if="!loggedIn">Register</router-link>
          <li class="dropdown-item" v-if="loggedIn">
            <a @click="logout()">Logout</a>
          </li>
        </base-dropdown>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <base-input placeholder="Search" addon-left-icon="ni ni-zoom-split-in"></base-input>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.facebook.com/creativetim"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Like us on Facebook"
          >
            <i class="fa fa-facebook-square"></i>
            <span class="nav-link-inner--text d-lg-none">Facebook</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://www.instagram.com/creativetimofficial"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Follow us on Instagram"
          >
            <i class="fa fa-instagram"></i>
            <span class="nav-link-inner--text d-lg-none">Instagram</span>
          </a>
        </li>

        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="#"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Star us on Github"
          >
            <i class="fa fa-github"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";
import Images from "../views/components/JavascriptComponents/Images";
import { mapState } from "vuex";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
    Images,
  },
  computed: {
    ...mapState(["userProfile"]),
    loggedIn() {
      return Object.keys(this.userProfile).length > 0;
    },
  },
<<<<<<< HEAD
  computed: {
    ...mapState(["userProfile"]),
    loggedIn() {
      return Object.keys(this.userProfile).length > 0;
    }
  },
     
  methods: {
    logout() {
      this.$store.dispatch("logout");

    }
  }
=======
  // data() {
  //   return {
  //     // showbreedlist: true,
  //     // showsearchbar: true,
  //     showLogout: false
  //   };
  // },
  // watch: {
  //   //if user logged in dont show login or register

  //   $route() {
  //     if (this.$route.path === "/register") {
  //       (this.showbreedlist = false), (this.showsearchbar = false);
  //     } else if (this.$route.path === "/login") {
  //       (this.showbreedlist = false), (this.showsearchbar = false);
  //     } else if (this.$route.path === "/profile") {
  //       (this.showbreedlist = false),
  //         (this.showsearchbar = false),
  //         (this.showlogout = true);
  //     } else if (this.$route.path === "/") {
  //       (this.showbreedlist = true), (this.showsearchbar = true);
  //     }
  //   }
  // },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
>>>>>>> ErisWorking
};
</script>
<style>
</style>