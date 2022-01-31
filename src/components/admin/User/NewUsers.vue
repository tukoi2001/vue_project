<template>
  <div class="table-user">
    <h3 class="my-4 users text-start">List of new users:</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr class="fw-bold">
          <td>No</td>
          <td>Full Name</td>
          <td>Phone Number</td>
          <td>Address</td>
          <td>Email</td>
          <td>Roles</td>
          <td>Purchase Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-if="currentUsers.length === 0" colspan="8">There is no user</td>
        </tr>
        <tr v-for="item in currentUsers" :key="item.it">
          <td>{{ item.id }}</td>
          <td>{{ item.firstName + ' ' + item.lastName }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.address }}</td>
          <td>{{  item.email}}</td>
          <td>{{ item.role }}</td>
          <td>{{ item.purchase_status === 0 ? 'True': 'False' }}</td>
          <td>
            <button type="button" class="btn btn-primary ms-2" @click="getDataDetail(item.id)">Details</button>
           <detail-search-user
              v-if="detailUser !== '' && isUser"
              :title="'Detail User: '"
              :firstName="detailUser[0].firstName"
              :lastName="detailUser[0].lastName"
              :phone="detailUser[0].phone"
              :address="detailUser[0].address"
              :email="detailUser[0].email"
              :role="detailUser[0].role"
              :purchase_status="detailUser[0].purchase_status"
              :created_at="detailUser[0].created_at"
              :updated_at="detailUser[0].updated_at"
              @myEvent="hideSuccessSearch()"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DetailSearchUser from './DetailSearchUser.vue';
export default {
  components: { DetailSearchUser },
  name: "NewUsers",
  data() {
    return {
      currentUsers: [],
      detailUser: "",
      isUser: false,
    };
  },
  created() {
    this.currentUsers = this.$store.state.usersRegister;
  },
  methods: {
    getDataDetail(index) {
      const res = this.$store.state.usersRegister;
      const result = res.filter((user) => user.id === index);
      this.detailUser = result;
      this.isUser = true;
    },
    hideSuccessSearch() {
      this.isUser = false;
    },
  }
};
</script>

<style scoped>
.users {
  color: #62ab00;
}
td {
  border: 1px solid #ccc;
}
.btn-primary {
    color: #fff;
    background-color: #62ab00;
    border-color: #62ab00;
    transition: all 0.3s ease-in-out;
}
.btn-primary:hover {
  opacity: 0.7;
}
</style>
