import React,{useContext,useState,useEffect} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import {useHistory,useLocation} from 'react-router-dom'


const InputForm = ({id,update,names}) => {

  let {expenses,addExpense,editObj,editedObj,settings,addFitness,fitness}=useContext(GlobalContext)
  let history=useHistory()
  let path=useLocation()
  let [formData, setFormData]=useState((settings.layout==='Expense')?((!update)?{
    [names[0]]:'',
    [names[1]]:'',
    [names[2]]:'',
    [names[3]]:''
  }:{ [names[0]]:expenses[id].description,
      [names[1]]:Number(expenses[id].amount),
      [names[2]]:expenses[id].date,
      [names[3]]:expenses[id].note}):((!update)?{
        [names[0]]:'',
        [names[1]]:'',
        [names[2]]:'',
        [names[3]]:''
      }:{ [names[0]]:fitness[id].distance,
          [names[1]]:Number(fitness[id].steps),
          [names[2]]:fitness[id].date,
          [names[3]]:fitness[id].note}))
        // console.log(settings.layout,names);
  // let [fitnessData ,setFitnessData]=useState({
  //   distance:'',
  //   steps:'',
  //   date:'',
  //   note:''}
  // }:{ description:expenses[id].description,
  //       amount:Number(expenses[id].amount),
  //       date:expenses[id].date,
  //       note:expenses[id].note}
  //)      

  const handleChange=(e)=>{
     
      setFormData({...formData,[e.target.name]:e.target.value})
      // console.log(e.target.value,e.target.name);
      if(path.pathname==='/editexpense'){
        editObj(formData)
              
      }
      
  }
 
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(settings.layout==='Expense'){
      addExpense(formData)
      console.log(expenses);
    }
    else{
      addFitness(formData)
      // console.log(fitness);
    }
    
    setFormData({
      [names[0]]:'',
      [names[1]]:'',
      [names[2]]:'',
      [names[3]]:''
    })
   
    history.push('/')
    
  
  }  
   
   
    return (
          
        <form className='inputWrapper' Add autocomplete="off" onSubmit={handleSubmit} onChange={handleChange} style={(path.pathname==='/editexpense')?{marginTop:'30px',height:'600px'}:{}}>
         
         

        <input type="text" placeholder={(settings.layout==='Expense')?'description':'distance covered(in metres)'} name={names[0]}  value={formData[names[0]]}
          style={(settings.theme==='Dark')?{backgroundColor:'#141E61',color:'white',border:'1px solid #035397',outline:'none'}:{}}
        />

        <input type="number" placeholder={(settings.layout==='Expense')?'amount':'total steps'} name={names[1]}  value={formData[names[1]]} 
         style={(settings.theme==='Dark')?{backgroundColor:'#141E61',color:'white',border:'1px solid #035397',outline:'none'}:{}} />

        <input type="date"  name={names[2]} value={formData[names[2]]} 
           style={(settings.theme==='Dark')?{backgroundColor:'#141E61',color:'white',border:'1px solid #035397',outline:'none'}:{}}
        />

        {
          (settings.layout==='Expense')?(<textarea
          name={names[3]}
          cols="30"
          rows="10"
          placeholder="Add a note for your expense (optional)"
          
          value={formData[names[3]]}
          style={(settings.theme==='Dark')?{backgroundColor:'#141E61',color:'white',border:'1px solid #035397',outline:'none'}:{}}
        ></textarea>):''
        }
        {
          (path.pathname==='/addexpense')?<button type='submit'  style={(settings.theme==='Dark')?{backgroundColor:'#1c88bf',color:'white',border:'none',outline:'none'}:((settings.theme==='Nature')?{backgroundColor:'#444941',color:'white',border:'none',outline:'none'}:{})}>submit</button>:''
        }
        {/* <button type='submit'>submit</button> */}
        
     
      </form>
      
    )
    
}

export default InputForm
