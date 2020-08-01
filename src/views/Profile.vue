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
                      v-if="!userProfile.picture"
                      v-lazy="'img/theme/longhair.jpg'"
                      class="rounded-circle"
                    />
                    <img v-else v-lazy="userProfile.picture" class="rounded-circle" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button
                    type="primary"
                    size="sm"
                    class="mr-4"
                    @click="toggleCreateCatModal()"
                  >Create Cat Profile</base-button>
                  <base-button
                    type="default"
                    size="sm"
                    class="float-right"
                    @click="toggleUpdateProfileModal()"
                  >Edit Profile</base-button>
                </div>
              </div>

              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">{{posts.filter(post => post.userId == isUser).length}}</span>
                    <span class="description">Posts</span>
                  </div>
                  <div>
                    <base-button
                      type="primary"
                      size="sm"
                      class="mr-4"
                      @click="toggleCreatePostModal()"
                    >Create Post</base-button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 order-lg-1">
              Your cats
              <ul v-for="cat in cats" :key="cat.id" class="list-inline">
                <li>
                  <a @click="showCat(cat.id)">
                    <b-img :src="cat.picture" width="75" height="75" rounded />
                  </a>
                </li>
              </ul>
            </div>
            <div class="text-center mt-5">
              <h3>{{ userProfile.username }}</h3>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="text-center mt-5">
                <h3>Your posts</h3>
              </div>

              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <div v-for="post in posts" :key="post.id">
                    <div v-if="post.userId == isUser">
                      <card shadow class="shadow-lg--hover mt-5">
                        <!-- <div class="d-flex px-3"> -->
                        <!-- <div class="pl-4"> -->
                        <h5 class="title text-warning">{{ post.title }}</h5>
                        <!-- </div> -->
                        <!-- </div> -->
                        <p>{{ post.content | trimLength }}</p>
                        <base-button
                          @click="likePost(post.id, post.likes)"
                          class="text-warning"
                        >{{ post.likes }} likes</base-button>
                        <base-button @click="toggleEditPostModal(post)" class="text-warning">Edit</base-button>
                        <base-button @click="viewPost(post)" class="text-warning">Show more</base-button>
                      </card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>

    <modal :show.sync="showPostModal" :showClose="false">
      <div slot="header">
        <h4>{{ fullPost.title }}</h4>
        <small>Posted {{fullPost.createdOn | formatDate}}</small>
      </div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        img-height="480"
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide v-for="picture in fullPost.picture" :key="picture.id" :img-src="picture" />
      </b-carousel>

      <h5>{{ fullPost.content }}</h5>
      <div v-show="postComments.length" class="modal-body">
        <div v-for="comment in postComments" :key="comment.id">
          <hr />
          <p>{{ comment.userName }}</p>
          <small>{{ comment.createdOn | formatDate }}</small>
          <p>{{ comment.content }}</p>
        </div>
      </div>
      <template slot="footer">
        <base-button
          type="link"
          class="ml-auto"
          @click="likePost(fullPost.id, fullPost.likes) | closePostModal()"
        >{{ fullPost.likes }} likes</base-button>
        <base-button
          type="link"
          class="ml-auto"
          @click="closePostModal() | toggleCommentModal(fullPost)"
        >Comment</base-button>
        <base-button
          type="link"
          class="ml-auto"
          @click="closePostModal() | deletePost(fullPost.id)"
        >Delete</base-button>
        <base-button type="link" class="ml-auto" @click="closePostModal()">Close</base-button>
      </template>
    </modal>

    <modal :show.sync="showCommentModal" :showClose="false">
      <template slot="header">Add a comment</template>
      <base-input placeholder="Comment here...">
        <textarea
          class="form-control form-control-alternative"
          name="name"
          rows="4"
          cols="110"
          placeholder="Comment here..."
          v-model.trim="comment"
        ></textarea>
      </base-input>
      <template slot="footer">
        <base-button
          type="link"
          class="ml-auto"
          @click="addComment()"
          :disabled="comment == ''"
        >Save</base-button>
        <base-button type="link" class="ml-auto" @click="toggleCommentModal()">Close</base-button>
      </template>
    </modal>

    <modal :show.sync="showEditProfileModal" :showClose="false">
      <template slot="header">Edit your profile</template>
      <label for="username">Username</label>
      <base-input
        v-model.trim="editedProfile.username"
        type="text"
        :placeholder="userProfile.username"
        id="username1"
      />
      <input type="file" @change="addProfileImage" />
      <img v-if="editedProfile.picture" :src="editedProfile.picture" />
      <template slot="footer">
        <base-button
          type="link"
          class="ml-auto"
          @click="updateProfile() | toggleUpdateProfileModal()"
          :disabled="editedProfile.username == ''"
        >Save</base-button>
        <base-button type="link" class="ml-auto" @click="toggleUpdateProfileModal()">Close</base-button>
      </template>
    </modal>

    <modal :show.sync="showCreateCatModal" :showClose="false">
      <template slot="header">Create a cat profile</template>
      <base-input v-model.trim="createdCat.name" type="text" placeholder="Cat name" id="catname1" />
      <b-form-datepicker
        id="catbirth1"
        v-model.trim="createdCat.birth"
        size="sm"
        placeholder="Cat birthdate"
        class="mb-2"
      ></b-form-datepicker>
      <b-form-select v-model="createdCat.gender" :options="createdCat.genders" class="mb-2"></b-form-select>
      <b-form-textarea
        id="catdescription1"
        v-model="createdCat.description"
        placeholder="Tell us a little about your cat"
        rows="3"
        max-rows="6"
        class="mb-2"
      ></b-form-textarea>
      <input type="file" @change="addCatImage" />
      <div class="mt-3">
        Selected picture:
        <img :src="createdCat.picture" alt width="250px" />
      </div>
      <template slot="footer">
        <base-button
          type="link"
          class="ml-auto"
          @click="createCat() | toggleCreateCatModal()"
          :disabled="createdCat.name == '' || createdCat.birth == '' || createdCat.description == '' || createdCat.gender == ''"
        >Save</base-button>
        <base-button type="link" class="ml-auto" @click="toggleCreateCatModal()">Close</base-button>
      </template>
    </modal>

    <modal :show.sync="showEditPostModal" :showClose="false">
      <template slot="header">Edit your post</template>
      <label for="username2">Title</label>
      <base-input
        v-model.trim="editedTitle"
        type="text"
        :placeholder="selectedPost.title"
        id="username2"
      />
      <label for="editedContent">Content</label>
      <small class="text-warning" v-show="editedContent.length > 300">Post has a 300 character limit</small>
      <textarea
        class="form-control form-control-alternative"
        name="name"
        rows="4"
        cols="110"
        :placeholder="selectedPost.content"
        v-model.trim="editedContent"
      ></textarea>
      <template slot="footer">
        <base-button
          type="link"
          class="ml-auto"
          @click="updatePost(selectedPost.id, editedTitle, editedContent) | toggleEditPostModal()"
          :disabled="editedContent == '' || editedContent.length > 300 || editedTitle == ''"
        >Save</base-button>
        <base-button type="link" class="ml-auto" @click="toggleEditPostModal()">Close</base-button>
      </template>
    </modal>

    <modal :show.sync="showCreatePostModal" :showClose="false">
      <template slot="header">Create a post</template>
      <label for="title2">Title</label>
      <base-input
        v-model.trim="createdPost.title"
        type="text"
        placeholder="Your title"
        id="title2"
      />
      <label for="content2">Content</label>
      <textarea
        class="form-control form-control-alternative"
        rows="4"
        cols="110"
        placeholder="Your content"
        v-model.trim="createdPost.content"
        id="content2"
      ></textarea>
      <small
        class="text-warning"
        v-show="createdPost.content.length > 300"
      >Post has a 300 character limit</small>
      <br />
      <label for="picture">Pictures</label>
      <br />
      <input type="file" @change="addImage" />
      <hr />
      <div v-for="picture in createdPost.picture" :key="picture.id">
        <img :src="picture" alt width="250px" />
        <hr />
      </div>
      <template slot="footer">
        <base-button
          type="link"
          class="ml-auto"
          @click="createPost() | toggleCreatePostModal()"
          :disabled="createdPost.content == '' || createdPost.content.length > 300 || createdPost.title == ''"
        >Create</base-button>
        <base-button type="link" class="ml-auto" @click="toggleCreatePostModal()">Close</base-button>
      </template>
    </modal>
  </div>
