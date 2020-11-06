import React, { useState } from "react";
import { StyleSheet, View, TextInput, FlatList, Text } from "react-native";

import { connect } from "react-redux";
import { operations } from "../redux";

import _ from "lodash";
import shortid from "shortid";

import SearchTrack from "../components/SearchTrack";
import SearchButton from "../components/SearchButton";

function AuthorScreen({ results, getTracks, navigation }) {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    const queryString = query.split(" ").join("+");
    getTracks(queryString);
  };

  const renderItem = ({ item }) => (
    <SearchTrack navigation={navigation} track={item} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder="Search for songs here"
          onChangeText={(text) => setQuery(text)}
          onSubmitEditing={handleSubmit}
          value={query}
        />
        <SearchButton onPress={handleSubmit} />
      </View>

      <FlatList
        style={styles.list}
        data={results}
        renderItem={renderItem}
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
  search: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cbcbcb",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 24,
  },
  list: {
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});

const mapStateToProps = (state) => ({
  results: state.search.results,
});

const mapDispatchToProps = (dispatch) => ({
  getTracks: (query) => dispatch(operations.searchTrack(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorScreen);
