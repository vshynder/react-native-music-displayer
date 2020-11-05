import React from "react";
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  Image,
  View,
  FlatList,
} from "react-native";

import { connect } from "react-redux";
import shortid from "shortid";

function AuthorScreen({ artist }) {
  return artist ? (
    <View style={styles.container}>
      <Image
        style={styles.artistImage}
        source={{ uri: artist.image[3]["#text"] }}
      />
      <Text style={styles.artistName}>{artist.name}</Text>
      <View style={styles.artistBio}>
        <View style={styles.tagsCont}>
          <Text>Tags: </Text>
          <FlatList
            style={styles.list}
            data={artist.tags.tag}
            renderItem={({ item, index }) => (
              <Text style={styles.tags} key={index}>
                {item.name}
              </Text>
            )}
            keyExtractor={() => shortid.generate()}
            horizontal
          />
        </View>
        <View>
          <Text>{artist.bio.summary}</Text>
        </View>
      </View>
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
    justifyContent: "flex-start",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  artistImage: {
    width: "100%",
    height: "30%",
    resizeMode: "contain",
  },
  artistName: {
    fontSize: 34,
    marginBottom: 10,
    marginTop: 60,
  },
  artistBio: {
    paddingHorizontal: 10,
  },
  tagsCont: {
    marginBottom: 20,
    height: 100,
  },
  tags: {
    padding: 10,
  },
  list: {
    marginTop: 15,
  },
});

const mapStateToProps = (state) => ({
  artist: state.artist,
});

export default connect(mapStateToProps, null)(AuthorScreen);
