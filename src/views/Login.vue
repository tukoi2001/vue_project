<template>
  <div class="wrapper">
    <div class="container">
      <div class="row content__login">
        <div class="col-md-12 content__login-form">
          <form class="form__login" @submit.prevent="login">
            <span class="form__title"> Login </span>
            <div class="form__email mb-3">
              <input
                @input="handleSubmit()"
                v-model.trim="userForm.email"
                type="email"
                placeholder="Email"
                class="form__email-input"
                :class="{ 'is-invalid': submitted && $v.userForm.email.$error }"
              />
              <span class="form__email-symbol">
                <b-icon icon="envelope"></b-icon>
              </span>
              <div
                v-if="submitted && $v.userForm.email.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.userForm.email.required"
                  >Email is required</span
                >
                <span v-if="!$v.userForm.email.email">Email is invalid</span>
              </div>
            </div>
            <div class="form__password mb-3">
              <input
                @input="handleSubmit()"
                v-model.trim="userForm.password"
                :type="type"
                placeholder="Password"
                class="form__password-input"
                :class="{
                  'is-invalid': submitted && $v.userForm.password.$error,
                }"
              />
              <span class="form__password-symbol">
                <b-icon icon="lock"></b-icon>
              </span>
              <span class="form__password-right" @click.stop="showPassword()">
                <b-icon v-if="type == 'password'" icon="eye"></b-icon>
                <b-icon v-if="type == 'text'" icon="eye-slash"></b-icon>
              </span>
              <div
                v-if="submitted && $v.userForm.password.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.userForm.password.required"
                  >Password is required</span
                >
                <span v-if="!$v.userForm.password.minLength"
                  >Password must be at least 8 characters</span
                >
              </div>
            </div>
            <div class="form__check py-1 d-flex align-items-center">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label
                class="form-check-label form__label ms-2"
                for="flexCheckDefault"
              >
                Lưu tài khoản
              </label>
            </div>
            <div class="form__btn">
              <button type="submit" class="form__btn-submit">Login</button>
            </div>
            <div class="form__forget text-center pt-3" v-if="loginFail">
              <span class="form__forget-danger danger">
                Incorrect email or password!
              </span>
            </div>
            <div class="form__forget text-center pt-3">
              <span class="form__forget-span">Forgot</span>
              <a class="form__forget-link" href="#"> Username / Password?</a>
            </div>
            <div class="text-center pt-5">
              <router-link to="/register" class="form__register"
                >Create your Account
                <b-icon icon="arrow-right-circle"></b-icon>
              </router-link>
            </div>
          </form>
          <back-to-home/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import BackToHome from '../components/common/BackToHome.vue';

export default {
  components: { BackToHome },
  name: "Login",
  data() {
    return {
      submitted: false,
      userForm: {
        email: "",
        password: "",
      },
      type: "password",
      loginFail: false,
    };
  },
  validations: {
    userForm: {
      email: { required, email },
      password: { required, minLength: minLength(8) },
    },
  },
  methods: { 
      handleSubmit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    },
    showPassword() {
        if (this.type == "password") { this.type = "text";}
        else {  this.type = 'password';}
    },
    login() {
      const res = this.$store.state.users.users;
      const response = this.$store.state.usersRegister;
      res.forEach(user => {
        if (this.userForm.email === user.email && this.userForm.password === user.password) {
         
          if (user.role === 'admin') {
            localStorage.setItem('dataAdminLogin', JSON.stringify(user));
            this.$store.dispatch('actionSetDataAdminLogin', user);
            this.$router.push('/admin');
          }
          else {  
            localStorage.setItem('dataUserLogin', JSON.stringify(user));
            this.$store.dispatch('actionSetDataUserLogin', user);
            this.$router.push("/");            
          }
        }
        else {  
          this.loginFail = true;
        }
      })
      response.forEach(user => {
        if (this.userForm.email === user.email && this.userForm.password === user.password) {
          localStorage.setItem('dataUserLogin', JSON.stringify(user));
          this.$store.dispatch('actionSetDataUserLogin', user);
          this.$router.push('/');
        } else {
          this.loginFail = true;
        }
      })
       
    }
  },
  watch: { 
    userForm: {
      handler: function() {
        this.loginFail = false;
      },
      deep: true,
    },
  }
};
</script>

<style scoped src="@/assets/css/components/login/Login.css"></style>
