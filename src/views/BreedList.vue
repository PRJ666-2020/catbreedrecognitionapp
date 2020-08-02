<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->   
      <!--for loop section-->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
              <div class="container">
                <div class="row row-grid align-items-center">
                  <div class="col-md-6">
                    <h3>American Shorthair</h3>
                    
                    <div class="card bg-default shadow border-0" @click="modals.modal1 = true"> 
                      <b-carousel id="carousel1"  controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide v-for="picture in breed[0].images" :key="picture.id" :img-src="picture"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal1">
                        <h6 slot="header" class="modal-title" id="modal-title-default">American Shorthair</h6>
                        <p>{{breed[0].description}}</p>
                        <template slot="footer">
                            <router-link to="/postdetail"><base-button type="primary" >Recognize your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal1 = false">Close
                            </base-button>
                        </template>
                    </modal>
                  </div>
                  <div class="col-md-6">
                    <h3>Bengal</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal2 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide v-for="picture in breed[1].images" :key="picture.id" :img-src="picture"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal2">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Bengal</h6>

                        <p>{{breed[1].description}}</p>
                        <template slot="footer">
                          <router-link to="/recognize"><base-button type="primary" >Recognize your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal2 = false">Close
                            </base-button>
                        </template>
                    </modal>                    
              </div>
            </div>
          </div>
        </div>
        <div class="container shape-container d-flex">
             <div class="container">
                <div class="row row-grid align-items-center">
                  <div class="col-md-6">
                    <h3>Bombay</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal3 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide v-for="picture in breed[2].images" :key="picture.id" :img-src="picture"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal3">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Bombay</h6>

                        <p>{{breed[2].description}}</p>
                      
                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Recognize your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal3 = false">Close
                            </base-button>
                        </template>
                    </modal> 
                  </div>
                  <div class="col-md-6">
                    <h3>Calico</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal4 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide v-for="picture in breed[3].images" :key="picture.id" :img-src="picture"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal4">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Calico</h6>
                        <p>{{breed[3].description}}</p>

                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Recognize your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal4 = false">Close
                            </base-button>
                        </template>
                    </modal>           
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
              <div class="container">
                <div class="row row-grid align-items-center">
                  <div class="col-md-6">
                    <h3>Domestic Longhair</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal5 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide v-for="picture in breed[5].images" :key="picture.id" :img-src="picture"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal5">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Domestic Longhair</h6>

                        <p>{{breed[5].description}}</p>
                        <template slot="footer">
                         <router-link to="/postdetail"><base-button type="primary" >Recognize your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal5 = false">Close
                            </base-button>
                        </template>
                    </modal> 
                  </div>
                  <div class="col-md-6">
                    <h3>Domestic Shorthair</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal6 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide v-for="picture in breed[6].images" :key="picture.id" :img-src="picture"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal6">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Domestic Shorthair</h6>

                        <p>{{breed[6].description}}</p>
                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Recognize your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal6 = false">Close
                            </base-button>
                        </template>
                    </modal> 
              </div>
            </div>
          </div>
        </div>
        <div class="container shape-container d-flex">
             <div class="container">
                <div class="row row-grid align-items-center">
                  <div class="col-md-6">
                    <h3>Manx</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal7 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide v-for="picture in breed[7].images" :key="picture.id" :img-src="picture"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal7">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Manx</h6>

                        <p>{{breed[7].description}}</p>

                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Recognize your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal7 = false">Close
                            </base-button>
                        </template>
                    </modal> 
                  </div>
                  <div class="col-md-6">
                    <h3>Dilute Tortoise</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal8 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide v-for="picture in breed[4].images" :key="picture.id" :img-src="picture"></b-carousel-slide>
                      </b-carousel>
                    </div>  
                    <modal :show.sync="modals.modal8">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Dilute Tortoise</h6>

                        <p>{{breed[4].description}}</p>

                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Recognize your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal8 = false">Close
                            </base-button>
                        </template>
                    </modal>         
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
              <div class="container">
                <div class="row row-grid align-items-center">
                  <div class="col-md-6">
                    <h3>Persian</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal9 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide v-for="picture in breed[8].images" :key="picture.id" :img-src="picture"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal9">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Persian</h6>

                        <p>{{breed[8].description}}</p>

                        <template slot="footer">
                         <router-link to="/postdetail"><base-button type="primary" >Recognize your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal9 = false">Close
                            </base-button>
                        </template>
                    </modal> 
                  </div>
                  <div class="col-md-6">
                    <h3>Ragdoll</h3>
                    <div class="card bg-default shadow border-0" @click="modals.modal10 = true">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide v-for="picture in breed[9].images" :key="picture.id" :img-src="picture"></b-carousel-slide>
                      </b-carousel>
                    </div>
                    <modal :show.sync="modals.modal10">
                        <h6 slot="header" class="modal-title" id="modal-title-default">Ragdoll</h6>

                        <p>{{breed[9].description}}</p>

                        <template slot="footer">
                          <router-link to="/postdetail"><base-button type="primary" >Recognize your own cats!</base-button></router-link>
                            <base-button type="link" class="ml-auto" @click="modals.modal10 = false">Close
                            </base-button>
                        </template>
                    </modal> 
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
  </div>
</template>

<script>
import Carousel from "./components/Carousel";
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import Images from "./components/JavascriptComponents/Images";
import Modal from "@/components/Modal.vue";
import moment from "moment";
import { mapState } from "vuex";
import { commentsCollection, postsCollection } from "@/firebase";
import { auth } from "@/firebase";
import * as fb from "@/firebase";

export default {
  name: "home",
  data() {
    return {
      modals: {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false,
        modal7: false,
        modal8: false,
        modal9: false,
        modal10: false,
      },
      //breed:{}
    };
  },
  components: {
    Carousel,
    BCarousel,
    BCarouselSlide,
    Images,
    Modal
  },
  computed: {
    ...mapState(["breed"]),
  },
};
</script>
