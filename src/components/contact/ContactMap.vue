<template>
  <div class="container">
    <div class="row">
        <div class="col-12 maps my-3">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1705611396123!2d108.21793871485826!3d16.05663658888871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219ceccf59223%3A0xe835d6ebf29bdc69!2zMjAwIFRyxrBuZyBO4buvIFbGsMahbmcsIELDrG5oIFRodeG6rW4sIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDA!5e0!3m2!1svi!2s!4v1644220068127!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ContactMap'
}
</script>

<style scoped>
.maps iframe {
    width: 100%;
}
</style>