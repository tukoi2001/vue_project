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
                'is-invalid':
                  submitted && $v.userPassword.currentPassword.$error,
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
            <input
              id="new-pwd"
              placeholder="New Password"
              type="password"
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
                'is-invalid':
                  submitted && $v.userPassword.confirmPassword.$error,
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
          <div class="col-12 mb-2">
            <p v-if="passwordWrong" class="text-danger fw-bold">
              The current password is not correct! Please check again!
            </p>
            <p v-if="passwordNotMatch" class="text-danger fw-bold">
              Password Confirmation does not match! Please try again!
            </p>
          </div>
          <div class="col-12">
            <button class="btn btn--primary" ref="btnSave">Save Changes</button>
          </div>
        </div>
      </form>
    </div>
    <popup
      :notifications="'Password has been updated successfully!'"
      v-if="showPopup"
      @myEvent="hidePopup"
    >
      <template v-slot:button>
        <button type="submit" @click="hidePopup">OK</button>
      </template>
    </popup>
  </div>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import Popup from "../common/Popup.vue";
export default {
  components: { Popup },
  name: "MeChangePassword",
  data() {
    return {
      userPassword: {
        currentPassword: "",
        password: "",
        confirmPassword: "",
      },
      submitted: false,
      passwordWrong: false,
      passwordNotMatch: false,
      showPopup: false,
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
      const id = this.$store.state.dataUserLogin.id;
      const pw = this.$store.state.usersRegister[id].password;
      if (pw !== this.userPassword.currentPassword) {
        this.passwordWrong = true;
      } else {
        if (this.userPassword.password !== this.userPassword.confirmPassword) {
          this.passwordNotMatch = true;
        } else {
          const newPassword = {
            password: this.userPassword.password,
            confirmPassword: this.userPassword.confirmPassword,
          };
          this.$refs.btnSave.disabled = true;
          this.$store.dispatch("actionChangePassword", newPassword);
          localStorage.setItem("newPassword", JSON.stringify(newPassword));
          this.showPopup = true;
          setTimeout(() => {
            this.showPopup = false;
          }, 2500);
        }
      }
    },
    hidePopup() {
      this.showPopup = false;
    },
  },
  watch: {
    "userPassword.currentPassword": {
      handler() {
        this.passwordWrong = false;
      },
      deep: true,
    },
    userPassword: {
      handler() {
        this.passwordNotMatch = false;
        this.$refs.btnSave.disabled = false;
      },
      deep: true,
    },
  },
  mounted() {
    this.$refs.btnSave.disabled = true;
  },
};
</script>

<style scoped src="@/assets/css/components/me/Me.css"></style>
