<template>
  <div>
    <section class="inner-page-sec-padding-bottom space-db--30">
      <div class="container">
        <div class="row space-db-lg--60 space-db--30">
          <div class="col-lg-4 col-md-6 mb-lg--60 mb-5" v-for="(item, index) in listInfo" :key="index">
            <blog-list-info
              :image="item.image"
              :author="item.author"
              :blogTitle="item.blogTitle"
              :time="item.time"
              :blogParagraph="item.blogParagraph"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BlogListInfo from "./BlogListInfo.vue";
export default {
  components: { BlogListInfo },
  data() {
    return {
      listInfo: [
        {
          image: require("@/assets/images/home/blogs/blog-grid-1.jpg"),
          time: "13/08/2017",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
        {
          image: require("@/assets/images/home/blogs/blog-grid-2.jpg"),
          time: "13/08/2017",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
        {
          image: require("@/assets/images/home/blogs/blog-grid-3.jpg"),
          time: "13/08/2017",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
        {
          image: require("@/assets/images/home/blogs/blog-grid-4.jpg"),
          time: "13/08/2017",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
        {
          image: require("@/assets/images/home/blogs/blog-grid-1.jpg"),
          time: "13/08/2017",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
        {
          image: require("@/assets/images/home/blogs/blog-grid-2.jpg"),
          time: "13/08/2017",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
        {
          image: require("@/assets/images/home/blogs/blog-grid-3.jpg"),
          time: "13/08/2017",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
        {
          image: require("@/assets/images/home/blogs/blog-grid-4.jpg"),
          time: "13/08/2017",
          blogTitle: "How to Water and Care for Mounted",
          author: "Hastech",
          blogParagraph:
            "Virtual reality and 3-D technology are already well-established in the entertainment...",
        },
        {
          image: require("@/assets/images/home/blogs/blog-grid-1.jpg"),
          time: "13/08/2017",
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

<style scoped src="@/assets/css/components/blogs/blog-list.css">
</style>