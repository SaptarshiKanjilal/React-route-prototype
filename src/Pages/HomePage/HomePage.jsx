import React, { Fragment,useContext } from "react";
import ExpenseDetails from "../../core/ExpenseDetails";
import ExpenseFilterForm from "../../components/Homepage/ExpenseFilterForm";
import ExpenseWrapper from "../../components/Homepage/ExpenseWrapper";
import { GlobalContext } from '../../context/GlobalState';

const HomePage = () => {
   
  let {expenses}=useContext(GlobalContext)
  let amount=expenses.reduce((acc,Element)=>acc+parseInt(Element.amount),0)
  
   return (
    <Fragment>
      <ExpenseDetails />
      <ExpenseFilterForm />
      <ExpenseWrapper />
    </Fragment>
  );
};

export default HomePage;
