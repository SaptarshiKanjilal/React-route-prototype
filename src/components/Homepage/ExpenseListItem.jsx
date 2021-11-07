import React from "react";
import {useHistory} from 'react-router-dom'

const ExpenseListItem = ({description,date,amount,idx}) => {
  let newDate=date.split('-')
  let history=useHistory()
  // console.log(newDate);
  let month=['January','February','March','April','May','June','July','August','September','October','November','December']
  
  const handleClick=()=>{
        history.push({pathname:'/editexpense',state:{id:idx,update:true}})
  }

  return (
    <li className="expense-item" key={idx} onClick={handleClick} >
      <span>
        <h5>{description}</h5>
        <h6>{newDate[2]} {month[Number(newDate[1])-1]} {newDate[0]}</h6>
      </span>

      <strong>${amount}</strong>
    </li>
  );
};

export default ExpenseListItem;
