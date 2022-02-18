<template>
  <div class="table-user">
    <h3 class="my-4 users text-start">List of new Products:</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr class="fw-bold">
          <td>No</td>
          <td>Name</td>
          <td>Slug</td>
          <td>Author</td>
          <td>Description</td>
          <td>Category</td>
          <td>New Price</td>
          <td>Old Price</td>
          <td>InStock</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in listNewProducts" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.slug }}</td>
          <td>{{ item.author }}</td>
          <td>
            <div class="text__over">
              {{ item.full_description }}
            </div>
          </td>
          <td>{{ item.category }}</td>
          <td>{{ item.new_price }}</td>
          <td>{{ item.old_price }}</td>
          <td>{{ item.number_of_pages > 0 ? "True" : "False" }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary ms-2"
              @click="getDataDetail(item.id)"
            >
              Details
            </button>
            <product-detail
              v-if="isProduct"
              :title="'Detail Product: '"
              :id="detailProduct[0].id"
              :name="detailProduct[0].name"
              :slug="detailProduct[0].slug"
              :author="detailProduct[0].author"
              :description="detailProduct[0].full_description"
              :category="detailProduct[0].category"
              :new_price="detailProduct[0].new_price"
              :old_price="detailProduct[0].old_price"
              :public_company="detailProduct[0].public_company"
              :public_year="detailProduct[0].public_year"
              :num_of_products="detailProduct[0].number_of_pages"
              :new_prod="detailProduct[0].new"
              @myEvent="hideSuccessSearch()"
            />
          </td>
        </tr>
        <tr>
          <td colspan="10">
            <p class="text-danger fw-bold">There is no product!</p>
          </td>
        </tr>
      </tbody>
    </table>
    <nav
      aria-label="Page navigation example directive"
      v-if="listCategories.length > 9"
    >
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="item in num_of_pagination" :key="item.id">
          <a
            class="page-link"
            href=""
            @click.prevent="pagination(item * 10 - 10, item * 10 - 1)"
            >{{ item }}</a
          >
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import ProductDetail from "./ProductDetail.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: { ProductDetail },
  name: "NewProducts",
  data() {
    return {
      prev: 0,
      next: 10,
      detailProduct: "",
      isProduct: false,
      num_of_pagination: [],
    };
  },
  created() {
    this.pagination(this.prev, this.next);
  },
  computed: {
    ...mapState("product", ["listNewProducts"]),
  },
  methods: {
    ...mapActions("product", [
      "actionInitListProduct",
    ]),
    pagination(prev, next) {
      const res = this.$store.state.newCategories;
      let data = [];
      res.forEach((category) => {
        if (category.id >= prev && category.id <= next) {
          data.push(category);
        }
      });
      this.listCategories = data;
    },
    getDataDetail(index) {
      const res = this.listNewProducts;
      const result = res.filter((product) => product.id === index);
      this.detailProduct = result;
      this.isProduct = true;
    },
    hideSuccessSearch() {
      this.isProduct = false;
    },
  },
  mounted() {
    let num = this.listNewProducts.length;
    if (num > 0) {
      for (let i = 1; i <= Math.ceil(num / 10); i++) {
        this.num_of_pagination.push(i);
      }
    }
    this.actionInitListProduct();
  },
};
</script>

<style scoped>
.users {
  color: #62ab00;
}
td {
  border: 1px solid #ccc;
}
nav {
  display: flex !important;
  justify-content: center;
}
ul {
  margin: 0;
}
.btn-primary {
  color: #fff;
  background-color: #62ab00;
  border-color: #62ab00;
  transition: all 0.3s ease-in-out;
}
.btn-primary:hover {
  opacity: 0.7;
}
</style>
