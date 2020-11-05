import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
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
