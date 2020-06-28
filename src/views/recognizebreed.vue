<template>
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
              <h1 class="display-3 text-white">
                A cat rocgnize breed website
                <span>Upload the picture and click the button!</span>
              </h1>
             
              <div class="btn-wrapper">
                <base-input type="file"></base-input>
                
                <base-button
                  tag="a"
                  class="mb-3 mb-sm-0"
                  type="white" 
                >Recognize</base-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 1st Hero Variation -->
  </div>
</template>

<script>
import UploadImage from "vue-upload-image";

export default {
  components: {
    UploadImage
  }
};
</script>
