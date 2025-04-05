import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import logo from '../../assets/logo/logo.jpg'

function navber() {
  return (
    <div className='w-full  items-center pr-3 mb-3 flex justify-between'>
        <div><img className='w-[50vw]' src={logo} alt="" /></div>
        {/* <div className="logo flex gap-2 items-center"><h3 className='text-[6vw] tracking-tighter'>Khushal</h3><h2 className='text-[6.5vw]'>Photography</h2></div> */}
        <div className='menu'><AiOutlineMenu size={20}/></div>
    </div>
  )
}

export default navber