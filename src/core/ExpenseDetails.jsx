import React, { Fragment,useContext } from "react";
// import {Link} from 'react-router-dom'
import {useHistory,useLocation} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState';

const ExpenseDetails = ({id}) => {
  let {expenses,editExpense,settings,fitness,editFitness}=useContext(GlobalContext)
   let history=useHistory()
   let path=useLocation()
  
   console.log(path);
  //  console.log(expenses);
   const handleClick=(e)=>{
    if(settings.layout==='Expense'){
      if(e.target.textContent==='Add Expense') 
     history.push({pathname:'/addexpense',state:{update:false}})
    else{
     editExpense(id)
     history.push('/') 
   }
    }
    else{
      if(e.target.textContent==='Add Workout') 
     history.push({pathname:'/addexpense',state:{update:false}})
    else{
      if(settings.layout==='Expense')
      {
        editExpense(id)
      }
      else{
          editFitness(id)
      }
     
     history.push('/') 
   }
    }
  }
  let amount=expenses.reduce((acc,Element)=>acc+parseInt(Element.amount),0)
  let steps=fitness.reduce((acc,ele)=>acc+parseInt(ele.steps),0)
  
  let text=(settings.layout==='Expense')?((path.pathname!=='/settings')?((path.pathname==='/editexpense')?'Edit Expense':`Viewing ${expenses.length} expenses totalling $${amount}`):'Settings'):((path.pathname!=='/settings')?((path.pathname==='/editexpense')?'Edit Workout':`Viewing ${fitness.length} workouts totalling ${steps} steps`):'Settings')

  let btnText=(settings.layout==='Expense')?((path.pathname==='/editexpense')?'Edit Expense':'Add Expense'):((path.pathname==='/editexpense')?'Edit Workout':'Add Workout')

  
  return (
    <Fragment>
      <div className='expensedetails' style={(path.pathname==='/settings')?((settings.theme==='Dark')?{color:'white',backgroundColor:'#253454'}:((settings.theme==='Nature')?{color:'#444941',backgroundColor:'#444941'}:{color:'white',backgroundColor:'rgb(141, 133, 133)'})):((settings.theme==='Dark')?{color:'white',backgroundColor:'#253454'}:((settings.theme==='Nature')?{color:'black',backgroundColor:'#D5EEBB'}:{}))}>

        <div className="container expense-content" style={(path.pathname==='/settings')?{position:'absolute',bottom:'10px',left:'50%',transform:'translateX(-50%)'}:{}}>

          <h1 style={(path.pathname==='/settings')?{textAlign:'center',fontSize:'55px'}:{}}>{text}</h1>
          

          {
            (path.pathname!=='/settings')?<button className="add-expense-btn" style={(settings.theme==='Nature')?{backgroundColor:'#444941'}:{}} onClick={handleClick}>{btnText}</button>:''}

        </div>
         {
          (path.pathname==='/settings')?<div className='something' style={(settings.theme==='Dark')?{backgroundColor:'#364064'}:((settings.theme==='Nature')?{backgroundColor:'#D5EEBB'}:{})}></div>:''
         }
      </div>
    </Fragment>
  );
};

export default ExpenseDetails;
