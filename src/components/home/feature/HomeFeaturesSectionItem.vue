<template>
<div class="feature-box">
    <div class="icon">
    <i><b-icon :icon="icon"></b-icon></i>
  </div>
  <div class="text">
    <h5>{{ title }}</h5>
    <p>{{ text }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeFeaturesSectionItem",
  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped src="@/assets/css/components/feature/HomeFeaturesSection.css">
</style>