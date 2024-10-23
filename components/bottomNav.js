import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

function BottomNav({ currentScreen, navigation }) {
  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={require("./assets/icons/Profile.png")}
          style={[
            styles.icon,
            currentScreen === "Profile"
              ? { tintColor: "#FFFFFF" }
              : { tintColor: "rgba(255, 255, 255, 0.5)" },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("./assets/icons/Homes.png")}
          style={[
            styles.icon,
            currentScreen === "Home"
              ? { tintColor: "#FFFFFF" }
              : { tintColor: "rgba(255, 255, 255, 0.4)" },
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Aboutus")}
      >
        <Image
          source={require("./assets/icons/AboutUS.png")}
          style={[
            styles.icon,
            currentScreen === "Account"
              ? { tintColor: "#FFFFFF" }
              : { tintColor: "rgba(255, 255, 255, 0.4)" },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    width: 360,
    height: 73,
    bottom: 0,
    backgroundColor: "#CFB296",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000",
  },

  navItem: {
    alignItems: "center",
  },

  icon: {
    width: 55,
    height: 62,
  },
});

export default BottomNav;
