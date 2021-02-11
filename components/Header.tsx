import React from 'react';
import Image from 'next/image'
import MenuIcon from './MenuIcon'

function Header() {
    return (
        <div className='flex relative items-center h-14 xl:h-16 bg-white justify-around  '>
            <div className="hidden xl:flex">
            <h1 className=" cursor-pointer">OUR MENU</h1>
            <h1 className="mx-3 cursor-pointer">ABOUT</h1>
            <h1 className="cursor-pointer">CONTACT</h1>
            </div>
         <div className="xl:hidden"><MenuIcon/></div>   
            <h1 className='text-xl xl:mr-40'>LOGO </h1>  
            <div className="flex ">
                <img className='h-8 p-2 w-8' src="/images/search.svg" alt=""/>
            <img  className="h-10 w-10" src='/images/shoppingcart.svg'/>
            </div>
        </div>
    )
}

export default Header
