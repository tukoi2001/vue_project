<template>
 <div>
    <header-admin />
    <div class="container-fluid content">
      <div class="row">
        <div class="col-sm-2 sidebar">
          <nav-admin/>
        </div>
        <div class="col-sm-10 dashboard">
          <bread-crumbs-admin :title="'Notifications'"/>
          
          <footer-admin/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbsAdmin from '../components/admin/BreadCrumbsAdmin.vue';
import FooterAdmin from '../components/admin/FooterAdmin.vue';
import HeaderAdmin from "../components/admin/HeaderAdmin.vue";
import NavAdmin from '../components/admin/NavAdmin.vue';
export default {
    components: { HeaderAdmin, NavAdmin, BreadCrumbsAdmin, FooterAdmin },
    name: 'NotificationsAdmin'
}
</script>

<style  scoped src="@/assets/css/components/admin/Admin.css">

</style>