import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Linking,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Card, Title, Paragraph, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../componets/ScreenWrapper ";

const menuItems = [
  {
    title: "Eshipper",
    url: "https://dev.eshipper.com/",
    image: require("../assets/logo/eshipperLogo.png"),
    description: "Comprehensive shipping solutions for businesses.",
  },
  {
    title: "MyShip",
    url: "https://myship.ai/",
    image: require("../assets/logo/MyShip_Teal.png"),
    description: "AI-powered platform for seamless shipping.",
  },
  {
    title: "Clear By Shipper",
    url: "https://clear.eshipper.com/auth/login",
    image: require("../assets/logo/clearLogo.png"),
    description: "Efficient clearing and documentation tools.",
  },
];
const toolItems = [
  {
    title: "One Click print",
    image: require("../assets/logo/printLogo.png"),
    description: "Instant label printing for faster processing.",
  },
  {
    title: "Warehouse Scan",
    image: require("../assets/logo/warehouseLogo.png"),
    description: "Smart scanning for streamlined warehouse management.",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../assets/logo/eshipperLogo.png")} // Adjust path based on file location
        style={styles.logo}
        resizeMode="contain"
      />
      <ScrollView>
        <Text style={styles.sectionTitle}>Eshipper Links</Text>
        <View style={styles.container}>
          <Divider style={styles.horizontalLine} />

          {menuItems.map((item, index) => (
            <View
              key={index}
              style={styles.card}
              onPress={() => {
                if (item.url) {
                  navigation.navigate("WebViewScreen", { url: item.url }); // Navigate to WebView screen
                }
              }}
            >
              <View style={styles.cardContent}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="contain"
                />
                <View style={styles.verticleLine}></View>

                <View style={styles.textContainer}>
                  <Title style={styles.heading}>{item.title}</Title>
                  <Paragraph style={styles.description}>
                    {item.description}
                  </Paragraph>
                </View>
              </View>
              <Divider style={styles.horizontalLine} />
            </View>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Eshipper Tools</Text>
        <View style={styles.container}>
          <Divider style={styles.horizontalLine} />

          {toolItems.map((item, index) => (
            <View
              key={index}
              style={styles.card}
              onPress={() => {
                if (item.title === "One Click print") {
                  navigation.navigate("Print");
                } else if (item.title === "Warehouse Scan") {
                  navigation.navigate("Warehouse");
                }
              }}
            >
              <View style={styles.cardContent}>
                <Image
                  source={item.image}
                  style={styles.toolImage}
                  resizeMode="contain"
                />
                <Divider style={styles.verticleLine} />

                <View style={styles.textContainer}>
                  <Title style={styles.heading}>{item.title}</Title>
                  <Paragraph style={styles.description}>
                    {item.description}
                  </Paragraph>
                </View>
              </View>

              <Divider style={styles.horizontalLine} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "stretch",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  mainHeaderContanier: {
    flexDirection: "row", // Arrange image and text in a row
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  sectionTitle: {
    fontSize: 25,
    color: "#000",
    fontWeight: "bold",

    marginLeft: 20,
  },
  logo: {
    width: 200, // Adjust as needed
    height: 100, // Adjust as needed
    marginTop: 50,
    // marginBottom: 10,
    marginLeft: 10,
  },
  container: {
    padding: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  card: {
    // borderWidth: 2, // Set the border width
    // borderColor: "lightgray", // Set the border color
    borderRadius: 10,
    marginBottom: 7,
    // backgroundColor: "#d1d1d1",
  },
  cardContent: {
    flexDirection: "row", // Arrange image and text in a row
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 80,
    borderRadius: 30,
    marginRight: 10,
  },
  toolImage: {
    width: 90,
    height: 80,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1, // Take remaining space
    marginLeft: 10,
  },
  heading: {
    fontWeight: "bold",
    marginBottom: 0,
    color: "black",
  },
  title: {
    color: "#000000",
    fontWeight: "600",
  },
  description: {
    color: "#646464",
  },
  verticleLine: {
    height: "80%",
    width: 2,
    borderRadius: 100,
    backgroundColor: "#cecece",
  },
  horizontalLine: {
    width: "100%", // Ensures full width
    height: 2, // Since it's a horizontal line, use `height` instead of `width`
    borderRadius: 100,
    backgroundColor: "#cecece",
  },
});
export default HomeScreen;
