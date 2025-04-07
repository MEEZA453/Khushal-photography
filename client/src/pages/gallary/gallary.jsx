import React  , {useState} from 'react'
import { useImageContext } from '../../context/imageProvider'
import {motion , AnimatePresence } from 'framer-motion'
import Menu from '../../component/menu.jsx'
import Navber from '../../component/navber/navber.jsx'

function Gallary() {
  
  const {images , setImages} = useImageContext()
  const [isMenuShown , setIsMenuShown] = useState(false)
  return (
    <div className=' w-screen  '>
<div className="sticky top-0 z-[999]">
        <Navber  isMenuShown = {isMenuShown} setIsMenuShown ={setIsMenuShown} />
      </div>
      <AnimatePresence mode='wait'>
      {isMenuShown ?<div className='fixed top-0 z-[100] duration-700'>
      <Menu setIsShown = {setIsMenuShown}/></div>:null}
      </AnimatePresence>
      <div className={`grid  ${isMenuShown ? 'h-screen':'h-full'} overflow-hidden px-3 grid-cols-3 gap-10 mt-[5vh] justify-start items-start`}>

      
 {images.map((el ,i)=>{
 return  el.allImages.map((img , j)=>{
 return <motion.div 
 initial={{ opacity: 0, y: 50 }}
 animate = {{ opacity: 1, y: 0}}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, ease: "easeInOut", delay : 0.01*j }}
 viewport={{ once: true, amount: 0.3  }}
 className={`flex gap-2`}>
    <h5 className='opacity-50'>{j}</h5>
    <img className='' loading='lazy' src={img} alt="" />
  </motion.div>
  })
 
})}
</div>  
    </div>
  )
}

export default Gallary