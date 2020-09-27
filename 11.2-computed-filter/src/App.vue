<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | upper }}</p>
        <p>{{ text | lower }}</p>
        <p>{{ text | upper | lower }}</p>

        <hr />

        <input v-model="filterText" />
        <ul>
          <!-- <li v-for="fruit in fruits | someFilter">{{ fruit }}</li> -->
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello there",
      fruits: ["Apple", "Orange", "Watermelon"],
      filterText: "",
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((i) => i.match(this.filterText));
    },
  },
  // locally only.
  filters: {
    upper(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style></style>
