import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const state = {
  count: 0,
  todos: [
    { id: 1, text: "one", done: true },
    { id: 2, text: "two", done: false },
  ],
  users: [],
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
