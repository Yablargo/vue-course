<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: ["userAge"],
  methods: {
    editAge() {
      const newAge = 30;
      // Method 1: child -> parent -> child
      // this.$emit("ageWasEdited", newAge);

      // Method 2: use eventBus in main.js
      // eventBus.$emit("ageWasEdited", newAge);

      eventBus.changeAge(newAge);
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
  background-color: lightgreen;
}
</style>
