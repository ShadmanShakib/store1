import React,{useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux'


function MenuIcon() {
   const isOpen=useSelector(state=>state.nav)
   const dispatch=useDispatch()
    return (
        <div className='focus:outline-none' onClick={()=>dispatch({type:'TOGGLE_MENU'})}>
           {isOpen?<div className=''>
          <div className='w-8 mb-1  h-1 bg-gray-700 line1 transform translate-y-1 rotate-45 '></div>
          <div className='w-8 h-1 bg-gray-700 line2 transform -translate-y-1 -rotate-45 '></div>
          </div>:
          <div>
          <div className={`w-8 h-1  bg-gray-700  `}></div>
          <div className='w-8 h-1 my-1 bg-gray-700 '></div>
          <div className='w-8 h-1 bg-gray-700  '></div>
          </div>
          } 
          
        </div>
    )
}

export default MenuIcon
