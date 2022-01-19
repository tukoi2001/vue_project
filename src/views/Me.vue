<template>
  <div>
    <bread-crumbs :title="'My Account'" />
    <div class="container">
      <div class="row me">
        <div class="col-md-3">
          <div class="myaccount-tab-menu nav">
            <me-nav>
              <a
                href=""
                v-for="item in navBars"
                :key="item.id"
                @click.prevent="currentComponent = item.slug"
              >
                <b-icon class="nav_icon" :icon="item.icon"></b-icon>
                {{ item.title }}
              </a>
            </me-nav>

            <a href="" class="logout" @click.prevent="logout"
              ><b-icon class="nav_icon" icon="box-arrow-right"></b-icon>
              Logout</a
            >
          </div>
        </div>
        <div class="col-md-9">
          <keep-alive>
            <component :is="currentComponent"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "../components/common/BreadCrumbs.vue";
import MeAccountDetails from "../components/me/MeAccountDetails.vue";
import MeChangePassword from "../components/me/MeChangePassword.vue";
import MeDashboard from "../components/me/MeDashboard.vue";
import MeNav from "../components/me/MeNav.vue";
import MeOrders from "../components/me/MeOrders.vue";
export default {
  components: {
    BreadCrumbs,
    MeNav,
    MeDashboard,
    MeOrders,
    MeChangePassword,
    MeAccountDetails,
  },
  name: "Me",
  data() {
    return {
      navBars: [
        {
          title: "Dashboard",
          icon: "calendar-check-fill",
          slug: "me-dashboard",
        },
        {
          title: "Orders",
          icon: "cart-plus-fill",
          slug: "me-orders",
        },
        {
          title: "Account Details",
          icon: "person-fill",
          slug: "me-account-details",
        },
        {
          title: "Change Password",
          icon: "key-fill",
          slug: "me-change-password",
        },
      ],
      currentComponent: "me-dashboard",
    };
  },
  methods: {
    logout() {
      localStorage.setItem('dataUserLogin', '');
      this.$store.dispatch('actionSetDataUserLogin', '');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped src="@/assets/css/components/me/Me.css"></style>
