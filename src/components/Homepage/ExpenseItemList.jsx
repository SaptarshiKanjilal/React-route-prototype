import React, { Fragment,useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import ExpenseListItem from "./ExpenseListItem";



const ExpenseItemList = () => {

  let {expenses}=useContext(GlobalContext)
  return (
    <Fragment>
      <div className="container">
        <ul className="ExpenseItemList">
          {/* <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem />
          <ExpenseListItem /> */
          
          expenses.map((Element,idx)=>{
            return(
              <ExpenseListItem description={Element.description} date={Element.date} amount={Element.amount} key={idx} />
            )
          })
          
          
          }


        </ul>
      </div>
    </Fragment>
  );
};

export default ExpenseItemList;
