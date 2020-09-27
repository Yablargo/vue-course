<template>
  <div>
    <p>Counter is: {{ counter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      stringCounter: "counter/stringCounter",
    }),
    counter() {
      return this.$store.getters["counter/doubleCounter"];
    },
  },
};
</script>
