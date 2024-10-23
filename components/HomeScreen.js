import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import loadFonts from "./fonts";
import BottomNav from "./bottomNav";

function Home({ navigation }) {
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logocontainer}>
          <Image
            source={require("./assets/images/Logo.png")}
            style={styles.logo}
          />
          <TouchableOpacity onPress={() => {}} style={styles.logout}>
            <Image source={require("./assets/icons/Logout.png")} />
          </TouchableOpacity>
        </View>
        <Image
          source={require("./assets/images/Arts.png")}
          style={styles.art}
        />
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.imageTextContainer}>
        <Image
          source={require("./assets/images/picasco.png")}
          style={styles.artistImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.artistName}>Pablo Picasso</Text>
          <View style={styles.TextContainer}>
            <Text style={styles.Text}>
              Pablo Picasso (1881–1973) was a Spanish painter, sculptor, and one
              of the most influential artists of the 20th century.
            </Text>
          </View>
        <TouchableOpacity style={styles.viewButton} onPress={() => navigation.navigate("Picasso")}>
            <Text style={styles.viewText}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      <BottomNav navigation={navigation} currentScreen="Home" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B6C9D4",
  },

  headerContainer: {
    padding: 0,
  },

  logocontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 55,
    justifyContent: "space-between",
  },

  logo: {
    width: 85,
    height: 42,
    marginLeft: 20,
  },

  logout: {
    padding: 10,
    marginRight: 24,
  },

  art: {
    width: 360,
    height: 230,
    marginTop: 15,
    resizeMode: "contain",
  },

  imageTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: "#D9D9D9",
    borderRadius: 22,
    padding: 10,
    width: 340,
    height: 235,
  },

  artistImage: {
    width: 154,
    height: 210,
    borderRadius: 18,
  },

  textContainer: {
    flex: 1,
    marginLeft: 10,
  },

  artistName: {
    fontSize: 24,
    color: "#3D3A3A",
    fontFamily: "Poppins-Regular",
  },

  TextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  Text: {
    color: "#3D3A3A",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },

  viewButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#CFB296",
    borderRadius: 10,
    alignItems: "center",
    width: 148,
    height: 37,
  },

  viewText: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "Poppins-Regular",
  },
});

export default Home;
