<template>
  <div>
    <div class="tab-pane">
      <div class="myaccount-content">
        <h3>Account Details</h3>
        <div class="account-details-form">
          <form action="" @submit.prevent="saveInformation">
            <div class="row">
              <div class="col-lg-6 col-12 mb-4">
                <input id="first-name" placeholder="First Name" type="text" v-model.trim="dataUser.firstName"/>
              </div>
              <div class="col-lg-6 col-12 mb-4">
                <input id="last-name" placeholder="Last Name" type="text"  v-model.trim="dataUser.lastName"/>
              </div>
              <div class="col-12 mb-4">
                <input id="address" placeholder="Address" type="text"  v-model.trim="dataUser.address"/>
              </div>
              <div class="col-12 mb-4">
                <input id="phone" placeholder="Phone Number" type="text"  v-model.trim="dataUser.phone"/>
              </div>
              <div class="col-12 mb-4">
                <input id="email" placeholder="Email" type="email" v-model.trim="dataUser.email" disabled/>
              </div>
              <div class="col-12">
                <button class="btn btn--primary">Save Changes</button> 
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeAccountDetails",
  data() {
    return {
      dataInfo: ''
    }
  },
  computed: { 
    dataUser() {
      return this.$store.state.dataUserLogin;
    }
  },
  methods: {
    saveInformation() {
      const data = {
        address: this.dataUser.address,
        email: this.dataUser.email,
        firstName: this.dataUser.firstName,
        lastName: this.dataUser.lastName,
        phone: this.dataUser.phone,
        updated_at: new Date().toLocaleString(),
      };
      this.$store.dispatch('actionSaveInformation', data);
      localStorage.setItem('infoModifier', JSON.stringify(data));
    }
  },
  mounted() {
    
  }
};
</script>

<style scoped src="@/assets/css/components/me/Me.css"></style>
