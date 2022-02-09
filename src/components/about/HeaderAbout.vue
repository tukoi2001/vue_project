<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-5 mb-6">
          <img class="about__img" :src="img" alt="" />
        </div>

        <div class="col-lg-7 mb-6 d-flex align-items-center px-5">
          <div class="about-content">
            <h2 class="about-title">About Us</h2>
            <p>
              For those who like to shop in the whole store, we welcome you and look forward to serving you wholeheartedly. Located in the central area of Vietnam, known as the top tourist area in Vietnam.
            </p>
            <p>
              Based in the heart of Da Nang's Hai Chau District, also known as the tourist area of Da Nang, Pustok has some of the most competitively priced books on the market. Our goal is to provide our customers with genuine books at reasonable prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderAbout",
  data() {
    return {
      img: require("@/assets/images/about/about.jpg"),
    };
  },
};
</script>

<style scoped src="@/assets/css/components/about/HeaderAbout.css"></style>
