import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";

const data = [
  { id: "1", tracking: "1Z88YW022030402954", status: "in" },
  { id: "2", tracking: "ESF0000000102234000", status: "out" },
  { id: "3", tracking: "4016010259028624", status: "in" },
  { id: "4", tracking: "1Z44W5466165166161", status: "out" },
  {
    id: "5",
    tracking: "1Z44W546616516622261",
    status: "in",
  },
  {
    id: "6",
    tracking: "1Z44W5466165166331",
    status: "out",
  },
];
const menuItems = [
  {
    title: "Total Inbound",
    url: "https://dev.eshipper.com/",
    // image: require("../assets/logo/eshipperLogo.png"),
    value: 80,
  },
  {
    title: "Total Outbound",
    url: "https://myship.ai/",
    // image: require("../assets/logo/MyShip_Teal.png"),
    value: 50,
  },
  {
    title: "Close Scan",
    url: "https://myship.ai/",
    // image: require("../assets/logo/MyShip_Teal.png"),
    value: 25,
  },
];
const ClearTools = () => {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const filteredData = data.filter(
    (item) =>
      item.tracking.includes(search) ||
      item.carrier.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <View style={styles.mainContainer}>
        <Image
          source={require("../assets/logo/eshipperLogo.png")} // Adjust path based on file location
          style={styles.logo}
          resizeMode="contain"
        />
        <ScrollView style={{ flex: 1, marginTop: 20, marginBottom: 20 }}>
          <View style={styles.container}>
            <TextInput
              style={styles.searchBar}
              placeholder="Search tracking number..."
              value={search}
              onChangeText={setSearch}
            />
            <View style={styles.row}>
              {menuItems.map((item, index) => (
                <Card
                  key={index}
                  style={styles.card}
                  onPress={() => Linking.openURL(item.url)}
                >
                  <View style={styles.cardContent}>
                    {/* <Image
                      source={item.image}
                      style={styles.image}
                      resizeMode="contain"
                    /> */}
                    <View>
                      <Title style={{ color: "#09a0a7" }}>{item.title}</Title>
                      <Paragraph>{item.value}</Paragraph>
                    </View>
                  </View>
                </Card>
              ))}
            </View>
            <FlatList
              data={filteredData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.box}
                  onPress={() =>
                    setSelectedId(selectedId === item.id ? null : item.id)
                  }
                >
                  <View style={styles.listRow}>
                    <Image
                      source={require("../assets/logo/eshipperLogo.png")} // Adjust path based on file location
                      style={styles.imageIcon}
                      resizeMode="contain"
                    />
                    <Text style={styles.tracking}>{item.tracking}</Text>
                    <Text
                      style={[
                        styles.status,
                        { color: item.status === "in" ? "green" : "red" },
                      ]}
                    >
                      {item.status}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              scrollEnabled={false} // Disables FlatList's own scrolling
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center", // Centers logo horizontally
    backgroundColor: "#fff",
    width: "100%",
  },
  logo: {
    width: 200, // Adjust as needed
    height: 100, // Adjust as needed
    marginTop: 40,
  },
  container: {
    padding: 16,
    backgroundColor: "red", // Light purple background
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  box: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: "#09a0a7",
    borderWidth: 2,
    borderStyle: "solid", // Optional, defaults to "solid"
  },
  listRow: {
    flexDirection: "row", // Align items in a row
    alignItems: "center", // Center vertically
    justifyContent: "center", // Center horizontally
    gap: 10, // Add spacing between elements (React Native 0.71+)
  },
  image: {
    width: 40,
    height: 40,
  },
  tracking: {
    flex: 1, // Distribute space evenly
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center", // Center text
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center", // Center text
  },
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap", // Wraps to the next line if needed
    justifyContent: "space-between",
  },
  card: {
    width: "48%", // Ensures 2 cards fit in a row
    marginBottom: 10,
  },
  cardContent: {
    padding: 10,
  },
  imageIcon: {
    width: 50,
    height: 50,
  },
});

export default ClearTools;
