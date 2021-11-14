import React,{useContext} from 'react'
import InputForm from '../../components/AddExpense/InputForm'
import ExpenseDetails from '../../core/ExpenseDetails'
import {useParams,useLocation} from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'
import { Fragment } from 'react'


const EditExpense = () => {
    
    
    // let {idx}=useParams()
    // console.log(useLocation().state);
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
        <Fragment>
          
            <ExpenseDetails id={useLocation().state.id} />  
            <InputForm id={useLocation().state.id} update={useLocation().state.update} names={names}/>
        </Fragment>
    )
}

export default EditExpense
