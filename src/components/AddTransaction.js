import React, {useState, useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
const AddTransaction = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)
  const {addTransaction} = useContext(GlobalContext)

  const onSubmit = (e) => {
    e.preventDefault()
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: Number(amount)
    }

    addTransaction(newTransaction)
    setAmount(0)
    setText('')
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
