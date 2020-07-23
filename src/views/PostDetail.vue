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
                    
                    <el-upload
                      action="#"
                      list-type="picture-card"
                      :auto-upload="false">
                        <i slot="default" class="el-icon-plus"></i>
                        <div slot="file" slot-scope="{file}">
                          <img
                            class="el-upload-list__item-thumbnail"
                            :src="file.url" alt=""
                          >
                          <span class="el-upload-list__item-actions">
                            <span
                              class="el-upload-list__item-preview"
                              @click="handlePictureCardPreview(file)"
                            >
                              <i class="el-icon-zoom-in"></i>
                            </span>
                            <span
                              v-if="!disabled"
                              class="el-upload-list__item-delete"
                              @click="handleDownload(file)"
                            >
                              <i class="el-icon-download"></i>
                            </span>
                            <span
                              v-if="!disabled"
                              class="el-upload-list__item-delete"
                              @click="handleRemove(file)"
                            >
                              <i class="el-icon-delete"></i>
                            </span>
                          </span>
                        </div>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                    
                  </div>

                  <div class="col-md-6">
                    <base-button
                      class="float-right"
                      type="primary"
                    >Post</base-button>
                   
                    <div class="pl-md-6 col-md-8" >
                    <div class="form-group">
                      <input class="form-control" id="exampleFormControlInput1" placeholder="Title">
                    </div>        
                    </div>
                    <div class=" col-md-12">
                    <base-input class="mb-4">
                                    <textarea class="form-control form-control-alternative" name="name" rows="15"
                                              cols="8" placeholder="Something about your cat..."></textarea>
                    </base-input>
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
import Carousel from "./components/Carousel";
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import Images from "./components/JavascriptComponents/Images";
import JavascriptComponents from "./components/JavascriptComponents";
import TabPane from "@/components/Tabs/TabPane.vue";
import Tabs from "@/components/Tabs/Tabs.vue";

export default {
  name: "home",
  components: {
    Carousel,
    JavascriptComponents,
    BCarousel,
    BCarouselSlide,
    Images,
    Tabs,
    TabPane
  },
  methods: {
    handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
  },
  data() {
    return {
       dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
    };
  }
};
</script>
