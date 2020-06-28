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
              <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)">
                  <div class="form-group">
                    <label>Username</label>
                    <ValidationProvider name="Username" rules="minmax:8,25|required" v-slot="v">
                      <input
                        v-model="username"
                        type="text"
                        placeholder="Username"
                        class="form-control"
                      />
                      <small class="form-text text-danger">{{v.errors[0]}}</small>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label>Email address</label>
                    <ValidationProvider name="Email" rules="minmax:8,25|required" v-slot="v">
                      <input v-model="email" type="email" placeholder="Email" class="form-control" />
                      <small class="form-text text-danger">{{v.errors[0]}}</small>
                    </ValidationProvider>
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <ValidationProvider
                      name="Password"
                      rules="required|password:@Confirming"
                      v-slot="v"
                    >
                      <input
                        type="password"
                        v-model="password"
                        placeholder="Password"
                        class="form-control"
                      />
                      <small class="form-text text-danger">{{v.errors[0]}}</small>
                    </ValidationProvider>
                  </div>

                  <div class="form-group">
                    <label>Confirm password</label>
                    <ValidationProvider
                      name="Confirming"
                      vid="Confirming"
                      rules="required"
                      v-slot="v"
                    >
                      <input
                        type="password"
                        v-model="confirmation"
                        placeholder="Confirm password"
                        class="form-control"
                      />
                      <small class="form-text text-danger">{{v.errors[0]}}</small>
                    </ValidationProvider>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
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
import { minmax, required, confirmPassword } from "../validation.js";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  data: () => ({
    username: "",
    email: "",
    password: "",
    confirmation: ""
  }),
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    onSubmit() {
      alert("Form submitted!");
    }
  }
};
</script>
<style>
</style>
