<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in listSlides" :key="index"
        ><img class="slider-img" :src="item.image" alt="" />
        <div class="slider-content">
          <div :class="item.classTitle">
            <h1 class="title">{{ item.title }}</h1>
            <h2 class="sub-title">
              {{ item.subTitle }}
            </h2>
            <a href="shop-grid.html" class="btn btn--primary"
              ><span>{{ item.button }}</span></a
            >
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Slider",
  title: "Loop mode / Infinite loop",
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      listSlides: [
        {
          image: require("@/assets/images/home/slider/home-slider-1.jpg"),
          classTitle: "content-title content-title-1",
          title: "Beautifully Designed",
          subTitle: "Cover up front of book and leave summary",
          button: "Shop Now",
        },
        {
          image: require("@/assets/images/home/slider/home-slider-2.jpg"),
          classTitle: "content-title content-title-2",
          title: "Beautifully Designed",
          subTitle: "Cover up front of book and leave summary",
          button: "Shop Now",
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/home/slider.css"></style>
