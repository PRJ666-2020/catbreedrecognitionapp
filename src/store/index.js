import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
<<<<<<< HEAD
import router from "../router";


=======
import router from '../router/index'
>>>>>>> RecognizeCatPage

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
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
<<<<<<< HEAD
=======

      console.log(user)
>>>>>>> RecognizeCatPage
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())

      // change route to dashboard
      router.push('/')
    },
    async signup({ dispatch }, form) {
      // sign user up
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)

      // create user profile object in userCollections
      await fb.usersCollection.doc(user.uid).set({
<<<<<<< HEAD
        name: form.name,
        title: form.title
=======
        username: form.username
>>>>>>> RecognizeCatPage
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
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
<<<<<<< HEAD
=======
      console.log("THIS fetch function is called")
>>>>>>> RecognizeCatPage
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())
<<<<<<< HEAD

      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/')
=======
      
      // change route to dashboard
      if (router.currentRoute.path === '/login') {
        router.push('/profile')
      }
      if (router.currentRoute.path === '/register') {
        router.push('/profile')
>>>>>>> RecognizeCatPage
      }
    }
  }
})