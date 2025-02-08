import { useNavigation } from "@react-navigation/native";
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
import { Button, Card, Paragraph, Title } from "react-native-paper";

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
  const [selectedCard, setSelectedCard] = useState(null); // To track selected card

  const filteredData = data.filter((item) => item.tracking.includes(search));
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.mainContainer}>
        <Image
          source={require("../assets/logo/eshipperLogo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <ScrollView
          style={{ flex: 1, marginTop: 20, marginBottom: 20, width: "100%" }}
        >
          <View style={styles.container}>
            {selectedCard ? (
              <View>
                <Button
                  mode="contained"
                  onPress={() => setSelectedCard(null)}
                  style={styles.backButton}
                  icon="arrow-left" // Directly using icon name
                >
                  Back
                </Button>
                <TextInput
                  style={styles.searchBar}
                  placeholder="Search tracking number..."
                  value={search}
                  onChangeText={setSearch}
                />
                {filteredData.map((item) => (
                  <Card key={item.id} style={styles.cardList}>
                    <TouchableOpacity style={styles.box}>
                      <View style={styles.listRow}>
                        <Image
                          source={require("../assets/logo/eshipperLogo.png")}
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
                  </Card>
                ))}
              </View>
            ) : (
              <>
                <Button
                  mode="contained"
                  onPress={() => navigation.goBack()}
                  style={styles.backButton}
                  icon="arrow-left" // Directly using icon name
                >
                  Back
                </Button>
                <View style={styles.row}>
                  {menuItems.map((item, index) => (
                    <Card
                      key={index}
                      style={styles.card}
                      onPress={() => setSelectedCard(item.title)}
                    >
                      <View style={styles.cardContent}>
                        <View>
                          <Title style={{ color: "#09a0a7" }}>
                            {item.title}
                          </Title>
                          <Paragraph>{item.value}</Paragraph>
                        </View>
                      </View>
                    </Card>
                  ))}
                </View>

                {filteredData.map((item) => (
                  <Card key={item.id} style={styles.cardList}>
                    <TouchableOpacity style={styles.box}>
                      <View style={styles.listRow}>
                        <Image
                          source={require("../assets/logo/eshipperLogo.png")}
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
                  </Card>
                ))}
              </>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: 40,
  },
  container: {
    padding: 16,
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
  },
  listRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 40,
    height: 40,
  },
  tracking: {
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    fontSize: 14,
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
  card: {
    width: "48%",
    marginBottom: 10,
  },
  cardContent: {
    padding: 10,
  },
  imageIcon: {
    width: 50,
    height: 50,
  },
  cardList: {
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4, // Adds shadow for Android
    backgroundColor: "#ffff",
  },
  backButton: {
    marginBottom: 10,
    width: 100,
  },
});

export default ClearTools;
