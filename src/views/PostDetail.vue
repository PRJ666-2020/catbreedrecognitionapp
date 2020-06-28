<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
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
          <div class="col px-0">
            <div class="row">
              <div class="container">
                <div class="row row-grid">
                  <div class="col-md-6">
                    <div class="card bg-default shadow border-0">
                      <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide img-src="img/theme/img-1-1200x1000.jpg"></b-carousel-slide>
                        <b-carousel-slide img-src="img/theme/img-2-1200x1000.jpg"></b-carousel-slide>
                      </b-carousel>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <base-button
                      class="float-right"
                      v-show="editbut"
                      type="primary"
                      @click="editbtn"
                    >Edit</base-button>
                    <base-button
                      class="float-right"
                      type="primary"
                      v-show="savebut"
                      @click="savebtn"
                    >Save</base-button>
                    <div class="pl-md-5">
                      <img
                        v-lazy="'img/theme/longhair.jpg'"
                        alt="Raised circle image"
                        class="img-fluid rounded-circle shadow-lg"
                        style="width: 50px;"
                      />

                      <h3>My cat</h3>
                      <p
                        ref="text"
                        class="lead"
                      >My cat is cute, My cat is cute, My cat is cute, My cat is cute, My cat is cute, My cat is cute, My cat is cute, My cat is cute, My cat is cute, My cat is cute, My cat is cute, My cat is cute, My cat is cute, My cat is cute, My cat is cute</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="container">
          <card shadow class="shadow-lg--hover ">
            <div class="d-flex px-3">
              
              <div class="pl-5">
                
                <base-input round block size="lg">
                                    <textarea class="form-control form-control-alternative" name="name" rows="4"
                                              cols="110" placeholder="Comment here..."></textarea>
                            </base-input>
             
                <base-button class="float-right" type="default" cols="20" @click="postfunction">
                                Post comment
                            </base-button>
              </div>
            </div>
          </card>  
          <card shadow class="shadow-lg--hover mt-5">
            <div class="d-flex px-3">
              <div>
                <icon name="ni ni-satisfied" gradient="success" color="white" shadow rounded></icon>
              </div>
              <div class="pl-4">
                <h5 class="title text-success">User1</h5>
                <p>
                  The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                  every summer, and that process will continue whatever happens.
                </p>
                <a href="#" class="text-success">Show more</a>
              </div>
            </div>
          </card>
          <card shadow class="shadow-lg--hover mt-5">
            <div class="d-flex px-3">
              <div>
                <icon name="ni ni-active-40" gradient="warning" color="white" shadow rounded></icon>
              </div>
              <div class="pl-4">
                <h5 class="title text-warning">User2</h5>
                <p>
                  The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                  every summer, and that process will continue whatever happens.
                </p>
                <a href="#" class="text-warning">Show more</a>
              </div>
            </div>
          </card>
          <card shadow class="shadow-lg--hover mt-5">
            <div class="d-flex px-3">
              <div>
                <icon name="ni ni-active-40" gradient="warning" color="white" shadow rounded></icon>
              </div>
              <div class="pl-4">
                <h5 class="title text-warning">User3</h5>
                <p>
                  The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                  every summer, and that process will continue whatever happens.
                </p>
                <a href="#" class="text-warning">Show more</a>
              </div>
            </div>
          </card>
          <card shadow class="shadow-lg--hover mt-5">
            <div class="d-flex px-3">
              <div>
                <icon name="ni ni-active-40" gradient="warning" color="white" shadow rounded></icon>
              </div>
              <div class="pl-4">
                <h5 class="title text-warning">User4</h5>
                <p>
                  The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                  every summer, and that process will continue whatever happens.
                </p>
                <a href="#" class="text-warning">Show more</a>
              </div>
            </div>
          </card>
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
import JavascriptComponents from "./components/JavascriptComponents";

export default {
  name: "home",
  components: {
    Carousel,
    JavascriptComponents,
    BCarousel,
    BCarouselSlide,
    Images
  },
  methods: {
    editbtn() {
      this.$refs.text.contentEditable = true;
      this.$refs.text.focus();
      this.savebut = true;
      this.editbut = false;
    },
    savebtn() {
      this.$refs.text.contentEditable = false;
      this.savebut = false;
      this.editbut = true;
      //TODO: save to database
    },
    postfunction(){
        //TODO:update to database, show the comments below
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
