import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const Amount = transactions.map((transaction) => transaction.amount);
  const total = Amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Balance</h4>
      <h1> Rs {total} </h1>
    </>
  );
};
