<template>
  <div>
    <div id="shipping-form" class="mb--40">
      <h4 class="checkout-title">Shipping Address</h4>
      <div class="row">
        <div class="col-md-6 col-12 mb--20">
          <label>First Name*</label>
          <input
            type="text"
            placeholder="First Name"
            v-model="getInformation.firstName"
          />
        </div>
        <div class="col-md-6 col-12 mb--20">
          <label>Last Name*</label>
          <input
            type="text"
            placeholder="Last Name"
            v-model="getInformation.lastName"
          />
        </div>
        <div class="col-md-6 col-12 mb--20">
          <label>Email Address*</label>
          <input
            type="email"
            placeholder="Email Address"
            v-model="getInformation.email"
          />
        </div>
        <div class="col-md-6 col-12 mb--20">
          <label>Phone no*</label>
          <input
            type="text"
            placeholder="Phone number"
            v-model="getInformation.phone"
          />
        </div>
        <div class="col-12 mb--20">
          <label>Specific Address</label>
          <input type="text" placeholder="Specific Address" />
        </div>
        <div class="col-md-6 col-12 mb--20">
          <label>Country*</label>
          <select class="nice-select">
            <option>Việt Nam</option>
            <option>China</option>
            <option>USA</option>
            <option>India</option>
            <option>Japan</option>
          </select>
        </div>
        <div class="col-md-6 col-12 mb--20">
          <label>Province/City*</label>
          <input type="text" placeholder="Province/City" v-model="city" />
        </div>
        <div class="col-md-6 col-12 mb--20">
          <label>District*</label>
          <input type="text" placeholder="District" v-model="district" />
        </div>
        <div class="col-md-6 col-12 mb--20">
          <label>Wards</label>
          <input type="text" placeholder="Wards" />
        </div>
        <div class="col-12 mb--20">
          <label>Street*</label>
          <input type="text" placeholder="Street" v-model="street" />
        </div>
      </div>
    </div>
    <div class="order-note-block mt--30">
      <label for="order-note">Order notes</label>
      <textarea
        id="order-note"
        cols="30"
        rows="10"
        class="order-note"
        placeholder="Notes about your order, e.g. special notes for delivery."
      ></textarea>
    </div>
    <div class="col-md-6 col-12 mt--30">
      <button class="btn btn-primary">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormCheckout",
  data() {
    return {
      address: "",
      street: "",
      city: "",
      district: "",
    };
  },
  computed: {
    getInformation() {
      return this.$store.state.dataUserLogin;
    },
  },
  mounted() {
    this.address = this.getInformation.address;
    const address = this.address.split(",");
    this.street = address[0];
    this.district = address[1];
    this.city = address[2];
  },
};
</script>

<style scoped src="@/assets/css/components/checkout/MainCheckout.css"></style>
