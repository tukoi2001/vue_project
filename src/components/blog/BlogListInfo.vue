<template>
  <div >
    <div class="blog-card card-style-grid">
      <a href="" class="image d-block">
        <img :src="image" alt="" />
      </a>
      <div class="card-content">
        <h3 class="title">
          <a href="">{{blogTitle}}</a>
        </h3>
        <p class="post-meta">
          <span>13/08/2017 </span> | <a href="#">{{author}}</a>
        </p>
        <article>
          <h2 class="sr-only">Blog Article</h2>
          <p>
              {{blogParagraph}}
          </p>
          <a href="" class="blog-link">Read More</a>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
    blogTitle: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    blogParagraph: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped src="@/assets/css/components/blogs/blog-list.css">
</style>