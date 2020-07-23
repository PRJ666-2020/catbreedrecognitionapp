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
          <div class="col px-0">
            <div class="row">
              <div class="container">
                <div class="row row-grid align-items-center">
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
                    <div class="pl-md-5">
                      <img
                        v-lazy="'img/theme/longhair.jpg'"
                        alt="Raised circle image"
                        class="img-fluid rounded-circle shadow-lg"
                        style="width: 50px;"
                      />

                      <router-link to="/postdetail">
                        <h3>My cat post1</h3>
                      </router-link>
                      <p
                        class="lead"
                      >My cat is cute, My cat is cute, My cat is cute, My cat is cute, My cat is cute</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
          <div class="col px-0">
            <div class="row">
              <div class="container">
                <div class="row row-grid align-items-center">
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
                    <div class="pl-md-5">
                      <img
                        v-lazy="'img/theme/longhair.jpg'"
                        alt="Raised circle image"
                        class="img-fluid rounded-circle shadow-lg"
                        style="width: 50px;"
                      />

                      <router-link to="/postdetail">
                        <h3>My cat post2</h3>
                      </router-link>
                      <p
                        class="lead"
                      >My cat is cuter, My cat is cuter, My cat is cuter, My cat is cuter, My cat is cuter</p>
                    </div>
                  </div>
                </div>
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
          <div class="col px-0">
            <div class="row">
              <div class="container">
                <div class="row row-grid align-items-center">
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
                    <div class="pl-md-5">
                      <img
                        v-lazy="'img/theme/longhair.jpg'"
                        alt="Raised circle image"
                        class="img-fluid rounded-circle shadow-lg"
                        style="width: 50px;"
                      />

                      <router-link to="/postdetail">
                        <h3>My cat post3</h3>
                      </router-link>
                      <p
                        class="lead"
                      >My cat is the cutest, My cat is the cutest, My cat is the cutest, My cat is the cutest, My cat is the cutest</p>
                    </div>
                  </div>
                </div>
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
/*TODO: In this path, search bar will display result base on the text of user posts*/
import Carousel from "./components/Carousel";
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import Images from "./components/JavascriptComponents/Images";

export default {
  name: "home",
  components: {
    Carousel,
    BCarousel,
    BCarouselSlide,
    Images
  }
};
</script>
