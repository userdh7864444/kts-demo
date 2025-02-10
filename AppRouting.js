import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "./context/auth";
import ScannerScreen from "./screens/ScannerScreen";
import PrintScreen from "./screens/PrintScreen";
import WarehouseScanScreen from "./screens/WarehouseScanScreen";
import ClearTools from "./componets/ClearTools";
import WebViewScreen from "./screens/WebViewScreen"; // Import WebViewScreen
import Ionicons from "react-native-vector-icons/Ionicons";
const Stack = createStackNavigator();

export default function AppRouting() {
  const { user, isLoading, logout } = useAuth();

  if (isLoading) {
    return null; // Show loading screen
  }

  return (
    <NavigationContainer>
      {user ? (
        <>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Scanner" component={ScannerScreen} />
            <Stack.Screen name="Print" component={PrintScreen} />
            <Stack.Screen name="Warehouse" component={WarehouseScanScreen} />
            <Stack.Screen name="ClearTools" component={ClearTools} />
            <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
          </Stack.Navigator>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => {
              Alert.alert(
                "Exit App",
                "Are u sure you want to logout?",
                [
                  { text: "Cancel", style: "cancel" },
                  { text: "Sure, Exit", onPress: () => logout() },
                ],
                { cancelable: false }
                
              );
            }}
          >
            <Ionicons name="log-out-outline" size={30} color="#fff" />
          </TouchableOpacity>
        </>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  logoutButton: {
    position: "absolute",
    bottom: 20, // Placed above exit button
    right: 20,
    borderRadius: 50,
    backgroundColor: "black",
    padding: 10,
  },
});
