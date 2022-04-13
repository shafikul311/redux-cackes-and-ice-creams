import { combineReducers } from 'redux'
import cakeReducer from '../redux/cake/cakeReducer'
import iceCreamReducer from '../redux/iceCream/iceCreamReducer'
import cocacolaReducer from '../redux/cocacola/cocacolaReducer'


const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream: iceCreamReducer,
    coke: cocacolaReducer,

})

export default rootReducer;