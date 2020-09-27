<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded: {{ $route.params.id }}</p>
    <router-link tag="button" class="btn btn-primary" :to="link"
      >Edit user</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: { id: this.$route.params.id },
        query: { locale: "en", q: 100 },
        hash: "#data",
      },
    };
  },

  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter in component");
    // as long as you don't call next(), this component will not be loaded
    // hence you won't have access to data, e.g. this.link

    next();
  },
};
</script>
