<template>
  <div class="tab-pane">
    <div class="myaccount-content">
      <h3>Change Password</h3>
      <form action="" @submit.prevent="checkCurrentPassword()">
        <div class="row account-details-form">
          <div class="col-12 mb-4">
            <input
              id="current-pwd"
              placeholder="Current Password"
              type="password"
              v-model.trim="userPassword.currentPassword"
              @input="handleSubmit()"
              :class="{
                  'is-invalid': submitted && $v.userPassword.currentPassword.$error,
                }"
            />
             <div
                v-if="submitted && $v.userPassword.currentPassword.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.userPassword.currentPassword.required"
                  >Password is required</span
                >
                <span v-if="!$v.userPassword.currentPassword.minLength"
                  >Password must be at least 8 characters</span
                >
              </div>
          </div>
          <div class="col-lg-6 col-12 mb-4">
            <input id="new-pwd" placeholder="New Password" type="password" 
              v-model.trim="userPassword.password"
              @input="handleSubmit()"
              :class="{
                  'is-invalid': submitted && $v.userPassword.password.$error,
                }"
            />
             <div
                v-if="submitted && $v.userPassword.password.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.userPassword.password.required"
                  >Password is required</span
                >
                <span v-if="!$v.userPassword.password.minLength"
                  >Password must be at least 8 characters</span
                >
              </div>
          </div>
          <div class="col-lg-6 col-12 mb-4">
            <input
              id="confirm-pwd"
              placeholder="Confirm Password"
              type="password"
              v-model.trim="userPassword.confirmPassword"
              @input="handleSubmit()"
              :class="{
                  'is-invalid': submitted && $v.userPassword.confirmPassword.$error,
                }"
            />
            <div
                v-if="submitted && $v.userPassword.confirmPassword.$error"
                class="invalid-feedback"
              >
                <span v-if="!$v.userPassword.confirmPassword.required"
                  >Confirm Password is required</span
                >
                <span v-else-if="!$v.userPassword.confirmPassword.sameAsPassword"
                  >Passwords must match</span
                >
              </div>
          </div>
          <div class="col-12 mb-2" v-if="passwordWrong">
            <p class="text-danger fw-bold">The current password is not correct! Please check again!</p>        
          </div>
          <div class="col-12">
            <button class="btn btn--primary">Save Changes</button>           
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  name: "MeChangePassword",
  data() {
    return {
      userPassword: {
        currentPassword: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
      passwordWrong: false
    };
  },
  validations: {
    userPassword: {
      currentPassword: { required, minLength: minLength(8) },
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
    checkCurrentPassword() {
      const pw = this.$store.state.dataUserLogin.password;
      if (pw !== this.userPassword.currentPassword) {
        this.passwordWrong = true;
      }else {
        const newPassword = {
          password: this.userPassword.password,
          confirmPassword: this.userPassword.confirmPassword,
        }
        this.$store.dispatch('actionChangePassword', newPassword);
        localStorage.setItem('newPassword', JSON.stringify(newPassword))
      }
    }
  },
  watch: { 
    'userPassword.currentPassword': { 
      handler() {
        this.passwordWrong = false;
      },
      deep: true
    }
  }
};
</script>

<style scoped src="@/assets/css/components/me/Me.css"></style>
