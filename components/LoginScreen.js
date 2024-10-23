import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import loadFonts from "./fonts";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Image
            source={require("./assets/images/Logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("./assets/icons/user.png")}
            style={styles.icons}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("./assets/icons/locks.png")}
            style={styles.icons}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonloginText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.Register}>Don’t have an account? Register</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#85A5B7",
  },

  innerContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  logo: {
    width: 223,
    height: 109,
    marginBottom: 140,
  },

  icons: {
    width: 20,
    height: 20,
    marginLeft: 20,
    tintColor: "#000000",
  },

  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: "Poppins-Regular",
    color: "#FFFFFF",
    fontSize: 20,
    letterSpacing: 0.5,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    width: 239,
    height: 60,
    marginBottom: 10,
    backgroundColor: "#D9D9D9",
  },

  forgotPassword: {
    marginTop: 15,
    marginBottom: 30,
    color: "#000000",
    fontSize: 15,
    letterSpacing: 1,
    fontFamily: "Poppins-Regular",
    linespacing: 0.5,
  },

  button: {
    backgroundColor: "#CFB296",
    borderRadius: 10,
    height: 59,
    width: 243,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonloginText: {
    color: "#000000",
    fontSize: 24,
    fontFamily: "Poppins-Regular",
    linespacing: 0.5,
  },

  Register: {
    fontFamily: "Poppins-Medium",
    fontSize: 13,
    letterSpacing: 0.7,
    marginTop: 3,
  },
});

export default Login;
