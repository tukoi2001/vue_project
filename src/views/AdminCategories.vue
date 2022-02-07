<template>
 <div>
    <header-admin />
    <div class="container-fluid content">
      <div class="row">
        <div class="col-sm-2 sidebar">
          <nav-admin/>
        </div>
        <div class="col-sm-10 dashboard">
          <bread-crumbs-admin :title="'Category'"/>
          <content-top :title="'Categories Management'"/>
           <div class="text-start">
              <button type="button" class="btn fw-bold" @click="currentTab = 'current-categories'" :class="{'btn-primary': currentTab === 'current-categories'}">Current Categories</button>
              <button type="button" class="btn fw-bold ms-2" @click="currentTab = 'new-categories'" :class="{'btn-primary': currentTab === 'new-categories'}">New Categories</button> 
              <button type="button" class="btn fw-bold ms-2" @click="currentTab = 'add-new-category'" :class="{'btn-primary': currentTab === 'add-new-category'}">Add New Category</button>
            </div>
            <transition name="fade">
              <component :is="currentTab"></component>
            </transition>
          <footer-admin/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbsAdmin from '../components/admin/BreadCrumbsAdmin.vue';
import AddNewCategory from '../components/admin/Category/AddNewCategory.vue';
import CurrentCategories from '../components/admin/Category/CurrentCategories.vue';
import NewCategories from '../components/admin/Category/NewCategories.vue';
import ContentTop from '../components/admin/ContentTop.vue';
import FooterAdmin from '../components/admin/FooterAdmin.vue';
import HeaderAdmin from "../components/admin/HeaderAdmin.vue";
import NavAdmin from '../components/admin/NavAdmin.vue';
export default {
    components: { HeaderAdmin, NavAdmin, BreadCrumbsAdmin, FooterAdmin, ContentTop, CurrentCategories, AddNewCategory, NewCategories },
    name: 'AdminCategories',
    data() {
      return {
        currentTab: 'current-categories',
      }
    }
}
</script>

<style  scoped src="@/assets/css/components/admin/Admin.css">

</style>