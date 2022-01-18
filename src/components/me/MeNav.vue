<template>
  <div>
    <a href="">
      <b-icon class="nav_icon" :icon="icon"></b-icon>
      {{ title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "MeNav",
  props: { 
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped src="@/assets/css/components/me/Me.css"></style>
