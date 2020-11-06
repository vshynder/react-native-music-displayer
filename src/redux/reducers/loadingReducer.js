import actions from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const loadingReducer = createReducer(false, {
  [actions.getTopMusicRequest]: (state, action) => true,
  [actions.getTopMusicSuccess]: (state, action) => false,
});
