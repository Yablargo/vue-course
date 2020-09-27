<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>

        <hr />

        <button class="btn btn-primary" @click="show = !show">
          Show Alert
        </button>

        <br /><br />

        <transition name="fade">
          <div class="alert alert-info" v-if="show">Info</div>
        </transition>

        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">Info</div>
        </transition>

        <transition name="slide" appear>
          <div class="alert alert-info" v-if="show">Info</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
  /* you don't need opacity: 1 */
}

.fade-leave {
  /* you don't need opacity: 1. That's the default */
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  /* ease-out to end a bit slower when we start */
  /* forwards so that element stay at then end and not snap back to the start */
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s; /* what happens if we set to 3s? */
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(20px);
  }
}
</style>
