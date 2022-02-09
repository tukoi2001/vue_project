<template>
  <div class="container mb-5 mt-3 checkout-form">
    <div class="row">
      <div class="col-md-7 text-start">
        <form-checkout/>
      </div>
      <div class="col-md-5 text-start">
        <form-order/>
      </div>
    </div>
  </div>
</template>

<script>
import FormCheckout from './FormCheckout.vue';
import FormOrder from './FormOrder.vue';
export default {
  components: { FormCheckout, FormOrder },
  name: "MainCheckout",
};
</script>

<style scoped src="@/assets/css/components/checkout/MainCheckout.css"></style>
