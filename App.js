import "react-native-gesture-handler";

import React from "react";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  musicReducer,
  artistReducer,
  searchReducer,
  loadingReducer,
} from "./src/redux";

import WrappedApp from "./WrappedApp";

const store = configureStore({
  reducer: {
    music: musicReducer,
    artist: artistReducer,
    search: searchReducer,
    isLoading: loadingReducer,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  );
}
