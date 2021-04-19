import axios from "axios";

// for local hosting
// const instance = axios.create({
//   baseURL: "http://localhost:8001",
// });

// heroku host link (it is my personal hosting you can host your own server and paste your link)
const instance = axios.create({
  baseURL: "https://phoenix-tinder-clone.herokuapp.com/",
});

export default instance;
