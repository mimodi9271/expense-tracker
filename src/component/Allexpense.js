import { useEffect, useState } from "react";

const Allexpense = ({ transactions, removeHandler }) => {
  const [searchitem, setSearchitem] = useState("");
  const [clone , setClone] = useState([]);

  const filterserach = (search) => {
    if(search == "" && !search){
        setClone(transactions);
        return;
    }
    const filteritems = transactions.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
    setClone(filteritems);
  }

  useEffect(()=>{
    setClone(transactions)
    filterserach(searchitem)
  } , [transactions])

  const changeHandler = (e) => {
    setSearchitem(e.target.value);
    filterserach(e.target.value);
  }
  return (
    <div className="alltrans">
      <input type="text" value={searchitem} onChange={changeHandler} />
      {clone.map((trans) => {
        return (
          <div
            className={
              trans.desc == "expense" ? "transpartred" : "transpartgreen"
            }
            key={trans.id}
          >
            <span>{trans.title}</span>
            <span>{trans.price}</span>
            <button onClick={() => removeHandler(trans.id)} className="butt2">
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Allexpense;
