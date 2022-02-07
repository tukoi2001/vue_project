<template>
  <div class="search-result">
    <div class="search-main">
        <div class="close" @click="hideFailSearch">
            <b-icon class="close-icon" icon="x-square-fill"></b-icon>
        </div>
      <h3 class="title text-start p-3">{{ title }}</h3>
      <div class="content-search text-start p-3">
        <p>ID: <strong>{{ id }}</strong></p>
        <p>Category Name: <strong>{{ name }}</strong></p>
        <p>Slug: <strong>{{ slug }}</strong></p>
        <p>Image: <strong>{{ image }}</strong></p>
        <p>Description: <strong>{{ description }}</strong></p>
        <button type="button" class="btn btn-primary">Update</button>
        <button type="button" class="btn btn-primary ms-2">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryDetail",
  props: {
      title: { 
        type: String,
        default: ""
      },
      id: { 
          type: Number,
          default: 0
      },
      name: {
        type: String,
        default: ""
      },
      slug: { 
          type: String,
          default: ""
      },
      image: { 
        type: String,
        default: ""
      },
      description: { 
        type: String,
        default: ""
      },
  },
  methods: {
    hideFailSearch() {
      this.$emit('myEvent');
    }
  }
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
