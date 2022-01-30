<template>
  <div class="input-group my-4">
    <input
      type="text"
      class="form-control"
      placeholder="Search by email..."
      aria-label="Search by email..."
      v-model="title"
      @keyup.enter="searchUser()"
    /><button type="button" class="btn btn-primary" @click="searchUser()">
      Search
    </button>
    <transition name="fade">
      <detail-search-user
        v-if="dataSearch !== '' && successSearch"
        :title="'Search result: '"
        :firstName="dataSearch[0].firstName"
        :lastName="dataSearch[0].lastName"
        :phone="dataSearch[0].phone"
        :address="dataSearch[0].address"
        :email="dataSearch[0].email"
        :role="dataSearch[0].role"
        :purchase_status="dataSearch[0].purchase_status"
        :created_at="dataSearch[0].created_at"
        :updated_at="dataSearch[0].updated_at"
        @myEvent="hideSuccessSearch()"
      />
      <fail-search v-if="failSearch" @myEvent="hideFailSearch()" />
    </transition>
  </div>
</template>

<script>
import DetailSearchUser from "./DetailSearchUser.vue";
import FailSearch from "./FailSearch.vue";
export default {
  components: { DetailSearchUser, FailSearch },
  name: "UserSearch",
  data() {
    return {
      title: "",
      dataSearch: "",
      successSearch: false,
      failSearch: false,
    };
  },
  methods: {
    searchUser() {
      const res = this.$store.state.users.users;
      const result = res.filter((user) => user.email === this.title);
      this.dataSearch = result;
      if (this.dataSearch.length > 0) {
        this.successSearch = true;
      } else {
        this.failSearch = true;
      }
    },
    hideSuccessSearch() {
      this.successSearch = false;
      this.title = "";
    },
    hideFailSearch() {
      this.failSearch = false;
    },
  },
};
</script>

<style scoped>
.form-control {
  position: relative;
  z-index: 0;
}
.btn-primary {
  transition: all 0.3s ease-in;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
  background-color: #62ab00;
  border-color: #62ab00;
  z-index: 1;
}
.btn-primary:focus {
  box-shadow: none;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
