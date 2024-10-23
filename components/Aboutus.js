import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import loadFonts from "./fonts";
import BottomNav from "./bottomNav";

function Aboutus({ navigation }) {
  const fontsLoaded = loadFonts();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Image
          style={styles.logo}
          source={require("./assets/images/Logo.png")}
        />

        <View style={styles.head}>
          <Text style={styles.about}>About Us</Text>
        </View>

        <View style={styles.sentence}>
          <Text style={styles.details}>
            Welcome to our Aesthetic Realistic Thought-provoking Supportive, or
            for short, ARTS Connect App! We are dedicated to making art more
            accessible and engaging for everyone. Our app offers a rich digital
            experience that allows users to explore a diverse collection of
            artworks, learn about artists, and discover the stories behind each
            piece.
          </Text>
          <Text style={styles.details}>
            With user-friendly navigation, our app features virtual tours,
            detailed descriptions, and high-quality images of artworks from
            various periods and styles. We also provide interactive features,
            such as curated playlists, educational resources, and upcoming event
            notifications to keep you connected to the art community.
          </Text>
          <Text style={styles.details}>
            Our mission is to inspire a love for art and culture, fostering a
            deeper appreciation for creativity in all its forms. Whether you’re
            a seasoned art enthusiast or a curious newcomer, our app invites you
            to experience the beauty and significance of art like never before.
            Join us on this journey of discovery!
          </Text>
        </View>

        <Image
          style={styles.devImage}
          source={require("./assets/icons/Dev.png")}
        />

        <View style={styles.DevImageContainer}>
          <View style={styles.blocks}>
            <Image
              style={styles.devimages}
              source={require("./assets/images/profile.jpg")}
            />
            <Text style={styles.parts}>CANARIA VS NADURA</Text>
            <Text style={styles.parts}>UI DESIGN PRINCIPLE</Text>
            <Text style={styles.parts}>UX DESIGN LAW</Text>
            <Text style={styles.description}>
              Hi! I'm Chief, and at ARTS, focus on making mobile apps that are
              user-friendly and easy to navigate. I kept things simple and
              consistent, so you know what to expect. I want everyone to be able
              to use the app easily, no matter their experience level. My goal
              is to create a great user experience that you will love.
            </Text>
          </View>

          <View style={styles.doubleImageContainer}>
            <Image
              style={styles.devimages1}
              source={require("./assets/images/profile.jpg")}
            />
            <Image
              style={styles.devimages1}
              source={require("./assets/images/profile.jpg")}
            />
          </View>
          <Text style={styles.parts}> LEAL, KATHLYN M.</Text>
          <Text style={styles.parts}> VILLANOVAR, ANGELENE</Text>
          <Text style={styles.parts}>UI DESIGN PRINCIPLE</Text>
          <Text style={styles.parts}>UX DESIGN LAW</Text>
          <Text style={styles.description}>
            A user persona is a made-up character that represents our target
            audience. We create this persona to understand their needs, goals,
            and challenges better. By looking at research and feedback, we
            outline details like age, job, and what they want from our app. This
            helps me make design choices that really connect with real users and
            improve their experience. In short, it keeps us focused on what
            matters most to the people using our app.
          </Text>

          <View style={styles.doubleImageContainer}>
            <Image
              style={styles.devimages1}
              source={require("./assets/images/profile.jpg")}
            />
            <Image
              style={styles.devimages1}
              source={require("./assets/images/profile.jpg")}
            />
          </View>
          <Text style={styles.parts}>MABUTI, Cash SAVELLO</Text>
          <Text style={styles.parts}>OMEGA, RHEA</Text>
          <Text style={styles.parts}>UI DESIGN PRINCIPLE</Text>
          <Text style={styles.parts}>UX DESIGN LAW</Text>
          <Text style={styles.description}>
            We think color theory is really important because it shows how
            colors work together and affect our feelings. A good color palette
            can make a big difference in design.{"\n"}

            {"\n"}One rule we like to use is the 60/30/10 rule. This means using
            three colors: 60% for the main color, 30% for a secondary color, and
            10% for an accent color. This setup helps create a balanced and
            nice-looking design. The main color sets the vibe, the secondary
            color adds some depth, and the accent color makes certain parts pop.
            By following this rule, we aim to make designs that look great and
            connect with users.
          </Text>

          <View style={styles.blocks}>
            <Image
              style={styles.devimages}
              source={require("./assets/images/profile.jpg")}
            />
            <Text style={styles.parts}>Ilano, jasper</Text>
            <Text style={styles.parts}>UI DESIGN PRINCIPLE</Text>
            <Text style={styles.description}>
              I believe that typography and spacing are really important for
              creating a great user experience in our mobile app. Good
              typography helps me communicate our message clearly, making it
              easier for users to read and engage with the content. I choose
              fonts that are legible and fit our brand’s style.{"\n"}

              {"\n"}Spacing is just as crucial; it creates a clean layout and
              guides users’ eyes through the app. Proper spacing between text
              and elements improves readability and makes the interface feel
              more intuitive. By focusing on these elements, I aim to make the
              app user-friendly and enjoyable for everyone.
            </Text>
          </View>
        </View>

        <View style={styles.copyright}>
          <Text style={styles.copyrightText}>
            Copyright © 2022. All Rights Reserved.
          </Text>
        </View>
      </ScrollView>
      <BottomNav navigation={navigation} currentScreen="Account" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  scrollContainer: {
    paddingBottom: 45,
  },

  logo: {
    width: 89,
    height: 42,
    alignSelf: "center",
    marginTop: 30,
  },
  
  head: {
    alignSelf: "center",
    marginVertical: 20,
    right: 105,
  },

  about: {
    fontSize: 30,
  },

  sentence: {
    color: "black",
    fontSize: 15,
    marginHorizontal: 20,
  },

  details: {
    color: "black",
    fontSize: 15,
    marginVertical: 10,
    textAlign: "left",
  },

  devImage: {
    width: 68,
    height: 68,
    alignSelf: "center",
    borderRadius: 50,
  },

  DevImageContainer: {
    marginVertical: 20,
    alignItems: "center",
  },

  blocks: {
    alignItems: "center",
    marginVertical: 20,
  },

  doubleImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },

  devimages: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },

  devimages1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 5,
  },

  parts: {
    color: "black",
    fontSize: 15,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  description: {
    color: "black",
    fontSize: 15,
    alignSelf: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  copyright: {
    marginVertical: 30,
    alignSelf: "center",
  },
  
  copyrightText: {
    color: "black",
    fontSize: 15,
  },
});

export default Aboutus;
