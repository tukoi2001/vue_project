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
            <li>Order Number: <strong>3053</strong></li>
            <li>Date: <strong>January 24, 2019</strong></li>
            <li>Total: <strong>$117.00</strong></li>
            <li>Payment Method: <strong>Cash on Delivery (COD)</strong></li>
          </ul>
          <div class="text-start order-table">
          <h3 class="order-table-title text-center">Order Details</h3>
          <div class="table-responsive">
            <table class="table order-details-table">
              <thead>
                <tr>
                  <th class="fw-bold">Product</th>
                  <th class="fw-bold">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href=""
                      >Vans Off The Wall T-Shirt In</a
                    >
                    <strong> × 1</strong>
                  </td>
                  <td><span>$59.00</span></td>
                </tr>
                <tr>
                  <td>
                    <a href=""
                      >Supreme Being Icon Glitch T-Shirt</a
                    >
                    <strong> × 1</strong>
                  </td>
                  <td><span>$58.00</span></td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Subtotal:</th>
                  <td><span class="color-primary">$117.00</span></td>
                </tr>
                <tr>
                  <th>Discount:</th>
                  <td><span class="color-primary text-danger">- $5.00</span></td>
                </tr>
                <tr>
                  <th>Total:</th>
                  <td><span class="color-primary">$117.00</span></td>
                </tr>
                <tr>
                  <th>Payment Method:</th>
                  <td class="color-primary">Cash on Delivery</td>
                </tr>
              </tfoot>
            </table>
          </div>
          </div>
        </div>
      </div>
      <div class="col-12 mb-5 text-start">
          <div class="back-to-home">
              <button @click="backToHome" class="btn btn-primary">Back to Home</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainOrderComplete",
  methods: {
      backToHome() {
          this.$router.push('/');
      }
  }
};
</script>

<style
  scoped
  src="@/assets/css/components/order-complete/OrderComplete.css"
></style>
