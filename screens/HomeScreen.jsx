import React from "react";
import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

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
    title: "Clear Tool",
    url: "https://clear.eshipper.com/auth/login",
    image: require("../assets/logo/clearLogo.png"),
    description: "Efficient clearing and documentation tools.",
  },
  {
    title: "One Click print ",
    url: "/PrintDetail",
    image: require("../assets/logo/printLogo.png"),
    description: "Instant label printing for faster processing.",
  },
  {
    title: "Warehouse Scan",
    // url: "https://clear.eshipper.com/auth/login",
    image: require("../assets/logo/warehouseLogo.png"),
    description: "Smart scanning for streamlined warehouse management.",
  },
];

const HomeScreen = ({ navigation }) => {
  const handleItemPress = (item) => {
    // Check if it's a web URL
    if (item.url.startsWith("http")) {
      Linking.openURL(item.url).catch((err) =>
        console.error("Failed to open URL:", err)
      );
    }
    // Handle internal screen navigation
    else if (item.url.startsWith("/")) {
      const routeName = item.url.replace("/", "");

      // Add your screen names here that should use internal navigation
      const internalScreens = ["PrintDetail", "WarehouseScan"];

      if (internalScreens.includes(routeName)) {
        navigation.navigate(routeName);
      } else {
        console.warn(`No route defined for: ${routeName}`);
      }
    }
  };
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
            onPress={() => handleItemPress(item)}
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
