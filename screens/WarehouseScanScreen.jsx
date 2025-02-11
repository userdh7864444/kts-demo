import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import { Card, Title, Paragraph, Button, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import ScreenWrapper from "../componets/ScreenWrapper ";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import icon library

const menuItems = [
  {
    title: "Eshipper",
    image: require("../assets/logo/eshipperLogo.png"),
    description: "Comprehensive shipping solutions for businesses.",
  },
  {
    title: "Clear By Shipper",
    image: require("../assets/logo/clearLogo.png"),
    description: "Efficient clearing and documentation tools.",
  },
];

const WarehouseScanScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <ScreenWrapper>
        <Image
          source={require("../assets/logo/eshipperLogo.png")} // Adjust path based on file location
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.container}>
          <View style={styles.headerConteiner}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButtonContainer}
              accessibilityRole="button"
              accessibilityLabel="Go back"
            >
              <View style={styles.backButton}>
                <Icon name="chevron-left" size={40} color="white" />
              </View>
            </TouchableOpacity>

            <Title style={styles.mainTitle}>Warehouse Scan</Title>
          </View>
          <Paragraph style={styles.description}>
            Smart scanning for streamlined warehouse management.
          </Paragraph>

          {menuItems.map((item, index) => (
            <Card
              key={index}
              style={styles.card}
              onPress={() => {
                // Navigate to respective screen if URL is missing
                if (item.title === "Eshipper") {
                  navigation.navigate("ClearTools");
                } else if (item.title === "Clear By Shipper") {
                  navigation.navigate("ClearTools");
                }
              }}
            >
              <View style={styles.cardContent}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Divider style={styles.verticleLine} />

                <View style={styles.textContainer}>
                  <Title style={styles.heading}>{item.title}</Title>
                  <Paragraph style={styles.title}>{item.description}</Paragraph>
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
    paddingTop: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  card: {
    borderWidth: 2, // Set the border width
    borderColor: "lightgray", // Set the border color
    borderRadius: 10,
    marginBottom: 12,
    padding: 7,
    backgroundColor: "#fff",
  },
  cardContent: {
    flexDirection: "row", // Arrange image and text in a row
    alignItems: "center",
  },
  image: {
    width: 80,
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
    color: "#000",
  },
  mainTitle: {
    color: "#fff",
    fontSize: 25, // Increase Font Size
    marginTop: 7,
    fontWeight: 600,
  },
  description: {
    color: "#fff",
    marginBottom: 20,
  },
  buttonConatiner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerConteiner: {
    display: "flex",
    flexDirection: "row",
  },
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
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#4686bb",
  },
});

export default WarehouseScanScreen;
