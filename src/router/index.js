import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/me",
    name: "Me",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/Me.vue"),
    meta: {
      required: true,
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/Admin.vue"),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/admin/users",
    name: "AdminUser",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/AdminUser.vue"),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/admin/my-profile",
    name: "AdminDetail",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/AdminDetail.vue"),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/admin/notification",
    name: "NotificationsAdmin",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/NotificationsAdmin.vue"),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/admin/categories",
    name: "AdminCategories",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/AdminCategories.vue"),
    meta: {
      requiresAuth: true,
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to) {
    if(to.fullPath === '/register') {
      return {
        x: 0, y: 57,
        behavior:'smooth',      
      }
    }
    else {
      return {
        x: 0, y: 0,
        behavior:'smooth',      
      }
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.required) {
    const auth = localStorage.getItem('dataUserLogin');
    if (auth && auth !== '') {
      next()
    }
    else {
      alert("Bạn cần đăng nhập để sử dụng chức năng này!");
      next({path: '/login'});
    }
  }
  else {
    next();
  }

  if (to.meta && to.meta.requiresAuth) {
    const authAdmin = localStorage.getItem('dataAdminLogin');
    if(authAdmin && authAdmin !== '') {
      next();
    }
    else {
      alert("Bạn cần đăng nhập để sử dụng chức năng này!");
      next({path: '/login'});
    }
  }
})
export default router;
