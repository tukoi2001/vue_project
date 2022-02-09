<template>
  <div>
    <the-header />
    <bread-crumbs :title="'Order Complete'" />
    <main-order-complete/>
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
import MainOrderComplete from '../components/order-complete/MainOrderComplete.vue';

export default {
  name: "OrderComplete",
  components: {
    BreadCrumbs,
    TheHeader,
    ScrollTopArrow,
    HomeBrand,
    TheFooter,
    TheLastFooter,
    MainOrderComplete,
  },
};
</script>

<style></style>
