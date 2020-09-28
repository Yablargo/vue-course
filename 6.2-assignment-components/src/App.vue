<template>
  <div class="container">
    <!-- refactor into Header.vue component -->
    <header />
    <hr />
    <div class="row">
      <!-- refactor into Servers.vue component -->

      <servers />

      <!-- refactor into ServerDetails.vue component -->
      <serverdetails />
    </div>
    <hr />
    <!-- refactor into Footer.vue component -->
    <footer />
  </div>
</template>


<script>
import footer from "./components/Footer.vue";
import header from "./components/Header.vue";
import serverdetails from "./components/ServerDetails.vue";
import servers from "./components/Servers.vue";

export default {
  name: "App",
  components: { footer, header, serverdetails, servers },
};
</script>


<style></style>
