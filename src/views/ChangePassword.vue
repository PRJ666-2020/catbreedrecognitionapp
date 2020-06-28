<template>
  <section class="section section-shaped section-lg my-0">
    <div class="shape shape-style-1 bg-gradient-default">

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
              <p>Please enter your new password</p>
              <ValidationObserver v-slot="{ handleSubmit }">
                <form @submit.prevent="handleSubmit(onSubmit)">
                  <div class="form-group">
                    <label>New password</label>
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
                      <small class="form-text text-muted">{{v.errors[0]}}</small>
                    </ValidationProvider>
                  </div>

                  <div class="form-group">
                    <label>Confirm new password</label>
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
                      <small class="form-text text-muted">{{v.errors[0]}}</small>
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
import { minmax, required, confirmPassword } from "../validation";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  data: () => ({
    email: "",
  }),
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    onSubmit() {
      alert("Your new password is setted!");
    }
  }
};
</script>
<style>
</style>
