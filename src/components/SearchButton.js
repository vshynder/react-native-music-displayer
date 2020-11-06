import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function SearchButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="search1" size={24} color="black" />
    </TouchableOpacity>
  );
}
