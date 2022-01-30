<template>
  <div class="home">
    <the-header/>
    <slider />
    <home-features-section />
    <home-background-sale />
    <main-product-categories/>
    <main-special-offer/>
    <best-seller/>
    <home-background-blogs />
    <home-latest-blogs />
    <home-brand />
    <scroll-top-arrow/>
    <the-footer/>
    <the-last-footer/>
  </div>
</template>

<script>
import Slider from "../components/home/Slider.vue";
import MainProductCategories from "../components/home/product-categories/MainProductCategories.vue"
import HomeFeaturesSection from '../components/home/feature/HomeFeaturesSection.vue';
import HomeBackgroundSale from '../components/home/feature/HomeBackgroundSale.vue';
import HomeBackgroundBlogs from '../components/home/blogs/HomeBackgroundBlogs.vue';
import HomeLatestBlogs from '../components/home/blogs/HomeLatestBlogs.vue';
import MainSpecialOffer from '../components/home/special-offer/MainSpecialOffer.vue';
import BestSeller from '../components/home/best-seller/BestSeller.vue';
import ScrollTopArrow from '../components/common/ScrollTopArrow.vue';
import HomeBrand from '../components/home/Brand/HomeBrand.vue';
import TheHeader from '../components/common/TheHeader.vue';
import TheFooter from '../components/common/TheFooter.vue';
import TheLastFooter from '../components/common/TheLastFooter.vue';
export default {
  name: "Home",
  components: {
    Slider,
    MainProductCategories,
    HomeFeaturesSection,
    HomeBackgroundSale,
    HomeBackgroundBlogs,
    HomeLatestBlogs,
    MainSpecialOffer,
    BestSeller,
    ScrollTopArrow,
    HomeBrand,
    TheHeader,
    TheFooter,
    TheLastFooter
  },
};
</script>

<style scoped>
.section-padding {
  padding-bottom: 60px;
}
</style>
