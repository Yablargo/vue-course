<template>
  <div>
    <!-- Use @input and a 'value' prop to make a custom input -->
    <div class="form-group">
      <label>First Name</label>
      <input
        :value="firstName"
        v-on:input="nameChanged(true, $event)"
        type="text"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input
        :value="lastName"
        v-on:input="nameChanged(false, $event)"
        type="text"
        class="form-control"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["value"],
  methods: {
    nameChanged(isFirst, event) {
      let name = "";
      if (isFirst) {
        name = event.target.value + " " + this.lastName;
      } else {
        name = this.firstName + " " + event.target.value;
      }
      // What should we do here to update the prop?
      this.$emit("input", name);
    },
  },
  computed: {
    firstName() {
      return this.value.split(" ")[0];
    },
    lastName() {
      return this.value.split(" ")[1];
    },
  },
};
</script>
