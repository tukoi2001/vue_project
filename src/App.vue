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
    const dataRegister = JSON.parse(localStorage.getItem('dataUserRegister'));
    if (dataRegister && dataRegister != '') {
      this.$store.dispatch('actionCreateUser', dataRegister); 
    }
  },
  beforeMount() {
    const newPassword = JSON.parse(localStorage.getItem('newPassword'));
    if (newPassword && newPassword != '') {
      this.$store.dispatch('actionChangePassword', newPassword); 
    }
  },
  mounted() {
    const infoModifier = JSON.parse(localStorage.getItem('infoModifier'));
    if (infoModifier && infoModifier != '') {
      this.$store.dispatch('actionSaveInformation', infoModifier); 
    }
  }
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
