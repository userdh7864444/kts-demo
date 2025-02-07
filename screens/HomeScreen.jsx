import React from "react";
import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

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
      <View style={styles.container}>
        {menuItems.map((item, index) => (
          <Card
            key={index}
            style={styles.card}
            onPress={() => {
              if (item.url) {
                Linking.openURL(item.url);
              } else {
                // Navigate to respective screen if URL is missing
                if (item.title === "One Click print") {
                  navigation.navigate("Print");
                } else if (item.title === "Warehouse Scan") {
                  navigation.navigate("Warehouse");
                }
              }
            }}
          >
            <View style={styles.cardContent}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.textContainer}>
                <Title>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
              </View>
            </View>
          </Card>
        ))}
      </View>
    </View>
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
    backgroundColor: "#fff", // Light purple background
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  card: {
    borderRadius: 10,
    marginBottom: 12,
    padding: 10,
  },
  cardContent: {
    flexDirection: "row", // Arrange image and text in a row
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1, // Take remaining space
  },
});

export default HomeScreen;
