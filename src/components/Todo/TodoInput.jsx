import React  from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../Redux/Todo/action"

export const TodoInput = () => {
     const [input , setInput] = React.useState("");
     const dispatch = useDispatch()

     const payload = {
           title : input,
           status : false
     }
     const handleAdd = () => {
          fetch("http://localhost:8080/todos" , {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                 "Content-Type" : "application/json"
            }
          }).then((res) => res.json())
            .then((res) => dispatch(addTodo(res)))
            .catch((error) => console.log(error))
     }

    return(
         <div>
              <input type = "text" placeholder = "Add Item"
               value = {input} onChange = {(e) => setInput(e.target.value)} />
               <button onClick = {handleAdd}>Add Todo</button>
          </div>
    )
}