<template>
  <div>
    <div class="cart-dropdown-block">
      <div class="single-cart-block">
        <div class="cart-product">
          <a href="" class="image">
            <img :src="require('@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg')" alt="" />
          </a>
          <div class="content">
            <h3 class="title">
              <a href=""
                >Kodak PIXPRO Astro Zoom AZ421 16 MP</a
              >
            </h3>
            <p class="price"><span class="qty">1 ×</span> £87.34</p>
            <button class="cross-btn"><b-icon icon="trash-fill"></b-icon></button>
          </div>
        </div>
      </div>
      <div class="single-cart-block">
        <div class="btn-block">
          <router-link to="/cart" class="btn"
            >View Cart <b-icon class="btn-icon" icon="chevron-right"></b-icon></router-link>
          <router-link to="/checkout" class="btn btn--primary"
            >Check Out <b-icon class="btn-icon" icon="chevron-right"></b-icon></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartOverview",
};
</script>

<style scoped src="@/assets/css/components/cart/CartOverview.css">

</style>
