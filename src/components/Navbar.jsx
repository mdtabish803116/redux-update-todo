import React from "react";
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {logedOut} from "../Redux/Login/action";

export const Navbar = () => {
  
    const {logedIn , token} = useSelector((state) => state.Auth);
    const dispatch = useDispatch();
  
    return(
          <div style = {{
             display :"flex",
             justifyContent :"space-around"
          }}>
                <Link to = "/">Home</Link> 
                <Link to = "/login" onClick = {() => dispatch(logedOut())}>{logedIn ? "Logout" : "login"}</Link>
                 <span>{logedIn ? ("Token Id : " + token):null}</span>
          </div>
    )
}