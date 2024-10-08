import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer'

// Initial State
const initialState = {
  transactions: localStorage.getItem('transaction') ? JSON.parse(localStorage.getItem('transaction')).transactions :[]
}

// Create Context
export const GlobalContext = createContext(initialState)


// Provider Component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  // Action
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  // Action
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }
  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
      }} 
    >
      {children}
    </GlobalContext.Provider>
  )
}