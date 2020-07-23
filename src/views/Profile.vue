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
                  <!-- <base-button type="default" size="sm" class="mr-4">Message</base-button> -->
                  <!-- <base-button type="info" size="sm" class="mr-4">Follow</base-button> -->
                  <base-button
                    type="default"
                    size="sm"
                    class="float-right"
                    @click="toggleUpdateProfileModal()"
                  >Edit</base-button>
                </div>
              </div>

              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <!-- <div>
                    <span class="heading">2</span>
                    <span class="description">Cat(s)</span>
                  </div>-->
                  <div>
                    <span class="heading">{{posts.length}}</span>
                    <span class="description">Posts</span>
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD

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
=======
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                        <img v-lazy="'img/theme/longhair.jpg'" class="rounded-circle">
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="default" size="sm" class="mr-4">Message</base-button>
                                    <base-button type="info" size="sm" class="mr-4">Follow</base-button>            <!--TODO: If follow, update the followers in real time-->
                                    <base-button type="default" size="sm" class="float-right" v-show="editbut" @click="editbtnf">Edit</base-button>    <!--TODO: Show edit button if logged in-->
                                    <base-button type="default" size="sm" class="float-right" v-show="savebut" @click="savebtnf">Save</base-button>
                                </div>
                  
                            </div>
                            
                            <div class="col-lg-4  order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center ">
                                    <div>
                                        <span class="heading">20</span>
                                        <span class="description">Follower(s)</span>
                                    </div>
                                    <div>
                                        <span class="heading">2</span>
                                        <!--<router-link to="/catprofile" class="description">Cat(s)</router-link>-->
                                        <base-dropdown class="description">
                                            <a slot="title"  href="#" data-toggle="dropdown" role="button">
                                            
                                            <span class="nav-link-inner--text description">Cat(s)</span>
                                            </a>
                                            <router-link to="/catprofile" class="dropdown-item">Cat1</router-link>
                                            <router-link to="/catprofile" class="dropdown-item" >Cat2</router-link>
                                        </base-dropdown>
                                    </div>
                                    <div>
                                        <span class="heading">3</span>
                                        <router-link to="/posts" class="description">Posts</router-link>
                                    </div>
                
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center mt-5">
                            <h3 ref="username">Jessica Jones</h3>
                            <div class="h6 font-weight-300" ref="location">Bucharest, Romania</div>
                            <div class="h6 mt-4" ref="workposition">Solution Manager - Creative Tim Officer</div>
                            <div ref="description">Shorthair lover</div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p ref ="intro">Introduction</p>
                                   
                                </div>
                            </div>
>>>>>>> ErisWorking
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

    <modal :show.sync="showPostModal" :showClose="false">
      <div slot="header">
        <h4>{{ fullPost.title }}</h4>
        <small>Posted {{fullPost.createdOn | formatDate}}</small>
      </div>
      <h5>{{ fullPost.content }}</h5>
      <div v-show="postComments.length" class="modal-body">
        <template v-for="comment in postComments">
          <p :key="comment.id + '-userName'">{{ comment.userName }}</p>
          <small :key="comment.id + '-createdOn'">{{ comment.createdOn | formatDate }}</small>
          <p :key="comment.id + '-content'">{{ comment.content }}</p>
        </template>
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
        id="username"
      />
      <template slot="footer">
        <base-button type="link" class="ml-auto" @click="updateProfile()">Save</base-button>
        <base-button type="link" class="ml-auto" @click="toggleUpdateProfileModal()">Close</base-button>
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
<<<<<<< HEAD
    Modal,
    BaseInput
  },
  data() {
    return {
      post: {
        title: "",
        content: ""
      },
      showEditProfileModal: false,
      showCommentModal: false,
      selectedPost: {},
      showPostModal: false,
      fullPost: {},
      postComments: [],
      comment: "",
      username: ""
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
      this.comment = "";
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
      this.comment = "";
    },
    toggleUpdateProfileModal() {
      this.showEditProfileModal = !this.showEditProfileModal;
    },
    updateProfile() {
      this.$store.dispatch("updateProfile", {
        username:
          this.username !== "" ? this.username : this.userProfile.username
      });
      this.username = "";
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
=======
    BaseNav,
    CloseButton,
    BaseDropdown,
  },
  methods: {
    editbtnf() {
      this.$refs.username.contentEditable = true;
      this.$refs.location.contentEditable = true;
      this.$refs.workposition.contentEditable = true;
      this.$refs.description.contentEditable = true;
      this.$refs.intro.contentEditable = true;
      this.$refs.username.focus();
      this.savebut = true;
      this.editbut = false;
    },
    savebtnf() {
      this.$refs.username.contentEditable = false;
      this.$refs.location.contentEditable = false;
      this.$refs.workposition.contentEditable = false;
      this.$refs.description.contentEditable = false;
      this.$refs.intro.contentEditable = false;
      this.savebut = false;
      this.editbut = true;
      //TODO: save to database
    }
  },
  data() {
    return {
      savebut: false,
      editbut: true
    };
>>>>>>> ErisWorking
  }
};
</script>
<style>
</style>
