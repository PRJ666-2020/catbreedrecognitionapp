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
              <p>Please enter your email address to reset your password</p>
              <!-- <ValidationObserver v-slot="{ handleSubmit }"> -->
              <form @submit.prevent>
                <div class="form-group">
                  <label>Email address</label>
                  <!-- <ValidationProvider name="Email" rules="minmax:8,25|required" v-slot="v"> -->
                  <input
                    v-model.trim="email"
                    type="email"
                    placeholder="Email"
                    class="form-control"
                    id="email1"
                  />
                  <!-- <small class="form-text text-muted">{{v.errors[0]}}</small> -->
                  <!-- </ValidationProvider> -->
                </div>
                <button type="submit" class="btn btn-primary" @click="resetPassword()">Submit</button>
              </form>
              <!-- </ValidationObserver> -->
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>
                  <router-link to="/login">Login to your account</router-link>
                </small>
              </a>
            </div>
            <div class="col-6 text-right">
              <a href="#" class="text-light">
                <small>
                  <router-link to="/register">Creat a new account</router-link>
                </small>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  </section>
</template>
<script>
import { auth } from "@/firebase";

export default {
  data() {
    return {
      email: "",
      showSuccess: false,
      errorMsg: ""
    };
  },
  methods: {
    async resetPassword() {
      this.errorMsg = "";

      try {
        await auth.sendPasswordResetEmail(this.email);
        this.showSuccess = true;
      } catch (err) {
        this.errorMsg = err.message;
      }
    }
  }
};
</script>
