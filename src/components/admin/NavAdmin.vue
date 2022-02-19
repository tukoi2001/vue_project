<template>
  <div>
    <div class="profile-sidebar">
      <div class="profile-userpic">
        <img
          :src="require(`@/assets/images/admin/${getDataAdmin.avatar}`)"
          class="img-responsive"
          alt=""
        />
      </div>
      <div class="profile-usertitle">
        <div class="profile-usertitle-name">{{ getDataAdmin.firstName + ' ' + getDataAdmin.lastName }}</div>
        <div class="profile-usertitle-status">
          <span class="indicator label-success"></span>Online
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="divider"></div>
    <form role="search">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </form>
    <ul class="nav menu">
      <li>
        <router-link to="/admin"
          ><b-icon class="icon-icon" icon="card-list"></b-icon> Dashboard</router-link
        >
      </li>
      <li>
        <router-link to="/admin/users"
          ><b-icon class="icon-icon" icon="people-fill"></b-icon> Users</router-link 
        >
      </li>
      <li>
        <router-link to="/admin/products"
          ><b-icon class="icon-icon" icon="card-list"></b-icon> Products</router-link
        >
      </li>
      <li>
        <router-link to="/admin/categories"
          ><b-icon class="icon-icon" icon="tags-fill"></b-icon> Categories</router-link
        >
      </li>
      <li>
        <router-link to="/admin/orders"
          ><b-icon class="icon-icon" icon="basket-fill"></b-icon> Orders</router-link
        >
      </li>
      <li>
        <a href=""
          ><b-icon class="icon-icon" icon="chat-square-dots-fill"></b-icon>
          Blogs and Comments</a
        >
      </li>
      <li>
        <a href=""
          ><b-icon class="icon-icon" icon="bar-chart-line-fill"></b-icon
          >Statistics</a
        >
      </li>
      <li>
        <a href="" @click.prevent="logout()"
          ><b-icon class="icon-icon" icon="box-arrow-in-right"></b-icon>
          Logout</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavAdmin",
  methods: {
    logout() {
      localStorage.setItem('dataAdminLogin', '');
      this.$store.dispatch('actionSetDataAdminLogin', '');
      this.$router.push('/login');
    },
  },
  computed: {
    getDataAdmin() {
      return this.$store.state.dataAdminLogin;
    }
  }
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css">

</style>
