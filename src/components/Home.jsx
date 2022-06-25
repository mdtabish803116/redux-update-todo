import {Todo} from "./Todo/Todo";
import {useSelector} from "react-redux";


export const Home = () => {
    // const {logedIn} = useSelector((state) => state.Auth);
    const localAuth = JSON.parse(localStorage.getItem("userAuth"))


    return(

         localAuth.logedIn?( <Todo />):null 
    )
}