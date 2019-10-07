import React, { useReducer } from "react";
import alertContext from "./alertContext";
import alertReducer from "./alertReducer";

import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set Alert
  const setAlert = (text, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { 
        message: text, 
        type: type 
      }
    });
    removeAlert();
  };

  const removeAlert = (time = 5000) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, time);
  };

  return (
    <alertContext.Provider
      value={{
        alert: state,
        setAlert,
        removeAlert
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
