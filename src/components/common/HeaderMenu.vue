<template>
  <ul>
    <template>
      <li>
        <h3 class="mb-2">
          Welcome
          <strong>Phong Bím </strong>
        </h3>
      </li>
      <li>
        <router-link to="/me">My Account</router-link>
      </li>
      <li>
        <a href="">Logout</a>
      </li>
    </template>

    <template>
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
};
</script>

<style scoped src="@/assets/css/components/common/TheHeader.css"></style>
