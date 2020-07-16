import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'


import router from '../router/index'
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

      console.log(user)
      // fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())

      // change route to dashboard
      router.push('/profile')
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
    async fetchUserProfile({ commit }, user) {
      // fetch user profile
      console.log("THIS fetch function is called")
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      // set user profile in state
      commit('setUserProfile', userProfile.data())
      
      // change route to dashboard
      console.log(router.currentRoute.path)
      if (router.currentRoute.path === '/login') {
        router.push('/profile')
      }
      if (router.currentRoute.path === '/register') {
        router.push('/profile')
      }
    }
  }
})