<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <hr />

        <router-view name="header-top"></router-view>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
        <router-view name="header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  /* ease-out to end a bit slower when we start */
  /* forwards so that element stay at then end and not snap back to the start */
  animation: slide-in 0.2s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 0.2s ease-out forwards;
  transition: opacity 0.2s; /* what happens if we set to 3s? */
  opacity: 0;
  /* to fix snapping when removing item. Absolute ensure element may be added above while this element is animated */
  position: absolute;
}

.slide-move {
  transition: transform 0.2s; /* tell Vue that whenever transform is changed, animate it over 1s */
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
