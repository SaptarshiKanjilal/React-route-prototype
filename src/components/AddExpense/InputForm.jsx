import React,{useContext,useState,useEffect} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import {useHistory,useLocation} from 'react-router-dom'

const InputForm = ({id,update}) => {

  let {expenses,addExpense,editObj,editedObj}=useContext(GlobalContext)
  let history=useHistory()
  let path=useLocation()
  let [formData, setFormData]=useState((!update)?{
    description:'',
    amount:'',
    date:'',
    note:''
  }:{ description:expenses[id].description,
        amount:Number(expenses[id].amount),
        date:expenses[id].date,
        note:expenses[id].note})
  // console.log(id);
  // if(update){
  //   setFormData( { description:expenses[id].description,
  //     amount:Number(expenses[id].amount),
  //     date:expenses[id].date,
  //     note:expenses[id].note})
  //    }
  
  const handleChange=(e)=>{
     
      setFormData({...formData,[e.target.name]:e.target.value})
      console.log(e.target.value,e.target.name,formData);
      if(path.pathname==='/editexpense'){
        editObj(formData)
        
      }
      
  }
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    addExpense(formData)
    setFormData({
      description:'',
      amount:'',
      date:'',
      note:''
    })
    history.push('/')
  
  }  
  // console.log(expenses);
   
    return (
          
        <form className='inputWrapper' Add autocomplete="off" onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" placeholder="description" name="description"  value={formData.description}/>
        <input type="number" placeholder="Amount" name="amount"  value={formData.amount} />
        <input type="date"  name='date' value={formData.date} />
        <textarea
          name="note"
          cols="30"
          rows="10"
          placeholder="Add a note for your expense (optional)"
          
          value={formData.note}
        ></textarea>
        {
          (path.pathname==='/addexpense')?<button type='submit'>submit</button>:''
        }
        {/* <button type='submit'>submit</button> */}
        
     
      </form>
      
    )
    
}

export default InputForm
