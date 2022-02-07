<template>
  <div class="wrapper">
    <div class="container">
      <div class="row content__register">
        <div class="col-md-12 content__register-form">
          <form class="form__register" @submit.prevent="register">
            <span class="form__title"> Register </span>
            <div class="form__email mb-3">
              <input
                @input="handleSubmit()"
                v-model.trim="userForm.firstName"
                type="text"
                placeholder="First Name"
                class="form__email-input"
                :class="{
                  'is-invalid': submitted && $v.userForm.firstName.$error,
                }"
              />
              <span class="form__email-symbol">
                <b-icon icon="person"></b-icon>
              </span>
              <div
                v-if="submitted && !$v.userForm.firstName.required"
                class="invalid-feedback"
              >
                First Name is required
              </div>
            </div>
            <div class="form__email mb-3">
              <input
                @input="handleSubmit()"
                v-model.trim="userForm.lastName"
                type="text"
                placeholder="Last Name"
                class="form__email-input"
                :class="{
                  'is-invalid': submitted && $v.userForm.lastName.$error,
                }"
              />
              <span class="form__email-symbol">
                <b-icon icon="person"></b-icon>
              </span>
              <div
                v-if="submitted && !$v.userForm.lastName.required"
                class="invalid-feedback"
              >
                Last Name is required
              </div>
            </div>
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
                type="password"
                placeholder="Password"
                class="form__password-input"
                :class="{
                  'is-invalid': submitted && $v.userForm.password.$error,
                }"
              />
              <span class="form__password-symbol">
                <b-icon icon="lock"></b-icon>
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
            <div class="form__password mb-3">
              <input
                @input="handleSubmit()"
                v-model.trim="userForm.confirmPassword"
                type="password"
                placeholder="Repeat your password"
                class="form__password-input"
                :class="{
                  'is-invalid': submitted && $v.userForm.confirmPassword.$error,
                }"
              />
              <span class="form__password-symbol">
                <b-icon icon="lock-fill"></b-icon>
              </span>
              <div
                v-if="submitted && $v.userForm.confirmPassword.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.userForm.confirmPassword.required"
                  >Confirm Password is required</span
                >
                <span v-else-if="!$v.userForm.confirmPassword.sameAsPassword"
                  >Passwords must match</span
                >
              </div>
            </div>
            <div class="form__check text-start">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                v-model="check"
              />
              <label
                class="form-check-label form__label"
                for="flexCheckDefault"
              >
                I agree all statements in Terms of Conditions
              </label>
              <div class="form__forget text-start pt-3" v-if="checkTerm">
                <span class="form__forget-danger danger">
                  Làm ơn tích vào điều khoản sử dụng!
                </span>
              </div>
            </div>
            <div class="form__btn">
              <button type="submit" class="form__btn-submit">register</button>

              <div class="form__forget text-center pt-3" >
                <span class="form__forget-danger danger register" v-if="errorEmail">
                  Email đã được đăng ký! Xin vui lòng nhập email khác!
                </span>
                 <span class="form__forget-danger danger register" v-if="inputInfo">
                  Vui lòng nhập thông tin!
                </span>
              </div>
            </div>
            <div class="text-center pt-5">
              <router-link to="/login" class="form__register"
                >Already have an account
                <b-icon icon="arrow-right-circle"></b-icon>
              </router-link>
            </div>
          </form>
          <back-to-home/>
        </div>
      </div>
    </div>
    <popup :notifications="'Successful account registration!'" v-if="showPopup" @myEvent="hidePopup">
      <template v-slot:button>
        <button type="submit" @click="hidePopup">OK</button>
      </template>
    </popup>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import BackToHome from '../components/common/BackToHome.vue';
import Popup from '../components/common/Popup.vue';
export default {
  components: { Popup, BackToHome },
  name: "Register",
  data() { 
    return {
      userForm: {
        id: 0,
        firstName: "", 
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        phone: "",
        purchase_status: 0,
        role: "user",
        created_at: new Date().toLocaleString(),
        updated_at: "",
      },
      submitted: false,
      checkTerm: false,
      errorEmail: false,
      check: false,
      result: false,
      inputInfo: false,
      showPopup: false,
    };
  },
  mounted() {
    
  },
  validations: {
    userForm: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, minLength: minLength(8) },
      confirmPassword: { required, sameAsPassword: sameAs("password") },
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
    hidePopup() {
      this.showPopup = false;
    },
    register() {
      const res = this.$store.state.users.users;
      const response = this.$store.state.usersRegister;
      res.forEach(user => {
        if (this.userForm.email === user.email) {
          this.errorEmail = true;
          this.result = false;
        }
        else {
          this.result = true;
        }
      })
      response.forEach(user => {
        if (this.userForm.email === user.email) {
          this.errorEmail = true;
          this.result = false;
        } 
        else {
          this.result = true;
        }
      })
      if(this.result === true) {
        this.afterRegister();
      }
    },
    afterRegister() {
      if(this.userForm.email === '' && this.userForm.password === '' && this.userForm.confirmPassword === '') {
        this.inputInfo = true;
      }
      else {  
        if (this.check === false) {
          this.checkTerm = true;
        }
        else {  
          if (this.userForm.password === this.userForm.confirmPassword) {
            this.$store.dispatch("actionCreateUser", this.userForm);
            localStorage.setItem("dataUserRegister", JSON.stringify(this.userForm));
            this.showPopup = true;
            setTimeout(() =>{
              this.showPopup = false;
            }, 2500);
            setTimeout(() =>{
              this.$router.push("/login");
            }, 3000)
          }
          else {
            alert("Confirm Password isn't match! Please try again!");
          }
        }
      }
    }
  },
  watch: { 
    check:  {
      handler() {
        if(this.check === true) {
          this.checkTerm = false;
        }
      }
    },
    'userForm.email': {
      handler() {
        this.errorEmail = false;
        this.inputInfo = false;
      },
      deep: true
    }
  }
};
</script>

<style scoped src="@/assets/css/components/register/Register.css"></style>
