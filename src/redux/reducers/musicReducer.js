import actions from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const musicReducer = createReducer(null, {
  [actions.getTopMusicSuccess]: (state, action) => {
    if (state) {
      return [...state, ...action.payload];
    } else {
      return action.payload;
    }
  },
  [actions.clearList]: (state, action) => [],
});
