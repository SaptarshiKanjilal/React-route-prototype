import React,{createContext,useReducer} from 'react'
import ExpenseReducer from './ExpenseReducer'



const initialState={
    expenses:[]
}
export const GlobalContext=createContext(initialState)

const GlobalState = ({children}) => {

  let [state, dispatch]=useReducer(ExpenseReducer,initialState)

  const addExpense=(data)=>{
    dispatch({
      type:'ADD_EXPENSE',
      payload:data
    })
  }

    return (
        <GlobalContext.Provider
        value={{
            expenses:state.expenses,
            addExpense
        }}>
        
          {children}

        </GlobalContext.Provider>
    )
}

export default GlobalState
