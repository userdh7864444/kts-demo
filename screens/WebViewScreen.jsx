import React from "react";
import { View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";

const WebViewScreen = ({ route }) => {
  const { url } = route.params;

  return (
    <WebView
      source={{ uri: url }}
      startInLoadingState
      // renderLoading={() => <ActivityIndicator size="large" color="#09a0a7" />}
    />
  );
};

export default WebViewScreen;
