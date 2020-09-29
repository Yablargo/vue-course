<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button
          class="btn btn-primary"
          @click="loadedComponent = 'blue-component'"
        >
          Load Blue Template
        </button>
        <button
          class="btn btn-success"
          @click="loadedComponent = 'green-component'"
        >
          Load Green Template
        </button>
        <button
          class="btn btn-danger"
          @click="loadedComponent = 'red-component'"
        >
          Load Red Template
        </button>
        <!-- show component based on button clicked -->
        <hr />
        <component :is="loadedComponent">
          <p>Blah blah blah</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import RedComponent from "./components/Red.vue";
import BlueComponent from "./components/Blue.vue";
import GreenComponent from "./components/Green.vue";

// import all the color components
export default {
  components: { RedComponent, BlueComponent, GreenComponent },
  data: function () {
    return {
      loadedComponent: "BlueComponent",
    };
  },
};
</script>

<style></style>
