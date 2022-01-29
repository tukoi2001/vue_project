<template>
  <div>
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"><span>Pustok</span>Admin</a>
          <ul class="nav navbar-top-links navbar-right">
            <li class="dropdown">
              <a
                class="dropdown-toggle count-info"
                href="#"
              >
                <b-icon icon="bell-fill"></b-icon><span class="label label-info">5</span>
              </a>  
            </li>
          </ul>
        </div>
      </div>
      <!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderAdmin",
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css"></style>
