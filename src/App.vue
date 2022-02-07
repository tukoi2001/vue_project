<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script>
export default {
  created() {
    const user = JSON.parse(localStorage.getItem("dataUserLogin"));
    if (user && user != "") {
      this.$store.dispatch("actionSetDataUserLogin", user);
    }
    const dataRegister = JSON.parse(localStorage.getItem("dataUserRegister"));
    if (dataRegister && dataRegister != "") {
      this.$store.dispatch("actionCreateUser", dataRegister);
    }
  },
  beforeMount() {
    const newPassword = JSON.parse(localStorage.getItem("newPassword"));
    if (newPassword && newPassword != "") {
      this.$store.dispatch("actionChangePassword", newPassword);
    }
  },
  mounted() {
    const admin = JSON.parse(localStorage.getItem("dataAdminLogin"));
    if (admin && admin != "") {
      this.$store.dispatch("actionSetDataAdminLogin", admin);
    }
    const infoModifier = JSON.parse(localStorage.getItem("infoModifier"));
    if (infoModifier && infoModifier != "") {
      this.$store.dispatch("actionSaveInformation", infoModifier);
    }
    const dataCategory = JSON.parse(localStorage.getItem("categories"));
    if (dataCategory && dataCategory != "") {
      this.$store.commit('pushDataCategories', dataCategory);
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
/* Transition Router */
.slide-enter-active,
.slide-leave-active {
  transition: all 2s ease-out;
}


.slide-enter-to {
  position: absolute;
  right: 0;
}


.slide-enter-from {
  position: absolute;
  right: -100%;
}


.slide-leave-to {
  position: absolute;
  left: -100%;
}


.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
