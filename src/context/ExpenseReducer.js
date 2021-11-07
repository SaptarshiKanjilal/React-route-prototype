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
        case 'EDIT_EXPENSE':return{
            ...state,
            expenses:state.expenses.splice(action.payload,1,state.editedObj),
            editedObj:{}
        }
        
        default:return state
    }
}