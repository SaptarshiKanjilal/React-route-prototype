import React,{Fragment}from 'react'
import SettingsInput from '../../components/SettingsExpense/SettingsInput'
import ExpenseDetails from '../../core/ExpenseDetails'


const SettingsExpense = () => {
    return (
       <Fragment>
         <ExpenseDetails/>
         <SettingsInput/>
        
       </Fragment>
            
        
    )
}

export default SettingsExpense
