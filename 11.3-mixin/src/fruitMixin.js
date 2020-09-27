export const fruitMixin = {
  data() {
    return {
      fruits: ["Apple", "Orange", "Watermelon"],
      filterText: "",
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((i) => i.match(this.filterText));
    },
  },
};
