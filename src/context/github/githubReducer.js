import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_SEARCHED,
  LOAD_ALL
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOAD_ALL:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
        searched: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case SET_SEARCHED:
      return {
        ...state,
        searched: true
      };
    default:
      return state;
  }
};
