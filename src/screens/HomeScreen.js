import React, { useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

import { connect } from "react-redux";

import { operations } from "../redux";

function HomeScreen({ navigation, getMovies, topTracks }) {
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={topTracks}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <Text>Home screen</Text>
      <Button
        title="Go to author page"
        onPress={() => navigation.navigate("Author")}
      />
      <Button
        title="Go to search page"
        onPress={() => navigation.navigate("Search")}
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
});

const mapStateToProps = (state) => ({
  topTracks: state.music,
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: () => dispatch(operations.getTopMusic()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
