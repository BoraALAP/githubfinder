import React, { useReducer } from "react";
import axios from "axios";
import githubContext from "./githubContext";
import githubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_SEARCHED,
  LOAD_ALL
} from "../types";

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    searched: false,
    alertMessage: null,
    alertType: null
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const url = `https://api.github.com/`;
  let githubClientId;
  let githubClientSecret;

  if (process.env.NODE_ENV !== "production") {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
  }
  const credentials = `client_id=${githubClientId}&client_secret=${githubClientSecret}`;

  // Load All
  const loadAll = async () => {
    setLoading();
    const res = await axios.get(`${url}users?${credentials}`);
    dispatch({ type: LOAD_ALL, payload: res.data });
  };

  // Clear Users
  const clearUsers = async () => {
    setLoading();
    await dispatch({ type: CLEAR_USERS });
    await loadAll();
  };

  // Search Users
  const searchUsers = async text => {
    setLoading();
    setSearched();
    const res = await axios.get(`${url}search/users?q=${text}&${credentials}`);
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  // Get User
  const getUser = async username => {
    setLoading();
    const res = await axios.get(`${url}users/${username}?${credentials}`);
    dispatch({ type: GET_USER, payload: res.data });
  };

  // Get Repos
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `${url}users/${username}/repos?per_page=5&sort=created:asc&${credentials}`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Set Searched
  const setSearched = () => dispatch({ type: SET_SEARCHED });

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searched: state.searched,
        alertMessage: state.alertMessage,
        alertType: state.alertType,
        clearUsers,
        searchUsers,
        getUser,
        getUserRepos,
        loadAll
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
