import React, { useContext, useReducer, useState } from "react";
import reducer from "./reducer.js";
import { phones } from "./data.js";

export const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: phones,
  total: 0,
  amount: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
