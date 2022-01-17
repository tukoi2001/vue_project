import Vue from "vue";
import Vuex from "vuex";
import dataUsers from "../data/users.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: dataUsers
  },
  mutations: {},
  actions: {},
  modules: {},
});
