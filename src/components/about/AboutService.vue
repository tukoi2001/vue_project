<template>
  <div class="wrapper container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center">
          <h2 class="title">Why Choose Us</h2>
          <p class="sub-title mt-2">
            Our website is the leading system of wholesale and retail books in Vietnam with services to meet the needs of customers around the world.
          </p>
        </div>
      </div>
    </div>

    <div class="row mb-n6">
      <div class="col-12 col-sm-6 col-md-6 col-lg-4" v-for="(item, index) in services" :key="index">
        <div class="single-choose-item text-center mb-6">
          <b-icon class="about__icon" :icon="item.icon"></b-icon>
          <h4 class="cta-title">{{item.title}}</h4>
          <p class="service__des">
            {{item.description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutService",
  data() {
      return {
          services: [
              {
                  title: 'Free Shipping',
                  icon: 'cash',
                  description: 'Pustok bookstore is one of the stores that offer free shipping to all customers in different provinces.'
              },
              {
                  title: '  Fast Delivery',
                  icon: 'truck',
                  description: 'The Pustok Bookstore is one of the fastest delivery stores.'
              },
              {
                  title: 'Customer Support 24/7',
                  icon: 'chat-dots',
                  description: 'Pustok Bookstore is one of those stores that supports customers 24/7 and anywhere.'
              }
          ]
      }
  }
};
</script>

<style scoped src="@/assets/css/components/about/AboutService.css">
</style>