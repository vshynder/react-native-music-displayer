import actions from "./actions";
import { API_KEY } from "../constants";

const TOP_MUSIC_URL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&format=json`;

const getTopMusic = () => async (dispatch) => {
  dispatch(actions.getTopMusicRequest());

  try {
    const response = await fetch(TOP_MUSIC_URL);
    const { tracks } = await response.json();
    dispatch(actions.getTopMusicSuccess(tracks.track));
  } catch (error) {
    dispatch(actions.getTopMusicError(error));
  }
};

export default {
  getTopMusic,
};
