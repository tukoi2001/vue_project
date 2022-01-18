<template>
  <div>
    <div class="tab-pane">
      <div class="myaccount-content">
        <h3>Account Details</h3>
        <div class="account-details-form">
          <form action="">
            <div class="row">
              <div class="col-lg-6 col-12 mb-4">
                <input id="first-name" placeholder="First Name" type="text" />
              </div>
              <div class="col-lg-6 col-12 mb-4">
                <input id="last-name" placeholder="Last Name" type="text" />
              </div>
              <div class="col-12 mb-4">
                <input id="address" placeholder="Address" type="text" />
              </div>
              <div class="col-12 mb-4">
                <input id="phone" placeholder="Phone Number" type="number" />
              </div>
              <div class="col-12 mb-4">
                <input id="email" placeholder="Email" type="email" />
              </div>
              
              <div class="col-12">
                <button class="btn btn--primary">Save Changes</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeAccountDetails",
};
</script>

<style scoped src="@/assets/css/components/me/Me.css"></style>
