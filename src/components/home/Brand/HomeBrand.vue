<template>
  <section class="section-margin">
    <h2 class="sr-only">Brand Slider</h2>
    <div class="container">
      <div class="brand-slider sb-slick-slider border-top border-bottom">
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(item, index) in listBrandSlides" :key="index">
            <div class="single-slide">
              <img :src="item.imgBrand" alt="" />
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      listBrandSlides: [
        { imgBrand: require("@/assets/images/home/brand/brand-1.jpg") },
        { imgBrand: require("@/assets/images/home/brand/brand-2.jpg") },
        { imgBrand: require("@/assets/images/home/brand/brand-3.jpg") },
        { imgBrand: require("@/assets/images/home/brand/brand-4.jpg") },
        { imgBrand: require("@/assets/images/home/brand/brand-5.jpg") },
        { imgBrand: require("@/assets/images/home/brand/brand-6.jpg") },
        { imgBrand: require("@/assets/images/home/brand/brand-1.jpg") },
        { imgBrand: require("@/assets/images/home/brand/brand-1.jpg") },
        { imgBrand: require("@/assets/images/home/brand/brand-1.jpg") },
        { imgBrand: require("@/assets/images/home/brand/brand-1.jpg") },
      ],
    };
  },
  props: {
    imgBrand: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped src="@/assets/css/components/home/brand/brand.css">
</style>