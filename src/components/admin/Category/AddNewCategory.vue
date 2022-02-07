<template>
  <div>
    <h3 class="mt-3 text-start">Add New Category</h3>
    <form class="form text-start" @submit.prevent="addCategory">
      <div class="row">
        <div class="col-md-4">
          <div class="mb-3">
            <label for="id" class="form-label">ID: </label>
            <input
              type="text"
              class="form-control"
              id="id"
              v-model="dataCategory.id"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label for="name" class="form-label">Name: </label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="dataCategory.name"
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
              v-model="dataCategory.slug"
            />
          </div>
        </div>
      </div>

      <div class="mb-4">
        <label for="file" class="form-label"></label>
        <input type="file" class="form-control" for="file" ref="image" />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description: </label>
        <textarea
          type="text"
          class="form-control"
          id="description"
          v-model="dataCategory.description"
        />
      </div>
      <button type="submit" class="btn btn-primary">Add New</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddNewCategory",
  data() {
    return {
      dataCategory: {
        id: "",
        name: "",
        slug: "",
        image: "",
        description: "",
      },
      listCategories: [],
    };
  },
  methods: {
    addCategory() {
      const path = this.$refs.image.value;
      const newPath = path.split("\\");
      this.dataCategory.image = newPath[newPath.length - 1];
      if (this.dataCategory.id !== "" && this.dataCategory.name !== "" && this.dataCategory.slug !== "" && this.dataCategory.description !== "" && this.dataCategory.image !== "") {
        this.listCategories.push({
          id: this.dataCategory.id,
          name: this.dataCategory.name,
          slug: this.dataCategory.slug,
          image: this.dataCategory.image,
          description: this.dataCategory.description,
        });
        this.$store.commit("addDataCategory", this.dataCategory);
        localStorage.setItem("categories", JSON.stringify(this.listCategories));
        this.reset();
        alert("Add Category Successful!");
      } else {
        alert('Please! Enter information before adding!')
      }
    },
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
