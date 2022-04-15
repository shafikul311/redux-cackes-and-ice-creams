import { combineReducers } from "redux";
import cakeReducer from "../redux/cake/cakeReducer";
import iceCreamReducer from "../redux/iceCream/iceCreamReducer";
import cocacolaReducer from "../redux/cocacola/cocacolaReducer";
import usersReducer from "../redux/user/userReducer"

const rootReducer = combineReducers({
   cake: cakeReducer,
   iceCream: iceCreamReducer,
   coke: cocacolaReducer,
   usersData: usersReducer
});

export default rootReducer;
