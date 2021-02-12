import { stat } from 'fs'
import {AnyAction} from 'redux'
import {ADD_ITEM,DELETE_ITEM} from '../actionTypes'


const cardReducer=(state=[],action:AnyAction)=>{
    switch(action.type){
        case ADD_ITEM:
            if(state.some(i=>i.id===action.payload.id)){
                const Index=state.findIndex(i=>i.id===action.payload.id)
                state[Index].count=state[Index].count+1
              return  [...state]

            }else{

                return[...state,{...action.payload, count:1}]
            }
        default:return[...state]
    }
}
export default cardReducer