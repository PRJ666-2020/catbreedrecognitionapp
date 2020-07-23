import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'


import router from '../router/index'
Vue.use(Vuex)

fb.postsCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  let postsArray = []

  snapshot.forEach(doc => {
    let post = doc.data()
    post.id = doc.id

    postsArray.push(post)
  })

  store.commit('setPosts', postsArray)
})

const store = new Vuex.Store({
  state: {
    userProfile: {},
    posts: []
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setPosts(state, val) {
      state.posts = val
    }
  },
  actions: {
    async login({ dispatch }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {

      console.log(user)
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())
      console.log("THIS fetch function is called")
      console.log(router.currentRoute.path)

      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/profile')
      }
<<<<<<< HEAD
      if (router.currentRoute.path === '/register') {
        router.push('/profile')
      }


=======
      else if (router.currentRoute.path === '/register') {
        router.push('/profile')
      }
>>>>>>> RecognizeCatPage
    },

    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        username: form.username
      })

      // fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async logout({ commit }) {
      await fb.auth.signOut()

      // clear userProfile and redirect to /login
      commit('setUserProfile', {})
      router.push('/login')
    },

    async likePost({ commit }, post) {
      const userId = fb.auth.currentUser.uid
      const docId = `${userId}_${post.id}`

      // check if user has liked post
      const doc = await fb.likesCollection.doc(docId).get()
      if (doc.exists) { return }

      // create post
      await fb.likesCollection.doc(docId).set({
        postId: post.id,
        userId: userId
      })

      // update post likes count
      fb.postsCollection.doc(post.id).update({
        likes: post.likesCount + 1
      })
    },
    async updateProfile({ dispatch }, user) {
      const userId = fb.auth.currentUser.uid
      // update user object
      const userRef = await fb.usersCollection.doc(userId).update({
        username: user.username
      })

      dispatch('fetchUserProfile', { uid: userId })

      // update all posts by user
      const postDocs = await fb.postsCollection.where('userId', '==', userId).get()
      postDocs.forEach(doc => {
        fb.postsCollection.doc(doc.id).update({
          userName: user.username
        })
      })

      // update all comments by user
      const commentDocs = await fb.commentsCollection.where('userId', '==', userId).get()
      commentDocs.forEach(doc => {
        fb.commentsCollection.doc(doc.id).update({
          userName: user.username
        })
      })
    },
    async updatePost({ dispatch }, post) {
      const postRef = await fb.postsCollection.doc(post.id).update({
        title: post.title,
        content: post.content,
        createdOn: new Date()
      })
    },
    async createPost({ state, commit }, post) {
      // let images = [];
      // post.picture.forEach(picture => {
      //   var imagesRef = fb.store.ref(fb.auth.currentUser.uid + '/' + picture.name);
      //   var uploadTask = imagesRef.put(picture);
      //   uploadTask.on('state_changed', (snapshot) => {

      //   }, (error) => {
      //   }, () => {
      //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
      //       images.push(downloadURL)
      //     })
      //   });
      // })
      await fb.postsCollection.add({
        createdOn: new Date(),
        title: post.title,
        content: post.content,
        picture: post.picture,
        userId: fb.auth.currentUser.uid,
        userName: state.userProfile.username,
        comments: 0,
        likes: 0
      });
    },
    async deletePost({ state, commit }, id) {
      const userId = fb.auth.currentUser.uid
      const likeId = `${userId}_${id}`
      fb.db.collection("posts").doc(id).delete()
        .then(fb.db.collection("likes").doc(likeId).delete())
        .then(fb.commentsCollection.where("postId", "==", id)
          .get()
          .then(function (querySnapshot) {
            querySnapshot.forEach(doc => {
              fb.db.collection("comments").doc(doc.id).delete()
            })
          })
        )
    }
  }
})

export default store