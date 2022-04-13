import { BUY_ICE_CREAM } from "./ineCreamType"


const initialState = {
    numOfIceCream : 25,
   
}

const iceCreamReducer = (state = initialState, action) => {

    switch( action.type){

        case BUY_ICE_CREAM : return {
            ...state , 
            numOfIceCream : state.numOfIceCream - action.payload
        }
        default : return state;


    }
}

export default iceCreamReducer;