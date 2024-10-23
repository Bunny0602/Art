import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function Picasso({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.rectangle} />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.backCircle} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={require("./assets/icons/chevron-left.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/images/picasco.png")}
            style={styles.artistImage}
          />
          <Text style={styles.artistName}>Pablo Picasso</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.artistDescription}>
            <Text style={styles.boldText}>Who is Pablo Picasso?</Text>
            {"\n"}
            Pablo Picasso (1881–1973) was a Spanish painter, sculptor, and one
            of the most influential artists of the 20th century. Born in Málaga,
            Spain, he showed artistic talent from a young age, eventually
            studying at the Royal Academy of San Fernando in Madrid. Throughout
            his prolific career, Picasso explored various styles and mediums,
            co-founding the Cubist movement, which transformed traditional
            approaches to art by breaking subjects into geometric shapes and
            presenting multiple viewpoints simultaneously.{"\n"}
          </Text>
          <Text style={styles.artistDescription}>
            <Text style={styles.boldText}>{"\n"}Legacy:</Text>
            {"\n"}
            Picasso’s contributions to art are immense. He produced an estimated
            50,000 artworks, including paintings, sculptures, ceramics,
            drawings, and textiles. His innovative techniques and exploration of
            form and perspective influenced countless artists and movements,
            solidifying his status as a pioneering figure in modern art. Picasso
            passed away on April 8, 1973, in Mougins, France, leaving behind a
            rich legacy that continues to inspire artists and art lovers around
            the world.
          </Text>

          <Text style={styles.artworksTitle}>Artworks</Text>

          <View style={styles.artItem}>
            <Image
              source={require("./assets/images/guernica.png")}
              style={styles.artImage}
            />
            <Text style={styles.guernica}>Guernica (1937)</Text>
          </View>

          <View style={styles.art}>
            <View style={styles.artItemSmall}>
              <Image
                source={require("./assets/images/les.png")}
                style={styles.artsImage}
              />
              <Text style={styles.artTitle}>
                Les Demoiselles d’Avignon (1907)
              </Text>
            </View>
            <View style={styles.artItemSmall}>
              <Image
                source={require("./assets/images/old.png")}
                style={styles.artsImage}
              />
              <Text style={styles.artTitle}>The Old Guitarist (1903)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B6C9D4",
  },

  rectangle: {
    height: 40,
    backgroundColor: "#B6C9D4",
    width: "100%",
  },

  scrollContainer: {
    alignItems: "center",
    paddingBottom: 460,
  },

  imageContainer: {
    marginTop: 30,
    alignItems: "center",
    position: "absolute",
    zIndex: 1,
  },

  artistImage: {
    width: 189,
    height: 248,
    borderRadius: 18,
    resizeMode: "cover",
  },

  artistName: {
    marginTop: 5,
    fontSize: 30,
    color: "#3D3A3A",
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    letterSpacing: 0.5,
  },

  backButton: {
    position: "absolute",
    top: 12,
    right: 308,
    zIndex: 2,
  },

  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#FFFFFF",
  },

  backCircle: {
    position: "absolute",
    width: 38,
    height: 38,
    backgroundColor: "#000000",
    borderRadius: 22,
    top: 5,
    right: 300,
    zIndex: 1,
  },

  textContainer: {
    width: 340,
    height: 580,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    marginTop: 160,
  },

  artistDescription: {
    fontSize: 13,
    color: "#3D3A3A",
    fontFamily: "Poppins-Regular",
    textAlign: "left",
    top: 150,
  },

  boldText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
  },

  artworksTitle: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#000000",
    marginTop: 160,
    letterSpacing: 0.2,
    top: 10,
  },

  artItem: {
    alignItems: "center",
    marginBottom: 10,
  },

  artImage: {
    width: 352,
    height: 178,
    resizeMode: "contain",
    marginBottom: 5,
    right: 0,
  },

  art: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  artItemSmall: {
    alignItems: "center",
    width: 180,
  },

  artsImage: {
    width: 179,
    height: 180,
    resizeMode: "contain",
    marginBottom: 5,
    right: 30,
    bottom: 40,
  },

  guernica: {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    color: "#000000",
    bottom: 30,
    fontSize: 15,
    letterSpacing: 0.5,
    right: 110,
    height: 30,
    width: 110,
    paddingTop: 5,
    textAlign: "center",
    borderRadius: 5,
  },

  artTitle: {
    fontSize: 15,
    color: "#000000",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    padding: 5,
    textAlign: "center",
    borderRadius: 5,
    right: 30,
    bottom: 47,
  },
});

export default Picasso;
