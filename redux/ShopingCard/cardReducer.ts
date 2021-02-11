import { stat } from 'fs'
import {ADD_ITEM} from '../actionTypes'

const init={
    count:0
}
const cardReducer=(state=init,action:any)=>{
    switch(action.type){
        case ADD_ITEM:return{
            ...state,
            count:state.count+1
        }
        default:return{...state}
    }
}
export default cardReducer