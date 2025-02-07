// context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { postLogin } from "../backendHelper/apiCallerHelper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-root-toast";
import { ActivityIndicator, View } from "react-native";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(false);

  // Add useEffect to check existing token on mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("accessToken");
        if (token) {
          // Add your token validation logic here
          // const userData = await fetchUserProfile(token);
          // setUser(userData);
        }
      } catch (error) {
        console.error("Auth check error:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogin = async (username, password) => {
    try {
      setProfileLoading(true);
      const response = await postLogin({ username, password });
      console.log(response.data, "response");

      if (response.data?.token) {
        // Store token correctly
        await AsyncStorage.setItem("accessToken", response.data.token);
        // Update user state with received data
        setUser(response.data);
        return response;
      }
      throw new Error("Authentication failed: No token received");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "Login failed";
      Toast.show(errorMessage, {
        duration: Toast.durations.LONG,
      });
      throw error;
    } finally {
      setProfileLoading(false);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("accessToken");
      setUser(null);
      // Add navigation logic here if needed
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const value = {
    user,
    loading: profileLoading || loading, // Combine loading states
    login: handleLogin,
    logout,
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
