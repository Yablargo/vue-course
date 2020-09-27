<template>
  <div>
    <button class="btn btn-primary" @click="increment">Increment</button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>

    <hr />

    <button class="btn btn-primary" @click="asyncIncrement(200)">
      Async increment by 200
    </button>

    <button
      class="btn btn-primary"
      @click="asyncDecrement({ by: 50, duration: 500 })"
    >
      Async decrement by 50
    </button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  methods: {
    ...mapActions({
      asyncIncrement: "asyncIncrement",
      asyncDecrement: "asyncDecrement",
    }),
    ...mapMutations({
      increment: "increment",
    }),
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>
