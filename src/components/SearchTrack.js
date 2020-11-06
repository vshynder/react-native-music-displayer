import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { operations } from "../redux";

function SearchTrack({ track, navigation, getArtist }) {
  const handelArtistPress = () => {
    navigation.navigate("Artist");
    const name = track.artist.split(" ").join("+");
    getArtist(name);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{track.name}</Text>
      <Text onPress={handelArtistPress} style={styles.artist}>
        {track.artist}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#cbcbcb",
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
  },
  artist: {
    color: "#cbcbcb",
  },
});

const mapDispatchToProps = (dispatch) => ({
  getArtist: (name) => dispatch(operations.getArtist(name)),
});

export default connect(null, mapDispatchToProps)(SearchTrack);
