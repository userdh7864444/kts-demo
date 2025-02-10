import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Card, Title } from "react-native-paper";
import ScreenWrapper from "../componets/ScreenWrapper ";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import icon library

const filteredData = [
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

const ScannerScreen = () => {
  const route = useRoute();
  const { scannerType, logo } = route.params || {};
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <ScreenWrapper>
        <Image
          source={require("../assets/logo/eshipperLogo.png")} // Adjust path based on file location
          style={styles.logo}
          resizeMode="contain"
        />{" "}
        <View style={styles.buttonConatiner}>
          <Text onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-left" size={20} color="white" />
            {/* Left Arrow Icon */}{" "}
          </Text>
          <Title style={styles.mainTitle}>Scanner Page</Title>
        </View>
        {/* Your scanner logic here */}
        <ScrollView
          style={{ flex: 1, marginTop: 20, marginBottom: 20, width: "100%" }}
        >
          <View style={styles.container}>
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
                            color: item.status === "in" ? "green" : "white",
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
          </View>
        </ScrollView>
      </ScreenWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: "100%",
  },
  container: {
    padding: 16,
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: 40,
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "gray",
    marginTop: 10,
  },
  cardList: {
    marginVertical: 8,
    borderRadius: 10,
    elevation: 4, 
    backgroundColor: "#ccc",
  },
  box: {
    padding: 10,
  },
  listRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageIcon: {
    width: 80,
    height: 35,
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
    width: 50, 
    height: 30, 
    textAlign: "center", 
    justifyContent: "center", 
    alignItems: "center", 
    textAlignVertical: "center", 
  },
  buttonConatiner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginLeft:10
  },
  backButton: {
    backgroundColor: "#684bba",
    borderRadius: 25, 
    width: 40,
    paddingLeft: 7,
    paddingTop: 2,
  },
  mainTitle: {
    color: "#fff",
    fontSize: 25, // Increase Font Size
    marginTop: 7,
  },
});

export default ScannerScreen;
