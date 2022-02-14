<template>
  <div class="checkout-cart-total">
    <h2 class="checkout-title">YOUR ORDER</h2>
    <h4>Product <span>Total</span></h4>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <span class="left">{{ item.name }}</span> x {{ item.qty }}
        <span class="right">{{ formatPrice(item.new_price * item.qty) }}</span>
      </li>
    </ul>
    <p>
      Sub Total <span>{{ formatPrice(handleSubPrice) }}</span>
    </p>
    <p>
      Shipping Fee <span>{{ formatPrice(0) }}</span>
    </p>
    <p>
      Discount <span>- {{ formatPrice(discount) }}</span>
    </p>
    <h4>
      Grand Total <span>{{ formatPrice(handleSubPrice - discount) }}</span>
    </h4>
    <div class="method-notice mt--25">
      <article>
        <h5 class="fw-bold">Payment Method:</h5>
        Cash On Delivery (COD) <br /><br />
        Sorry, the system only has Cash On Delivery (COD) payment method. Please
        contact us if you need assistance!
      </article>
    </div>
    <div class="term-block">
      <input type="checkbox" id="accept_terms2" v-model="checkTerm" />
      <label for="accept_terms2"
        >I’ve read and accept the terms & conditions</label
      >
    </div>
    <button @click="handleOrder" class="place-order w-100">Place order</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "FormOrder",
  data() {
    return {
      checkTerm: false,
      dataUser: null,
    };
  },
  computed: {
    ...mapState("cart", ["items", "discount"]),
    handleSubPrice() {
      const data = this.items;
      let result = 0;
      data.forEach((item) => {
        let total = item.new_price * item.qty;
        result = result + total;
      });
      return result;
    },
  },
  methods: {
    handleOrder() {
      if (this.checkTerm) {
        const data = {
          id: Math.floor(Math.random() * 1000),
          total: this.handleSubPrice - this.discount,
          date: new Date().toLocaleString(),
          user: this.dataUser,
        };
        this.actionSetDataCheckout(data);
        this.$router.push("/order-complete");
      } else {
        alert("Please! Please check the terms!");
      }
    },
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    ...mapActions("checkout", ["actionSetDataCheckout"]),
  },
  mounted() {
    const data = JSON.parse(localStorage.getItem("dataUserLogin"));
    this.dataUser = data;
  }
};
</script>

<style scoped src="@/assets/css/components/checkout/MainCheckout.css"></style>
