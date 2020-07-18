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
                  <base-button type="default" size="sm" class="mr-4">Message</base-button>
                  <base-button type="info" size="sm" class="mr-4">Follow</base-button>
                  <base-button type="default" size="sm" class="float-right">Edit</base-button>
                </div>
              </div>

              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading">2</span>
                    <span class="description">Cat(s)</span>
                  </div>
                  <div>
                    <span class="heading">10</span>
                    <span class="description">Posts</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center mt-5">
              <h3>{{ userProfile.username }}</h3>
            </div>
            <div class="mt-5 py-5 border-top text-center">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <div v-for="post in posts" :key="post.id">
                    <div v-if="post.userName == userProfile.username">
                      <card shadow class="shadow-lg--hover mt-5">
                        <div class="d-flex px-3">
                          <div class="pl-4">
                            <h5 class="title text-warning">{{ post.title }}</h5>
                            <p>{{ post.content }}</p>
                            <base-button
                              @click="likePost(post.id, post.likes)"
                              class="text-warning"
                            >{{ post.likes }} likes</base-button>
                            <base-button
                              @click="toggleCommentModal(post)"
                              class="text-warning"
                            >Comment</base-button>
                            <base-button @click="viewPost(post)" class="text-warning">Show more</base-button>
                          </div>
                        </div>
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
    <modal :show.sync="showPostModal">
      <div slot="header">
        <h4>{{ fullPost.title }}</h4>
        <small>Posted {{fullPost.createdOn | formatDate}}</small>
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
          @click="likePost(fullPost.id, fullPost.likes) || closePostModal()"
        >{{ fullPost.likes }} likes</base-button>
        <base-button
          type="link"
          class="ml-auto"
          @click="closePostModal() || toggleCommentModal(fullPost)"
        >Comment</base-button>
        <base-button type="link" class="ml-auto" @click="closePostModal()">Close</base-button>
      </template>
    </modal>

    <modal :show.sync="showCommentModal">
      <div slot="header">Add a comment</div>
      <!-- <form @submit.prevent> -->
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
      <!-- </form> -->
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
      showCommentModal: false,
      selectedPost: {},
      showPostModal: false,
      fullPost: {},
      postComments: [],
      comment: ""
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
      // create comment
      await commentsCollection.add({
        createdOn: new Date(),
        content: this.comment,
        postId: this.selectedPost.id,
        userId: auth.currentUser.uid,
        userName: this.$store.state.userProfile.username
      });

      // update comment count on post
      await postsCollection.doc(this.selectedPost.id).update({
        comments: parseInt(this.selectedPost.comments) + 1
      });

      // close modal
      this.showCommentModal = !this.showCommentModal;
      // toggleCommentModal();
    },
    toggleCommentModal(post) {
      this.showCommentModal = !this.showCommentModal;
      if (this.showCommentModal) {
        this.selectedPost = post;
      } else {
        this.selectedPost = {};
      }
    }
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
      return `${val.substring(0, 200)}...`;
    }
  }
};
</script>
<style>
</style>
