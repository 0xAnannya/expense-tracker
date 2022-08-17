import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTrans = {
      id: Math.floor(Math.random() * 1000),
      text,
      amount: +amount,
    };
    addTransaction(newTrans);
    setAmount("");
    setText("");
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter transaction.."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />( USE negative (-) forexpense and positive (+) for
            income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount.."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
