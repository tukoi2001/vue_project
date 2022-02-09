<template>
  <div class="checkout-cart-total">
    <h2 class="checkout-title">YOUR ORDER</h2>
    <h4>Product <span>Total</span></h4>
    <ul>
      <li>
        <span class="left">Cillum dolore tortor nisl X 01</span>
        <span class="right">$25.00</span>
      </li>
      <li>
        <span class="left">Auctor gravida pellentesque X 02 </span
        ><span class="right">$50.00</span>
      </li>
      <li>
        <span class="left">Condimentum posuere consectetur X 01</span>
        <span class="right">$29.00</span>
      </li>
      <li>
        <span class="left">Habitasse dictumst elementum X 01</span>
        <span class="right">$10.00</span>
      </li>
    </ul>
    <p>Sub Total <span>$104.00</span></p>
    <p>Shipping Fee <span>$00.00</span></p>
    <p>Discount <span>$5.00</span></p>
    <h4>Grand Total <span>$104.00</span></h4>
    <div class="method-notice mt--25">
      <article>
        <h3 class="sr-only">blog-article</h3>
        <h5 class="fw-bold">Payment Method:</h5>
        Cash On Delivery (COD) <br><br> 
        Sorry, the system only has Cash On Delivery (COD) payment method. Please contact us if you need assistance!
      </article>
    </div>
    <div class="term-block">
      <input type="checkbox" id="accept_terms2" />
      <label for="accept_terms2"
        >I’ve read and accept the terms & conditions</label
      >
    </div>
    <button @click="handleOrder" class="place-order w-100">Place order</button>
  </div>
</template>

<script>
export default {
  name: "FormOrder",
  methods: {
      handleOrder() {
          this.$router.push('/order-complete');
      }
  }
};
</script>

<style scoped src="@/assets/css/components/checkout/MainCheckout.css"></style>
