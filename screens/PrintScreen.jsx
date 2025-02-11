import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import ScreenWrapper from "../componets/ScreenWrapper ";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Import icon library

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
          <View style={styles.buttonConatiner}>
            <Text onPress={() => navigation.goBack()} style={styles.backButton}>
              <Icon name="arrow-left" size={20} color="white" />
              {/* Left Arrow Icon */}{" "}
            </Text>
            <Title style={styles.mainTitle}>One Click print</Title>
          </View>
          <Paragraph style={styles.maindescription}>
            Instant label printing for faster processing.
          </Paragraph>
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
                <View style={styles.verticleLine}></View>

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
    justifyContent: "center",
  },
  card: {
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
  mainTitle: {
    color: "#fff",
    fontSize: 25, // Increase Font Size
    marginTop: 7,
  },
  maindescription: {
    color: "#fff",
    marginBottom: 20,
  },
  buttonConatiner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  backButton: {
    backgroundColor: "#684bba",
    borderRadius: 25, // Fully rounded (half of width/height)
    width: 40,
    paddingLeft: 7,
    paddingTop: 2,
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#4686bb",
  },
});

export default PrintScreen;
