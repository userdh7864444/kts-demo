import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Card, Divider, Paragraph, Title } from "react-native-paper";
import ScreenWrapper from "../componets/ScreenWrapper ";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const menuItems = [
  {
    title: "Eshipper",
    scannerType: "Eshipper",
    image: require("../assets/logo/eshipperLogo.png"),
    description: "Comprehensive shipping solutions for businesses.",
  },
  {
    title: "MyShip",
    scannerType: "MyShip",
    image: require("../assets/logo/MyShip_Teal.png"),
    description: "AI-powered platform for seamless shipping.",
  },
];

const PrintScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <ScreenWrapper>
        <Image
          source={require("../assets/logo/eshipperLogo.png")}
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

            <Text style={styles.mainTitle}>One Click Print</Text>
          </View>
          <Text style={styles.maindescription}>
            Instant label printing for faster processing.
          </Text>
          {menuItems.map((item, index) => (
            <Card
              key={index}
              style={styles.card}
              onPress={() =>
                navigation.navigate("Scanner", {
                  scannerType: item.scannerType,
                  logo: item.image,
                })
              }
            >
              <View style={styles.cardContent}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="contain"
                />
                <Divider style={styles.verticleLine} />
                <View style={styles.textContainer}>
                <Title style={styles.title}>{item.title}</Title>
                <Paragraph style={styles.description}>{item.description}</Paragraph>
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
    width: "100%",
    paddingTop: 0,
    justifyContent: "center",
  },
  card: {
    borderWidth: 2,
    borderColor: "lightgray",
    borderRadius: 10,
    marginBottom: 12,
    padding: 7,
    backgroundColor: "#d1d1d1",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
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
  mainTitle: {
    color: "#fff",
    fontSize: 25, // Increase Font Size
    marginTop: 7,
    fontWeight: "600",

  },
  maindescription: {
    color: "#fff",
    marginBottom: 20,
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
    height: "80%",
    width: 2,
    borderRadius: 100,
    backgroundColor: "#646464",
  },
});

export default PrintScreen;
