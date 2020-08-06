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
              <ValidationObserver v-slot="{ invalid }">
                <form @submit.prevent>
                  <div class="form-group">
                    <label>Username</label>
                    <ValidationProvider
                      name="Username"
                      rules="alpha|min:8|max:25|required"
                      v-slot="{ errors }"
                    >
                      <input
                        v-model.trim="signupForm.username"
                        type="text"
                        placeholder="Username"
                        class="form-control"
                        id="name1"
                      />
                      <small class="text-warning" v-show="errors.length > 0">{{ errors[0] }}</small>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label>Email address</label>
                    <ValidationProvider
                      name="Email"
                      rules="email|max:25|required"
                      v-slot="{ errors }"
                    >
                      <input
                        v-model.trim="signupForm.email"
                        type="email"
                        placeholder="Email"
                        class="form-control"
                        id="email1"
                      />
                      <small class="text-warning" v-show="errors.length > 0">{{ errors[0] }}</small>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <ValidationProvider
                      name="Password"
                      rules="alpha_dash|required|min:8|max:25"
                      v-slot="{ errors }"
                    >
                      <input
                        type="password"
                        v-model="signupForm.password"
                        placeholder="Password"
                        class="form-control"
                        id="password1"
                      />
                      <small class="text-warning" v-show="errors.length > 0">{{ errors[0] }}</small>
                    </ValidationProvider>
                  </div>
                  <button
                    type="submit"
                    :disabled="invalid"
                    class="btn btn-primary"
                    @click="signup()"
                  >Submit</button>
                </form>
              </ValidationObserver>
            </template>
          </card>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light">
                <small>
                  <router-link to="/login">Login</router-link>
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
        </div>
      </div>
      <br />
    </div>
  </section>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";

Object.keys(rules).forEach((rule) => {
  extend(rule, {
    ...rules[rule], // copies rule configuration
    message: messages[rule], // assign message
  });
});

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      signupForm: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
        username: this.signupForm.username,
      });
    },
  },
};
</script>
<style>
</style>
