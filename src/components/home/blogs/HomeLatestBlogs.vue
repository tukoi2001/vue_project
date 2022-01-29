<template>
  <div>
    <section class="section-margin">
      <div class="container">
        <div class="section-title">
          <h2>LATEST BLOGS</h2>
        </div>
        <div class="blog-slider">
          <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="(item, index) in listInfo" :key="index" class="blog-container">
              <home-blogs-info
                :image="item.image"
                :author="item.author"
                :blogTitle="item.blogTitle"
                :dateBlogs="item.dateBlogs"
                :monthBlogs="item.monthBlogs"
                :blogParagraph="item.blogParagraph"
              />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import HomeBlogsInfo from "./HomeBlogsInfo.vue";
export default {
  components: { HomeBlogsInfo },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      listInfo: [
        {
          image: require("@/assets/images/home/blogs/blog-grid-3.jpg"),
          dateBlogs: "19",
          monthBlogs: "Aug",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
        {
          image: require("@/assets/images/home/blogs/blog-grid-3.jpg"),
          dateBlogs: "19",
          monthBlogs: "Aug",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
        {
          image: require("@/assets/images/home/blogs/blog-grid-3.jpg"),
          dateBlogs: "19",
          monthBlogs: "Aug",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
        {
          image: require("@/assets/images/home/blogs/blog-grid-3.jpg"),
          dateBlogs: "19",
          monthBlogs: "Aug",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
        {
          image: require("@/assets/images/home/blogs/blog-grid-3.jpg"),
          dateBlogs: "19",
          monthBlogs: "Aug",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/blogs/blogs.css">
</style>