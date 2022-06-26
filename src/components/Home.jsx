import {Todo} from "./Todo/Todo";
import {useSelector} from "react-redux";
import React from "react";


export const Home = () => {
    const {logedIn} = useSelector((state) => state.Auth);
   
    return(

         logedIn?( <Todo />):null 
    )
}