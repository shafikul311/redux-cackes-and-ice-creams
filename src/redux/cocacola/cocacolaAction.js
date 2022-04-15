import { BUY_COCACOLA } from "./cocolaActionType";

export const buyCoke = (number= 1)=> {
    return {
        type: BUY_COCACOLA,
        payload: number,

    }
}