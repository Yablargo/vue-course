<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ reverseName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn()">Reset Name</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    myName: {
      type: String,
    },
    resetFn: Function,
    userAge: Number,
  },
  methods: {
    reverseName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      // do not mutate props directly
      // this.myName = "Shawn";

      // inform the parent component to change
      this.$emit("nameWasReset", "Shawn");
    },
  },
  created() {
    eventBus.$on("ageWasEdited", (age) => {
      this.userAge = age;
    });
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
