import React from "react";
import {Link} from "react-router-dom";
import {useSelector , useDispatch} from "react-redux";
import {logedOut} from "../Redux/Login/action";

export const Navbar = () => {
    const value = useSelector((state) => state.Auth);
    // const {logedIn , token} = useSelector((state) => state.Auth);
    const dispatch = useDispatch();
     localStorage.setItem("userAuth" , JSON.stringify(value));

    const localAuth = JSON.parse(localStorage.getItem("userAuth"))
    return(
          <div style = {{
             display :"flex",
             justifyContent :"space-around"
          }}>
                <Link to = "/">Home</Link> 
                <Link to = "/login" onClick = {() => dispatch(logedOut())}>{localAuth.logedIn ? "Logout" : "login"}</Link>
                 <span>{localAuth.logedIn ? ("Token Id : " + localAuth.token):null}</span>
          </div>
    )
}