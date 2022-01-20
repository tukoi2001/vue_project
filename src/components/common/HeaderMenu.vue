<template>
  <ul>
    <template v-if="dataUserLogin && dataUserLogin != null">
      <li>
        <h3 class="mb-2">
          Welcome
          <strong>{{dataUserLogin.firstName + ' ' + dataUserLogin.lastName }}</strong>
        </h3>
      </li>
      <li>
        <router-link to="/me">My Account</router-link>
      </li>
      <li>
        <a @click.prevent="logout" href="">Logout</a>
      </li>
    </template>

    <template v-else>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/register">Register</router-link>
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  name: "HeaderMenu",
  computed: {
    dataUserLogin() {
      return this.$store.state.dataUserLogin;
    }
  },
  methods: {
    logout() {
      localStorage.setItem('dataUserLogin', '');
      this.$store.dispatch('actionSetDataUserLogin', '');
      if(this.$router.name !== 'Home') {
        this.$router.push('/')
      }
    }
  }
};
</script>

<style scoped src="@/assets/css/components/common/TheHeader.css"></style>
