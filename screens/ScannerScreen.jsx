import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

const ScannerScreen = () => {
  const route = useRoute();
  const { scannerType, logo } = route.params || {};

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
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
  logo: {
    width: 200,
    height: 100,
    marginTop: 40,
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
