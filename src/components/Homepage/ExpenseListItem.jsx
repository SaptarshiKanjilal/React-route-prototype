import React from "react";

const ExpenseListItem = ({description,date,amount,key}) => {
  let newDate=date.split('-')
  // console.log(newDate);
  let month=['January','February','March','April','May','June','July','August','September','October','November','December']
  return (
    <li className="expense-item" key={key} >
      <span>
        <h5>{description}</h5>
        <h6>{newDate[2]} {month[Number(newDate[1])-1]} {newDate[0]}</h6>
      </span>

      <strong>${amount}</strong>
    </li>
  );
};

export default ExpenseListItem;
