export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION': {
      const newTransactions = {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
      localStorage.setItem('transaction', JSON.stringify(newTransactions))
      return newTransactions;
    }
    case 'ADD_TRANSACTION': {
      const newTransactions = {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
      localStorage.setItem('transaction', JSON.stringify(newTransactions))
      return newTransactions;
    }
    default: {
      return state;
    }
  }
}