<template>
  <div>
    <div class="search-result">
      <div class="search-main">
        <div class="close" @click="hideFailSearch()">
          <b-icon class="close-icon" icon="x-square-fill"></b-icon>
        </div>
      </div>
      <h3 class="title text-start p-3">Search result:</h3>
      <p class="text-start text-danger p-3 fw-bold">
        There are no result from the search result! Please check again!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FailSearch",
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
