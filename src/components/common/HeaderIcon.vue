<template>
  <div class="d-flex align-items-center justify-content-around">
    <div
      class="stop_event"
      @click.stop="showTab = false"
      :class="{ permit: showTab }"
    ></div>
    <div class="user">
      <a href="" class="nav__icon" @click.prevent="showTab = !showTab">
        <b-icon class="" icon="person-circle"></b-icon>
        <span>My Account</span>
        <transition name="slide-fade">
          <div class="nav__item" v-if="showTab">
            <header-menu />
          </div>
        </transition>
      </a>
    </div>
    <router-link to="/wishlist" class="nav__icon">
      <b-icon class="" icon="suit-heart"></b-icon>
      <span>Wishlist</span>
    </router-link>
    <a href="" class="nav__icon" @click.prevent="showCart = !showCart">
      <span class="item" v-if="items.length > 0">{{ items.length }}</span>
      <b-icon class="" icon="cart-check"></b-icon>
      <span>Shopping Cart</span>
      <div v-if="showCart">
        <cart-overview />
      </div>
    </a>
  </div>
</template>

<script>
import CartOverview from "./CartOverview.vue";
import HeaderMenu from "./HeaderMenu.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { HeaderMenu, CartOverview },
  name: "HeaderIcon",
  data() {
    return {
      showTab: false,
      showCart: false,
    };
  },
  computed: {
    ...mapState("cart", ["items"]),
  },
  methods: {
    ...mapActions("cart", ["actionInitItems"]),
  },
  mounted() {
    this.actionInitItems();
  },
};
</script>

<style scoped src="@/assets/css/components/common/TheHeader.css"></style>
