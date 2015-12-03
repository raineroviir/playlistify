import * as types from '../constants/ActionTypes';

const initialState = {
  accessToken: null,
  following: [],
  likes: {},
  playlists: [],
  user: null
}

export default function auth(state = initialState, action) {
  switch(action.type) {
    case types.RECEIVE_ACCESS_TOKEN:
      return {
        ...state, accessToken: action.accessToken
      }

    case types.RECEIVE_FOLLOWING:
      return {
        ...state, following: action.artistList
      }
    default:
      return state;
  }
}
