<template>
  <div>
      <the-header />
      <bread-crumbs :title="'Blog Details'" />
      <blog-content />
      <blog-comment />
      <home-brand />
      <scroll-top-arrow />
      <the-footer />
      <the-last-footer />
  </div>
</template>

<script>
import BlogComment from '../components/blog/BlogComment.vue'
import BlogContent from '../components/blog/BlogContent.vue'
import BreadCrumbs from '../components/common/BreadCrumbs.vue'
import ScrollTopArrow from '../components/common/ScrollTopArrow.vue'
import TheFooter from '../components/common/TheFooter.vue'
import TheHeader from '../components/common/TheHeader.vue'
import TheLastFooter from '../components/common/TheLastFooter.vue'
import HomeBrand from '../components/home/Brand/HomeBrand.vue' 
export default {
    name: 'Blog Details',
  components: { TheHeader, BreadCrumbs, HomeBrand, ScrollTopArrow,TheLastFooter, TheFooter, BlogContent, BlogComment },

}
</script>

<style>

</style>

