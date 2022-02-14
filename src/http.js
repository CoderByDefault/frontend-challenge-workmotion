import axios from "axios";

class Http {
  constructor() {
    const BASE_API_URL =
      process.env.REACT_APP_ENVIRONMENT === "production"
        ? "http://localhost:3001/"
        : "http://localhost:3001/";

    const initialClient = axios.create({
      baseURL: process.env.REACT_APP_BASE_API_URL || BASE_API_URL,
      timeout: 800000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    initialClient.interceptors.response.use(
      this.handleSuccess,
      this.handleError
    );

    this.client = initialClient;
  }

  handleSuccess = (response) => {
    return response.data;
  };

  handleError = (error) => {
    let errorTemp = null;

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      errorTemp = {
        status: error.response.status,
        message: Array.isArray(error.response.data)
          ? getErrorsString(error.response.data)
          : error.response.data.error || error.response.data.message,
      };
    } else {
      // Something else happened while setting up the request
      // triggered the error
      errorTemp = {
        status: -1,
        message: error.message,
      };
    }

    return Promise.reject(errorTemp);
  };

  get = (url, payload, headers = null) => {
    return this.client.get(url, { params: payload, ...headers });
  };

  post = (url, payload, headers = null) => {
    return this.client.post(url, payload, { ...headers });
  };

  patch = (url, payload, headers = null) => {
    return this.client.patch(url, payload, { ...headers });
  };

  put = (url, payload) => {
    return this.client.put(url, { ...payload });
  };

  delete = (url, payload) => {
    return this.client.delete(url, { ...payload });
  };
}

const getErrorsString = (errorArray) => {
  return errorArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue.message + "\n",
    ""
  );
};

export default new Http();
