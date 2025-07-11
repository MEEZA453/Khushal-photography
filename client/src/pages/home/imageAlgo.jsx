import React , {useEffect , useState} from 'react'
import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";
import achivment1 from '../../assets/logo/achivment1.png' 
import { useImageContext } from '../../context/imageProvider';
import Tooltip from '../../component/toolTip';
import fashionLogo from '../../assets/logo/213.png'
import { SlFolderAlt, SlVolume1 } from "react-icons/sl";
import { IoImagesOutline } from "react-icons/io5";

function ImageAlgo() {
  const {images , setImages , imagesLength , setImagesLength } = useImageContext()
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
        return el.isSelected ? <motion.div
        // initial = {{opacity : 0 , y  : 50}}
        // key={i}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{duration : 0.5 , ease : 'easeInOut'}}
        // viewport={{amount : 0.2}}
         className='px-2 '>
        <div className='flex gap-4 relative flex-col mb-1'><div className='flex gap-[4]'>
          <motion.div  className={``}>
          <img
        
          onClick={()=>{imgInc(i)


            
          }} className={`duration-500  ${el.isOpen ? ' w-[100vw] h-[120vw]' : 'w-[35vw] h-[45vw]'} img1 object-cover   w-[100vw]`}  src={el.captures[0]} alt="" />

          </motion.div>
          <div className={` duration-500 ${!el.isOpen ? 'translate-y-0':'translate-y-[121vw]'} absolute right-0 w-[62%] flex flex-col gap-5`}>
            <div className='w-full flex justify-between'>
              <h5 className=''>( {el.id} )</h5>
              <h4>({i<10 ?'0':''}{i})</h4>
            </div>
            <div>
              <div className='flex gap-1 items-center'>
              <h2
              className=''
              onClick = {()=>{navigate('/Models',{
                state : {
                  index : i ,}
                 })}}>{el.modelName}  </h2> <div  className='flex border border-[#4a4a4a] rounded-full'>
                  <GoArrowUpRight color='#4a4a4a' size = {10}/>
                  </div></div>
              <h5 className='tracking-tight mt-1 opacity-60'>{el.about}</h5>
            </div>
            <div className='flex justify-between pr-4  '>

            <button onClick={()=>{navigate('/Models' ,{
              state : { index : i }
            }) , setImagesLength(el.allImages.length)} } className='w-fit h-fit border rounded-full  px-3 py-1 border-black'>Explore</button>
            <div className='flex gap-1 justify-center items-center opacity-50' >

            <IoImagesOutline size={20} />
              <h4 className='text-[4vw] tracking-tighter'>{el.allImages.length}</h4>
     
            </div>
            </div>
          </div>
         </div>
         <img
        
         src={el.captures[1]} alt=""  onClick={()=>{imgInc(i) , console.log(el.isOpen)}} className={`duration-500 object-cover 
           ${!el.isOpen ? ' w-[100vw] h-[120vw]' : 'w-[35vw] h-[45vw]'}`}/></div> 
        </motion.div>:null 
      })}
    </div>
  )
}

export default ImageAlgo