<template>
  <div class="contact_address text-start">
    <div class="ct_address">
      <h3 class="ct_title">Location & Details</h3>
      <p>
        Here is the address and how to contact us! Thank you for accompanying us during the past time!
      </p>
    </div>
    <div class="address_wrapper">
      <div class="address">
        <div class="icon">
         <b-icon icon="geo-alt-fill" class="icon-icon"></b-icon>
        </div>
        <div class="contact-info-text">
          <p>
            <span>Address:</span> 69 Truong Chinh, TP Da Nang
          </p>
        </div>
      </div>
      <div class="address">
        <div class="icon">
          <b-icon icon="envelope-fill" class="icon-icon"></b-icon>
        </div>
        <div class="contact-info-text">
          <p><span>Email: </span> tutx.it610@gmail.com</p>
        </div>
      </div>
      <div class="address">
        <div class="icon">
          <b-icon icon="phone-fill" class="icon-icon"></b-icon>
        </div>
        <div class="contact-info-text">
          <p><span>Phone:</span> +84 123456999</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactLocation",
};
</script>

<style scoped src="@/assets/css/components/contact/Contact.css"></style>
