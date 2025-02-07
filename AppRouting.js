import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "./context/auth";
import ScannerScreen from "./screens/ScannerScreen";
import PrintDetailScreen from "./screens/PrintDetailScreen";

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
          <Stack.Screen name="PrintDetail" component={PrintDetailScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
