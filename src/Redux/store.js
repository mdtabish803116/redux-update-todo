import {legacy_createStore as createStore , combineReducers,} from "redux";
import {todoReducer} from "./Todo/reducer";
import {logedInReducer} from "./Login/reducer";
import {useSelector} from "react-redux";

const rootReducer = combineReducers({
    Todo : todoReducer,
    Auth : logedInReducer
})


export const store = createStore(rootReducer);

  store.subscribe(() => {
    console.log(store.getState());
  })
 


