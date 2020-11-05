import { createAction } from "@reduxjs/toolkit";

const getTopMusicRequest = createAction("getTopMusic/request");
const getTopMusicSuccess = createAction("getTopMusic/success");
const getTopMusicError = createAction("getTopMusic/error");

const getArtistRequest = createAction("getArtist/request");
const getArtistSuccess = createAction("getArtist/success");
const getArtistError = createAction("getArtist/error");

const searchTrackRequest = createAction("searchTrack/request");
const searchTrackSuccess = createAction("searchTrack/success");
const searchTrackError = createAction("searchTrack/error");

export default {
  getTopMusicRequest,
  getTopMusicSuccess,
  getTopMusicError,

  getArtistRequest,
  getArtistSuccess,
  getArtistError,

  searchTrackRequest,
  searchTrackSuccess,
  searchTrackError,
};
