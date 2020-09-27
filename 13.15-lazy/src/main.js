import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { selector: to.hash };
    }
    // return { x: 0, y: 700 };
  },
});

// executes in every routes
router.beforeEach((to, from, next) => {
  console.log("global beforeEach");
  next();
  // next(false) // abort operation and stay on the page
  // next({name: 'home'}) // redirect
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
