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

                  <tr>
                    <td class="pro-thumbnail">
                      <a href="#"
                        ><img :src="require('@/assets/images/products/kinh-te/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban/bao-cao-tai-chinh-duoi-goc-nhin-cua-warren-buffett-tai-ban_1.jpg')" alt="Product"
                      /></a>
                    </td>
                    <td class="pro-title"><a href="#">Rinosin Glasses</a></td>
                    <td class="pro-price"><span>$395.00</span></td>
                    <td class="pro-quantity">
                      <div class="pro-qty">
                        <div class="count-input-block">
                          <input
                            type="number"
                            class="form-control text-center"
                            min="1"
                            max="50"
                          />
                        </div>
                      </div>
                    </td>
                    <td class="pro-subtotal"><span>$395.00</span></td>
                    <td class="pro-remove">
                      <a href="#"><b-icon icon="trash-fill"></b-icon></a>
                    </td>
                  </tr>

                  <tr>
                    <td colspan="6" class="actions">
                      <div class="coupon-block">
                        <div class="coupon-text">
                          <label for="coupon_code">Coupon:</label>
                          <input
                            type="text"
                            name="coupon_code"
                            class="input-text"
                            placeholder="Enter Coupon Code..."
                          />
                        </div>
                        <div class="coupon-btn">
                          <input
                            type="submit"
                            class="btn btn-outlined"
                            name="apply_coupon"
                            value="Apply coupon"
                          />
                        </div>
                      </div>
                      <div class="update-block">
                        <div class="cart-summary">
								<div class="cart-summary-wrap">
									<h4><span>Cart Summary</span></h4>
									<p>Sub Total <span class="text-primary">$1250.00</span></p>
									<p>Shipping Cost <span class="text-primary">$00.00</span></p>
									<h2>Grand Total <span class="text-primary">$1250.00</span></h2>
								</div>
								<div class="cart-summary-button">
									<router-link to="/checkout" class="checkout-btn c-btn btn--primary">Checkout</router-link>
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
};
</script>

<style scoped src="@/assets/css/components/cart/MainCart.css"></style>
