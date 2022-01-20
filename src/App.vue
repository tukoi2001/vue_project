<template>
  <div id="app">
    <the-header />
    <router-view />
    <the-footer/>
    <the-last-footer/>
  </div>
</template>
<script>
import TheLastFooter from './components/common/TheLastFooter.vue';
import TheFooter from './components/common/TheFooter.vue';
import TheHeader from "./components/common/TheHeader.vue";

export default {
  components: { TheHeader, TheFooter, TheLastFooter },
  created() {
    const user = JSON.parse(localStorage.getItem('dataUserLogin'))
    if (user && user != '') {
      this.$store.dispatch('actionSetDataUserLogin', user);
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1rem;
}
</style>
