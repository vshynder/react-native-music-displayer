import React, { useState } from "react";
import { StyleSheet, View, TextInput, FlatList, Text } from "react-native";

import { connect } from "react-redux";
import { operations } from "../redux";

import _ from "lodash";
import shortid from "shortid";

function AuthorScreen({ results, getTracks }) {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    const queryString = query.split(" ").join("+");
    getTracks(queryString);
  };

  const renderItem = ({ item }) => {
    console.log(item);
    return <Text>{item.name}</Text>;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for songs here"
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={handleSubmit}
        value={query}
      />
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
  input: {
    width: "100%",
    height: 40,
    fontSize: 24,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cbcbcb",
    marginBottom: 20,
  },
  list: {
    width: "100%",
    marginLeft: 20,
  },
});

const mapStateToProps = (state) => ({
  results: state.search.results,
});

const mapDispatchToProps = (dispatch) => ({
  getTracks: (query) => dispatch(operations.searchTrack(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorScreen);
