<template>
  <div>
    <h1>The User Page</h1>
    <hr />

    <button @click="navigateToHome">Go to home</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
  },
};
</script>

