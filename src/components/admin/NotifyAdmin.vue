<template>
  <div class="">
    <ul class="dropdown-menu dropdown-messages">
      <li>
        <div class="dropdown-messages-box">
          <a href="" class="pull-left">
            <img
              alt="image"
              class="img-circle"
              src="http://placehold.it/40/30a5ff/fff"
            />
          </a>
          <div class="message-body">
            <a href="#"
              ><strong>Phong</strong> has created
              <strong>an account</strong>.</a
            >
            <br /><small class="text-muted">1:24 pm - 25/03/2015</small>
          </div>
        </div>
      </li>
      <li class="divider"></li>
      <li>
        <div class="dropdown-messages-box">
          <a href="" class="pull-left">
            <img
              alt="image"
              class="img-circle"
              src="http://placehold.it/40/30a5ff/fff"
            />
          </a>
          <div class="message-body">
            <a href="#">New message from <strong>Phong</strong>.</a>
            <br /><small class="text-muted">12:27 pm - 25/03/2015</small>
          </div>
        </div>
      </li>
      <li class="divider"></li>
      <li>
        <div class="all-button">
          <a href="#">
            <em class="fa fa-inbox"></em> <strong>All Notifications</strong>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NotifyAdmin",
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css"></style>
