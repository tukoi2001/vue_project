import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
    meta: {
      title: 'Contact',
    }
  },
  {
    path: "/blog",
    name: "Blog",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Blog.vue"),
      meta: {
        title: 'Blog',
      }
  },
  {
    path: "/blog-details",
    name: "BlogDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BlogDetail.vue"),
      meta: {
        title: 'Blog Detail',
      }
  },
  {
    path: "/wishlist",
    name: "WishList",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WishList.vue"),
    meta: {
      required: true,
      title: 'WishList'
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
    meta: {
      required: true,
      title: 'Cart'
    },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Checkout.vue"),
    meta: {
      required: true,
      title: 'Checkout'
    },
  },
  {
    path: "/order-complete",
    name: "OrderComplete",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OrderComplete.vue"),
    meta: {
      required: true,
      title: 'Order Complete'
    },
  },
  {
    path: "/product",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue"),
      meta: {
        title: 'Shop'
      }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
      meta: {
        title: 'Login'
      }
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
      meta: {
        title: 'Register'
      }
  },
  {
    path: "/me",
    name: "Me",
    component: () => import(/* webpackChunkName: "me" */ "../views/Me.vue"),
    meta: {
      required: true,
      title: 'My Account'
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import(/* webpackChunkName: "me" */ "../views/Admin.vue"),
    meta: {
      requiresAuth: true,
      title: 'Admin'
    },
  },
  {
    path: "/admin/users",
    name: "AdminUser",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/AdminUser.vue"),
    meta: {
      requiresAuth: true,
      title: 'Admin Users'
    },
  },
  {
    path: "/admin/my-profile",
    name: "AdminDetail",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/AdminDetail.vue"),
    meta: {
      requiresAuth: true,
      title: 'Admin Profile'
    },
  },
  {
    path: "/admin/notification",
    name: "NotificationsAdmin",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/NotificationsAdmin.vue"),
    meta: {
      requiresAuth: true,
      title: 'Notifications Admin'
    },
  },
  {
    path: "/admin/categories",
    name: "AdminCategories",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/AdminCategories.vue"),
    meta: {
      requiresAuth: true,
      title: 'Admin Categories'
    },
  },
  {
    path: "/admin/products",
    name: "AdminProducts",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/AdminProducts.vue"),
    meta: {
      requiresAuth: true,
      title: 'Admin Products'
    },
  },
  {
    path: "/admin/orders",
    name: "AdminOrders",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/AdminOrders.vue"),
    meta: {
      requiresAuth: true,
      title: 'Admin Orders'
    },
  },

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to) {
        if (to.fullPath === "/register") {
            return {
                x: 0,
                y: 57,
                behavior: "smooth",
            };
        } else {
            return {
                x: 0,
                y: 0,
                behavior: "smooth",
            };
        }
    },
});

router.beforeEach((to, from, next) => {
    document.title = `Pustok | ${to.meta.title}`;
    next();
});

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.required) {
        const auth = localStorage.getItem("dataUserLogin");
        if (auth && auth !== "") {
            next();
        } else {
            alert("Bạn cần đăng nhập để sử dụng chức năng này!");
            next({ path: "/login" });
        }
    } else {
        next();
    }

    if (to.meta && to.meta.requiresAuth) {
        const authAdmin = localStorage.getItem("dataAdminLogin");
        if (authAdmin && authAdmin !== "") {
            next();
        } else {
            alert("Bạn cần đăng nhập để sử dụng chức năng này!");
            next({ path: "/login" });
        }
    }
});
export default router;