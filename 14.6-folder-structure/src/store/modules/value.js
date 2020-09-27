const state = {
  value: 0,
};

const actions = {
  updateValue: ({ commit }, payload) => {
    commit("updateValue", payload);
  },
};

export default {
  namespaced: true,
  state,
  actions,
};
