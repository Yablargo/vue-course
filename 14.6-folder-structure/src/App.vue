<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Vuex</h1>
        <app-result :counter="counter"></app-result>
        <app-another-result :counter="counter"></app-another-result>
        <hr />
        <app-counter @updated="counter += $event"></app-counter>

        <hr />

        <input type="text" v-model="value" />
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import Result from "./components/Result.vue";
import AnotherResult from "./components/AnotherResult.vue";

export default {
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    value: {
      get() {
        return this.$store.state.value;
      },
      set(value) {
        this.$store.dispatch("value/updateValue", value);
      },
    },
  },
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
  },
};
</script>
