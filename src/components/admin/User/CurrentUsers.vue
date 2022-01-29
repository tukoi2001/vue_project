<template>
  <div class="table-user">
    <user-search/>
    <h3 class="my-4 users text-start">List of current users:</h3>
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
        <tr v-for="item in listUsers" :key="item.it">
          <td>{{ item.id }}</td>
          <td>{{ item.firstName + " " + item.lastName }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.role }}</td>
          <td>{{ item.purchase_status === 0 ? "True" : "False" }}</td>
          <td>
            <button type="button" class="btn btn-primary">Lock</button>
            <button type="button" class="btn btn-primary ms-2">Details</button>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example directive">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="" @click.prevent="pagination(0, 5)">1</a></li>
        <li class="page-item"><a class="page-link" href="" @click.prevent="pagination(6, 10)">2</a></li>
        <li class="page-item"><a class="page-link" href="" @click.prevent="pagination(11, 15)">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import UserSearch from './UserSearch.vue';
export default {
  components: { UserSearch },
  name: "CurrentUsers",
  data() {
    return {
      prev: 0,
      next: 5,
      listUsers: [],
    };
  },
  created() {
    this.pagination(this.prev, this.next);
  },
  methods: {
    pagination(prev, next) {
      const res = this.$store.state.users.users;
      let data = [];
      res.forEach((user) => {
        if (user.id >= prev && user.id <= next) {
          data.push(user);
        }
      });
      this.listUsers = data;
    },
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
nav {
  display: flex !important;
  justify-content: flex-end;
}
ul {
  margin: 0;
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
