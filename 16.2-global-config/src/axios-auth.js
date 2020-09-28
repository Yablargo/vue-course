import axios from "axios";

const instance = axios.create({
  baseURL: `https://vue-course-demo.firebaseio.com`,
});

instance.defaults.headers.common["SOMETHING"] = "something";

export default instance;
