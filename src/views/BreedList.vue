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
                    <h2>Cat Breed List</h2>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">

                                <!-- List Rendering https://vuejs.org/v2/guide/list.html -->
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img v-lazy="'img/theme/longhair.jpg'" style="width: 150px;">
                                    <p></p>
                                    <h4>
                                        <router-link to="/breeddetail">Longhair Cat</router-link>
                                    </h4>

                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img v-lazy="'img/theme/shorthair.jpg'" style="width: 150px;">
                                    <p></p>
                                    <h4 class="text-success text-uppercase">Shorthair</h4>

                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <img v-lazy="'img/theme/longhair.jpg'" style="width: 150px;">
                                    <p></p>
                                    <h4 class="text-success text-uppercase">Longhair</h4>
                                    
                                </card>
                            </div>                         
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Images from "./components/JavascriptComponents/Images";

export default {
  name: "home",
  components: {
    Images
    }
};

</script>
