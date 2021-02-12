import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

function Offer() {
    const [count,setCount]=useState(1)
    const decreaseCount=()=>{
        if(count>1){
            setCount(count-1)
        }
    }
    const dispatch=useDispatch()

    return (
        <div className='flex items-center text-white justify-center' style={{backgroundImage:'url(images/bg-1.webp)'}}>
            <img className="transiton transform duration-300 h-96 w-96 hover:scale-110 " src="images/chicken.png" alt=""/>
     
           
        <div className="flex flex-col">
        <h1 className="text-5xl text-white font-bold">Deal of the day</h1>
        <h3 className='text-xl font-semibold '>Chicken</h3>
        <div className='flex items-end py-4 '>

        <h1 className="text-yellow-300 mr-4 font-bold  text-4xl ">$17</h1>
        <h1 className='line-through text-3xl font-bold text-black'>$29</h1>
        </div>
        <div className="flex ">
        <div className='bg-gray-100 text-black w-24 flex items-center justify-around rounded-md'>
        <button className=' focus:outline-none' onClick={()=>setCount(count+1)}>+</button>
        <div className="font-bold w-5 text-center">
            {count}</div>
            <button className=' focus:outline-none' onClick={decreaseCount}>-</button>
       
        </div>
        <button onClick={()=>dispatch({type:"ADD_ITEM", payload:{id:2,name:'chiken',price:17,count:count}})} className="green-botton ml-6">ADD TO CARD</button>
        </div>
        </div>
        </div>
    )
}

export default Offer
