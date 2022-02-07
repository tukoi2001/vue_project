<template>
  <div class="content">
      <router-link to="/" class="content__link"><b-icon icon="house-fill" class="content__icon"></b-icon>Back to home</router-link>
  </div>
</template>

<script>
export default {
    name: 'BackToHome'
}
</script>

<style scoped>
.content {
    position: fixed;
    top: auto;
    bottom: 30px;
    left: 30px;
    z-index: 10000;
    background: #FFF;
    padding: 10px 20px;
    border-radius: 30px;
}
.content__icon {
    margin-right: 15px;
    font-size: 1.4rem;
}
.content__link {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    color: #62ab00;
    padding: 10px 20px;
}
</style>