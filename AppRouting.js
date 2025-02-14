import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "./context/auth";
import ScannerScreen from "./screens/ScannerScreen";
import BottomNavigation from "./componets/BottomNavigation";
import ClearTools from "./componets/ClearTools";

const Stack = createStackNavigator();

export default function AppRouting() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null; // Show loading screen
  }

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={BottomNavigation} />
          <Stack.Screen name="Scanner" component={ScannerScreen} />
          <Stack.Screen name="ClearTools" component={ClearTools} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
