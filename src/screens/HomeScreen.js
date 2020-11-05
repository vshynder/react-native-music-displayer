import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import shortid from "shortid";

import TrackPreview from "../components/TrackPreview";

import { connect } from "react-redux";

import { operations } from "../redux";

function HomeScreen({ navigation, getTracks, topTracks }) {
  useEffect(() => {
    getTracks();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={topTracks}
        renderItem={({ item }) => (
          <TrackPreview navigation={navigation} track={item} />
        )}
        keyExtractor={() => shortid.generate()}
      />
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
  list: {
    width: "100%",
    paddingHorizontal: 10,
  },
});

const mapStateToProps = (state) => ({
  topTracks: state.music,
});

const mapDispatchToProps = (dispatch) => ({
  getTracks: (page) => dispatch(operations.getTopMusic(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
