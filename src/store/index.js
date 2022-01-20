import Vue from "vue";
import Vuex from "vuex";
import dataUsers from "../data/users.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: dataUsers,
    dataUserLogin: null
  },
  mutations: {
    setDataUserLogin(state, user) {
      state.dataUserLogin = user;
    }
  },
  actions: {
    actionSetDataUserLogin({commit}, user) {
      commit('setDataUserLogin', user);
    }
  },
  modules: {},
});
