// utils/api.js
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-root-toast"; // Assuming you have this installed

const API_BASE_URL = "https://clear.dev.eshipper.com/api";

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("accessToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

const successHandler = (response) => {
  if (response?.data?.message) {
    // Show success toast if needed
    // Toast.show(response.data.message, { duration: Toast.durations.SHORT });
  }
  return response;
};

const errorHandler = (error) => {
  // Handle network errors
  if (!error.response) {
    Toast.show("Network Error - Please check your internet connection", {
      duration: Toast.durations.LONG,
    });
    return Promise.reject({ message: "Network Error" });
  }

  const status = error.response?.status;
  const message = error.response?.data?.errorMessage || "An error occurred";

  // Show error toast
  Toast.show(message, { duration: Toast.durations.LONG });

  // Handle specific status codes
  if (status === 401) {
    // Add logic to clear storage and redirect to login
    AsyncStorage.clear();
    // You might want to navigate to login screen here
    // navigationRef.navigate('Auth'); // Example using navigation ref
  }

  return Promise.reject(error.response);
};

// Global API Call
export const makeAPICall = async (apiData, withHeaders = false) => {
  try {
    const {
      option: { method, url },
      ...rest
    } = apiData;
    const response = await api({
      method,
      url,
      ...rest,
      ...apiData.config,
    });

    return withHeaders ? response : response.data;
  } catch (error) {
    if (__DEV__) {
      console.log("API Error:", error);
    }
    throw error; // Re-throw error to handle in components
  }
};
