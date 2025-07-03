import React, { useRef, useState , useEffect } from 'react'
import {AnimatePresence} from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Navber from '../component/navber/navber.jsx'
import ViewToggle from '../component/button/viewToggle.jsx'
import { motion } from 'framer-motion'
import ModelSelector from './modelSelector.jsx'
import ImageSelector from './imageSelector.jsx'
import Hero from '../pages/hero/hero.jsx'
import { useImageContext } from '../context/imageProvider.jsx'
import ImageOpener from './imageOpener.jsx'
import Loader from './loading.jsx'
import {useLoadingContext} from '../context/LoadingProvider.jsx'

function Model() {
        
  
  const {images , setImages ,  } = useImageContext()
  const [selectedImage , setSelectedImage] = useState(null)
  
  const location = useLocation()
  const  allImages  = images
  
  const { index , setImagesIndex , imagesIndex } = location.state || 0
  
  const [toggle, setToggle] = useState(false) 
  const [modelIndex, setModelIndex] = useState(index?index :0)
  const [selectedIndex , setSelectedIndex] = useState(3)
  const foundedModel = allImages.filter((el, i) => modelIndex === i)
  const {isLoading , setIsLoading}  = useLoadingContext()
  const imageRefs = useRef([])
  console.log(isLoading)
  useEffect(()=>{
    const timer  = setTimeout(()=>{
      setIsLoading(false)
    } , 1000)
  return ()=> clearTimeout(timer)
},[])
  return (
    <motion.div > 



      <div className="flex flex-row-reverse ">
        <ModelSelector imagesRefs = {imageRefs}
         foundedModel ={foundedModel} 
         setSelectedIndex = {setSelectedIndex}
         selectedIndex = {selectedIndex}
          coverImage={allImages}
           modelIndex={modelIndex}
            setModelIndex={setModelIndex} />

<div>
   <div className={`overflow-y-scroll z-50 h-screen model-image grid gap-2 pl-2 ${toggle ? 'grid-cols-2 p-[0vw]' : 'grid-col-1'} w-full`}>

          {foundedModel.map((el, i) =>
            el.allImages.map((img, j) => (
              <motion.div
                ref={(el) => (imageRefs.current[j] = el)}
                key={j}
                className="flex flex-row-reverse gap-[4px] text-right"
              
              >
                <motion.img
                  key={`${modelIndex}-${toggle}`}
                initial ={{opacity : 0 , y : 50}}
                animate = {{opacity : 1 , y : 0}}
                transition={{duration : 0.5 , delay : 0.050*j}}
                loading="lazy" onClick={()=>{setSelectedImage(img)}} className={`object-cover object-top  ${toggle ? 'h-[50vw]':'h-[100vw]'}`} src={img} alt="" />
              </motion.div>
            ))
          )}
        </div>

</div>
       
      </div>

      <div className="fixed top-[90%] right-[43%] z-[100]">
        <ViewToggle toggle={toggle} setToggle={setToggle} />
      </div>
      <ImageOpener selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
    </motion.div>
  )
}

export default Model
