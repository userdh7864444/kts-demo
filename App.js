import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import PrintScreen from "./screens/PrintScreen";
import WarehouseScanScreen from "./screens/WarehouseScanScreen";
import ClearTools from "./componets/ClearTools";

export default function App() {
  return (
    <View style={styles.container}>
      <ClearTools  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});