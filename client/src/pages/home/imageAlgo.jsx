import React from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";
import achivment1 from '../../assets/logo/achivment1.png' 
import { useImageContext } from '../../context/imageProvider';

function ImageAlgo() {
  const {images , setImages } = useImageContext()
  
const navigate = useNavigate()
  
  const imgInc = (index)=>{
    setImages((prev)=>
prev.map((el , i)=>(
index === i?{...el , isOpen : !el.isOpen}:el))
    )

  }
  return (
    <div className=''>
      {images.map((el , i)=>{
        return <motion.div
        initial = {{opacity : 0 , y  : 50}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration : 0.5 , ease : 'easeInOut'}}
        viewport={{amount : 0.3}}
         className='px-2 '>
        <div className='flex gap-4 relative flex-col mb-1'><div className='flex gap-[4]'>
          <motion.div  className={`duration-500  ${!el.isOpen ? 'w-[36%]':'w-[100%]'}`}>
          <img
        
          onClick={()=>{imgInc(i)


            
          }} className='img1' src={el.captures[0]} alt="" />

          </motion.div>
          <div className={` duration-500 ${!el.isOpen ? 'translate-y-0':'translate-y-[121vw]'} absolute right-0 w-[62%] flex flex-col gap-5`}>
            <div className='w-full flex justify-between'>
              <h5>{el.id}</h5>
              <h4>({i<10 ?'0':''}{i})</h4>
            </div>
            <div>
              <div className='flex gap-1 items-center'>
              <h2 onClick = {()=>{navigate('/Models',{
                state : {
                  index : i ,}
                 })}}>{el.modelName}  </h2> <div  className='flex border border-[#4a4a4a] rounded-full'>
                  <GoArrowUpRight color='#4a4a4a' size = {10}/>
                  </div></div>
              <h5 className='tracking-tight mt-1 opacity-60'>{el.about}</h5>
            </div>
            <div className='flex justify-between  '>

            <h5 className=''>( Model )</h5>
            <div className='relative scale-[0.7] '>
                  <img className='w-[17vw] ' src={achivment1} alt="" />
                  <h2 className='absolute top-[2vw] left-[5vw]'>3y</h2>
                </div>
            </div>
          </div>
         </div>
         <img
        
         src={el.captures[1]} alt=""  onClick={()=>{imgInc(i) , console.log(el.isOpen)}} className={`duration-500 ${!el.isOpen ? 'w-[100%]':'w-[36%]'}`}/></div> 
        </motion.div>
      })}
    </div>
  )
}

export default ImageAlgo