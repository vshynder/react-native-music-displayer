import actions from "./actions";
import { API_KEY } from "../constants";

const getTopMusic = (page) => async (dispatch) => {
  dispatch(actions.getTopMusicRequest());

  const TOP_MUSIC_URL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json${
    page ? "&page=" + page : ""
  }`;

  fetch(TOP_MUSIC_URL)
    .then((response) => response.json())
    .then(({ tracks }) => dispatch(actions.getTopMusicSuccess(tracks.track)))
    .catch((error) => dispatch(actions.getTopMusicError(error)));
};

const getArtist = (name) => (dispatch) => {
  dispatch(actions.getArtistRequest());

  const GET_ARTIST_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${API_KEY}&format=json`;
  fetch(GET_ARTIST_URL)
    .then((response) => response.json())
    .then(({ artist }) => dispatch(actions.getArtistSuccess(artist)))
    .catch((error) => dispatch(actions.getArtistError(error)));
};

const searchTrack = (query) => (dispatch) => {
  dispatch(actions.searchTrackRequest());

  const SEARCH_SONG_URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=${API_KEY}&format=json`;

  fetch(SEARCH_SONG_URL)
    .then((response) => response.json())
    .then(({ results }) =>
      dispatch(actions.searchTrackSuccess(results.trackmatches.track))
    )
    .catch((error) => dispatch(actions.searchTrackError(error)));
};

export default { getTopMusic, getArtist, searchTrack };
