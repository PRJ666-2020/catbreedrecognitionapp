import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import { auth } from 'firebase'
import router from '../router/index'
Vue.use(Vuex)

fb.breedsCollection.get().then(function(querySnapshot){
  let breedsArray = []
  querySnapshot.forEach(function (doc) {
      let breed = doc.data()
      breed.id = doc.id
      breedsArray.push(breed)
      console.log(breed)
  });
  store.commit('setBreeds', breedsArray)
})

fb.postsCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  let postsArray = []
  snapshot.forEach(doc => {
    let post = doc.data()
    post.id = doc.id

    postsArray.push(post)
  })

  store.commit('setPosts', postsArray)
})

fb.catsCollection.get().then(function (querySnapshot) {
  let catsArray = []
  querySnapshot.forEach(function (doc) {
    if (doc.data().owner == fb.auth.currentUser.uid) {
      let cat = doc.data()
      cat.id = doc.id
      catsArray.push(cat)
    }
  });
  store.commit('setCats', catsArray)
});

const store = new Vuex.Store({
  state: {
    userProfile: {},
    posts: [],
    cats: [],
    breed: [],
    shownCat: {},
    error: ""
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setPosts(state, val) {
      state.posts = val

    },
    setCats(state, val) {
      state.cats = val
    },
    setShownCat(state, val) {
      state.shownCat = val
    },
    setError(state, val) {
      state.error = val;
    },
    setBreeds(state,val){
      state.breed = val;
    }
  },

  actions: {
    async login({ dispatch, commit }, form) {
      // sign user in
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      if (user.emailVerified) {
        // fetch user profile and set in state
        dispatch('fetchUserProfile', user)
      }
      else {
        await fb.auth.signOut()
        commit('setUserProfile', {})
        commit('setError', "Please confirm your email address to log in")
      }

    },
    async fetchUserProfile({ commit }, user) {

      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())

      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/profile')
      }
      if (router.currentRoute.path === '/register') {
        router.push('/profile')
      }


    },


    async signup({ dispatch, commit }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      user.sendEmailVerification().then(function () {
        // Email sent.
      }).catch(function (error) {
        // An error happened.
      });
      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
        username: form.username,
        picture: ""
      })
      await fb.auth.signOut()
      commit('setUserProfile', {})
      router.push('/login')

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
        username: user.username,
        picture: user.picture
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
    async updateCat({ dispatch }, cat) {
      const catRef = await fb.catsCollection.doc(cat.id).update({
        birth: cat.birth,
        description: cat.description,
        gender: cat.gender,
        name: cat.name,
        owner: fb.auth.currentUser.uid,
        picture: cat.picture
      });
    },
    async updatePost({ dispatch }, post) {
      const postRef = await fb.postsCollection.doc(post.id).update({
        title: post.title,
        content: post.content,
        createdOn: new Date()
      })
    },
    async showCat({ state, commit }, id) {
      fb.db.collection("cats").doc(id).onSnapshot(snapshot => {
        let cat = snapshot.data()
        cat.id = snapshot.id
        commit("setShownCat", cat)
        router.push('/catprofile')
      })
    },
    async createPost({ state, commit }, post) {
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
    async createCat({ state, commit }, cat) {
      let catRef = await fb.catsCollection.add({
        name: cat.name,
        birth: cat.birth,
        gender: cat.gender,
        description: cat.description,
        picture: cat.picture,
        owner: fb.auth.currentUser.uid
      })
      catRef.get().then(snapshot => {
        let shownCat = snapshot.data()
        shownCat.id = snapshot.id
        commit("setShownCat", shownCat)
        router.push('/catprofile')
      })
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
    },
    async deleteCat({ dispatch }, id) {
      fb.db.collection("cats").doc(id).delete()
        .then(router.push('/profile'))
    }
  }
})

export default store