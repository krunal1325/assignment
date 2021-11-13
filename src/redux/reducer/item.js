import { FAIL_FETCH_ITEM, FETCH_ITEM } from "../action/types";

const initialState = {
    items: [],
}

export default function item(state = initialState, { type, payload }){
    switch(type){
        case FETCH_ITEM:
            return{
                ...state,
                items: payload,
            }
        case FAIL_FETCH_ITEM:
            return{
                ...state
            }
        default:
            return state
    }
}