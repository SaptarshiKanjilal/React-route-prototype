import React, { Fragment,useContext} from "react";
import { GlobalContext } from "../../context/GlobalState";
import ExpenseItemList from "./ExpenseItemList";


const ExpenseWrapper = () => {

  let {settings}=useContext(GlobalContext)
  return (
    <div className="ExpenseWrapper">
      <div className="container expense-wrapper-heading">
        <h3>{(settings.layout==='Expense')?'Expense':'Workout'}</h3>
        <h3>{(settings.layout==='Expense')?'Amount':'Steps'}</h3>
      </div>

      <ExpenseItemList />
    </div>
  );
};

export default ExpenseWrapper;
