<template>
  <div class="wrapper">
      <div class="stop-event" @click.stop="hidePopup"></div>
      <div class="content">
          <div class="content-title">
              <h2>Notifications!</h2>
          </div>
          <div class="content-notification">
              <p>
                  {{notifications}}
              </p>
          </div>
          <div class="content-btn">
              <slot name="button"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Popup',
    props: {
        notifications: { 
            type: String,
            default: 'Thông báo'
        }
    },
    methods: {
        hidePopup() {
            this.$emit('myEvent');
        }
    }
}
</script>

<style scoped src="@/assets/css/components/common/Popup.css">

</style>