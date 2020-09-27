import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0,
  },
  getters: {
    doubleCounter: (state) => {
      return state.counter * 2;
    },
    stringCounter: (state) => {
      return state.counter + " clicks";
    },
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    },
    updateValue: (state, payload) => {
      state.value = payload;
    },
  },
  actions: {
    increment: ({ commit }) => {
      commit("increment");
    },
    decrement: ({ commit }) => {
      commit("decrement");
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit("increment", payload);
      }, 1000);
    },
    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit("decrement", payload.by);
      }, payload.duration);
    },
    updateValue: ({ commit }, payload) => {
      commit("updateValue", payload);
    },
  },
});
