<template>
  <div class="container">
    <div class="row">
      <div class="col-12 my-5">
        <div class="cart-table table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th class="pro-thumbnail">Image</th>
                <th class="pro-title">Product</th>
                <th class="pro-price">Price</th>
                <th class="pro-quantity">Quantity</th>
                <th class="pro-subtotal">Total</th>
                <th class="pro-remove">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in listProducts" :key="index">
                <td class="pro-thumbnail">
                  <a href=""><img :src="item.image" alt="Product" /></a>
                </td>
                <td class="pro-title">
                  <a href="">{{ item.title }}</a>
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
                        v-model="item.value"
                        min="1"
                        max="20"
                      />
                    </div>
                  </div>
                </td>
                <td class="pro-subtotal">
                  <span>$ {{ totalPrice(item.price, item.value) }}</span>
                </td>
                <td class="pro-remove">
                  <a href="" @click.prevent="deleteProduct(item.id)"
                    ><b-icon class="table-icon" icon="trash-fill"></b-icon
                  ></a>
                </td>
              </tr>
              <tr v-if="listProducts.length === 0">
                <td colspan="6" class="text-danger">There isn't any item!</td>
              </tr>
              <tr v-else>
                <td colspan="6" class="last-row">
                  <div class="text-start">
                    <button @click="clearAllItems" type="button" class="btn btn-primary">Clear</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWishlist",
  data() {
    return {
      listProducts: [
        {
          id: 0,
          image: require("@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg"),
          title: "Rinosin Glasses",
          value: 1,
          price: "395.00",
        },
        {
          id: 1,
          image: require("@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg"),
          title: "Rinosin Glasses",
          value: 1,
          price: "395.00",
        },
        {
          id: 2,
          image: require("@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg"),
          title: "Rinosin Glasses",
          value: 1,
          price: "395.00",
        },
        {
          id: 3,
          image: require("@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg"),
          title: "Rinosin Glasses",
          value: 1,
          price: "395.00",
        },
      ],
    };
  },
  methods: {
    totalPrice(price, num) {
      const number = Number(num);
      const result = price * number;
      return result;
    },
    deleteProduct(index) {
       const resIndex = this.listProducts.findIndex(res => res.id === index);
        this.listProducts.splice(resIndex, 1);
    },
    clearAllItems() {
        this.listProducts.splice(0, this.listProducts.length); 
    }
  },
};
</script>

<style scoped src="@/assets/css/components/wishlist/WishList.css"></style>
