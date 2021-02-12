import React from 'react';
import MenuIcon from './MenuIcon'
import CardItem from './CardItem'
import {useSelector} from 'react-redux'
function Header() {
    const length=useSelector(s=>s.card.length)
    return (
        <div className='flex fixed w-full z-40   items-center h-14 xl:h-16 bg-white justify-around  '>
            <div className="hidden xl:flex">
            <h1 className=" cursor-pointer">OUR MENU</h1>
            <h1 className="mx-3 cursor-pointer">ABOUT</h1>
            <h1 className="cursor-pointer">CONTACT</h1>
            </div>
         <div className="xl:hidden"><MenuIcon/></div>   
            <h1 className='text-xl xl:mr-40'>LOGO </h1>  
            <div className="flex ">
                <img className='h-8 p-2 w-8' src="/images/search.svg" alt=""/>
                <div className='relative cardIcon'>
                    <div className="absolute bg-green-600 rounded-full h-5 w-5 left-7 -top-2 text-white shadow-md flex items-center justify-center ">{length>0 && length}</div>
            <img  className="h-10 w-10 " src='/images/shoppingcart.svg'/>
            <CardItem/>
                </div>
            </div>
        </div>
    )
}

export default Header
