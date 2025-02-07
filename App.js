// App.js
import * as React from "react";
import AppRouting from "./AppRouting";
import { AuthProvider } from "./context/auth";

export default function App() {
  return (
    <AuthProvider>
      <AppRouting />
    </AuthProvider>
  );
}
