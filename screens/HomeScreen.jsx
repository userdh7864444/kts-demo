import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Linking,
  ImageBackground,
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
      <ScreenWrapper>
        <Image
          source={require("../assets/logo/eshipperLogo.png")} // Adjust path based on file location
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.sectionTitle}>Eshipper Products</Text>

        <View style={styles.container}>
          {menuItems.map((item, index) => (
            <Card
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
                  <Title style={styles.title}>{item.title}</Title>
                  <Paragraph style={styles.description}>
                    {item.description}
                  </Paragraph>
                </View>
              </View>
            </Card>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Eshipper Tools</Text>
        <View style={styles.container}>
          {toolItems.map((item, index) => (
            <Card
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
                <View style={styles.verticleLine}></View>

                <View style={styles.textContainer}>
                  <Title style={styles.title}>{item.title}</Title>
                  <Paragraph style={styles.description}>
                    {item.description}
                  </Paragraph>
                </View>
              </View>
            </Card>
          ))}
        </View>
      </ScreenWrapper>
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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 20,
  },
  logo: {
    width: 200, // Adjust as needed
    height: 100, // Adjust as needed
    marginTop: 40,
    marginLeft: 10,
  },
  container: {
    padding: 16,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  card: {
    borderRadius: 10,
    marginBottom: 12,
    padding: 7,
    backgroundColor: "#d1d1d1",
  },
  cardContent: {
    flexDirection: "row", // Arrange image and text in a row
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  toolImage: {
    width: 70,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1, // Take remaining space
    marginLeft: 10,
  },

  title: {
    color: "#000000",
    fontWeight: "600",
  },
  description: {
    color: "#646464",
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#4686bb",
  },
});

export default HomeScreen;
