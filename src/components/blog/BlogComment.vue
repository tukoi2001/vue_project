<template>
  <div>
    <div class="comment-block-wrapper mb-5 blog-comment">
      <h3>3 Comments</h3>
      <div
        class="single-comment"
        v-for="(item, index) in BlogPerson"
        :key="index"
      >
        <div class="comment-avatar">
          <img :src="item.image" alt="" />
        </div>
        <div class="comment-text">
          <h5 class="author">
            <a href="#"> {{ item.name }}</a>
          </h5>
          <span class="time">{{ item.time }}</span>
          <p>{{ item.content }}</p>
        </div>
        <a href="#" class="btn btn-outlined--primary btn-rounded reply-btn"
          >Reply</a
        >
      </div>
    </div>
    <div class="replay-form-wrapper">
      <h3 class="mt-0">LEAVE A REPLY</h3>
      <p>
        Your email address will not be published. Required fields are marked *
      </p>
      <form action="./" class="blog-form">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <label for="message">Comment</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                class="form-control"
              ></textarea>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label for="name">Name *</label>
              <input type="text" id="name" class="form-control" />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="text" id="email" class="form-control" />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label for="website">Website</label>
              <input type="text" id="website" class="form-control" />
            </div>
          </div>
          <div class="col-lg-4 mt-3 mb-3">
            <div class="submit-btn">
              <a href="#" class="btn btn-black">Post Comment</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      BlogPerson: [
        {
          image: require("@/assets/images/home/blogs/author-logo.jpg"),
          name: "author",
          time: "October 8, 2014 at 12:38 pm",
          content: "Ame No Parade",
        },
        {
          image: require("@/assets/images/home/blogs/author-logo.jpg"),
          name: "Jack",
          time: "October 8, 2014 at 12:38 pm",
          content: "Ame No Parade",
        },
        {
          image: require("@/assets/images/home/blogs/author-logo.jpg"),
          name: "Dexter",
          time: "October 8, 2014 at 12:38 pm",
          content: "Ame No Parade",
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/blogs/blog-comment.css">
</style>