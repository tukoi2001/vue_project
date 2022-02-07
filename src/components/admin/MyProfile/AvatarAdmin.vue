<template>
  <div class="wrapper">
    <div class="row">
      <div class="col-md-4 avatar">
        <div class="avatar-content">
          <div class="img__admin">
            <img
              :src="require(`@/assets/images/admin/${getImgAdmin.avatar}`)"
              alt=""
            />
            <div class="upload-img">
              <b-icon class="upload-icon" icon="image-fill"></b-icon>
               <upload-img/>
            </div>
           
          </div>
          <div class="name__admin">
            <h4 class="fw-bold">
              {{ getImgAdmin.firstName + " " + getImgAdmin.lastName }}
            </h4>
          </div>
          <div class="tabs_admin">
            <ul>
              <li @click="currentTab = 'admin-information'" :class="{active: currentTab === 'admin-information'}">My Information</li>
              <li @click="currentTab = 'admin-change-password'" :class="{active: currentTab === 'admin-change-password'}">Change Password</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-8 content">
        <transition name="slide-fade">
          <keep-alive> 
            <component :is="currentTab"></component>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AdminChangePassword from './AdminChangePassword.vue';
import AdminInformation from './AdminInformation.vue';
import UploadImg from './UploadImg.vue';
export default {
  components: { AdminInformation, AdminChangePassword, UploadImg },
  name: "AvatarAdmin",
  data() {
    return {
      currentTab: 'admin-information'
    }
  },
  computed: {
    getImgAdmin() {
      return this.$store.state.dataAdminLogin;
    },
  },
};
</script>

<style scoped>
.avatar {
  overflow: hidden;
  padding: 30px 50px;
}
.avatar-content {
  border: 1px solid #c4c4c4;
  border-radius: 10px;
}
.img__admin {
  padding: 30px 40px;
  overflow: hidden;
  position: relative;
}
.upload-img {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  top: 50%;
  bottom: auto;
  right: auto;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.img__admin:hover>.upload-img {
  opacity: 1;
  visibility: visible;
}
.upload-icon {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    bottom: auto;
    right: auto;
    transform: translate(-50%, -50%);
}
.img__admin img {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  cursor: pointer;
}
.name__admin h4 {
  font-size: 1.3rem;
}
.tabs_admin ul {
  list-style: none;
  text-align: left;
  margin: 20px 0 30px;
  padding: 0;
}
.tabs_admin li {
  padding: 10px 20px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.tabs_admin li:hover {
  background-color: #62ab00;
  color: #FFF;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.active {
  background-color: #62ab00;
  color: #FFF;
}
</style>
