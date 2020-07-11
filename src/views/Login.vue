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
            <!-- <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
            </template>-->
            <template>
              <!-- <div class="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>-->
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
                <!-- <base-checkbox>Remember me</base-checkbox> -->
                <!-- <div v-if="isError" class="text-muted text-center mb-3 warning">
                  <small class="form-text text-danger">Username or password is not correct</small>
                </div>-->
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
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.loginForm.email,
        password: this.loginForm.password
      });
    }
  }
};
</script>