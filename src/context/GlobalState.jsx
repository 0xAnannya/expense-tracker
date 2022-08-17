import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialstate = {
  transactions: [],
};

//create context
export const GlobalContext = createContext(initialstate);

//provider contect
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);

  //actions that are going to make call to the reducers
  function deleteTransaction(id) {
    dispatch({
      type: "Delete_Transaction",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "Add_Transaction",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
