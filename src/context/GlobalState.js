import React,{createContext,useReducer} from 'react'
import ExpenseReducer from './ExpenseReducer'



const initialState={
  
    expenses:[],
    editedObj:{}
    
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
  const editObj=(Data)=>{
    
    dispatch({
      type:'EDIT_OBJ',
      payload:Data
    })
  }
  const editExpense=(data)=>{
    dispatch({
      type:'EDIT_EXPENSE',
      payload:data
    })
  }
    return (
        <GlobalContext.Provider
        value={{
            expenses:state.expenses,
            editedObj:state.editedObj,
            addExpense,
            editExpense,
            editObj
        }}>
        
          {children}

        </GlobalContext.Provider>
    )
}

export default GlobalState
