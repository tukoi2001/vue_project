<template>
  <div>
    <the-header />
    <bread-crumbs :title="'Shop'" />
    <main-product/>
    <home-brand />
    <scroll-top-arrow />
    <the-footer />
    <the-last-footer />
  </div>
</template>

<script>
import TheHeader from "../components/common/TheHeader.vue";
import BreadCrumbs from "../components/common/BreadCrumbs.vue";
import TheFooter from "../components/common/TheFooter.vue";
import TheLastFooter from "../components/common/TheLastFooter.vue";
import ScrollTopArrow from "../components/common/ScrollTopArrow.vue";
import HomeBrand from "../components/home/Brand/HomeBrand.vue";
import MainProduct from '../components/product/MainProduct.vue';


export default {
  name: "Shop",
  components: {
    BreadCrumbs,
    TheHeader,
    ScrollTopArrow,
    HomeBrand,
    TheFooter,
    TheLastFooter,
    MainProduct,
  },
};
</script>

<style scoped src="@/assets/css/components/wishlist/WishList.css"></style>
