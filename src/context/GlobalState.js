import React,{createContext,useReducer} from 'react'
import ExpenseReducer from './ExpenseReducer'



const initialState={
  
    expenses:[],
    editedObj:{},
    settings:{
      theme:'Light',
      layout:'Expense'
    },
    fitness:[]
}
export const GlobalContext=createContext(initialState)

const GlobalState = ({children}) => {

  let [state, dispatch]=useReducer(ExpenseReducer,initialState)

  const addExpense=(data)=>{
    dispatch({
      type:'ADD_EXPENSE',
      payload:data,
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
      payload:data,
      
    })
  }
    const changeSettings=(data)=>{
      dispatch({
        type:'EDIT_SETTINGS',
        payload:data
      })
    }

    const addFitness=(data)=>{
      dispatch({
        type:'ADD_FITNESS',
        payload:data
      })
    }
  
    return (
        <GlobalContext.Provider
        value={{
            expenses:state.expenses,
            editedObj:state.editedObj,
            settings:state.settings,
            fitness:state.fitness,
            addExpense,
            editExpense,
            changeSettings,
            editObj,
            addFitness
        }}>
        
          {children}

        </GlobalContext.Provider>
    )
}

export default GlobalState
