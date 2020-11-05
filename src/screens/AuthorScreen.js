import React from "react";
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  ImageBackground,
  View,
} from "react-native";

import { connect } from "react-redux";

function AuthorScreen({ artist }) {
  return artist ? (
    <View style={styles.container}>
      <ImageBackground
        style={styles.artistImage}
        source={{ uri: artist.image[3]["#text"] }}
      >
        <Text>{artist.name}</Text>
        <View>
          <Text>
            Tags:
            {artist.tags.tag.map((tag, index) => (
              <Text key={index}>{tag.name},</Text>
            ))}
          </Text>
        </View>
        <Text>{artist.bio.summary}</Text>
      </ImageBackground>
    </View>
  ) : (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  artistImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

const mapStateToProps = (state) => ({
  artist: state.artist,
});

export default connect(mapStateToProps, null)(AuthorScreen);
