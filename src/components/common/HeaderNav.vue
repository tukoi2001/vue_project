<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            ><router-link to="/" class="nav__link"
              >Home</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/product" class="nav__link"
              >Book</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/blog" class="nav__link"
              >Blog</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/about" class="nav__link"
              >About</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link to="/contact" class="nav__link"
              >Contact</router-link
            ></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

<style scoped src="@/assets/css/components/common/TheHeader.css">

</style>
