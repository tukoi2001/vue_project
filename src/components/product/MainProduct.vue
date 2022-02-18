<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 mt--40 mt-lg--0">
        <left-side-bar>
          <li><a href="" @click.prevent="getAllDataCategories()" :class="{'active': active === 0}">Tất cả</a></li>
          <li v-for="(item, index) in listCategories" :key="index">
            <a href="" @click.prevent="getDataProductByCategory(item.id)" :class="{'active': active === index + 1}">{{
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
              :class="{'active': currentTab === 'grid-product'}"
              ><b-icon class="sorting-icon" icon="grid-3x3-gap-fill"></b-icon
            ></a>
            <a
              href=""
              @click.prevent="currentTab = 'list-product'"
              class="sorting-btn small"
              :class="{'active': currentTab === 'list-product'}"
              ><b-icon class="sorting-icon large" icon="list-task"></b-icon
            ></a>
          </template>
          <template v-slot:sort>
            <select
              class="form-control nice-select sort-select mr-0 wide"
              @change="filteredProduct"
              v-model="sortBy"
            >
              <option value="0" selected="selected">Default Sorting</option>
              <option value="1">Sort By:Name (A - Z)</option>
              <option value="2">Sort By:Name (Z - A)</option>
              <option value="3">Sort By:Price (Low &gt; High)</option>
              <option value="4">Sort By:Price (High &gt; Low)</option>
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
      sortBy: 0,
      active: 0
    };
  },
  methods: {
    getAllDataCategories() {
      const data = this.$store.state.listProducts.products;
      this.setDataToStore(data);
      this.active = 0;
    },
    getDataProductByCategory(index) {
      const data = this.$store.state.listProducts.products;
      const result = data.filter((item) => item.category_id == index);
      this.setDataToStore(result);
      this.active = index;
    },
    setDataToStore(data) {
      this.listProducts = data;
    },

    filteredProduct() {
      const sortBy = this.sortBy;
      return this.listProducts.sort((a, b) => {
        if (sortBy === "4") {
          return b.new_price - a.new_price;
        } else if (sortBy === "3") {
          return a.new_price - b.new_price;
        } else if (sortBy === "1") {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }
        else if (sortBy === "2") {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        }
      });
    },
  },
  mounted() {
    const data = this.$store.state.categories.categories;
    this.listCategories = data;
    this.getAllDataCategories();
  },
};
</script>

<style scoped src="@/assets/css/components/product/MainProduct.css"></style>