</template>
<script>
import moment from "moment";
import { mapState } from "vuex";
import { commentsCollection, postsCollection } from "@/firebase";
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
      post: {
        title: "",
        content: "",
      },
      createdPost: {
        content: "",
        title: "",
        picture: [],
      },
      createdCat: {
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
      showEditProfileModal: false,
      showEditPostModal: false,
      showCommentModal: false,
      showCreatePostModal: false,
      selectedPost: {},
      showPostModal: false,
      fullPost: {},
      postComments: [],
      comment: "",
      editedProfile: {
        username: "",
        picture: "",
      },
      editedContent: "",
      editedTitle: "",
      slide: 0,
      sliding: null,
      showCreateCatModal: false,
    };
  },
  computed: {
    ...mapState(["userProfile", "posts", "cats"]),
    isUser() {
      return fb.auth.currentUser.uid;
    },
  },
  methods: {
    likePost(id, likesCount) {
      this.$store.dispatch("likePost", { id, likesCount });
    },
    async viewPost(post) {
      const docs = await commentsCollection
        .where("postId", "==", post.id)
        .get();
      docs.forEach((doc) => {
        let comment = doc.data();
        comment.id = doc.id;
        this.postComments.push(comment);
      });
      this.fullPost = post;
      this.showPostModal = true;
    },
    closePostModal() {
      this.postComments = [];
      this.showPostModal = false;
    },
    async addComment() {
      await commentsCollection.add({
        createdOn: new Date(),
        content: this.comment,
        postId: this.selectedPost.id,
        userId: auth.currentUser.uid,
        userName: this.$store.state.userProfile.username,
      });
      await postsCollection.doc(this.selectedPost.id).update({
        comments: parseInt(this.selectedPost.comments) + 1,
      });
      this.comment = "";
      this.showCommentModal = !this.showCommentModal;
    },
    toggleCommentModal(post) {
      this.showCommentModal = !this.showCommentModal;
      if (this.showCommentModal) {
        this.selectedPost = post;
      } else {
        this.selectedPost = {};
      }
      this.comment = "";
    },
    toggleEditPostModal(post) {
      this.showEditPostModal = !this.showEditPostModal;
      if (this.showEditPostModal) {
        this.selectedPost = post;
      } else {
        this.selectedPost = {};
        this.editedContent = "";
        this.editedTitle = "";
      }
    },
    toggleUpdateProfileModal() {
      this.showEditProfileModal = !this.showEditProfileModal;
      this.editedProfile.username = "";
      this.editedProfile.picture = "";
    },
    toggleCreateCatModal() {
      this.createdCat.name = "";
      this.createdCat.description = "";
      this.createdCat.gender = "";
      this.createdCat.birth = "";
      this.createdCat.picture = "";
      this.showCreateCatModal = !this.showCreateCatModal;
    },
    async updateProfile() {
      this.$store.dispatch("updateProfile", {
        username:
          this.editedProfile.username !== ""
            ? this.editedProfile.username
            : this.userProfile.username,
        picture:
          this.editedProfile.picture !== ""
            ? this.editedProfile.picture
            : this.userProfile.picture,
      });
      this.username = "";
    },
    async updatePost(id, title, content) {
      this.$store.dispatch("updatePost", { id, title, content });
      this.editedTitle = "";
      this.editedContent = "";
    },
    toggleCreatePostModal() {
      this.showCreatePostModal = !this.showCreatePostModal;
      this.createdPost.title = "";
      this.createdPost.content = "";
      this.createdPost.picture = [];
    },
    async createPost() {
      this.$store.dispatch("createPost", {
        content: this.createdPost.content,
        title: this.createdPost.title,
        picture: this.createdPost.picture,
      });
      this.createdPost.content = "";
      this.createdPost.title = "";
      this.createdPost.picture = [];
    },
    async createCat() {
      this.$store.dispatch("createCat", {
        name: this.createdCat.name,
        description: this.createdCat.description,
        birth: this.createdCat.birth,
        gender: this.createdCat.gender,
        picture: this.createdCat.picture,
      });
    },
    async deletePost(id) {
      this.$store.dispatch("deletePost", id);
    },
    async showCat(id) {
      this.$store.dispatch("showCat", id);
    },
    addImage(i) {
      let image = i.target.files[0];
      let storeRef = fb.store.ref(fb.auth.currentUser.uid + "/" + image.name);
      let uploadTask = storeRef.put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.createdPost.picture.push(downloadURL);
          });
        }
      );
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
            this.createdCat.picture = downloadURL;
          });
        }
      );
    },
    addProfileImage(i) {
      let image = i.target.files[0];
      let storeRef = fb.store.ref(fb.auth.currentUser.uid + "/" + image.name);
      let uploadTask = storeRef.put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.editedProfile.picture = downloadURL;
          });
        }
      );
    },
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
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
