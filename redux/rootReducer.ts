import {combineReducers} from 'redux'
import navReducer from './Layout/toggleReducer'
import cardReducer from './ShopingCard/cardReducer'

const rootReducer=combineReducers({
    nav:navReducer,
    card:cardReducer,

})

export default rootReducer