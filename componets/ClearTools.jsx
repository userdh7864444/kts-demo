import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Card, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

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
    image: require("../assets/icon/arrow-right.png"),
    value: 80,
  },
  {
    title: "Total Outbound",
    url: "https://myship.ai/",
    image: require("../assets/icon/arrow-right.png"),
    value: 50,
  },
];
const ClearTools = () => {
  const [search, setSearch] = useState("");

  const [selectedCard, setSelectedCard] = useState(null); // To track selected card

  const filteredData = data.filter((item) => item.tracking.includes(search));
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image
            source={require("../assets/logo/eshipperLogo-white.png")}
            style={styles.logo}
            resizeMode="contain"
          />{" "}
          <View style={styles.profileIcon}>
            <Text style={styles.profileText}>U</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButtonContainer}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <View style={styles.backButton}>
              <Image
                source={require("../assets/icon/arrow.png")}
                // style={styles.logo}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          <Text style={styles.mainTitle}>Clear By Shipper</Text>
        </View>
        <Text style={styles.maindescription}>
          Efficient clearing and documentation tools.
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInnerContainer}>
          <Icon name="search" size={20} color="#888" style={styles.leftIcon} />
          <TextInput
            placeholder="Search..."
            style={styles.searchBar}
            value={search}
            onChangeText={setSearch}
          />
          <Image
            source={require("../assets/icon/zoom-scan.svg")}
            style={styles.rightIcon}
            resizeMode="contain"
          />{" "}
        </View>
      </View>
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <View style={styles.container}>
          {selectedCard ? (
            <>
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
                                item.status === "in" ? "#00c82c" : "#e70000",
                              backgroundColor:
                                item.status === "in" ? "#adfaa6" : "#ffa6a6",
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
              <View style={styles.row}>
                {menuItems.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      style={styles.card}
                      onPress={() => setSelectedCard(item.title)}
                    >
                      <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.imageIconFilter}>
                          <Text style={styles.description}>{item.value}</Text>
                          <Image
                            source={item.image}
                            style={{ width: 27, height: 27 }}
                            resizeMode="contain"
                          />
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
                                item.status === "in" ? "#00c82c" : "#e70000",
                              backgroundColor:
                                item.status === "in" ? "#adfaa6" : "#ffa6a6",
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
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#4a2e91",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 25,
  },
  logo: {
    width: 150,
    height: 70,
  },
  container: {
    padding: 15,
  },
  title: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#00b8c2",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 4,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 20,
    color: "#F0F0F0",
  },
  welcomeDescription: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
    marginLeft: 20,
    color: "#b7afc7",
  },
  searchContainer: {
    padding: 20,
    marginTop: -40,
  },
  searchInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  leftIcon: {
    marginRight: 5,
  },
  searchBar: {
    flex: 1,
    marginTop: 5,
  },
  rightIcon: {
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  cardImage: {
    width: 100,
    height: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#666",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
  },
  backButtonContainer: {
    height: 40,
    marginRight: 10, // Add some spacing between the button and the title
  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -5,
  },
  mainTitle: {
    color: "#ffff",
    fontSize: 25, // Increase Font Size
    fontWeight: "600",
  },
  maindescription: {
    color: "#DBDADA",
    marginBottom: 30,
    marginLeft: 20,
  },
  cardList: {
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4, // Adds shadow for Android
    backgroundColor: "#fff",
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
    width: 30, // Increase width for better visibility
    height: 30, // Fixed height to maintain shape
    textAlign: "center", // Centers text horizontally
    justifyContent: "center", // Needed for View but not for Text
    alignItems: "center", // Needed for View but not for Text
    textAlignVertical: "center", // Centers text vertically (Android)
  },
  imageIcon: {
    width: 80,
    height: 35,
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
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },
  imageIconFilter: {
    flexDirection: "row",
    alignItems: "center",
  },
  description: {
    color: "#4a2e91",
    fontSize: 20,
    fontWeight: "bold",
    width: "85%",
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    // tintColor: "#fff", // White icon
  },
});

export default ClearTools;
