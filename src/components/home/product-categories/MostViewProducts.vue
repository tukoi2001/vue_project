<template>
  <div class="most-view-products">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-3 col-xl-3 col-md-4 col-sm-6 col-xs-6"
          v-for="(item, index) in listProducts"
          :key="index"
        >
          <product
            :mainImage="item.mainImage"
            :author="item.author"
            :title="item.title"
            :price="item.price"
            :priceOld="item.priceOld"
            :priceDiscount="item.priceDiscount"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../../common/Product.vue";
export default {
  name: "MostViewProducts",
  components: {
    Product,
  },
  data() {
    return {
      listProducts: [
        {
          mainImage: require("@/assets/images/home/product-categories/product-2/product-9.jpg"),
          author: "Gpple",
          title: "What Can You Do To Save Your BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-2/product-9.jpg"),
          author: "Gpple",
          title: "What Can You Do To Save Your BOOK",
          category: "Men's Watch",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-2/product-9.jpg"),
          author: "Gpple",
          title: "What Can You Do To Save Your BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-2/product-9.jpg"),
          author: "Gpple",
          title: "What Can You Do To Save Your BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-2/product-9.jpg"),
          author: "Gpple",
          title: "What Can You Do To Save Your BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-2/product-9.jpg"),
          author: "Gpple",
          title: "What Can You Do To Save Your BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-2/product-9.jpg"),
          author: "Gpple",
          title: "What Can You Do To Save Your BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
        {
          mainImage: require("@/assets/images/home/product-categories/product-2/product-9.jpg"),
          author: "Gpple",
          title: "What Can You Do To Save Your BOOK",
          price: 51.2,
          priceOld: 51.2,
          priceDiscount: 20,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>