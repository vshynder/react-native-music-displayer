import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import SearchButton from "./SearchButton";

export default function SearchBar({ navigation }) {
  const handlePress = () => {
    navigation.navigate("Search");
  };
  return (
    <View style={styles.container}>
      <Text>Search for your favorite songs!</Text>
      <SearchButton onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
