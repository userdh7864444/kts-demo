import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

const ScreenWrapper = ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/background/homeBackground.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "stretch",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(104, 89, 107, 0.5)",
  },
});

export default ScreenWrapper;
