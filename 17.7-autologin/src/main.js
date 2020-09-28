import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

import router from "./router";
import store from "./store";

axios.defaults.baseURL = `https://vue-course-demo.firebaseio.com`;
// axios.defaults.headers.common["Authorization"] = "abc"; // on all requests
axios.defaults.headers.get["Acceps"] = "application/json"; // only on GET

// interceptors, like middleware
axios.interceptors.request.use((config) => {
  console.log("Request interceptors: ", config);
  return config; // return or else you'll block the request
});

axios.interceptors.response.use((res) => {
  console.log("Response interceptors: ", res);
  return res;
});

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
