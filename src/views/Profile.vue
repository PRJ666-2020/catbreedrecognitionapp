<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                        <img v-lazy="'img/theme/longhair.jpg'" class="rounded-circle">
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="default" size="sm" class="mr-4">Message</base-button>
                                    <base-button type="info" size="sm" class="mr-4">Follow</base-button>            <!--TODO: If follow, update the followers in real time-->
                                    <base-button type="default" size="sm" class="float-right" v-show="editbut" @click="editbtnf">Edit</base-button>    <!--TODO: Show edit button if logged in-->
                                    <base-button type="default" size="sm" class="float-right" v-show="savebut" @click="savebtnf">Save</base-button>
                                </div>
                  
                            </div>
                            
                            <div class="col-lg-4  order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center ">
                                    <div>
                                        <span class="heading">20</span>
                                        <span class="description">Follower(s)</span>
                                    </div>
                                    <div>
                                        <span class="heading">2</span>
                                        <!--<router-link to="/catprofile" class="description">Cat(s)</router-link>-->
                                        <base-dropdown class="description">
                                            <a slot="title"  href="#" data-toggle="dropdown" role="button">
                                            
                                            <span class="nav-link-inner--text description">Cat(s)</span>
                                            </a>
                                            <router-link to="/catprofile" class="dropdown-item">Cat1</router-link>
                                            <router-link to="/catprofile" class="dropdown-item" >Cat2</router-link>
                                        </base-dropdown>
                                    </div>
                                    <div>
                                        <span class="heading">3</span>
                                        <router-link to="/posts" class="description">Posts</router-link>
                                    </div>
                
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center mt-5">
                            <h3 ref="username">Jessica Jones</h3>
                            <div class="h6 font-weight-300" ref="location">Bucharest, Romania</div>
                            <div class="h6 mt-4" ref="workposition">Solution Manager - Creative Tim Officer</div>
                            <div ref="description">Shorthair lover</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p ref ="intro">Introduction</p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
  methods: {
    editbtnf() {
      this.$refs.username.contentEditable = true;
      this.$refs.location.contentEditable = true;
      this.$refs.workposition.contentEditable = true;
      this.$refs.description.contentEditable = true;
      this.$refs.intro.contentEditable = true;
      this.$refs.username.focus();
      this.savebut = true;
      this.editbut = false;
    },
    savebtnf() {
      this.$refs.username.contentEditable = false;
      this.$refs.location.contentEditable = false;
      this.$refs.workposition.contentEditable = false;
      this.$refs.description.contentEditable = false;
      this.$refs.intro.contentEditable = false;
      this.savebut = false;
      this.editbut = true;
      //TODO: save to database
    }
  },
  data() {
    return {
      savebut: false,
      editbut: true
    };
  }
};
</script>
<style>
</style>
