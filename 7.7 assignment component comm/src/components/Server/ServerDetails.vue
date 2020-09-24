<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a Server</p>
    <!-- display server details when server is selected in Server.vue -->
    <!-- hint: you'll need a eventBus to listen to changes -->
    <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
    <hr />

    <!-- change server status to "Normal" when clicked" -->
    <button>Change to Normal</button>
  </div>
</template>

<script>
import { serverBus } from "../../main";

export default {
  data: function() {
    return {
      server: null,
    };
  },
  methods: {},
};
</script>

<style></style>
