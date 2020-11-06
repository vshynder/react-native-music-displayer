import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function SearchBar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Search for your favorite songs!</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <AntDesign name="search1" size={24} color="black" />
      </TouchableOpacity>
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
