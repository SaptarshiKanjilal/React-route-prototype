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
        default:return state
    }
}