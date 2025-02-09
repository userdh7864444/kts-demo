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
  {
    title: "Close Scan",
    url: "https://myship.ai/",
    image: require("../assets/icon/closeScan.jpg"),
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
                          <View style={styles.cardContent}>
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
                        
                            <Image
                              source={require("../assets/icon/details.jpg")}
                              style={styles.imageIconFilter}
                              resizeMode="contain"
                            />
                          </View>
                        </Card>
                      );
                    })}
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
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#684bba",
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
    width: 50,
    height: 50,
  },
  imageIconFilter: {
    width: 20,
    height: 20,
    // color:"#fff"
  },

  cardList: {
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4, // Adds shadow for Android
    backgroundColor: "#ffff",
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
  backButton: {
    backgroundColor: "#684bba",
    borderRadius: 25, // Fully rounded (half of width/height)
    width: 40,
    paddingLeft: 7,
    paddingTop: 2,
  },
});

export default ClearTools;
