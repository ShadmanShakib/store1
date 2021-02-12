import React from 'react';
import {useSelector,useDispatch} from 'react-redux'


function CardItem() {
    const cardItem=useSelector(s=>s.card)
    const dispatch=useDispatch()
    const mapCard=cardItem.map(i=>{
        return(
            <div className='flex items-center' key={i.id}>
                <h1 className='text-lg'>{i.name}  <span className="text-sm text-black">{i.count}X${i.price}</span></h1>
              
            </div>
        )
    })
    return (
        <div className='hidden cardMenu bg-white w-56 -left-24 shadow-md text-green-600 py-2 px-3 absolute z-30'>
           {
               cardItem.length>0 && mapCard
           }
            
        </div>
    )
}

export default CardItem
