<template>
   <div>
    <header-admin />
    <div class="container-fluid content">
      <div class="row">
        <div class="col-sm-2 sidebar">
          <nav-admin/>
        </div>
        <div class="col-sm-10 dashboard">
          <bread-crumbs-admin :title="'Users Management'"/>
          <content-top :title="'Users Management'"/>
            <div class="text-start">
              <button type="button" class="btn fw-bold" @click="currentTab = 'current-users'" :class="{'btn-primary': currentTab === 'current-users'}">Current Users</button>
              <button type="button" class="btn fw-bold ms-2" @click="currentTab = 'new-users'" :class="{'btn-primary': currentTab === 'new-users'}">New Users</button>
            </div>
            <keep-alive>
              <component :is="currentTab"></component>
            </keep-alive>
          <footer-admin/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbsAdmin from '../components/admin/BreadCrumbsAdmin.vue';
import ContentTop from '../components/admin/ContentTop.vue';
import FooterAdmin from '../components/admin/FooterAdmin.vue';
import HeaderAdmin from "../components/admin/HeaderAdmin.vue";
import NavAdmin from '../components/admin/NavAdmin.vue';
import CurrentUsers from '../components/admin/User/CurrentUsers.vue';
import NewUsers from '../components/admin/User/NewUsers.vue';
export default {
    components: { HeaderAdmin, NavAdmin, BreadCrumbsAdmin, ContentTop, CurrentUsers, NewUsers, FooterAdmin },
    name: 'AdminUser',
    data() {
      return {
        currentTab: 'current-users',
      }
    }
}
</script>

<style scoped src="@/assets/css/components/admin/Admin.css"></style>