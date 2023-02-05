import { useEffect, useState } from "react";
import Formexpense from "./Formexpense";

const Addexpense = ({ Addtransition, transactions }) => {
  const [isshow, setIsshow] = useState(false);
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((trans) => (trans.desc == "expense" ? exp = exp + parseInt(trans.price) : inc = inc + parseInt(trans.price)));
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <div className="expense">
      <div className="header">
        <span>balance :{income - expense}</span>
        <button onClick={() => setIsshow(!isshow)}>
          {isshow ? "hide" : "Add"}
        </button>
      </div>

      {isshow ? (
        <Formexpense
          Addtransition={Addtransition}
          isshow={isshow}
          setIsshow={setIsshow}
        />
      ) : null}

      <div className="footer">
        <div>expense : {expense}</div>
        <div>income : {income}</div>
      </div>
    </div>
  );
};

export default Addexpense;
