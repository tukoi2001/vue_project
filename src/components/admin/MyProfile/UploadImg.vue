<template>
  <div>
    <div class="upload-images">
      <input
        type="file"
        class="upload-file"
        ref="uploadFile"
        @input="handleUpload"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "UploadImg",
  data() {
    return {
        
    };
  },
  methods: {
    handleUpload() {
      const path = this.$refs.uploadFile.value;
      const newPath = path.split("\\");
      this.$store.commit("changeImgAdmin", newPath[newPath.length - 1]);
    },
  },
};
</script>

<style scoped>
.upload-images {
  opacity: 0 !important;
}
.upload-file {
  width: 120px;
  height: 120px;
  cursor: pointer;
}
</style>
