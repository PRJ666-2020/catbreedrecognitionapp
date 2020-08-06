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
<<<<<<< HEAD
              <!-- <ValidationObserver v-slot="{ handleSubmit }"> -->
              <form @submit.prevent>
                <div class="form-group">
                  <label>Username</label>
                  <!-- <ValidationProvider name="Username" rules="minmax:8,25|required" v-slot="v"> -->
                  <input
                    v-model.trim="signupForm.username"
                    type="text"
                    placeholder="Username"
                    class="form-control"
                    id="name1"
                  />
                  <!-- <small class="form-text text-danger">{{v.errors[0]}}</small> -->
                  <!-- </ValidationProvider> -->
                </div>
                <div class="form-group">
                  <label>Email address</label>
                  <!-- <ValidationProvider name="Email" rules="minmax:8,25|required" v-slot="v"> -->
                  <input
                    v-model.trim="signupForm.email"
                    type="email"
                    placeholder="Email"
                    class="form-control"
                    id="email1"
                  />
                  <!-- <small class="form-text text-danger">{{v.errors[0]}}</small> -->
                  <!-- </ValidationProvider> -->
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <!-- <ValidationProvider
                    name="Password"
                    rules="required|password:@Confirming"
                    v-slot="v"
                  >-->
                  <input
                    type="password"
                    v-model="signupForm.password"
                    placeholder="Password"
                    class="form-control"
                    id="password1"
                  />
                  <!-- <small class="form-text text-danger">{{v.errors[0]}}</small>
                  </ValidationProvider>-->
                </div>

                <!-- <div class="form-group">
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
                </div>-->
                <button type="submit" class="btn btn-primary" @click="signup()">Submit</button>
              </form>
              <!-- </ValidationObserver> -->
=======
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
>>>>>>> ErisWorking
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
<<<<<<< HEAD
export default {
=======
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
>>>>>>> ErisWorking
  data() {
    return {
      signupForm: {
        username: "",
        email: "",
<<<<<<< HEAD
        password: ""
      }
=======
        password: "",
      },
>>>>>>> ErisWorking
    };
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        email: this.signupForm.email,
        password: this.signupForm.password,
<<<<<<< HEAD
        username: this.signupForm.username
      });
    }
  }
=======
        username: this.signupForm.username,
      });
    },
  },
>>>>>>> ErisWorking
};
</script>
<style>
</style>
