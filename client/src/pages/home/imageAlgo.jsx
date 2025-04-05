import React from 'react'
import {motion} from 'framer-motion'

function ImageAlgo({images , setImages}) {
  

  
  const imgInc = (index)=>{
    setImages((prev)=>
prev.map((el , i)=>(
index === i?{...el , isOpen : !el.isOpen}:el))
    )

  }
  return (
    <div>
      {images.map((el , i)=>{
        return <div className='px-2  '>
         {i%2 === 0 ?<div className='flex gap-1 relative flex-col mb-1'><div className='flex gap-4'>
          <motion.div  className={`duration-500 ${!el.isOpen ? 'w-[36%]':'w-[100%]'}`}>
          <img onClick={()=>{imgInc(i) , console.log(el.isOpen)}} className='img1' src={el.captures[0]} alt="" />

          </motion.div>
          <div className={` duration-500 ${!el.isOpen ? 'translate-y-0':'translate-y-[60vh]'} absolute right-0 w-[62%] flex flex-col gap-5`}>
            <div className='w-full flex justify-between'>
              <p>( Model )</p>
              <h4>({i<10 ?'0':''}{i})</h4>
            </div>
            <div>
              <h2>{el.modelName}</h2>
              <h5>{el.id}</h5>
            </div>
          </div>
         </div>
         <img src={el.captures[1]} alt=""  onClick={()=>{imgInc(i) , console.log(el.isOpen)}} className={`duration-500 ${!el.isOpen ? 'w-[100%]':'w-[36%]'}`}/></div> : <div></div>}
        </div>
      })}
    </div>
  )
}

export default ImageAlgo