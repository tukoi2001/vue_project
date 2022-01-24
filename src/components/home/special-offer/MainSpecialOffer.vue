<template>
  <div class="special-offer">
    <div class="promo-section-heading">
      <h2>Deal of the day up to 20% off Special offer</h2>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in listProducts" :key="index"
        ><product
          :mainImage="item.mainImage"
          :hoverImage="item.hoverImage"
          :author="item.author"
          :title="item.title"
          :price="item.price"
          :priceOld="item.priceOld"
          :priceDiscount="item.priceDiscount"
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Product from '../../common/Product.vue'
export default {
  components: { Product },
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 30,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      listProducts: [
        {
          mainImage: require("@/assets/images/home/product-categories/product-3.jpg"),
          hoverImage: require("@/assets/images/home/product-categories/product-2.jpg"),
          author: "Cpple",
          title: "3 Ways To Have (A) More Appealing BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-3.jpg"),
          hoverImage: require("@/assets/images/home/product-categories/product-2.jpg"),
          author: "Cpple",
          title: "3 Ways To Have (A) More Appealing BOOK",
          category: "Men's Watch",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-3.jpg"),
          hoverImage: require("@/assets/images/home/product-categories/product-2.jpg"),
          author: "Cpple",
          title: "3 Ways To Have (A) More Appealing BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-3.jpg"),
          hoverImage: require("@/assets/images/home/product-categories/product-2.jpg"),
          author: "Cpple",
          title: "3 Ways To Have (A) More Appealing BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-3.jpg"),
          hoverImage: require("@/assets/images/home/product-categories/product-2.jpg"),
          author: "Cpple",
          title: "3 Ways To Have (A) More Appealing BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-3.jpg"),
          hoverImage: require("@/assets/images/home/product-categories/product-2.jpg"),
          author: "Cpple",
          title: "3 Ways To Have (A) More Appealing BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        }
      ],
    };
  },
};
</script>

<style
  scoped
  src="@/assets/css/components/home/special-offer/MainSpecialOffer.css"
></style>
