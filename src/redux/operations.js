import actions from "./actions";
import { API_KEY } from "../constants";

const getTopMusic = (page) => async (dispatch) => {
  dispatch(actions.getTopMusicRequest());

  try {
    const TOP_MUSIC_URL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json&limit=100${
      page ? "&page=" + page : ""
    }`;

    const response = await fetch(TOP_MUSIC_URL);
    const { tracks } = await response.json();
    dispatch(actions.getTopMusicSuccess(tracks.track));
  } catch (error) {
    dispatch(actions.getTopMusicError(error));
  }
};

const getArtist = (name) => async (dispatch) => {
  dispatch(actions.getArtistRequest());

  try {
    const GET_ARTIST_URL = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=${API_KEY}&format=json`;
    const response = await fetch(GET_ARTIST_URL);
    const { artist } = await response.json();
    dispatch(actions.getArtistSuccess(artist));
  } catch (error) {
    dispatch(actions.getArtistError(error));
  }
};

export default { getTopMusic, getArtist };
