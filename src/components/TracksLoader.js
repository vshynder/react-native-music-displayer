import React from "react";

import { ActivityIndicator } from "react-native";

import { connect } from "react-redux";

function TracksLoader({ isLoading }) {
  return isLoading ? <ActivityIndicator size="large" /> : null;
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
});

export default connect(mapStateToProps, null)(TracksLoader);
