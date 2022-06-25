const ADD_TODO = "addTodo";
const GET_ALL_TODO = "getAllTodo";
const TOGGLE_TODO = "toggleTodo";
const DELETE_TODO = "deleteTodo";

export {ADD_TODO , GET_ALL_TODO , TOGGLE_TODO , DELETE_TODO};

const addTodo = (payload) => ({
    type : ADD_TODO,
    payload
})

const getAllTodo = (payload) => ({
    type : GET_ALL_TODO,
    payload
})

const toggleTodo = (payload) => ({
    type : TOGGLE_TODO,
    payload
})

const deleteTodo = (payload) => ({
    type : DELETE_TODO,
    payload
})

export {addTodo , getAllTodo , deleteTodo , toggleTodo}