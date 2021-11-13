import React, { Fragment,useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ExpenseListItem from "./ExpenseListItem";
import { IoFootsteps } from "react-icons/io5";


const ExpenseItemList = () => {

  let {expenses,fitness,settings}=useContext(GlobalContext)
  return (
    <Fragment>
      <div className="container">
        <ul className="ExpenseItemList">
      
         {
          (settings.layout==='Expense')?(expenses.map((Element,idx)=>{
            return(
              <ExpenseListItem description={Element.description} date={Element.date} amount={Element.amount} idx={idx} icon={'$'} />
            )
          })):(fitness.map((Element,idx)=>{
            return(
              <ExpenseListItem description={Element.distance} date={Element.date} amount={Element.steps} idx={idx} icon={<IoFootsteps/>} />
            )
          }))
         } 
          
          
          
          

          
        </ul>
      </div>
    </Fragment>
  );
};

export default ExpenseItemList;
