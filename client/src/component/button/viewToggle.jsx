import React, { useState } from 'react';
import { CiGrid32 } from "react-icons/ci";
import { BsViewList } from "react-icons/bs";
import { RiArrowUpWideFill } from "react-icons/ri";
const SlidingToggle = ({toggle , setToggle , visibility}) => {

  return (
    <div>
      {window.scrollY>50  ?  <div  className={`${visibility ? 'opacity-100':'opacity-100'} relative inline-flex rounded h-6 bg-gray-200  w-16`}>

{/* Sliding Indicator */}
<div 
  className={`absolute  rounded h-full w-1/2  bg-black transition-all duration-300 ${
    toggle ? 'translate-x-full' : ''
  }`}
  />

{/* Buttons */}
<button
  onClick={() => {setToggle(false), window.scrollTo(0 ,1900)}}
  className={`w-1/2 z-10 text-[14px] flex justify-center items-center font-[inter-medium] transition ${
    !toggle ? 'text-white' : 'text-black'
  }`}
  >
  <CiGrid32/>
</button>
<button
  onClick={() => { window.scrollTo(0 ,700) , setToggle(true)}}
  className={`w-1/2 z-10 text-[14px] flex justify-center items-center font-[inter-medium] transition ${
    toggle ? 'text-white' : 'text-black'
  }`}
  >
  <BsViewList/>
</button>
  </div> : <div className='flex flex-col translate-x-[7vw] items-center gap-2'><p className='text-[4.3vw] tracking-tight font-[inter-medium] opacity-40 '>Scroll Upward </p> <RiArrowUpWideFill size={20}/></div>}
     
    </div>
  );
};

export default SlidingToggle;
