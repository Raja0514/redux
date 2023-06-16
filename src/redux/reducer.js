import {ADD_TO_CART,REMOVE_FROM_CART} from './constant'
const initialstate=[];
export function reducer(state=initialstate,action){
    switch(action.type){
                case ADD_TO_CART:
            return[
                ...state,
                action.data
            ]
    case REMOVE_FROM_CART:
                const result=state.filter((items)=>{
                    return items.name!==action.data
                })
            return[
                ...result,
            
            ]
            default:
                return state
    }
}

