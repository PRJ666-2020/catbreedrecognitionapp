<template>

<div  >
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
                        <div class="col-lg-6">
                            <h1 class="display-3  text-white">A beautiful Design System
                                <span>completed with examples</span>
                            </h1>
                            <p class="lead  text-white">The design system comes with four pre-built pages to help
                                you get started faster. You can change the text and images and you're good to
                                go.</p>
                            <div class="btn-wrapper">
                                <base-button tag="a"
                                                href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                                                class="mb-3 mb-sm-0"
                                                type="info"
                                                icon="fa fa-code">
                                    Components
                                </base-button>
                                <base-button tag="a"
                                                href="https://www.creative-tim.com/product/argon-design-system"
                                                class="mb-3 mb-sm-0"
                                                type="white"
                                                icon="ni ni-cloud-download-95">
                                    Download HTML
                                </base-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 1st Hero Variation -->
    </div>
    <div class="container container-lg">
        <div class="row">
            <div class="col-md-6 mb-5 mb-md-0">
                <div class="card card-lift--hover shadow border-0">
                    <router-link to="/landing" title="Landing Page">
                        <img v-lazy="'img/theme/landing.jpg'" class="card-img">
                    </router-link>
                </div>
            </div>
            <div class="col-md-6 mb-5 mb-lg-0">
                <div class="card card-lift--hover shadow border-0">
                    <router-link to="/profile" title="Profile Page">
                        <img v-lazy="'img/theme/profile.jpg'" class="card-img">
                    </router-link>
                </div>
            </div>
        </div>
    </div>

        <div class="container container-lg">
        <div class="row">
            <div class="col-md-6 mb-5 mb-md-0">
                <div class="card card-lift--hover shadow border-0">
                    <router-link to="/landing" title="Landing Page">
                        <img v-lazy="'img/theme/landing.jpg'" class="card-img">
                    </router-link>
                </div>
            </div>
            <div class="col-md-6 mb-5 mb-lg-0">
                <div class="card card-lift--hover shadow border-0">
                    <router-link to="/profile" title="Profile Page">
                        <img v-lazy="'img/theme/profile.jpg'" class="card-img">
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>
<script>
export default {};
</script>
<style>
    .card {
        margin-top: 10%;
    }    

</style>
