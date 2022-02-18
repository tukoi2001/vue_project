<template>
  <div class="search-result">
    <div class="search-main">
      <div class="close" @click="hideFailSearch">
        <b-icon class="close-icon" icon="x-square-fill"></b-icon>
      </div>
      <h3 class="title text-start p-3">{{ title }}</h3>
      <div class="content-search text-start p-3">
        <p>
          ID: <strong>{{ id }}</strong>
        </p>
        <p>
          Product Name: <strong>{{ name }}</strong>
        </p>
        <p>
          Slug: <strong>{{ slug }}</strong>
        </p>
        <p>
          Author: <strong>{{ author }}</strong>
        </p>
        <p
          style="
            max-width: 83%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          "
        >
          Description: <strong>{{ description }}</strong>
        </p>
        <p>
          Category: <strong>{{ category }}</strong>
        </p>
        <p>
          New Price: <strong>{{ formatPrice(new_price) }}</strong>
        </p>
        <p>
          Old Price: <strong>{{ formatPrice(old_price) }}</strong>
        </p>
        <p>
          Public Company: <strong>{{ public_company }}</strong>
        </p>
        <p>
          Public Year: <strong>{{ public_year }}</strong>
        </p>
        <p>
          In Stock: <strong>{{ inventory }}</strong>
        </p>
        <p>
          New: <strong>{{ new_prod }}</strong>
        </p>
        <button type="button" class="btn btn-primary">Update</button>
        <button type="button" class="btn btn-primary ms-2">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    title: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    slug: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      default: "",
    },
    new_price: {
      type: Number,
      default: 0,
    },
    old_price: {
      type: Number,
      default: 0,
    },
    public_company: {
      type: String,
      default: "",
    },
    public_year: {
      type: String,
      default: "",
    },
    inventory: {
      type: Number,
      default: 0
    },
    new_prod: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideFailSearch() {
      this.$emit("myEvent");
    },
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
};
</script>

<style scoped>
.search-result {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 90%;
  top: 76px;
  left: 250px;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 1);
}
.search-main {
  position: relative;
}
.close {
  position: absolute;
  top: 10px;
  right: 600px;
  padding: 10px;
  transition: all 0.3s ease-in-out;
}
.close-icon {
  width: 40px;
  height: 40px;
  color: #62ab00;
  cursor: pointer;
}
.close:hover {
  opacity: 0.7;
}
</style>
