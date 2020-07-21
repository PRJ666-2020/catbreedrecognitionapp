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
          <div v-if="!image">
              <h2>Select an image</h2>
              <input type="file" @change="onFileChange">
          </div>
          <div v-else id="image-div" >
             <div id="imageSection">
               <img :src="image" />
             </div>
                            <!-- <button @click="removeImage">Remove image</button>

              <button id="recogbtn" @click="submitFile" >Recognize</button>  -->
              <div id="btn-div" >
                  <BaseButton id="left-btn" type="info" @click="removeImage" size="sm">Remove image</BaseButton>
                  <BaseButton @click="submitFile" id="right-btn" type="info" size="sm"  >Recognize breed</BaseButton>
              </div>              
          </div>
          <div v-if="results[0] && show" id="table-div" >
            <table id="table" >
                <tr>
                    <th>Breed Name</th>
                    <th>Probability</th>
                </tr>
                <tr>
                    <td>{{results[0].label}}</td>
                    <td>{{results[0].probability}}</td>
                </tr>
                <tr>
                    <td>{{results[1].label}}</td>
                    <td>{{results[1].probability}}</td>
                </tr>
                <tr>
                    <td>{{results[2].label}}</td>
                    <td>{{results[2].probability}}</td>
                </tr>
            </table>

          </div>
      </div>

    </section>
    
  </div>
</template>

<script>
import BaseButton from "../components/BaseButton.vue";
import axios from 'axios'
export default {
  data() {
    return {
      file: '',
      image: '',
      results: [],
      show: true
    };
  },
  components:{
        BaseButton,
  },
  methods:{
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
      this.file=files[0];
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
      this.show=false;
    },        

    submitFile(){         
            let formData = new FormData();
            formData.append('file', this.file);
            formData.append('modelId', 'f2183ec6-390c-4c3f-9fe5-2bca8dd8ed6b');

            axios.post( 'https://app.nanonets.com/api/v2/ImageCategorization/LabelFile/',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "authorization": "Basic " + btoa("0vJdekMz54n1TyK0Ehd8XJHkxgrtQOdN:")
                }
              }
            ).then(res=>{

            console.log(res.data.result[0].prediction);     
            this.results = res.data.result[0].prediction;
        })
        .catch(function(e){
          console.log('FAILURE!!', e);
        }); 
      },
    }  

};

</script>

<style scoped>
    img {
        width: 70%;
        margin: auto;
        display: block;
        margin-bottom: 10px;
        float: center;
    }
    #imageSection{
        width: 100%
    }
    #left-btn { float: left; }
    #right-btn { float: right; }
    #table {
      width: 100%;

    }
    th {
      background-color: #17a2b8;
      color: white;
      padding: 15px;
    }
    td {color: white; padding: 5px;}
    tr:hover {background-color:#17a2b8;}
    #table-div { float: right;         display: block; }
    #btn-div { width: 100% }
    #image-div {
      display: flex;
      flex-direction:column;
    }
</style>>
