<template>
 <div>
    <header-admin />
    <div class="container-fluid content">
      <div class="row">
        <div class="col-sm-2 sidebar">
          <nav-admin/>
        </div>
        <div class="col-sm-10 dashboard">
          <bread-crumbs-admin :title="'My Profile'"/>
          <avatar-admin/>
          
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
import AvatarAdmin from '../components/admin/MyProfile/AvatarAdmin.vue';
import NavAdmin from '../components/admin/NavAdmin.vue';
export default {
    components: { HeaderAdmin, NavAdmin, BreadCrumbsAdmin, AvatarAdmin, FooterAdmin },
    name: 'AdminDetail'
}
</script>

<style  scoped src="@/assets/css/components/admin/Admin.css">

</style>