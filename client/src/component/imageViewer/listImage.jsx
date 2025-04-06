import React , {useEffect ,useRef} from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Index from '../../pages/home';
import {useNavigate} from 'react-router-dom'
import {motion , AnimatePresence} from 'framer-motion'
import { useState } from 'react';
import { useImageContext } from '../../context/imageProvider';
function listImage() {
    const {images , setImages } = useImageContext()
  
let [isvisible , setIsVisible] = useState(false)
const navigate = useNavigate()
 const handleOnClick = (index)=>{
navigate('/model' , {state : {allImages : images , index : index}})
 }
 const handleIsOpen = (index)=>{
  console.log('clicked')
  setIsVisible(true)
  setImages((prev)=>
    prev.map((el , i)=>(
      {...el , isOpen : i === index ? !el.isOpen : false,}
    ))
  )
 }
  return (
    <div className='absolute'>
{images.map((el, i)=>{
  console.log(el.isOpen)
    return  <motion.div key={el.id || i}
    initial = {{opacity : 0 , y : 30}}
    animate = {{opacity :1 , y : 0}}
    transition={{duration : 0.1 , delay : i*0.01}}
    className={`w-full  ${el.isOpen ? 'h-[35vh]' : 'h-9'} duration-700 border-b border-[#b0b0b0] `}>
      <div className={` flex justify-between px-2 items-center  `}>
        <div  onClick={()=>{handleIsOpen(i)}} className='flex gap-1'>
            <h5 className='' >{i<10?'0':''}{i}</h5>
<h2>{el.modelName}</h2>
        </div>
        <div  onClick={()=>{handleOnClick(i)}} className='flex gap-7  '>

        <GoArrowUpRight size={27}/>
        
        </div>
    </div>
     <div className='flex pl-5 justify-between '>
      <h5 className={ `duration-500 ${el.isOpen ? 'opacity-60':'opacity-0'} tracking-tighter w-[83%]`}>{el.about}</h5>
      
      
    </div> 
    <div className=" pl-3 mt-3 flex gap-2 overflow-x-scroll scrollbar-hide scroll-smooth scroll-snap-x">
      

  
    {el.allImages.map((img, index) => {
      return (
        
        <img
          key={img} // Make sure this is unique
          className={`w-[40vw] ${el.isOpen ? 'opacity-100 translate-y-[0px]  ':'opacity-0 pointer-events-none  translate-y-[100px]'} duration-500`}
          src={img}
          alt=""
        />
      );
    })}
    </div>
    <div className='text-right pr-2 mt-1'>
     <h5 className={`duration-500 ${el.isOpen ? 'opacity-100':'opacity-0'}`}>{el.id}</h5>
      
      
    </div> 
  
    </motion.div>
})}
    </div>
  )
}

export default listImage