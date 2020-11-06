import React from "react";

import { ActivityIndicator } from "react-native";

export default function TracksLoader({ isLoading }) {
  return isLoading ? <ActivityIndicator size="large" /> : null;
}
