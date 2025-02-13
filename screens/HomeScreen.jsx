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
    url: "https://dev.eshipper.com/",
    image: require("../assets/logo/eshipperLogo.png"),
    description: "Comprehensive shipping solutions for business.",
  },
  {
    title: "MyShip",
    url: "https://myship.ai/",
    image: require("../assets/logo/MyShip_Teal.png"),
    description: "Comprehensive shipping solutions for business.",
  },
  {
    title: "Clear By Shipper",
    url: "https://clear.eshipper.com/auth/login",
    image: require("../assets/logo/clearLogo.png"),
    description: "Comprehensive shipping solutions for business.",
  },
];

const toolItems = [
  {
    title: "One Click Print",
    image: require("../assets/logo/printLogo.png"),
    description: "Comprehensive shipping solutions for business.",
  },
  {
    title: "Warehouse Scan",
    image: require("../assets/logo/warehouseLogo.png"),
    description: "Comprehensive shipping solutions for business.",
  },
];

const HomeScreen = () => {
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
        <Text style={styles.welcomeText}>Hello, User</Text>
        <Text style={styles.welcomeDescription}>Welcome to eShipper</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchInnerContainer}>
          <Icon name="search" size={20} color="#888" style={styles.leftIcon} />
          <TextInput placeholder="Search..." style={styles.searchBar} />
          <Image
            source={require("../assets/icon/zoom-scan.svg")}
            style={styles.rightIcon}
            resizeMode="contain"
          />{" "}
        </View>
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Applications</Text>
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

        <Text style={styles.sectionTitle}>Tools</Text>
        <View style={styles.cardContainer}>
          {toolItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() =>
                navigation.navigate(
                  item.title === "One Click Print" ? "Print" : "Warehouse"
                )
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
    height: 70,
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
    color: "#fff",
  },
  welcomeDescription: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
    marginLeft: 20,
    color: "#DBDADA",
  },
  searchContainer: {
    padding: 20,
    marginTop: -40,
  },
  searchInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  leftIcon: {
    marginRight: 5,
  },
  searchBar: {
    flex: 1,
    marginTop: 5,
  },
  rightIcon: {
    marginLeft: 5,
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
    height: 40,
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
});

export default HomeScreen;
