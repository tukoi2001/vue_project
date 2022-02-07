<template>
  <div class="container pb-5">
    <div class="row">
      <div class="col-lg-5 col-md-5 col-12">
        <contact-location />
      </div>
      <div class="col-lg-7 col-md-7 col-12">
        <contact-message />
      </div>
    </div>
  </div>
</template>

<script>
import ContactLocation from "./ContactLocation.vue";
import ContactMessage from "./ContactMessage.vue";
export default {
  components: { ContactLocation, ContactMessage },
  name: "MainContact",
};
</script>

<style></style>
