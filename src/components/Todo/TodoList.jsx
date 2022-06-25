import React from "react";

import {useDispatch , useSelector} from "react-redux";
import {getAllTodo , toggleTodo , deleteTodo} from "../../Redux/Todo/action";


export const TodoList = () => {
    const {todos} = useSelector((state) => state)
    console.log(todos);
    const dispatch = useDispatch()

 React.useEffect(() => {   
  fetch("http://localhost:8080/todos")
 .then((res) => res.json())
 .then((res) => dispatch(getAllTodo(res)))
 .catch((error) => console.log(error)) 
} , [dispatch])

const handleToggle = (todo) => {
    fetch(`http://localhost:8080/todos/${todo.id}` , {
        method : "PATCH",
        body : JSON.stringify({
              ...todo, status : !todo.status
        }),
        headers : {
             "Content-Type" : "application/json"
        }
    }).then((res) => res.json())
      .then((res) => dispatch(toggleTodo(res)))
      .catch((error) => console.log(error))
}

const handleDelete = (id) => {
       fetch(`http://localhost:8080/todos/${id}` , {
          method : "DELETE"
       }).then((res) => res.json())
          .then((res) => dispatch(deleteTodo(id)))
          .catch((error)=> console.log(error))
}
   
    return(
         <div>
              { 
                
                  todos.map((todo)=> (
                      <div key = {todo.id}>
                               <p>{todo.title}{"---------"}{todo.status?"completed":"Not completed"}</p>
                               <button onClick = {() => handleToggle(todo)}>Toggle Todo</button>
                               <button onClick = {() => handleDelete(todo.id)}>Delete</button>
                      </div>
                  ))

              }

         </div>
    )
}