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

        <hr />
        <app-list />
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin";

export default {
  components: {
    appList: List,
  },
  mixins: [fruitMixin],
  data() {
    return {
      text: "Hello there",
    };
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
