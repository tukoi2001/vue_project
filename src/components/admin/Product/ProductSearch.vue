<template>
  <div class="input-group my-4">
    <input
      type="text"
      class="form-control"
      placeholder="Search by name..."
      aria-label="Search by name..."
      v-model="title"
      @keyup.enter="searchCategory()"
    /><button type="button" class="btn btn-primary" @click="searchCategory()">
      Search
    </button>
    <transition name="fade">
      <product-detail
        v-if="dataSearch !== '' && successSearch"
        :title="'Search result: '"
        :id="dataSearch[0].id"
        :name="dataSearch[0].title"
        :slug="dataSearch[0].slug"
        :image="dataSearch[0].image"
        :description="dataSearch[0].description"
        @myEvent="hideSuccessSearch()"
      />
      <fail-search v-if="failSearch" @myEvent="hideFailSearch()" />
    </transition>
  </div>
</template>

<script>
import FailSearch from '../User/FailSearch.vue';
import ProductDetail from './ProductDetail.vue';

export default {
  components: {  FailSearch, ProductDetail },
  name: "ProductSearch",
  data() {
    return {
      title: "",
      dataSearch: "",
      successSearch: false,
      failSearch: false,
    };
  },
  methods: {
    searchCategory() {
      const res = this.$store.state.categories.categories;
      const result = res.filter((category) => category.title === this.title);
      this.dataSearch = result;
      if (this.dataSearch.length > 0) {
        this.successSearch = true;
      } else {
        this.failSearch = true;
      }
    },
    hideSuccessSearch() {
      this.successSearch = false;
      this.title = "";
    },
    hideFailSearch() {
      this.failSearch = false;
    },
  },
};
</script>

<style scoped>
.form-control {
  position: relative;
  z-index: 0;
}
.btn-primary {
  transition: all 0.3s ease-in;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  background-color: #62ab00;
  border-color: #62ab00;
  z-index: 1;
}
.btn-primary:focus {
  box-shadow: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
