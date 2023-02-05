import { useEffect, useState } from "react";
import Addexpense from "./Addexpense";
import Allexpense from "./Allexpense";

const Expense = () => {
  const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem("trans")) || []);

  useEffect(()=>{
    localStorage.setItem("trans" , JSON.stringify(transactions))
  } , [transactions])

  const Addtransition = (transaction) => {
    // console.log(transaction);
    setTransactions([...transactions, transaction]);
  };
  const removeHandler = (id) => {
    const filteritems = transactions.filter(item => item.id !== id);
    setTransactions(filteritems);
  };

  return (
    <>
      <Addexpense Addtransition={Addtransition} transactions={transactions} />
      <Allexpense transactions={transactions} removeHandler={removeHandler} />
    </>
  );
};

export default Expense;
