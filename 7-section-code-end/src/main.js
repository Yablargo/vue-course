import Vue from "vue";
import App from "./App.vue";

export const eventBus = new Vue({
  // functions that are accessible anywhere
  methods: {
    changeAge(age) {
      this.$emit("ageWasEdited", age);
    },
  },
});

new Vue({
  el: "#app",
  render: (h) => h(App),
});
