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
                  <a href="#">
                    <img
                      v-if="!shownCat.picture"
                      v-lazy="'img/theme/longhair.jpg'"
                      class="rounded-circle"
                    />
                    <img v-else v-lazy="shownCat.picture" class="rounded-circle" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button
                    type="default"
                    @click="toggleUpdateCatModal()"
                    size="sm"
                    class="mr-4"
                  >Edit</base-button>

                  <base-button
                    type="primary"
                    @click="deleteCat(shownCat.id)"
                    size="sm"
                    class="float-right"
                  >Delete cat</base-button>
                </div>
              </div>

              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">Owner</span>
                    <span class="description">{{userProfile.username}}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center mt-5">
              <h3>{{ shownCat.name }}</h3>
            </div>

            <div class="mt-5 py-5 border-top">
              <h5>Date of birth: {{ shownCat.birth}}</h5>
              <h5>Gender: {{ shownCat.gender }}</h5>

              <div class="row justify-content-center text-center">
                <div class="col-lg-9">
                  <!-- <div v-for="post in posts" :key="post.id">
                    <div v-if="post.userId == isUser">
                      <card shadow class="shadow-lg--hover mt-5">
                        <h5 class="title text-warning">{{ post.title }}</h5>

                        <p>{{ post.content | trimLength }}</p>
                        <base-button
                          @click="likePost(post.id, post.likes)"
                          class="text-warning"
                        >{{ post.likes }} likes</base-button>
                        <base-button @click="toggleEditPostModal(post)" class="text-warning">Edit</base-button>
                        <base-button @click="viewPost(post)" class="text-warning">Show more</base-button>
                      </card>
                    </div>
                  </div>-->

                  <h4>Description</h4>
                  <h4 class="description">{{ shownCat.description }}</h4>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
    <modal :show.sync="showUpdateCatModal" :showClose="false">
      <template slot="header">Update cat profile</template>
      <base-input v-model.trim="editedCat.name" type="text" placeholder="Cat name" id="catname1" />
      <b-form-datepicker
        id="catbirth1"
        v-model.trim="editedCat.birth"
        size="sm"
        placeholder="Cat birthdate"
        class="mb-2"
      ></b-form-datepicker>
      <b-form-select v-model="editedCat.gender" :options="editedCat.genders" class="mb-2"></b-form-select>
      <b-form-textarea
        id="catdescription1"
        v-model="editedCat.description"
        placeholder="Tell us a little about your cat"
        rows="3"
        max-rows="6"
        class="mb-2"
      ></b-form-textarea>
      <input type="file" @change="addCatImage" />
      <div class="mt-3">
        Selected picture:
        <img :src="editedCat.picture" alt width="250px" />
      </div>
      <template slot="footer">
        <base-button
          type="link"
          class="ml-auto"
          @click="updateCat(shownCat.id) | toggleUpdateCatModal()"
          :disabled="editedCat.name == '' || editedCat.birth == '' || editedCat == '' || editedCat == ''"
        >Save</base-button>
        <base-button type="link" class="ml-auto" @click="toggleUpdateCatModal()">Close</base-button>
      </template>
    </modal>
  </div>
</template>
<script>
//import moment from "moment";
import { mapState } from "vuex";
//import { commentsCollection, postsCollection } from "@/firebase";
import Modal from "@/components/Modal";
import BaseInput from "@/components/BaseInput";
import { auth } from "@/firebase";
import * as fb from "@/firebase";
export default {
  components: {
    Modal,
    BaseInput,
  },
  data() {
    return {
      editedCat: {
        name: "",
        description: "",
        gender: "",
        birth: "",
        picture: "",
        genders: [
          { value: "", text: "Choose cat gender" },
          { value: "Male", text: "Male" },
          { value: "Female", text: "Female" },
        ],
      },
      showUpdateCatModal: false,
    };
  },
  computed: {
    ...mapState(["userProfile", "shownCat"]),
  },
  methods: {
    async updateCat(id) {
      this.$store.dispatch("updateCat", {
        id: id,
        name: this.editedCat.name ? this.editedCat.name : shownCat.name,
        description: this.editedCat.description
          ? this.editedCat.description
          : shownCat.description,
        birth: this.editedCat.birth ? this.editedCat.birth : shownCat.birth,
        gender: this.editedCat.gender ? this.editedCat.gender : shownCat.gender,
        picture: this.editedCat.picture
          ? this.editedCat.picture
          : shownCat.picture,
      });
    },
    async deleteCat(id) {
      console.log(id);
      this.$store.dispatch("deleteCat", id);
    },
    toggleUpdateCatModal() {
      this.editedCat.name = "";
      this.editedCat.description = "";
      this.editedCat.gender = "";
      this.editedCat.birth = "";
      this.editedCat.picture = "";
      this.showUpdateCatModal = !this.showUpdateCatModal;
    },
    addCatImage(i) {
      let image = i.target.files[0];
      let storeRef = fb.store.ref(fb.auth.currentUser.uid + "/" + image.name);
      let uploadTask = storeRef.put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.editedCat.picture = downloadURL;
          });
        }
      );
    },
  },
  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }
      let date = val.toDate();
      return moment(date).fromNow();
    },
    trimLength(val) {
      if (val.length < 200) {
        return val;
      }
      return `${val.substring(0, 150)}...`;
    },
  },
};
</script>
<style>
</style>
