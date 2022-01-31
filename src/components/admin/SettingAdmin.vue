<template>
  <div class="setting">
    <ul>
      <li>
        <a href="">
          <b-icon class="icon" icon="person-fill"></b-icon>View Profile
        </a>
      </li>
      <li>
        <a href=""> <b-icon class="icon" icon="gear-fill"></b-icon>Setting </a>
      </li>
      <li>
        <a href="">
          <b-icon class="icon" icon="box-arrow-right"></b-icon>Logout
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SettingAdmin",
};
</script>

<style scoped>
ul {
  padding: 10px 5px;
  list-style: none;
}
li {
  padding: 7px 10px;
}
.setting {
  position: absolute;
  background-color: #fff;
  top: 55px;
  left: auto;
  z-index: 999;
  right: 0;
  width: 150px;
  box-shadow: 1px 5px 5px #000000;
  border-radius: 5px;
  overflow: hidden;
}
.icon {
  margin-right: 10px;
}
.setting a {
    text-decoration: none;
    color: #000000;
    font-weight: 500;
}
</style>
