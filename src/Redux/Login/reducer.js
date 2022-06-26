import {LOGED_IN , LOGED_OUT} from "./action";

export const logedInReducer = (store = {logedIn : false , token : ""} , {type , payload}) => {
      switch(type){  
       case LOGED_IN:
         localStorage.setItem("userAuth" , JSON.stringify({
              logedIn : true, 
              token : payload.token
         }))
          return {
               ...store , logedIn : true , token : payload.token
          }
        case LOGED_OUT:
            const userAuth = JSON.parse(localStorage.getItem("userAuth"))
              if(userAuth != null){
                localStorage.removeItem("userAuth")
              }
            return {
                ...store, logedIn : false , token : ""
            }
          default : 
            return store
      }

}