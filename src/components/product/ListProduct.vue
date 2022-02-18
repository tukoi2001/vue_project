<template>
  <div>
    <div
      class="row pb-4"
      v-for="(item, index) in listProductsShow"
      :key="index"
    >
      <div class="col-md-3 p-0">
        <div class="card-image">
          <img
            :src="require(`@/assets/images/products/${item.image}`)"
            alt=""
          />
        </div>
      </div>
      <div class="col-md-9 text-start">
        <div class="product-list-content">
          <div class="product-card--body">
            <div class="product-header">
              <h3 class="author">{{ item.author }}</h3>
              <h3>
                <a href="">Qpple cPad with Retina Display MD510LL/A</a>
              </h3>
              <p>
                More room to move. With 80GB or 160GB of storage and up to 40
                hours of battery life, the new iPod classic lets you enjoy up to
                40,000 songs or..
              </p>
            </div>
            <div class="price-block">
              <span class="price">£51.20</span>
              <del class="price-old">£51.20</del>
              <span class="price-discount">20%</span>
            </div>
            <div class="rating-block">
              <span><b-icon icon="star-fill"></b-icon></span>
              <span><b-icon icon="star-fill"></b-icon></span>
              <span><b-icon icon="star-fill"></b-icon></span>
              <span><b-icon icon="star-fill"></b-icon></span>
              <span><b-icon icon="star"></b-icon></span>
            </div>
            <div class="btn-block">
              <a
                href=""
                class="btn btn-outlined"
                @click.prevent="actionAddItem(item)"
                >Add To Cart</a
              >
              <a href="" class="card-link"
                ><b-icon icon="heart-fill"></b-icon> Add To Wishlist</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ListProduct",
  data() {
    return {
      listProductsShow: [],
    };
  },
  props: {
    listProducts: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    ...mapActions("cart", ["actionAddItem"]),
  },
  mounted() {
    this.listProductsShow = this.listProducts;
  },
  watch: {
    listProducts() {
      this.listProductsShow = this.listProducts;
    },
  },
};
</script>

<style scoped src="@/assets/css/components/product/MainProduct.css"></style>
