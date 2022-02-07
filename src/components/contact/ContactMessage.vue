<template>
  <div>
    <div class="contact_form text-start">
      <h3 class="ct_title">Send Us a Message</h3>
      <form
        id="contact-form"
        action=""
        method="post"
        class="contact-form"
      >
        <div class="row">
          <div class="col-lg-12">
            <div class="form-group">
              <label>Your Name <span class="required">*</span></label>
              <input
                type="text"
                id="con_name"
                name="con_name"
                class="form-control"
                required
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group">
              <label>Your Email <span class="required">*</span></label>
              <input
                type="email"
                id="con_email"
                name="con_email"
                class="form-control"
                required
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group">
              <label>Your Phone*</label>
              <input
                type="text"
                id="con_phone"
                name="con_phone"
                class="form-control"
              />
            </div>
          </div>
          <div class="col-lg-12">
            <div class="form-group">
              <label>Your Message</label>
              <textarea
                id="con_message"
                name="con_message"
                class="form-control"
              ></textarea>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="form-btn">
              <button
                type="submit"
                value="submit"
                id="submit"
                class="btn btn-black"
                name="submit"
              >
                send
              </button>
            </div>
            <div class="form__output"></div>
          </div>
        </div>
      </form>
      <div class="form-output">
        <p class="form-message"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMessage",
};
</script>

<style scoped src="@/assets/css/components/contact/Contact.css"></style>
