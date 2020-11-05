import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import shortid from "shortid";

import TrackPreview from "../components/TrackPreview";

import { connect } from "react-redux";

import { operations } from "../redux";

function HomeScreen({ navigation, getTracks, topTracks, isLoading }) {
  const [page, setPage] = useState(2);

  useEffect(() => {
    getTracks(0);
  }, []);

  const renderItem = ({ item }) => (
    <TrackPreview navigation={navigation} track={item} />
  );

  const loadMore = () => {
    getTracks(page);
  };

  const onEndReached = () => {
    if (!isLoading) {
      setPage(page + 1);
      loadMore();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={topTracks}
        renderItem={renderItem}
        keyExtractor={() => shortid.generate()}
        initialNumToRender={8}
        maxToRenderPerBatch={10}
        onEndReached={onEndReached}
        onEndReachedThreshold={0}
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
