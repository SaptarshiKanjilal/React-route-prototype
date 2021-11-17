export default (state ,action)=>{
    
    switch(action.type){
        case 'ADD_EXPENSE':return {
             ...state,
             expenses:[...state.expenses,action.payload]
            
        }
        case 'EDIT_OBJ':
            return {
            ...state,editedObj:{...action.payload}
        }
        case 'EDIT_EXPENSE':state.expenses.splice(action.payload,1,state.editedObj)
                            return state
        case 'EDIT_SETTINGS':return {
            ...state,
            settings:{...action.payload}
        }    
        case 'ADD_FITNESS':console.log(state.fitness);
                           return {
            ...state,
            fitness:[...state.fitness,action.payload]
           
       }
       case 'EDIT_FITNESS':state.fitness.splice(action.payload,1,state.editedObj)
                           return state

       case 'CHANGE':state.change=true
                     return state
       case 'EDIT_FILTER':
                              if(action.payload==='2'){
                               if(state.settings.layout==='Expense'){
                                state.filter=action.payload
                                // state.expenses.sort((a,b)=>Number(a.amount)-Number(b.amount))
                                state.expenses.sort((a,b)=>new Date(a.date)-new Date(b.date))
                               }
                               else{
                                state.filter=action.payload
                                // state.expenses.sort((a,b)=>Number(a.amount)-Number(b.amount))
                                state.fitness.sort((a,b)=>new Date(a.date)-new Date(b.date))
                               }
                            //   console.log(state.expenses);
                              }   
                              else{
                                if(state.settings.layout==='Expense'){
                                    state.expenses.sort((a,b)=>Number(a.amount)-Number(b.amount))
                                }
                                else{
                                    state.fitness.sort((a,b)=>Number(a.steps)-Number(b.steps))
                                }
                              }
                                
                           return state
                                     
        default:return state
    }
}