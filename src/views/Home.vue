<template>
  <div class="home">
    <slider />
    <main-product-categories/>
  </div>
</template>

<script>
import Slider from "../components/home/Slider.vue";
import MainProductCategories from "../components/home/product-categories/MainProductCategories.vue"
export default {
  name: "Home",
  components: {
    Slider,
    MainProductCategories
  },
};
</script>

<style scoped>
.section-padding {
  padding-bottom: 60px;
}
</style>
