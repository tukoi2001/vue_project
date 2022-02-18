<template>
  <div>
    <h3 class="my-3 text-start">Add New Product</h3>
    <form class="form text-start" @submit.prevent="addCategory">
      <div class="row">
        <div class="col-md-4">
          <div class="mb-3">
            <label for="name" class="form-label">Name: </label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="dataProducts.name"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="slug" class="form-label">Slug: </label>
            <input
              type="text"
              class="form-control"
              id="slug"
              v-model="dataProducts.slug"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
              <label for="file" class="form-label">Image:</label>
              <input type="file" class="form-control" for="file" ref="image" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="author" class="form-label">Author: </label>
            <input
              type="text"
              class="form-control"
              id="author"
              v-model="dataProducts.author"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="new_price" class="form-label">New Price: </label>
            <input
              type="number"
              class="form-control"
              id="new_price"
              v-model="dataProducts.new_price"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="old_price" class="form-label">Old Price: </label>
            <input
              type="number"
              class="form-control"
              id="old_price"
              v-model="dataProducts.old_price"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="number_of_stock" class="form-label">Number of Stock: </label>
            <input
              type="number"
              class="form-control"
              id="number_of_stock"
              v-model="dataProducts.number_of_stock"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="public_company" class="form-label">Public Company: </label>
            <input
              type="text"
              class="form-control"
              id="public_company"
              v-model="dataProducts.public_company"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="public_year" class="form-label">Public Year: </label>
            <input
              type="number"
              class="form-control"
              id="public_year"
              v-model="dataProducts.public_year"
            />
          </div>
        </div>
         <div class="col-md-4">
          <div class="mb-3">
            <label for="category_id" class="form-label">Category ID: </label>
            <input
              type="number"
              class="form-control"
              id="category_id"
              v-model="dataProducts.category_id"
            />
          </div>
        </div>
         <div class="col-md-4">
          <div class="mb-3">
            <label for="category" class="form-label">Category: </label>
            <input
              type="text"
              class="form-control"
              id="category"
              v-model="dataProducts.category"
            />
          </div>
        </div>
         <div class="col-md-4">
          <div class="mb-3">
            <label for="number_of_pages" class="form-label">Number of Page: </label>
            <input
              type="number"
              class="form-control"
              id="number_of_pages"
              v-model="dataProducts.number_of_pages"
            />
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description: </label>
        <textarea
          type="text"
          class="form-control"
          id="description"
          v-model="dataProducts.description"
        />
      </div>
      <button type="submit" class="btn btn-primary">Add New</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddNewProduct",
  data() {
    return {
      dataProducts: {
        id: "",
        name: "",
        slug: "",
        image: "",
        author: "",
        number_of_stock: 0,
        description: "",
      },
      listCategories: [],
    };
  },
  methods: {
    
    reset() {
      this.dataCategory.id = "";
      this.dataCategory.name = "";
      this.dataCategory.slug = "";
      this.$refs.image.value = "";
      this.dataCategory.description = "";
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #62ab00;
  border-color: #62ab00;
  transition: all 0.3s ease-in-out;
}
.btn-primary:hover {
  opacity: 0.7;
}
</style>
