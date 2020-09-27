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

        <transition
          appear
          enter-class=""
          enter-active-class="animate__animated animate__bounce"
          leave-class=""
          leave-active-class="animate__animated animate__shakeX"
        >
          <div class="alert alert-info" v-if="show">Info</div>
        </transition>

        <transition name="fade" type="animation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">Info</div>
          <div class="alert alert-warning" v-else key="warning">Warning</div>
        </transition>

        <hr />

        <button class="btn btn-primary" @click="load = !load">
          Load / Remove element with JS
        </button>

        <br /><br />

        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div
            style="width: 100px; height: 100px; background-color: lightgreen"
            v-if="load"
          ></div>
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
      load: false,
      elementWidth: 100,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");

      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");

      let round = 1;

      const interval = setInterval(() => {
        // grow up to 300px (20 rounds * 10 + 100px initial)
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done(); // tell Vue that the animation is done. Required when animating with JS.
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");

      let round = 1;

      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done(); // tell Vue that the animation is done. Required when animating with JS.
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    },
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
