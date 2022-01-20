<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        ><img
          class="slider-img"
          src="@/assets/images/home/slider/home-slider-1.jpg"
          alt=""
        />
        <div class="slider-content">
          <div class="content-title content-title-1">
            <h1 class="title">Beautifully Designed</h1>
            <h2 class="sub-title">
              Cover up front of book and <br />
              leave summary
            </h2>
            <a href="shop-grid.html" class="btn btn--yellow">Shop Now</a>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide
        ><img
          class="slider-img"
          src="@/assets/images/home/slider/home-slider-2.jpg"
          alt=""
        />
        <div class="slider-content">
          <div class="content-title content-title-2">
            <h1 class="title">I Love This Idea!</h1>
            <h2 class="sub-title">
              Cover up front of book and <br />
              leave summary
            </h2>
            <a href="shop-grid.html" class="btn btn--yellow">Shop Now</a>
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
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style scoped src="@/assets/css/components/home/slider.css"></style>
