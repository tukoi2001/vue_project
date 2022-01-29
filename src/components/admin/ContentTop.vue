<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentTop",
  props: {
      title: {
          type: String,
          default: ""
      }
  }
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css">
</style>