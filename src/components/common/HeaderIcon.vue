<template>
  <div class="d-flex align-items-center justify-content-around">
    <div class="stop_event" @click.stop="showTab = false" :class="{permit: showTab}"></div>
    <div class="user">
      <a href="" class="nav__icon" @click.prevent="showTab = !showTab">
        <b-icon class="" icon="person-circle"></b-icon>
        <span>My Account</span>
        <transition name="slide-fade">
        <div class="nav__item" v-if="showTab">
          <header-menu/>
        </div>
      </transition>
      </a>      
    </div>
    <a href="" class="nav__icon">
      <b-icon class="" icon="suit-heart"></b-icon>
      <span>Wishlist</span>
    </a>
    <a href="" class="nav__icon">
      <b-icon class="" icon="cart-check"></b-icon>
      <span>Shopping Cart</span>
    </a>
  </div>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue';
export default {
  components: { HeaderMenu },
  name: "HeaderIcon",
  data() {
    return {
      showTab: false,
    };
  },
  methods: {

  }
};
</script>

<style scoped src="@/assets/css/components/common/TheHeader.css">
</style>
