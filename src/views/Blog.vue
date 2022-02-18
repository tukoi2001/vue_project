<template>
  <div>
    <the-header />
    <bread-crumbs :title="'Blog'" />
    <blog-list />
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
import BlogList from '../components/blog/BlogList.vue';

export default {
  name: "Blog",
  components: {
    BreadCrumbs,
    TheHeader,
    ScrollTopArrow,
    HomeBrand,
    TheFooter,
    TheLastFooter,
    BlogList,
  },
};
</script>

<style></style>
