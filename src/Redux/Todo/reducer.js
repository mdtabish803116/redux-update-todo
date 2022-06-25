import {ADD_TODO , GET_ALL_TODO , DELETE_TODO, TOGGLE_TODO} from "./action";


const todoReducer = (store = {todos : []} , action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...store , todos : [...store.todos, action.payload]
            }
        case GET_ALL_TODO:
            return {
                ...store , todos : action.payload
            }
        case TOGGLE_TODO:
            return {
                ...store , todos : store.todos.map((todo) => (
                       todo.id === action.payload.id ? action.payload : todo
                ))
            }
        case DELETE_TODO:
               return {
                   ...store , todos : store.todos.filter((todo) => (
                           todo.id !== action.payload
                   ))
               }
            default:
                return store
    }
}

export {todoReducer}