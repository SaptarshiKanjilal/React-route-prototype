import React,{useContext} from 'react'
import InputForm from '../../components/AddExpense/InputForm'
import { GlobalContext } from '../../context/GlobalState'




const AddExpense = () => {

    let {settings}=useContext(GlobalContext)
    let names=[]
    if(settings.layout==='Expense'){
        names=['description','amount','date','note']
    }
    else if(settings.layout==='Fitness')
    {
        names=['distance','steps','date','note']
    }
    return (
        <div className='formWrapper'> 
        
         <InputForm names={names}/>
   
           
        </div>
    )
}

export default AddExpense
