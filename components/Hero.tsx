import React,{useState} from 'react'

function Hero() {
    const [num, setNum]=useState(0)
    const arrSrc=["/images/hero1.png","/images/hero2.png","/images/hero3.png"]
    const progress=()=>{
        if(num<2){
            setNum(num+1)
        }else if(num===2){
            setNum(0)
        }}
    const behind=()=>{
        if(num>0){
            setNum(num-1)
        }else if(num===0){
            setNum(2)
        }
    }
    return (
        <div className='flex  relative flex-col items-center pt-28 fon pb-10 bg-gray-100'>
            <h1 className='text-xl font-bold mb-4'>Healthy Eating</h1>
            <p className='text-center text-gray-800'>A great about us block helps builds trust between you and your customers.</p>
            <button className='green-botton mt-5 mb-5'>EXPLORE OUR MENU</button>
            {/* small screeen */}
            <div className="relative lg:hidden h-72 flex items-center justify-center  w-screen">
                <div className='absolute flex items-center '>
                    <img className='h-auto  w-full' src={arrSrc[num]} alt=""/>
                  </div>
             <div className='text-xl flex items-center justify-center left-3 absolute top-1/2 text-center font-bold text-white h-10 focus:outline-none  w-10 rounded-full bg-green-600' onClick={behind}> &lt; </div>
            <div className='text-xl flex items-center justify-center absolute right-3 focus:bg-green-600 top-1/2  font-bold text-white h-10 focus:outline-none  w-10 rounded-full bg-green-600' onClick={progress}>&gt;</div>
                  </div>
                  {/* Large screen */}
                  <div className="hidden lg:flex">
                      <img src={arrSrc[0]} alt=""/>
                      <img src={arrSrc[1]} alt=""/>
                      <img src={arrSrc[2]} alt=""/>
                  </div>
        </div>
    )
}

export default Hero
