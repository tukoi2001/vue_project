<template>
  <div>
    <the-header />
    <bread-crumbs :title="'About'" />
    <header-about/>
    <about-service/>
    <about-team/>
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
import AboutService from '../components/about/AboutService.vue';
import AboutTeam from '../components/about/AboutTeam.vue';
import HeaderAbout from '../components/about/HeaderAbout.vue';

export default {
  name: "About",
  components: {
    BreadCrumbs,
    TheHeader,
    ScrollTopArrow,
    HomeBrand,
    TheFooter,
    TheLastFooter,
    AboutService,
    AboutTeam,
    HeaderAbout,
  },
};
</script>

<style></style>
