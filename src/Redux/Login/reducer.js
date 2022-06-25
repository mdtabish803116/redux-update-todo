import {LOGED_IN , LOGED_OUT} from "./action";

export const logedInReducer = (store = {logedIn : false , token : ""} , {type , payload}) => {
      switch(type){  
       case LOGED_IN:
          return {
               ...store , logedIn : true , token : payload.token
          }
        case LOGED_OUT:
            return {
                ...store, logedIn : false , token : ""
            }
          default : 
            return store
      }

}