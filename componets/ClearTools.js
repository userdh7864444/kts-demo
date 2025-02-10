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
            style={{ flex: 1, marginTop: 20, marginBottom: 20, width: "100%" }}
          >
            <View style={styles.container}>
              {selectedCard ? (
                <>
                  <View style={styles.buttonConatiner}>
                    <Text
                      onPress={() => setSelectedCard(null)}
                      style={styles.backButton}
                    >
                      <Icon name="arrow-left" size={20} color="white" />
                      {/* Left Arrow Icon */}{" "}
                    </Text>
                    <Title style={styles.mainTitle}>Clear By Shipper</Title>
                  </View>
                  <TextInput
                    style={styles.searchBar}
                    placeholderTextColor="white"
                    placeholder="Search tracking number..."
                    value={search}
                    onChangeText={setSearch}
                  />
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
                  <View style={styles.buttonConatiner}>
                    <Text
                      onPress={() => navigation.goBack()}
                      style={styles.backButton}
                    >
                      <Icon name="arrow-left" size={20} color="white" />
                      {/* Left Arrow Icon */}{" "}
                    </Text>
                    <Title style={styles.mainTitle}>Clear By Shipper</Title>
                  </View>
                  <View style={styles.row}>
                    {menuItems.map((item, index) => {
                      console.log(item, "item");
                      return (
                        <Card
                          key={index}
                          style={styles.card}
                          onPress={() => setSelectedCard(item.title)}
                        >
                          {/* <View style={styles.cardContent}> */}
                          <Image
                            source={item.image}
                            style={styles.imageIconFilter}
                            resizeMode="contain"
                          />
                          <View
                            style={{
                              flex: 1, // Take remaining space
                              marginLeft: 10,
                            }}
                          >
                            <Title style={styles.title}>{item.title}</Title>
                            <Paragraph style={styles.description}>
                              {" "}
                              {item.value}
                            </Paragraph>
                          </View>
                          {/* </View> */}
                        </Card>
                      );
                    })}
                  </View>
                  <TouchableOpacity
                    style={styles.closeButtonContainer}
                    // onPress={onPress}
                  >
                    <View style={styles.closeScanButton}>
                      <Image
                        source={require("../assets/icon/closeScan.jpg")}
                        style={styles.buttonIcon}
                        resizeMode="contain"
                      />
                      <Text style={styles.mainTitle}>Close Scan</Text>
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  card: {
    width: "48%",
    marginBottom: 10,
    backgroundColor: "#7b7c7e",
  },
  title: {
    color: "#fff",
  },
  description: {
    color: "#fff",
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
  imageIconFilter: {
    // backgroundColor: "black",
    borderRadius: 40,
    width: 50, // Increase width for better visibility
    height: 30, // Fixed height to maintain shape
    // textAlign: "center", // Centers text horizontally
    // justifyContent: "center", // Needed for View but not for Text
    // alignItems: "center", // Needed for View but not for Text
    // textAlignVertical: "center", // Centers text vertically (Android)
    // paddingLeft: 15,
  },

  cardList: {
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4, // Adds shadow for Android
    backgroundColor: "#ccc",
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
  closeScanButton: {
    backgroundColor: "#7b7c7e",
    borderRadius: 10,
    padding: 7,
    flexDirection: "row",
    alignItems: "center",
    width: 130, // Increased width for better UI
    justifyContent: "center",
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  backButton: {
    backgroundColor: "#684bba",
    borderRadius: 25, // Fully rounded (half of width/height)
    width: 40,
    paddingLeft: 7,
    paddingTop: 2,
  },
});

export default ClearTools;
