import Vue from "vue";
import Vuex from "vuex";
import axios from "./axios-auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
  },
  actions: {
    async signup({ commit }, authData) {
      // user.json to target a valid endpoint in Firebase
      const res = await axios.post(
        `/accounts:signUp?key=AIzaSyDmjWY3RN6zOWh5tek8-yaVL0eic09lz28`,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        }
      );
      commit("authUser", { token: res.data.idToken, userId: res.data.localId });
      console.log(res);
    },
    async login({ commit }, authData) {
      const res = await axios.post(
        `/accounts:signInWithPassword?key=AIzaSyDmjWY3RN6zOWh5tek8-yaVL0eic09lz28`,
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        }
      );
      commit("authUser", { token: res.data.idToken, userId: res.data.localId });
      console.log(res);
    },
  },
  getters: {},
});
