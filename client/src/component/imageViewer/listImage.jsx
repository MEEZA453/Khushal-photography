import React , {useEffect ,useRef} from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Index from '../../pages/home';
import {useNavigate} from 'react-router-dom'
import {motion , AnimatePresence} from 'framer-motion'
import { useState } from 'react';
import { useImageContext } from '../../context/imageProvider';
function listImage() {

    const {images , setImages } = useImageContext();
  
let [isvisible , setIsVisible] = useState(false)
const navigate = useNavigate()
 const handleOnClick = (index)=>{
navigate('/Models' , {state : { index : index}})
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
    <div className=''>
{images.map((el, i)=>{
  console.log(el.isOpen)
    return  <motion.div key={el.id || i}
    initial = {{opacity : 0 , y : 30}}
    animate = {{opacity :1 , y : 0}}
    transition={{duration : 0.1 , delay : i*0.01}}
    className={`w-full  ${el.isOpen ? 'h-[75vw]' : 'h-9'} duration-700 border-b border-[#b0b0b0] `}>
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
    <AnimatePresence mode='wait'>
    {el.isOpen ?<motion.div
     initial  = {{y : 50 , }}
    animate = {{y   : 0  ,}}
    transition = {{duration : 0.5 , ease : 'easeInOut'}}
exit ={{y : 50, opacity : 0}}
    className=" pl-3 mt-1 flex gap-2 overflow-x-scroll scrollbar-hide scroll-smooth scroll-snap-x">
      

  
   
        <img
           // Make sure this is unique
          className={`w-[40vw] ${el.isOpen ? 'opacity-100 translate-y-[0px]  ':'opacity-0 pointer-events-none  translate-y-[100px]'} duration-500`}
          src={el.allImages[0]}
          alt=""
        /> 
           
           <img
           // Make sure this is unique
          className={`w-[40vw] ${el.isOpen ? 'opacity-100 translate-y-[0px]  ':'opacity-0 pointer-events-none  translate-y-[100px]'} duration-500`}
          src={el.allImages[1]}
          alt=""
        />
           
           <img
           // Make sure this is unique
          className={`w-[40vw] ${el.isOpen ? 'opacity-100 translate-y-[0px]  ':'opacity-0 pointer-events-none  translate-y-[100px]'} duration-500`}
          src={el.allImages[2]}
          alt=""
        />   
        <img
           // Make sure this is unique
          className={`w-[40vw] ${el.isOpen ? 'opacity-100 translate-y-[0px]  ':'opacity-0 pointer-events-none  translate-y-[100px]'} duration-500`}
          src={el.allImages[3]}
          alt=""
        />
   
    </motion.div>: null}</AnimatePresence >
    <div className='text-right pr-2 mt-1'>
     <h5 className={`duration-500 ${el.isOpen ? 'opacity-100':'opacity-0'}`}>{el.id}</h5>
      
      
    </div> 
  
    </motion.div>
})}

<div className='flex w-full justify-between items-start px-2 pt-2 mt-5'>
  <div className='flex flex-col-reverse gap-2'>
  <p className='w-[85%]'>All the Models are professional and shoot their images with a parfect  manner.</p> 
<h4 className='font-[inter-medium] text-[3.5vw] tracking-tight'>( All Models )</h4>
  </div>
  <button className='px-4 py-2 border rounded-full w-fit h-fit border-black'>tap</button></div>
    </div>
  )
}

export default listImage