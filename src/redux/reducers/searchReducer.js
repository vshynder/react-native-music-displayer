import actions from "../actions";
import { createReducer } from "@reduxjs/toolkit";

export const searchReducer = createReducer(
  { results: [], isLoading: false, error: null },
  {
    [actions.searchTrackRequest]: (state, action) => ({
      ...state,
      results: [],
      isLoading: true,
    }),
    [actions.searchTrackSuccess]: (state, action) => ({
      ...state,
      results: action.payload,
      isLoading: false,
    }),
    [actions.searchTrackError]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  }
);
