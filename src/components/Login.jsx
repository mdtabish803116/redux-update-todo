import React from "react";
import {useDispatch , useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logedIn} from "../Redux/Login/action";

export const Login = () => {
    const [email , setEmail] = React.useState("");
    const [password , setPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    console.log(email , password);
    
    const handleLogin = () => {

       const body = {email , password}
       fetch(`https://reqres.in/api/login`, {
           method : "POST",
            body : JSON.stringify(body),
            headers: {
               "Content-Type": "application/json"
             }
       })
       .then((res) => res.json())
       .then((res) => {
           if(res.token) {
              dispatch(logedIn(res));
   
              navigate("/")
           }
       })
       .catch((error) => console.log(error))

    }
      return(
          <div>
                <input type = "text"  placeholder = "Email"
                 value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                 <input type = "text" placeholder = "Password"
                 value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                 <button onClick = {handleLogin}>Login</button>
          </div>
      )
}