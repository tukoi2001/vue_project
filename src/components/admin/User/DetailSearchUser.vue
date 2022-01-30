<template>
  <div class="search-result">
    <div class="search-main">
        <div class="close" @click="hideFailSearch()">
            <b-icon class="close-icon" icon="x-square-fill"></b-icon>
        </div>
      <h3 class="title text-start p-3">{{ title }}</h3>
      <div class="content-search text-start p-3">
        <p>First Name: <strong>{{ firstName }}</strong></p>
        <p>Last Name: <strong>{{ lastName }}</strong></p>
        <p>Phone Number: <strong>{{ phone }}</strong></p>
        <p>Address: <strong>{{ address }}</strong></p>
        <p>Email: <strong>{{ email }}</strong></p>
        <p>Roles: <strong>{{ role }}</strong></p>
        <p>Purchase Status: <strong>{{ purchase_status === 0 ? true : false}}</strong></p>
        <p>Created Date: <strong>{{ created_at }}</strong></p>
        <p>Updated Date: <strong>{{ updated_at }}</strong></p>
        <button type="button" class="btn btn-primary">Lock</button>
        <button type="button" class="btn btn-primary ms-2">Unlock</button>
        <button type="button" class="btn btn-primary ms-2">Reset Password</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailSearchUser",
  props: {
      title: {
        type: String,
        default: ""
      },
      firstName: { 
          type: String,
          default: ""
      },
      lastName: { 
        type: String,
        default: ""
      },
      phone: { 
        type: String,
        default: ""
      },
      address: {
        type: String,
        default: ""
      },
      email: {
        type: String,
        default: ""
      },
      role: {
        type: String,
        default: ""
      },
      purchase_status: {
        type: Number,
        default: 0
      },
      created_at: {
        type: String,
        default: ""
      },
      updated_at: {
        type: String,
        default: ""
      }
  },
  methods: {
    hideFailSearch() {
      this.$emit('myEvent');
    }
  }
};
</script>

<style scoped>
.search-result {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 90%;
  top: 76px;
  left: 250px;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 1);
}
.search-main {
  position: relative;
}
.close {
  position: absolute;
  top: 10px;  
  right: 600px;
  padding: 10px;
  transition: all 0.3s ease-in-out;
}
.close-icon {
  width: 40px;
  height: 40px;
  color: #62ab00;
  cursor: pointer;
}
.close:hover {
  opacity: 0.7;
}
</style>
