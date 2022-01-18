<template>
  <div class="tab-pane">
    <div class="myaccount-content">
      <h3>Change Password</h3>
      <form action="">
        <div class="row account-details-form">
          <div class="col-12 mb-4">
            <input
              id="current-pwd"
              placeholder="Current Password"
              type="password"
            />
          </div>
          <div class="col-lg-6 col-12 mb-4">
            <input id="new-pwd" placeholder="New Password" type="password" />
          </div>
          <div class="col-lg-6 col-12 mb-4">
            <input
              id="confirm-pwd"
              placeholder="Confirm Password"
              type="password"
            />
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
export default {
  name: "MeChangePassword",
};
</script>

<style scoped src="@/assets/css/components/me/Me.css"></style>
