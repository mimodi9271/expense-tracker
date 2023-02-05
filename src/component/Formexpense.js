import { useState } from "react";

const Formexpense = ({Addtransition , isshow , setIsshow}) => {
  const [transaction, setTransaction] = useState({
    title: "",
    price: "",
    desc: "",
  });

  const changehandler = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
    // console.log(transaction);
  };

  const sumitHandler =(e) => {
    console.log(transaction)
    e.preventDefault();
    Addtransition({...transaction , id : new Date().getTime()});
    setIsshow(!isshow)
  }

  return (
    <form onSubmit={sumitHandler}>
      <input
        type="text"
        name="title"
        value={transaction.title}
        onChange={changehandler}
        placeholder="inset your title ..."
        className="inp"
      />
      <input
        type="number"
        name="price"
        value={transaction.price}
        onChange={changehandler}
        placeholder="inset your price ..."
        className="inp"
      />
      <div className="radio">
        <input
          type="radio"
          id="0"
          name="desc"
          value="expense"
          onChange={changehandler}
        />
        <label htmlFor="0">expense</label>
        <input
          type="radio"
          id="1"
          name="desc"
          value="income"
          onChange={changehandler}
        />
        <label htmlFor="1">income</label>
      </div>
      <button type="submit" className="butt">ADD</button>
    </form>
  );
};

export default Formexpense;
