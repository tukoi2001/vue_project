<template>
  <div class="product-card">
    <div class="product-header">
      <a href="#" class="author">{{ author }}</a>
      <h3>
        <a href="#">{{ title }}</a>
      </h3>
    </div>
    <div class="product-card--body">
      <div class="card-image">
        <img :src="mainImage" alt="" />
        <div class="hover-contents">
          <div class="hover-btns">
            <a href="" class="single-btn"><b-icon-basket2-fill /></a>
            <a href="" class="single-btn"><b-icon-heart-fill /></a>
            <a href="" class="single-btn"><b-icon-shuffle /></a>
            <a href="" class="single-btn"><b-icon-eye-fill /></a>
          </div>
        </div>
      </div>
      <div class="price-block">
        <span class="price">£{{ price }}</span>
        <del class="price-old">£{{ priceOld }}</del>
        <span class="price-discount">{{ priceDiscount }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    mainImage: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      default: 0,
    },
    priceOld: {
      type: Number,
      default: 0,
    },
    priceDiscount: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style
  scoped
  src="@/assets/css/components/common/Product.css"
></style>
