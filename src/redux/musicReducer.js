import actions from "./actions";
import { createReducer } from "@reduxjs/toolkit";

export const musicReducer = createReducer([], {
  [actions.getTopMusicSuccess]: (state, action) => action.payload,
});
