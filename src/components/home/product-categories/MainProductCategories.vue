<template>
  <div class="main-product-categories">
    <div class="container">
      <div class="sb-custom-tab">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a @click.prevent="currentTab = 'tabOne'" class="nav-link"
              >Featured Products</a
            >
          </li>
          <li class="nav-item">
            <a @click.prevent="currentTab = 'tabTwo'" class="nav-link"
              >New Arrivals</a
            >
          </li>
          <li class="nav-item">
            <a @click.prevent="currentTab = 'tabThree'" class="nav-link"
              >Most view products</a
            >
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <featured-products v-if="currentTab === 'tabOne'" />
        <new-arrivals v-if="currentTab === 'tabTwo'" />
        <most-view-products v-if="currentTab === 'tabThree'" />
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedProducts from "./FeaturedProducts.vue";
import MostViewProducts from "./MostViewProducts.vue";
import NewArrivals from "./NewArrivals.vue";
export default {
  components: { FeaturedProducts, NewArrivals, MostViewProducts },
  data() {
    return {
      currentTab: "tabOne",
    };
  },
};
</script>

<style
  scoped
  src="@/assets/css/components/home/product-categories/MainProductCategories.css"
></style>
