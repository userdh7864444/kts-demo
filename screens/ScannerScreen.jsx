import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const ScannerScreen = () => {
  const route = useRoute();
  const { scannerType } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanner Page</Text>
      <Text style={styles.subtitle}>Scanning for: {scannerType}</Text>
      {/* Your scanner logic here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
    marginTop: 10,
  },
});

export default ScannerScreen;
