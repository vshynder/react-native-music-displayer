import React from "react";

import { View, Text, StyleSheet, Linking, Alert, Image } from "react-native";
import { connect } from "react-redux";
import { operations } from "../redux";

function TrackPreview({ track, navigation, getArtist }) {
  const imageUri = track.image.length
    ? track.image[3]
      ? track.image[3]["#text"]
      : track.image[2]["#text"]
      ? track.image[2]["#text"]
      : track.image[1]["#text"]
    : null;

  const handleArtistPress = (e) => {
    navigation.navigate("Author");
    const name = track.artist.name.split(" ").join("+");
    getArtist(name);
  };

  const handleLinkPress = async (e) => {
    const supported = await Linking.canOpenURL(track.url);
    if (supported) {
      await Linking.openURL(track.url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View style={styles.container}>
      {imageUri ? (
        <Image
          style={styles.image}
          source={{
            uri: imageUri,
          }}
        />
      ) : null}
      <View style={styles.text}>
        <Text style={styles.songName}>{track.name}</Text>
        <Text onPress={handleArtistPress} style={styles.artistName}>
          {track.artist.name}
        </Text>
        <Text onPress={handleLinkPress} style={styles.link}>
          {track.url.length > 45 ? track.url.substr(0, 45) + "..." : track.url}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  text: {
    marginLeft: 12,
    maxWidth: "70%",
    height: 100,
    justifyContent: "space-between",
  },
  songName: {
    fontSize: 24,
  },
  artistName: {
    fontSize: 20,
    color: "#cbcbcb",
  },
  image: {
    width: 100,
    height: 100,
  },
  link: {
    fontSize: 10,
    color: "#cbcbcb",
  },
});

const mapDispatchToProps = (dispatch) => ({
  getArtist: (name) => dispatch(operations.getArtist(name)),
});

export default connect(null, mapDispatchToProps)(TrackPreview);
