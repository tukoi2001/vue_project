import Vue from "vue";
import Vuex from "vuex";
import dataUsers from "../data/users.json";
import dataCategories from "../data/categories.json";
import dataProducts from "../data/products.json";
import cart from './modules/cart';
import checkout from './modules/checkout';
import product from './modules/product';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataRegisterUser: {},
    users: dataUsers,
    dataUserLogin: null,
    usersRegister: [],
    dataAdminLogin: null,
    categories: dataCategories,
    listProducts: dataProducts,
    newCategories: [],
    category: {},
  },
  mutations: {
    setDataUserLogin(state, user) {
      state.dataUserLogin = user;
    },
    setDataAdminLogin(state, user) {
      state.dataAdminLogin = user;
    },
    createUser(state, user) {
      state.dataRegisterUser = user;
      state.usersRegister.push(state.dataRegisterUser);
    },
    saveInformation(state, user) {
      Vue.set(state.dataUserLogin, "address", user.address);
      Vue.set(state.dataUserLogin, "email", user.email);
      Vue.set(state.dataUserLogin, "firstName", user.firstName);
      Vue.set(state.dataUserLogin, "lastName", user.lastName);
      Vue.set(state.dataUserLogin, "phone", user.phone);
      Vue.set(state.dataUserLogin, "updated_at", user.updated_at);
      Vue.set(state.usersRegister[0], "address", user.address);
      Vue.set(state.usersRegister[0], "email", user.email);
      Vue.set(state.usersRegister[0], "firstName", user.firstName);
      Vue.set(state.usersRegister[0], "lastName", user.lastName);
      Vue.set(state.usersRegister[0], "phone", user.phone);
      Vue.set(state.usersRegister[0], "updated_at", user.updated_at);
    },
    changePassword(state, user) {
      Vue.set(state.usersRegister[0], "password", user.password);
      Vue.set(state.usersRegister[0], "confirmPassword", user.confirmPassword);
    },
    changeImgAdmin(state, img) {
      Vue.set(state.dataAdminLogin, "avatar", img);
    },
    addDataCategory(state, data) {
      state.category = {
        id: data.id,
        name: data.name,
        slug: data.slug,
        image: data.image,
        description: data.description,
      };
      state.newCategories.push(state.category);
    },
    pushDataCategories(state, data) {
      state.newCategories = data;
    },
  },
  actions: {
    actionSetDataUserLogin({ commit }, user) {
      commit("setDataUserLogin", user);
    },
    actionSetDataAdminLogin({ commit }, user) {
      commit("setDataAdminLogin", user);
    },
    actionCreateUser(context, user) {
      context.commit("createUser", user);
    },
    actionSaveInformation({ commit }, user) {
      commit("saveInformation", user);
    },
    actionChangePassword({ commit }, user) {
      commit("changePassword", user);
    },
  },
  modules: {
    cart,
    checkout,
    product
  },
});
