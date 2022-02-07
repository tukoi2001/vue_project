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
                  <a href=""
                    ><img :src="item.image" alt="Product"
                  /></a>
                </td>
                <td class="pro-title"><a href="">{{ item.title }}</a></td>
                <td class="pro-price"><span>$ {{ item.price }}</span></td>
                <td class="pro-quantity">
                  <div class="pro-qty">
                    <div class="count-input-block">
                      <input
                        type="number"
                        class="form-control text-center"
                        v-model="item.value"
                        min="1" max="20"
                      />
                    </div>
                  </div>
                </td>
                <td class="pro-subtotal"><span>$ {{ totalPrice(item.price, item.value) }}</span></td>
                <td class="pro-remove">
                  <a href="#"><b-icon class="table-icon" icon="trash-fill"></b-icon></a>
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
                  image: require('@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg'),
                  title: 'Rinosin Glasses',
                  value:  1,
                  price: '395.00',
                  total: '395.00',
              },
              {
                  image: require('@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg'),
                  title: 'Rinosin Glasses',
                  value:  1,
                  price: '395.00',
                  total: '395.00',
              },
              {
                  image: require('@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg'),
                  title: 'Rinosin Glasses',
                  value:  1,
                  price: '395.00',
                  total: '395.00',
              }
          ]
      }
  },
  methods: {
      totalPrice(price, num) {
        const number = Number(num);
        const result = price * number;
        return result;
      },
  }
};
</script>

<style scoped src="@/assets/css/components/wishlist/WishList.css"></style>
