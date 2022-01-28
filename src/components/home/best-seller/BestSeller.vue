<template>
  <div class="best-seller bg-image">
    <div class="container">
      <div class="section-title section-title--bordered mb-0">
        <h2>BEST SELLER BOOKS</h2>
      </div>
      <div class="best-seller-block">
        <div class="row align-item-center">
          <div class="col-lg-5 col-md-6">
            <div class="author-image">
              <img :src="authorImage" alt="" />
            </div>
          </div>
          <div class="best-seller-block__products col-lg-7 col-md-6 pt-md-5">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="(item, index) in listProducts" :key="index">
                <product
                  :mainImage="item.mainImage"
                  :author="item.author"
                  :title="item.title"
                  :price="item.price"
                  :priceOld="item.priceOld"
                  :priceDiscount="item.priceDiscount"
              /></swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../../common/Product.vue";
export default {
  components: { Product },
  title: "Multi row slides layout",
  data() {
    return {
      authorImage: require("@/assets/images/home/best-seller/best-seller-author.jpg"),
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      listProducts: [
        {
          mainImage: require("@/assets/images/home/product-categories/product-3.jpg"),
          author: "Cpple",
          title: "3 Ways To Have (A) More Appealing BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-3.jpg"),
          author: "Cpple",
          title: "3 Ways To Have (A) More Appealing BOOK",
          category: "Men's Watch",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-3.jpg"),
          author: "Cpple",
          title: "3 Ways To Have (A) More Appealing BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-3.jpg"),
          author: "Cpple",
          title: "3 Ways To Have (A) More Appealing BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-3.jpg"),
          author: "Cpple",
          title: "3 Ways To Have (A) More Appealing BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/home/best-seller/BestSeller.css">

</style>
