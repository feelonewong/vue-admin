import Vue from "vue";
import Vuex from "vuex";
import app from "./app";
import login from "./login"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    login
  }
});
