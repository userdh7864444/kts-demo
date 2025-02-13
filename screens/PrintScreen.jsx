import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Card, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

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
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Image
            source={require("../assets/logo/eshipperLogo-white.png")}
            style={styles.logo}
            resizeMode="contain"
          />{" "}
          <View style={styles.profileIcon}>
            <Text style={styles.profileText}>U</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButtonContainer}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <View style={styles.backButton}>
              <Image
                source={require("../assets/icon/arrow.png")}
                // style={styles.logo}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          <Text style={styles.mainTitle}>One Click Print</Text>
        </View>
        <Text style={styles.maindescription}>
          Instant label printing for faster processing.
        </Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.cardContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() =>
                navigation.navigate("WebViewScreen", { url: item.url })
              }
            >
              <Image
                source={item.image}
                style={styles.cardImage}
                resizeMode="contain"
              />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#4a2e91",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 25,
  },
  logo: {
    width: 150,
    height:70
  },
  container: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#5A31F4",
    padding: 10,
    borderRadius: 5,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#00b8c2",
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 4,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 20,
    color: "#F0F0F0",
  },
  welcomeDescription: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
    marginLeft: 20,
    color: "#b7afc7",
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 15,
  },
  cardImage: {
    width: 100,
    height: 50,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#666",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
  },
  backButtonContainer: {
    height: 40,
    marginRight: 10, // Add some spacing between the button and the title
  },
  backButton: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -5,
  },
    mainTitle: {
    color: "#ffff",
    fontSize: 25, // Increase Font Size
    fontWeight: "600",
  },
    maindescription: {
    color: "#DBDADA",
    marginBottom: 20,
    marginLeft: 20,

  },
});

export default PrintScreen;
