import React,{useContext,useState,useEffect} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import {useHistory,useLocation} from 'react-router-dom'

const InputForm = ({id,update}) => {

  let {expenses,addExpense,editObj,editedObj,settings}=useContext(GlobalContext)
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
          
        <form className='inputWrapper' Add autocomplete="off" onSubmit={handleSubmit} onChange={handleChange} style={(path.pathname==='/editexpense')?((settings.theme==='Dark')?{backgroundColor:'#3b3b65',marginTop:'75px',height:'550px'}:{marginTop:'75px',height:'550px'}):((settings.theme==='Dark')?{backgroundColor:'#3b3b65'}:{})}>

        <input type="text" placeholder="description" name="description"  value={formData.description}
          style={(settings.theme==='Dark')?{backgroundColor:'#040434',color:'white',border:'none',outline:'none'}:{}}
        />

        <input type="number" placeholder="Amount" name="amount"  value={formData.amount} 
         style={(settings.theme==='Dark')?{backgroundColor:'#040434',color:'white',border:'none',outline:'none'}:{}} />

        <input type="date"  name='date' value={formData.date} 
           style={(settings.theme==='Dark')?{backgroundColor:'#040434',color:'white',border:'none',outline:'none'}:{}}
        />

        <textarea
          name="note"
          cols="30"
          rows="10"
          placeholder="Add a note for your expense (optional)"
          
          value={formData.note}
          style={(settings.theme==='Dark')?{backgroundColor:'#040434',color:'white',border:'none',outline:'none'}:{}}
        ></textarea>
        {
          (path.pathname==='/addexpense')?<button type='submit'  style={(settings.theme)?{backgroundColor:'#1c88bf',color:'white',border:'none',outline:'none'}:{}}>submit</button>:''
        }
        {/* <button type='submit'>submit</button> */}
        
     
      </form>
      
    )
    
}

export default InputForm
