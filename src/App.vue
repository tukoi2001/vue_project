<template>
  <div id="app">
    <the-header />
    <router-view />
    <the-footer/>
  </div>
</template>
<script>
import TheFooter from './components/common/TheFooter.vue';
import TheHeader from "./components/common/TheHeader.vue";

export default {
  components: { TheHeader, TheFooter },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap');
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1rem;
}
</style>
