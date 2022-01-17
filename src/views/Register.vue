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
              />
              <label
                class="form-check-label form__label"
                for="flexCheckDefault"
              >
                I agree all statements in Terms of Conditions
              </label>
              <div class="form__forget text-start pt-3">
                <span class="form__forget-danger danger">
                  Làm ơn tích vào điều khoản sử dụng!
                </span>
              </div>
            </div>
            <div class="form__btn">
              <button type="submit" class="form__btn-submit">register</button>

              <div class="form__forget text-center pt-3">
              <span class="form__forget-danger danger register">
                  Email đã được đăng ký! Xin vui lòng nhập email khác!
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
    name: 'Register',
    data() {
    return {
      userForm: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
    };
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
  }
}
</script>

<style scoped src="@/assets/css/components/register/Register.css">

</style>