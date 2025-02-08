import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import ScreenWrapper from "../componets/ScreenWrapper ";

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
          <Button
            mode="contained"
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            icon="arrow-left"
          >
            Back
          </Button>

          {menuItems.map((item, index) => (
            <Card
              key={index}
              style={styles.card}
              onPress={() =>
                navigation.navigate("Scanner", {
                  scannerType: item.scannerType,
                })
              }
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
      </ScreenWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    width: "100%",
  },
  logo: {
    width: 200,
    height: 100,
    marginTop: 40,
  },
  container: {
    padding: 16,
    backgroundColor: "#fff",
    width: "100%",
    justifyContent: "center",
  },
  card: {
    borderRadius: 10,
    marginBottom: 12,
    padding: 10,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  backButton: {
    marginBottom: 10,
    width: 100,
  },
});

export default PrintScreen;
