import { View, Text, Button } from "react-native";

export default function PrintDetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Print Detail Screen</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
