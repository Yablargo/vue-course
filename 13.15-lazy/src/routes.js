import Home from "./components/Home.vue";
import Header from "./components/Header.vue";

// optional naming for webpack to name the build as User.js and group multiple components to lazy load together.
const User = () =>
  import(/* webpackChunkName: "User" */ "./components/user/User.vue");

export const routes = [
  {
    path: "",
    components: {
      default: Home,
      "header-top": Header,
    },
    name: "home",
  },
  {
    path: "/user",
    components: {
      default: User,
      "header-bottom": Header,
    },
    children: [
      {
        path: "",
        component: () => import("./components/user/UserStart.vue"),
      },
      {
        path: ":id",
        component: () => import("./components/user/UserDetail.vue"),
        beforeEnter: (to, from, next) => {
          console.log("inside beforeEnter");
          next();
        },
      },
      {
        path: ":id/edit",
        component: () => import("./components/user/UserEdit.vue"),
        name: "userEdit",
      },
    ],
  },
  {
    path: "/redirect-me",
    redirect: { name: "home" },
  },
  {
    path: "*",
    redirect: "/",
  },
];
