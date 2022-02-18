<template>
 <div>
    <header-admin />
    <div class="container-fluid content">
      <div class="row">
        <div class="col-sm-2 sidebar">
          <nav-admin/>
        </div>
        <div class="col-sm-10 dashboard">
          <bread-crumbs-admin :title="'Product'"/>
          <content-top :title="'Products Management'"/>
           <div class="text-start">
              <button type="button" class="btn fw-bold" @click="currentTab = 'current-products'" :class="{'btn-primary': currentTab === 'current-products'}">Current Products List</button>
              <button type="button" class="btn fw-bold ms-2" @click="currentTab = 'new-products'" :class="{'btn-primary': currentTab === 'new-products'}">New Products</button> 
              <button type="button" class="btn fw-bold ms-2" @click="currentTab = 'add-new-product'" :class="{'btn-primary': currentTab === 'add-new-product'}">Add New Product</button>
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
import AddNewProduct from '../components/admin/Product/AddNewProduct.vue';
import CurrentProducts from '../components/admin/Product/CurrentProducts.vue';
import NewProducts from '../components/admin/Product/NewProducts.vue';
import ContentTop from '../components/admin/ContentTop.vue';
import FooterAdmin from '../components/admin/FooterAdmin.vue';
import HeaderAdmin from "../components/admin/HeaderAdmin.vue";
import NavAdmin from '../components/admin/NavAdmin.vue';
export default {
    components: { HeaderAdmin, NavAdmin, BreadCrumbsAdmin, FooterAdmin, ContentTop, CurrentProducts, AddNewProduct, NewProducts },
    name: 'AdminProducts',
    data() {
      return {
        currentTab: 'current-products',
      }
    }
}
</script>

<style  scoped src="@/assets/css/components/admin/Admin.css">

</style>