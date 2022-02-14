<template>
  <div class="cart_area cart-area-padding text-start">
    <div class="container">
      <div class="page-section-title">
        <h1>Shopping Cart</h1>
      </div>
      <div class="row">
        <div class="col-12">
          <form action="" @submit.prevent="handleDiscount">
            <div class="cart-table table-responsive mb--40">
              <table class="table">
                <thead>
                  <tr>
                    <th class="pro-thumbnail">Image</th>
                    <th class="pro-title">Product</th>
                    <th class="pro-price">Price</th>
                    <th class="pro-quantity">Quantity</th>
                    <th class="pro-subtotal">Total</th>
                    <th class="pro-remove">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in items" :key="index">
                    <td class="pro-thumbnail">
                      <a href="#"><img :src="require(`@/assets/images/products/${item.image}`)" alt="Product" /></a>
                    </td>
                    <td class="pro-title">
                      <a href="">{{ item.name }} </a>
                    </td>
                    <td class="pro-price">
                      <span>{{ formatPrice(item.new_price) }}</span>
                    </td>
                    <td class="pro-quantity">
                      <div class="pro-qty">
                        <div class="count-input-block">
                          <input
                            type="number"
                            class="form-control text-center"
                            min="1"
                            max="50"
                            v-model="item.qty"
                          />
                        </div>
                      </div>
                    </td>
                    <td class="pro-subtotal">
                      <span
                        >{{ formatPrice(item.new_price * item.qty) }}</span
                      >
                    </td>
                    <td class="pro-remove">
                      <a href="" @click.prevent="actionDeleteItem(item.id)"
                        ><b-icon icon="trash-fill"></b-icon
                      ></a>
                    </td>
                  </tr>
                  <tr v-if="items.length <= 0">
                    <td colspan="6" class="text-danger fw-bold">
                      There is no item in cart!
                    </td>
                  </tr>
                  <tr v-else>
                    <td colspan="6" class="actions">
                      <div class="coupon-block">
                        <div class="coupon-text">
                          <label for="coupon_code">Coupon:</label>
                          <input
                            type="text"
                            name="coupon_code"
                            class="input-text"
                            placeholder="Enter Coupon Code..."
                            v-model="couponCode"
                          />
                        </div>
                        <div class="coupon-btn">
                          <button
                            type="submit"
                            class="btn btn-outlined"
                          >
                            Apply Coupon
                          </button>
                        </div>
                      </div>
                      <div class="update-block">
                        <div class="cart-summary">
                          <div class="cart-summary-wrap text-start">
                            <h4><span>Cart Summary</span></h4>
                            <p>
                              Sub Total
                              <span class="text-primary"
                                >{{ formatPrice(handleSubPrice) }}</span
                              >
                            </p>
                            <p>
                              Shipping Cost
                              <span class="text-primary">{{ formatPrice(0) }}</span>
                            </p>
                            <p>
                              Discount
                              <span class="text-danger"
                                >- {{ formatPrice(discount) }}</span>
                            </p>
                            <h2 class="fw-bold">
                              Grand Total
                              <span class="text-primary float-end"
                                >{{ formatPrice(handleSubPrice - discount) }}</span
                              >
                            </h2>
                          </div>
                          <div class="cart-summary-button">
                            <a href=""
                              @click.prevent="handleCheckout(discount)"
                              class="checkout-btn c-btn btn--primary"
                              >Checkout</a
                            >
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "MainCart",
  data() {
    return {
      discount: 0,
      couponCode: ''
    };
  },
  methods: {
    handleDiscount() {
      if (this.couponCode === "genetic") {
        this.discount = 5000;
        alert("Thank you for using the discount code!");
      } else if (this.couponCode === "") {
        alert("Enter the discount code!");
      } else {
        this.discount = 0;
        alert("Wrong discount code! Please check again!");
      }
    },
    ...mapActions('cart', [
      'actionDeleteItem',
      'actionInitItems',
      'actionSaveInformation'
    ]),
    formatPrice(value) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    });
    return formatter.format(value);
    },
    handleCheckout(price) {
      this.actionSaveInformation(price);
      localStorage.setItem("cartItems", JSON.stringify(this.items));
      this.$router.push('/checkout');
    }
  },
  computed: {
    handleSubPrice() {
      const data = this.items;
      let result = 0;
      data.forEach((item) => {
        let total = item.new_price * item.qty;
        result = result + total;
      });
      return result;
    },
    ...mapState('cart', [
      'items'
    ])
  },
  mounted() {
    this.actionInitItems();
  }
};
</script>

<style scoped src="@/assets/css/components/cart/MainCart.css"></style>
