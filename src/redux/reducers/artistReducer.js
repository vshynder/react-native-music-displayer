import actions from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const artistReducer = createReducer(null, {
  [actions.getTopMusicRequest]: (state, action) => null,
  [actions.getArtistRequest]: (state, action) => null,
  [actions.getArtistSuccess]: (state, action) => action.payload,
});
