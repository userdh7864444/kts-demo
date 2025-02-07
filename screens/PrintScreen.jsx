import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

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
];

const PrintScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.mainContainer}>
        <Image
          source={require("../assets/logo/eshipperLogo.png")} // Adjust path based on file location
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.container}>
          <View>
            <Button
              mode="contained"
              onPress={() => navigation.goBack()}
              style={styles.backButton}
              icon="arrow-left" // Directly using icon name
            >
              Back
            </Button>
          </View>
          {menuItems.map((item, index) => (
            <Card
              key={index}
              style={styles.card}
              onPress={() => Linking.openURL(item.url)}
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
    </>
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
  backButton: {
    marginBottom: 10,
    width: 100,
  },
});

export default PrintScreen;
