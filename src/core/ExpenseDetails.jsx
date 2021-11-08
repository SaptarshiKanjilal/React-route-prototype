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
  let text=(path.pathname!=='/settings')?((path.pathname==='/editexpense')?'Edit Expense':`Viewing ${expenses.length} expenses totalling $${amount}`):'Settings'

  let btnText=(path.pathname==='/editexpense')?'Edit Expense':'Add Expense'

  
  return (
    <Fragment>
      <div className="expensedetails"style={(path.pathname==='/settings')?{color:'white',backgroundColor:'rgb(141, 133, 133)'}:{}}>
        <div className="container expense-content" style={(path.pathname==='/settings')?{position:'absolute',bottom:'10px',left:'50%',transform:'translateX(-50%)'}:{}}>
          <h1 style={(path.pathname==='/settings')?{textAlign:'center',fontSize:'55px'}:{}}>{text}</h1>
          {/* <link to='/addexpense'>Add Expense</link> */}
          {
            (path.pathname!=='/settings')?<button className="add-expense-btn" onClick={handleClick}>{btnText}</button>:''}

        </div>
         {
          (path.pathname==='/settings')?<div className='something'></div>:''
         }
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
