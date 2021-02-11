import {AnyAction} from 'redux'
import {TOGGLE_MENU} from '../actionTypes'

const navReducer=(state=false,action:AnyAction)=>{
    switch (action.type){
        case TOGGLE_MENU:return state=!state
        default : return state
    }
}
export default navReducer ;
