import React,{useContext,useState} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import {useHistory} from 'react-router-dom'

const InputForm = () => {

  let {expenses,addExpense}=useContext(GlobalContext)
  let history=useHistory()
  let [formData, setFormData]=useState({
    description:'',
    amount:'',
    date:'',
    note:''
  })
  const handleChange=(e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
   
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
  console.log(expenses);
   
    return (
          
        <form className='inputWrapper' onSubmit={handleSubmit}>
        <input type="text" placeholder="description" name="description" onChange={handleChange} value={formData.description}/>
        <input type="number" placeholder="Amount" name="amount" onChange={handleChange} value={formData.amount} />
        <input type="date" onChange={handleChange} name='date' value={formData.date} />
        <textarea
          name="note"
          cols="30"
          rows="10"
          placeholder="Add a note for your expense (optional)"
          onChange={handleChange}
          value={formData.note}
        ></textarea>
        <button type='submit'>submit</button>
        
     
      </form>
      
    )
    
}

export default InputForm
