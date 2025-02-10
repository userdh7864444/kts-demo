// App.js
import * as React from "react";
import AppRouting from "./AppRouting";
import { AuthProvider } from "./context/auth";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppRouting />
      </AuthProvider>
    </SafeAreaProvider>
  );
}
