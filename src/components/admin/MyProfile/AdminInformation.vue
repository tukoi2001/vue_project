<template>
  <div class="content-content">
    <div class="tab-pane myaccount-content">
    <div class="text-start px-5">
      <h2 class="fw-bold mb-5">My Information</h2>
    </div>
    <div class="account-details-form px-5">
      <form action="" @submit.prevent="saveInformation">
        <div class="row">
          <div class="col-lg-6 col-12 mb-4">
            <input
              id="first-name"
              placeholder="First Name"
              type="text"
              v-model.trim="getDataAdmin.firstName"
            />
          </div>
          <div class="col-lg-6 col-12 mb-4">
            <input
              id="last-name"
              placeholder="Last Name"
              type="text"
              v-model.trim="getDataAdmin.lastName"
            />
          </div>
          <div class="col-12 mb-4">
            <input
              id="address"
              placeholder="Address"
              type="text"
              v-model.trim="getDataAdmin.address"
            />
          </div>
          <div class="col-12 mb-4">
            <input
              id="phone"
              placeholder="Phone Number"
              type="text"
              v-model.trim="getDataAdmin.phone"
            />
          </div>
          <div class="col-12 mb-4">
            <input
              id="email"
              placeholder="Email"
              type="email"
              v-model.trim="getDataAdmin.email"
              disabled
            />
          </div>
          <div class="col-12 mb-4">
            <input
              id="role"
              placeholder="Role"
              type="text"
              v-model.trim="getDataAdmin.role"
              disabled
            />
          </div>
          <div class="col-12">
            <button class="btn btn--primary" ref="btnSave">Save Changes</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "AdminInformation",
  computed: {
    getDataAdmin() {
      return this.$store.state.dataAdminLogin;
    }
  }
};
</script>

<style scoped src="@/assets/css/components/me/Me.css">

</style>
