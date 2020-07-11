<template>
    <div>
        <div class="position-relative">
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="container">
                                <div class="row row-grid align-items-center">                                   
                                    <div class="col-md-6">
                                        <!-- show user uploaded image -->
                                        <img v-lazy="'img/theme/longhair.jpg'"  style="width: 250px;">    
                                    </div>
                                    <div class="col-md-6">
                                        <div class="pl-md-5">
                                            <h3>Possible Cat Breed</h3>
                                            <p class="lead">Result Detail</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </section>
        </div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <h2>Related Cat Breeds</h2>
                        <div class="row row-grid">
                            <!-- show realated breeds of user uploaded image -->
                            <div class="col-lg-4">
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