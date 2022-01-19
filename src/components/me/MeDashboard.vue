<template>
  <div class="tab-pane fade show">
    <div class="myaccount-content">
      <h3>Dashboard</h3>
      <div class="welcome mb-2">
        <p>
          Hello, <strong>{{ dataUserLogin.firstName + ' ' + dataUserLogin.lastName}}</strong> (If Not <strong>{{ dataUserLogin.firstName + ' ' + dataUserLogin.lastName}} !</strong
          ><a href="" class="logout"> Logout</a>)
        </p>
      </div>
      <p class="mb-0">
        From your account dashboard, you can easily check &amp; view your recent orders, manage your shipping and billing addresses and edit your password and account details.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeDashboard",
  computed: {
    dataUserLogin() {
      return this.$store.state.dataUserLogin;
    }
  }
};
</script>

<style scoped src="@/assets/css/components/me/Me.css"></style>
