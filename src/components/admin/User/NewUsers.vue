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
            <button type="button" class="btn btn-primary">Lock</button>
            <button type="button" class="btn btn-primary ms-2">Details</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "NewUsers",
  data() {
    return {
      currentUsers: [],
    };
  },
  created() {
    this.currentUsers = this.$store.state.usersRegister;
    console.log(this.currentUsers);
  },
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
