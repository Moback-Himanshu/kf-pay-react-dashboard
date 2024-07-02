import axios from "axios";

let auth: boolean = true;
export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    const token = localStorage.getItem("authToken");
    // console.log('token---',token)
    if (!auth) {
      throw new axios.Cancel("Operation canceled due to Invalid Token");
    }
    if (token) {
  
      config.headers['authtoken'] = token;
    }
    // console.log('config--', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log("response>>>", response);
    return response;
  },
  (error) => {
    console.log('error-----',error)
    if (error.response.status === 500) {
      return Promise.reject(error.response);
    } else if (
      error.response.status === 401 ||
      error?.response?.data?.responseCode === 401
    ) {
      // auth = false;
      localStorage.clear();
      // window.location.href = '/';

    } else if (error.response && error.response.data) {
      console.log("Promise Error Rejected", error);
      return Promise.reject(error.response);
    }
    return Promise.reject(error.message);
  }
);

