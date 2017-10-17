import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://myapi-profstream.herokuapp.com/api/ab1ed4"
});

export default axiosInstance;
