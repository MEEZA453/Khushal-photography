import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function listImage({images  , setImages}) {
  return (
    <div>
{images.map((el, i)=>{
    return <div className='w-full h-9 flex justify-between px-2 items-center  border-b border-black'>
        <div className='flex gap-1'>
            <h5>{i<10?'0':''}{i}</h5>
<h2>{el.modelName}</h2>
        </div>
        <div className='flex gap-7'>

        <GoArrowUpRight size={27}/>
        
        </div>
    </div>
})}
    </div>
  )
}

export default listImage