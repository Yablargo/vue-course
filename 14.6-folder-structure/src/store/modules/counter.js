const state = {
  counter: 0,
};

const getters = {
  doubleCounter: (state) => {
    return state.counter * 2;
  },
  stringCounter: (state) => {
    return state.counter + " clicks";
  },
};

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  },
  updateValue: (state, payload) => {
    state.value = payload;
  },
};

const actions = {
  increment: ({ commit }, payload) => {
    commit("increment", payload);
  },
  decrement: ({ commit }, payload) => {
    commit("decrement", payload);
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
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
