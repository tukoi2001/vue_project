<template>
  <div>
    <the-header />
    <bread-crumbs :title="'Contact'" />
    <contact-map/>
    <main-contact/>
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
import ContactMap from '../components/contact/ContactMap.vue';
import MainContact from '../components/contact/MainContact.vue';

export default {
  name: "Contact",
  components: {
    BreadCrumbs,
    TheHeader,
    ScrollTopArrow,
    HomeBrand,
    TheFooter,
    TheLastFooter,
    ContactMap,
    MainContact,
  },
};
</script>

<style></style>
