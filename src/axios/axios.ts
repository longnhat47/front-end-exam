import axios from "axios";

let token: string | null = "";
if (typeof window !== "undefined") {
  // Perform localStorage action
  token = localStorage.getItem("token");
}
console.log(process.env.API_URL);

const instance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default instance;
