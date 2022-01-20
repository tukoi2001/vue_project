<template>
  <div class="container">
    <div class="breadcrumb-contents">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
          <li class="breadcrumb-item active">{{ title }}</li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: { 
    title: {
        type: String,
        default: ""
    }
  }
};
</script>

<style scoped>
.breadcrumb {
    background: transparent;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 20px 0;
    margin-bottom: 0;
}
.breadcrumb-contents .breadcrumb .breadcrumb-item {
    font-size: 14px;
    color: #333;
}
.breadcrumb-item a {
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease-in-out;
}
.breadcrumb-item a:hover {
    color: #62ab00;
}
</style>
