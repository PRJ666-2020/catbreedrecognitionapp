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
                    <img v-lazy="'img/theme/longhair.jpg'" class="rounded-circle" />
                  </a>
                </div>
              </div>
              <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                <div class="card-profile-actions py-4 mt-lg-0">
                  <base-button
                    type="primary"
                    size="sm"
                    class="mr-4"
                    @click="toggleCreatePostModal()"
                  >Create Post</base-button>
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
                    <span class="heading">{{posts.length}}</span>
                    <span class="description">Posts</span>
                  </div>
                </div>
              </div>
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
                    <div v-if="post.userName == userProfile.username">
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
      <div v-for="picture in fullPost.picture" :key="picture.id">
        <img :src="picture" alt />
      </div>
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
        <!-- <base-button
          type="link"
          class="ml-auto"
          @click="closePostModal() | deletePostModal(fullPost.id)"
        >Delete</base-button>-->
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
        v-model.trim="username"
        type="text"
        :placeholder="userProfile.username"
        id="username1"
      />
      <template slot="footer">
        <base-button
          type="link"
          class="ml-auto"
          @click="updateProfile() | toggleUpdateProfileModal()"
          :disabled="username == ''"
        >Save</base-button>
        <base-button type="link" class="ml-auto" @click="toggleUpdateProfileModal()">Close</base-button>
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
      <textarea
        class="form-control form-control-alternative"
        name="name"
        rows="4"
        cols="110"
        :placeholder="selectedPost.content"
        v-model.trim="editedContent"
      ></textarea>
      <!-- <div class="col-md-6">
                  <label for="picture">Pictures</label>
                  <input type="file" @change="addImage" />
                  <hr />
                  <div v-for="picture in createdPost.picture" :key="picture.id">
                    <img :src="picture" alt width="80px" />
                    <hr />
                  </div>
      </div>-->
      <template slot="footer">
        <base-button
          type="link"
          class="ml-auto"
          @click="updatePost(selectedPost.id, editedTitle, editedContent) | toggleEditPostModal()"
          :disabled="editedContent == '' || editedTitle == ''"
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

      <template slot="footer">
        <base-button
          type="link"
          class="ml-auto"
          @click="createPost()"
          :disabled="createdPost.content == '' || createdPost.title == ''"
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

export default {
  components: {
    Modal,
    BaseInput
  },
  data() {
    return {
      post: {
        title: "",
        content: ""
      },
      createdPost: {
        content: "",
        title: ""
        // picture: []
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
      username: "",
      editedContent: "",
      editedTitle: ""
    };
  },
  computed: {
    ...mapState(["userProfile", "posts"])
  },
  methods: {
    likePost(id, likesCount) {
      this.$store.dispatch("likePost", { id, likesCount });
    },
    async viewPost(post) {
      const docs = await commentsCollection
        .where("postId", "==", post.id)
        .get();
      docs.forEach(doc => {
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
        userName: this.$store.state.userProfile.username
      });
      await postsCollection.doc(this.selectedPost.id).update({
        comments: parseInt(this.selectedPost.comments) + 1
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
      this.username = "";
    },
    async updateProfile() {
      this.$store.dispatch("updateProfile", {
        username:
          this.username !== "" ? this.username : this.userProfile.username
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
        picture: this.createdPost.picture
      });
      this.createdPost.content = "";
      this.createdPost.title = "";
      this.createdPost.picture = [];
    }
    // async deletePost(id) {
    //   this.$store.dispatch("deletePost", id);
    // }
    // addImage(image) {
    //   this.createdPost.picture.push(image.target.files[0]);
    // }
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
    }
  }
};
</script>
<style>
</style>
