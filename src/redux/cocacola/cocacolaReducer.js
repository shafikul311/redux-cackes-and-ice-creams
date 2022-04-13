import { BUY_COCACOLA } from './cocolaActionType'

const initialState = {
    numOfCoke : 50,
}

const buyCoke = (state= initialState, action) => {

    switch (action.type) {

        case BUY_COCACOLA : return {

            ...state ,
            numOfCoke: state.numOfCoke - 1
        }
        default : return state
    }
}


export default buyCoke;