import React, { Fragment,useContext } from "react";
// import {Link} from 'react-router-dom'
import {useHistory,useLocation} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';

const ExpenseDetails = ({id}) => {
  let {expenses,editExpense}=useContext(GlobalContext)
   let history=useHistory()
   let path=useLocation()
   console.log(path);
  //  console.log(expenses);
   const handleClick=(e)=>{
    if(e.target.textContent==='Add Expense') 
     history.push({pathname:'/addexpense',state:{update:false}})
    else{
     editExpense(id)
     history.push('/') 
   }
  }
  let amount=expenses.reduce((acc,Element)=>acc+parseInt(Element.amount),0)
  let text=(path.pathname==='/editexpense')?'Edit Expense':`Viewing ${expenses.length} expenses totalling $${amount}`
  let btnText=(path.pathname==='/editexpense')?'Edit Expense':'Add Expense'
  return (
    <Fragment>
      <div className="expensedetails">
        <div className="container expense-content">
          <h1>{text}</h1>
          {/* <link to='/addexpense'>Add Expense</link> */}
          <button className="add-expense-btn" onClick={handleClick}>{btnText}</button>
        </div>
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
