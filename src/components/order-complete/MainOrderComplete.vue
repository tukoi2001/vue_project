<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="order-complete-message text-center">
            <h1>Thank you !</h1>
            <p>Your order has been received.</p>
          </div>
          <ul class="order-details-list text-start">
            <li>Order Number: <strong>{{ data.id }}</strong></li>
            <li>Date: <strong>{{ data.date }}</strong></li>
            <li>Total: <strong>{{ formatPrice(data.total) }}</strong></li>
            <li>Payment Method: <strong>Cash on Delivery (COD)</strong></li>
          </ul>
        </div>
      </div>
      <div class="col-12 mb-5 text-start">
        <div class="back-to-home">
          <button @click="backToHome" class="btn btn-primary">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainOrderComplete",
  methods: {
    backToHome() {
      this.$router.push("/");
    },
    formatPrice(value) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    });
    return formatter.format(value);
    },
  },
  computed: {
    ...mapState('checkout', ['data'])
  },
  mounted() {
    
  }
};
</script>

















<style
  scoped
  src="@/assets/css/components/order-complete/OrderComplete.css"
></style>
