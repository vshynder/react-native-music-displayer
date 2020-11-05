import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import AuthorScreen from "./src/screens/AuthorScreen";
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createStackNavigator();

export default function WrappedApp() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Author" component={AuthorScreen} />
    //     <Stack.Screen name="Search" component={SearchScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <HomeScreen />
  );
}
