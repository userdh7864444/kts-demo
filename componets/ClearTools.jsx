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
import ScreenWrapper from "./ScreenWrapper ";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import icon library

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
    image: require("../assets/icon/inbound.jpg"),
    value: 80,
  },
  {
    title: "Total Outbound",
    url: "https://myship.ai/",
    image: require("../assets/icon/outbound.jpg"),
    value: 50,
  },
  // {
  //   title: "Close Scan",
  //   url: "https://myship.ai/",
  //   image: require("../assets/icon/closeScan.jpg"),
  //   value: 25,
  // },
];
const ClearTools = () => {
  const [search, setSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState(null); // To track selected card

  const filteredData = data.filter((item) => item.tracking.includes(search));
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.mainContainer}>
        <ScreenWrapper>
          <Image
            source={require("../assets/logo/eshipperLogo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <ScrollView
            style={{ flex: 1, marginTop: 10, marginBottom: 20, width: "100%" }}
          >
            <View style={styles.container}>
              {selectedCard ? (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      selectedCard ? setSelectedCard(null) : navigation.goBack()
                    }
                    style={styles.backButtonContainer}
                    accessibilityRole="button"
                    accessibilityLabel="Go back"
                  >
                    <View style={styles.backButton}>
                      <Icon name="chevron-left" size={40} color="white" />
                    </View>
                  </TouchableOpacity>
                  {/* <TextInput
                    style={styles.searchBar}
                    placeholderTextColor="white"
                    placeholder="Search tracking number..."
                    value={search}
                    onChangeText={setSearch}
                  /> */}
                  {filteredData.map((item) => (
                    <Card key={item.id} style={styles.cardList}>
                      <TouchableOpacity style={styles.box}>
                        <View style={styles.listRow}>
                          <View>
                            <Image
                              source={require("../assets/logo/eshipperLogo.png")}
                              style={styles.imageIcon}
                              resizeMode="contain"
                            />
                            <Text style={styles.tracking}>{item.tracking}</Text>
                          </View>
                          <View style={styles.statusContainer}>
                            <Text
                              style={[
                                styles.status,
                                {
                                  color:
                                    item.status === "in" ? "green" : "white",
                                  backgroundColor:
                                    item.status === "in" ? "lightgreen" : "red",
                                },
                              ]}
                            >
                              {item.status}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </Card>
                  ))}
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      selectedCard ? setSelectedCard(null) : navigation.goBack()
                    }
                    style={styles.backButtonContainer}
                    accessibilityRole="button"
                    accessibilityLabel="Go back"
                  >
                    <View style={styles.backButton}>
                      <Icon name="chevron-left" size={40} color="white" />
                    </View>
                  </TouchableOpacity>
                  <View style={styles.row}>
                    {menuItems.map((item, index) => {
                      return (
                        <Card
                          key={index}
                          style={styles.card}
                          onPress={() => setSelectedCard(item.title)}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <View style={styles.imageIconFilter}>
                              <Image
                                source={item.image}
                                style={{ width: 30, height: 30 }}
                                resizeMode="contain"
                              />
                            </View>
                            <View style={{ marginLeft: 16 }}>
                              <Text style={styles.title}>{item.title}</Text>
                              <Text style={styles.description}>
                                {item.value}
                              </Text>
                            </View>
                          </View>
                        </Card>
                      );
                    })}
                  </View>
                  <TouchableOpacity
                    style={styles.closeButtonContainer}
                    onPress={() => {
                      /* Add your handler */
                    }}
                  >
                    <View style={styles.closeScanButton}>
                      <Image
                        source={require("../assets/icon/closeScan.jpg")}
                        style={styles.buttonIcon}
                        resizeMode="contain"
                      />
                      <Text style={styles.buttonText}>Close Scan</Text>
                    </View>
                  </TouchableOpacity>
                  {filteredData.map((item) => (
                    <Card key={item.id} style={styles.cardList}>
                      <TouchableOpacity style={styles.box}>
                        <View style={styles.listRow}>
                          <View>
                            <Image
                              source={require("../assets/logo/eshipperLogo.png")}
                              style={styles.imageIcon}
                              resizeMode="contain"
                            />
                            <Text style={styles.tracking}>{item.tracking}</Text>
                          </View>
                          <View style={styles.statusContainer}>
                            <Text
                              style={[
                                styles.status,
                                {
                                  color:
                                    item.status === "in" ? "green" : "white",
                                  backgroundColor:
                                    item.status === "in" ? "lightgreen" : "red",
                                },
                              ]}
                            >
                              {item.status}
                            </Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </Card>
                  ))}
                </>
              )}
            </View>
          </ScrollView>
        </ScreenWrapper>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: 40,
    marginLeft: 10,
  },
  container: {
    padding: 16,
    paddingTop: 0,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: "#684bba",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: "#fff",
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
    fontSize: 17,
    fontWeight: "bold",
  },
  status: {
    fontSize: 14,
    fontWeight: "600",
    backgroundColor: "red",
    borderRadius: 20,
    width: 50, // Increase width for better visibility
    height: 30, // Fixed height to maintain shape
    textAlign: "center", // Centers text horizontally
    justifyContent: "center", // Needed for View but not for Text
    alignItems: "center", // Needed for View but not for Text
    textAlignVertical: "center", // Centers text vertically (Android)
  },

  row: {
    // flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  card: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#5A4BAE", // More vibrant color
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  description: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  imageIconFilter: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255,255,255,0.2)", // Light background for icon
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonContainer: {
    marginVertical: 5,
    alignSelf: "flex-end", // Align to right
  },
  closeScanButton: {
    backgroundColor: "#FF4757", // Vibrant red for attention
    borderRadius: 25, // Pill shape
    paddingVertical: 12,
    paddingHorizontal: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "auto",
    marginTop: -20, // Auto width based on content
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    // tintColor: "#fff", // White icon
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  cardContent: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageIcon: {
    width: 80,
    height: 35,
  },

  cardList: {
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4, // Adds shadow for Android
    backgroundColor: "#fff",
  },
  mainTitle: {
    color: "#fff",
    fontSize: 25, // Increase Font Size
    marginTop: 7,
  },
  buttonConatiner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  closeButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },

  // buttonIcon: {
  //   width: 20,
  //   height: 20,
  //   marginRight: 5,
  // },
  backButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#684bba",
    borderRadius: 25, // Fully rounded
    width: 40, // Slightly larger for better touch area
    height: 40,
    marginBottom: 10,
    marginRight: 10, // Add some spacing between the button and the title
  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -5,
  },
});

export default ClearTools;
