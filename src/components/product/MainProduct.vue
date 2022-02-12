<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 mt--40 mt-lg--0">
        <left-side-bar>
          <li><a href="" @click.prevent="getAllDataCategories()">Tất cả</a></li>
          <li v-for="item in listCategories" :key="item.id">
            <a href="" @click.prevent="getDataProductByCategory(item.id)">{{
              item.title
            }}</a>
          </li>
        </left-side-bar>
      </div>
      <div class="col-lg-9">
        <product-top-bar>
          <template v-slot:button>
            <a
              href=""
              @click.prevent="currentTab = 'grid-product'"
              class="sorting-btn"
              data-target="grid"
              ><b-icon class="sorting-icon" icon="grid-3x3-gap-fill"></b-icon
            ></a>
            <a
              href=""
              @click.prevent="currentTab = 'list-product'"
              class="sorting-btn small"
              ><b-icon class="sorting-icon large" icon="list-task"></b-icon
            ></a>
          </template>
          <template v-slot:view>
            <select class="form-control nice-select sort-select">
              <option value="" selected="selected">3</option>
              <option value="">9</option>
              <option value="">5</option>
              <option value="">10</option>
              <option value="">12</option>
            </select>
          </template>
          <template v-slot:sort>
            <select class="form-control nice-select sort-select mr-0 wide">
              <option value="" selected="selected">Default Sorting</option>
              <option value="">Sort By:Name (A - Z)</option>
              <option value="">Sort By:Name (Z - A)</option>
              <option value="">Sort By:Price (Low &gt; High)</option>
              <option value="">Sort By:Price (High &gt; Low)</option>
            </select>
          </template>
        </product-top-bar>
        <transition name="fade">
          <component :is="currentTab" :listProducts="listProducts"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import GridProduct from "./GridProduct.vue";
import LeftSideBar from "./LeftSideBar.vue";
import ListProduct from "./ListProduct.vue";
import ProductTopBar from "./ProductTopBar.vue";
export default {
  components: { LeftSideBar, ProductTopBar, ListProduct, GridProduct },
  name: "MainProduct",
  data() {
    return {
      currentTab: "grid-product",
      listProducts: [],
      listCategories: null,
    };
  },
  methods: {
    getAllDataCategories() {
      const data = this.$store.state.listProducts.products;
      this.setDataToStore(data);
    },
    getDataProductByCategory(index) {
      const data = this.$store.state.listProducts.products;
      const result = data.filter((item) => item.category_id == index);
      this.setDataToStore(result);
    },
    setDataToStore(data) {
      this.listProducts = data;
      console.log(this.listProducts);
    }
  },
  mounted() {
    const data = this.$store.state.categories.categories;
    this.listCategories = data;
    this.getAllDataCategories();
  }
};
</script>

<style scoped src="@/assets/css/components/product/MainProduct.css"></style>
