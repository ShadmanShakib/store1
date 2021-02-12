import React from 'react';
import { Products } from '../Data/Products'
import {useDispatch} from 'react-redux'


function Foods() {
    const dispatch=useDispatch()
    return (
        <div className='grid grid-cols-3 py-10 gap-6 grid-rows-2 content-center justify-items-center max-w-screen-xl '>
            {Products.map((i:any)=>{
                return(
                    <div key={i.id} className="w-64 flex items-center flex-col">
                        {i.name}
                        <img className='h-72 w-64' src={i.image} alt=""/>
                        <h1 className='text-4xl text-green-600 mb-2'>${i.price}</h1>
                        <button onClick={()=>dispatch({type:"ADD_ITEM",payload:{...i} })} className='green-botton'>ADD TO CART</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Foods
