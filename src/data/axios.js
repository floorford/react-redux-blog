import axios from "axios";

export default axios.create({
  baseURL: "http://homestead.test/api/",
  // params: {
  //     key: "1b246ab04e7913fffa55940dda1e0bf860060aba",
  // },
  headers: {
      Accept: "application/json",
  },
});
