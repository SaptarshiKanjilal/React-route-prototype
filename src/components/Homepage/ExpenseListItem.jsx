import React,{useContext} from "react";
import {useHistory} from 'react-router-dom'
import { GlobalContext } from "../../context/GlobalState";


const ExpenseListItem = ({description,date,amount,idx}) => {
  let newDate=date.split('-')
  let history=useHistory()
  let {settings}=useContext(GlobalContext)
  // console.log(newDate);
  let month=['January','February','March','April','May','June','July','August','September','October','November','December']
  
  const handleClick=()=>{
        history.push({pathname:'/editexpense',state:{id:idx,update:true}})
  }

  return (
    <li className="expense-item" key={idx} onClick={handleClick} style={(settings.theme==='Dark')?{backgroundColor:'#364064',color:'white',border:'none'}:{}}>
      <span>
        <h5>{description}</h5>
        <h6>{newDate[2]} {month[Number(newDate[1])-1]} {newDate[0]}</h6>
      </span>

      <strong>${amount}</strong>
    </li>
  );
};

export default ExpenseListItem;
