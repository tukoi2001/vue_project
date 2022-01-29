<template>
  <div>
    <div class="single-slide">
      <div class="blog-card">
        <div class="image">
          <img :src="image" alt="" />
        </div>
        <div class="content">
          <div class="content-header">
            <div class="date-badge">
              <span class="date"> {{ dateBlogs }} </span>
              <span class="month"> {{ monthBlogs }} </span>
            </div>
            <h3 class="title">
              <a>{{ blogTitle }}</a>
            </h3>
          </div>
          <p class="meta-para">
            <i><b-icon icon="file-person-fill" aria-hidden="true"></b-icon></i>Post by <a href="#">{{author}}</a>
          </p>
          <h2 class="sr-only">blog-paragraph</h2>
          <article class="blog-paragraph">
            <p>{{blogParagraph}}</p>
          </article>
          <a href="blog-details.html" class="card-link"
            >Read More <i><b-icon icon="arrow-right-circle-fill" aria-hidden="true"></b-icon></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBlogsInfo",
  props: {
    image: {
      type: String,
      default: "",
    },
    dateBlogs: {
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
    monthBlogs: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped src="@/assets/css/components/blogs/blogs.css">
</style>