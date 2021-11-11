import React,{useContext} from 'react'
import InputForm from '../../components/AddExpense/InputForm'
import ExpenseDetails from '../../core/ExpenseDetails'
import {useParams,useLocation} from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'


const EditExpense = () => {
    
    
    // let {idx}=useParams()
    // console.log(useLocation().state);
 

    return (
        <div>
          
            <ExpenseDetails id={useLocation().state.id} />  
            <InputForm id={useLocation().state.id} update={useLocation().state.update}/>
        </div>
    )
}

export default EditExpense
