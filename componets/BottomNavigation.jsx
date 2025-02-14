import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import PrintScreen from "../screens/PrintScreen";
import WarehouseScanScreen from "../screens/WarehouseScanScreen";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const BottomNavigation = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Searches") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Warehouse") {
              iconName = focused ? "archive" : "archive-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline"; // Updated icon for Profile
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#472F92",
          tabBarInactiveTintColor: "gray",
          tabBarShowLabel: true,
          headerShown: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 100,
            height: 70,
            backgroundColor: "#fff",
            elevation: 5, // Android shadow
            shadowColor: "#000", // iOS shadow
            shadowOffset: { width: 0, height: 2 }, // iOS shadow
            shadowOpacity: 0.25, // iOS shadow
            shadowRadius: 3.84, // iOS shadow
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Searches" component={PrintScreen} />
        <Tab.Screen name="Warehouse" component={WarehouseScanScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>

      {/* Central Scan Button */}
      <TouchableOpacity
        style={styles.scanButton}
        onPress={() => navigation.navigate("Scanner")}
      >
        <Ionicons name="scan" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scanButton: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "#472F92",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow
    shadowOpacity: 0.25, // iOS shadow
    shadowRadius: 3.84, // iOS shadow
  },
});

export default BottomNavigation;
