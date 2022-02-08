<template>
  <div class="cart_area cart-area-padding text-start">
    <div class="container">
      <div class="page-section-title">
        <h1>Shopping Cart</h1>
      </div>
      <div class="row">
        <div class="col-12">
          <form action="" class="">
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
                  <tr v-for="(item, index) in listProducts" :key="index">
                    <td class="pro-thumbnail">
                      <a href="#"><img :src="item.image" alt="Product" /></a>
                    </td>
                    <td class="pro-title">
                      <a href="">{{ item.title }} </a>
                    </td>
                    <td class="pro-price">
                      <span>$ {{ item.price }}</span>
                    </td>
                    <td class="pro-quantity">
                      <div class="pro-qty">
                        <div class="count-input-block">
                          <input
                            type="number"
                            class="form-control text-center"
                            min="1"
                            max="50"
                            v-model="item.value"
                          />
                        </div>
                      </div>
                    </td>
                    <td class="pro-subtotal">
                      <span
                        >$ {{ caculatorPrice(item.value, item.price) }}</span
                      >
                    </td>
                    <td class="pro-remove">
                      <a href="" @click.prevent="deleteItem(item.id)"><b-icon icon="trash-fill"></b-icon></a>
                    </td>
                  </tr>
                    <tr v-if="listProducts.length === 0">
                        <td colspan="6" class="text-danger fw-bold">There is no item in cart!</td>
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
                            @click.prevent="handleDiscount"
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
                              <span class="text-primary">$ {{ handleSubPrice }}</span>
                            </p>
                            <p>
                              Shipping Cost
                              <span class="text-primary">$ 00.00</span>
                            </p>
                            <p>
                              Discount
                              <span class="text-primary">- $ {{ discount }}</span>
                            </p>
                            <h2 class="fw-bold">
                              Grand Total
                              <span class="text-primary float-end"
                                >$ {{ handleTotalPrice }}</span
                              >
                            </h2>
                          </div>
                          <div class="cart-summary-button">
                            <router-link
                              to="/checkout"
                              class="checkout-btn c-btn btn--primary"
                              >Checkout</router-link
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
export default {
  name: "MainCart",
  data() {
    return {
      listProducts: [
        {
          id: 0,
          image: require("@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg"),
          title: "Rinosin Glasses",
          value: 1,
          price: "390.00",
        },
        {
          id: 1,
          image: require("@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg"),
          title: "Rinosin Glasses",
          value: 1,
          price: "391.00",
        },
        {
          id: 2,
          image: require("@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg"),
          title: "Rinosin Glasses",
          value: 1,
          price: "392.00",
        },
        {
          id: 3,
          image: require("@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg"),
          title: "Rinosin Glasses",
          value: 1,
          price: "393.00",
        },
      ],
      couponCode: "",
      discount: 0,
    };
  },
  methods: {
    caculatorPrice(num, price) {
      return Number(num) * price;
    },
    handleDiscount() {
      if (this.couponCode === "genetic") {
        this.discount = 5.0;
        alert('Thank you for using the discount code!')
      }
      else if (this.couponCode === "") {
          alert("Enter the discount code!");
      }
      else {
          this.discount = 0;
          alert("Wrong discount code! Please check again!")
      }
    },
    deleteItem(index) {
        const resIndex = this.listProducts.findIndex(res => res.id === index);
        this.listProducts.splice(resIndex, 1);
    }
  },
  computed: {
      handleSubPrice() {
          const data = this.listProducts;
          let result = 0;
          data.forEach(item => {
            let total = item.value * item.price;
            result = result + total;
          })
          return result;
      },
      handleTotalPrice() {
        return  this.handleSubPrice - this.discount;
      }
  },
};
</script>

<style scoped src="@/assets/css/components/cart/MainCart.css"></style>
