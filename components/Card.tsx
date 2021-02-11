import React from 'react';

import {useSelector, useDispatch} from 'react-redux'

function Card() {
    const state=useSelector(state=>state.card.count)
    const dispatch=useDispatch()
    return (
        <div>
       {state}
       <button className='bg-green-500 text-white' onClick={()=>dispatch({type:"ADD_ITEM"})}>Click</button>
        </div>
    )
}

export default Card
