<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-md">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <template>
              <small class="text-warning" v-show="error.length > 0">{{ error }}</small>
              <form role="form" @submit.prevent>
                <base-input
                  alternative
                  type="email"
                  class="mb-3"
                  placeholder="Email"
                  v-model.trim="loginForm.email"
                  addon-left-icon="ni ni-email-83"
                  id="email1"
                ></base-input>
                <base-input
                  alternative
                  type="password"
                  placeholder="Password"
                  v-model.trim="loginForm.password"
                  addon-left-icon="ni ni-lock-circle-open"
                  id="password1"
                ></base-input>
                <div class="text-center">
                  <base-button type="primary" class="my-4" @click="login()">Sign In</base-button>
                </div>
              </form>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>
                  <router-link to="/resetpassword">Forgot password?</router-link>
                </small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="text-light">
                <small>
                  <router-link to="/register">Create new account</router-link>
                </small>
              </a>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import { auth } from "@/firebase";
import * as fb from "@/firebase";

export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapState(["error"]),
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password,
      });
    },
  },
};
</script>