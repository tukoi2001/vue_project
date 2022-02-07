<template>
  <div class="table-user">
    <h3 class="my-4 users text-start">List of new categories:</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr class="fw-bold">
          <td>No</td>
          <td>Name</td>
          <td>Slug</td>
          <td>Image</td>
          <td>Description</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listCategories" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.slug }}</td>
          <td>{{ item.image }}</td>
          <td>{{ item.description }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary ms-2"
              @click="getDataDetail(item.id)">
              Details
            </button>
            <category-detail
                v-if="isCategory"
                :title="'Detail Category: '"
                :id="detailCategory[0].id"
                :name="detailCategory[0].name"
                :slug="detailCategory[0].slug"
                :image="detailCategory[0].image"
                :description="detailCategory[0].description"
                @myEvent="hideSuccessSearch()"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example directive"  v-if="listCategories.length > 5">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="" @click.prevent="pagination(0, 5)">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="" @click.prevent="pagination(6, 10)">2</a>
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
import CategoryDetail from './CategoryDetail.vue';
export default {
  components: { CategoryDetail },
  name: "NewCategories",
  data() {
    return {
      prev: 0,
      next: 5,
      detailCategory: "",
      listCategories: [],
      isCategory: false,
    };
  },
  created() {
    this.pagination(this.prev, this.next);
  },
  methods: {
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
      const res = this.$store.state.newCategories;
      const result = res.filter((category) => category.id === index);
      this.detailCategory = result;
      this.isCategory = true;
    },
    hideSuccessSearch() {
      this.isCategory = false;
    },
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
