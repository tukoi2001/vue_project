import Vue from "vue";
import Vuex from "vuex";
import dataUsers from "../data/users.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataRegisterUser: {},
    users: dataUsers,
    dataUserLogin: null,
    usersRegister: []
  },
  mutations: {
    setDataUserLogin(state, user) {
      state.dataUserLogin = user;
    },
    createUser(state, user) {
      state.dataRegisterUser = user;
      state.usersRegister.push(state.dataRegisterUser);
    },
    saveInformation(state, user) {
      Vue.set(state.dataUserLogin, 'address', user.address);
      Vue.set(state.dataUserLogin, 'email', user.email);
      Vue.set(state.dataUserLogin, 'firstName', user.firstName);
      Vue.set(state.dataUserLogin, 'lastName', user.lastName);
      Vue.set(state.dataUserLogin, 'phone', user.phone);
      Vue.set(state.dataUserLogin, 'updated_at', user.updated_at);
    },
    changePassword(state, user) {
      Vue.set(state.usersRegister[0], 'password', user.password);
      Vue.set(state.usersRegister[0], 'confirmPassword', user.confirmPassword);
    }
  },
  actions: {
    actionSetDataUserLogin({ commit }, user) {
      commit("setDataUserLogin", user); 
    },
    actionCreateUser(context, user) {
      context.commit("createUser", user);
    },
    actionSaveInformation({commit}, user) {
      commit('saveInformation', user)
    },
    actionChangePassword({commit}, user) {
      commit('changePassword', user)
    }
  },
  modules: {},
});
