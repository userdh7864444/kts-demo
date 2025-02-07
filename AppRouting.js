import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "./context/auth";
import ScannerScreen from "./screens/ScannerScreen";
import PrintScreen from "./screens/PrintScreen";
import WarehouseScanScreen from "./screens/WarehouseScanScreen";
import ClearTools from "./componets/ClearTools";
import WebViewScreen from "./screens/WebViewScreen"; // Import WebViewScreen

const Stack = createStackNavigator();

export default function AppRouting() {
  const { user, isLoading } = useAuth();

  console.log(user, "user");

  if (isLoading) {
    return null; // Show loading screen
  }

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Scanner" component={ScannerScreen} />
          <Stack.Screen name="Print" component={PrintScreen} />
          <Stack.Screen name="Warehouse" component={WarehouseScanScreen} />
          <Stack.Screen name="ClearTools" component={ClearTools} />
          <Stack.Screen name="WebViewScreen" component={WebViewScreen} />

        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
