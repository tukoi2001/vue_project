<template>
  <div class="top">
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"><span>Pustok</span>Admin</a>
          <ul class="nav navbar-top-links navbar-right">
            <li class="dropdown">
              <a
                class="dropdown-toggle count-info"
                href=""
                @click.prevent="isShowNotification = !isShowNotification"
              >
                <b-icon icon="bell-fill"></b-icon><span class="label label-info">5</span>
                <transition name="fade">
                  <notify-admin v-if="isShowNotification"/>
                </transition>        
              </a>  
            </li>
             <li class="dropdown">
              <a
                class="admin-img"
                href="" @click.prevent="show = !show"
              >
                <img class="img-admin" :src="require(`@/assets/images/admin/${getImgAdmin.avatar}`)" alt="">
              </a>
              <transition name="fade">
                <setting-admin v-if="show"/> 
              </transition>             
            </li>
          </ul>
        </div>
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
import NotifyAdmin from './NotifyAdmin.vue';
import SettingAdmin from './SettingAdmin.vue';
export default {
  components: { SettingAdmin, NotifyAdmin },
  name: "HeaderAdmin",
  data() {
    return {
      show: false,
      isShowNotification: false
    }
  },
  computed: {
    getImgAdmin() {
      return this.$store.state.dataAdminLogin;
    }
  }
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css">

</style>
