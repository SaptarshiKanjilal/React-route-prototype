import React, { Fragment,useContext } from "react";
// import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState';

const ExpenseDetails = () => {
  let {expenses}=useContext(GlobalContext)
   let history=useHistory()
   console.log(expenses);
   const handleClick=()=>{
     history.push('/addexpense')
   }
  let amount=expenses.reduce((acc,Element)=>acc+parseInt(Element.amount),0)
  return (
    <Fragment>
      <div className="expensedetails">
        <div className="container expense-content">
          <h1>Viewing {expenses.length} expenses totalling ${amount}</h1>
          {/* <link to='/addexpense'>Add Expense</link> */}
          <button className="add-expense-btn" onClick={handleClick}>Add Expense</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
