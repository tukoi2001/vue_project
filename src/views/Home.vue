<template>
  <div class="home">
    <slider />
    <home-features-section />
    <home-background-sale />
    <home-background-blogs />
    <home-latest-blogs />
    <main-product-categories/>
  </div>
</template>

<script>
import Slider from "../components/home/Slider.vue";
import MainProductCategories from "../components/home/product-categories/MainProductCategories.vue"
import HomeFeaturesSection from '../components/home/feature/HomeFeaturesSection.vue';
import HomeBackgroundSale from '../components/home/feature/HomeBackgroundSale.vue';
import HomeBackgroundBlogs from '../components/blogs/HomeBackgroundBlogs.vue';
import HomeLatestBlogs from '../components/blogs/HomeLatestBlogs.vue';
export default {
  name: "Home",
  components: {
    Slider,
    MainProductCategories,
    HomeFeaturesSection,
    HomeBackgroundSale,
    HomeBackgroundBlogs,
    HomeLatestBlogs
  },
};
</script>

<style scoped>
.section-padding {
  padding-bottom: 60px;
}
</style>
