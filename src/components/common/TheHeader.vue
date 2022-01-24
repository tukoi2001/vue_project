<template>
  <div class="header">
    <div class="container">
      <div class="row py-3">
        <div class="col-md-3 d-flex align-items-center">
          <header-logo />
        </div>
        <div class="col-md-3 d-flex align-items-center">
          <div class="header-phone d-flex align-items-center">
            <div class="icon">
              <b-icon icon="headphones" variant="success"></b-icon>
            </div>
            <div class="text">
              <p>Free Support 24/7</p>
              <p class="font-weight-bold number">+84 322 999999</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-center">
          <header-nav />
        </div>

        <div class="row my-4">
          <div class="col-md-8 px-5 header_icon">
            <div class="header-search-block">
              <input type="text" placeholder="Search..." />
              <button>Search</button>
            </div>
          </div>
          <div class="col-md-4 header_icon">
            <header-icon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderIcon from "./HeaderIcon.vue";
import HeaderLogo from "./HeaderLogo.vue";
import HeaderNav from "./HeaderNav.vue";
export default {
  components: { HeaderLogo, HeaderNav, HeaderIcon },
  name: "TheHeader",
  
};
</script>

<style scoped src="@/assets/css/components/common/TheHeader.css"></style>
