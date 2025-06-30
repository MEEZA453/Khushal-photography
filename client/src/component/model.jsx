import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navber from '../component/navber/navber.jsx'
import ViewToggle from '../component/button/viewToggle.jsx'
import { motion } from 'framer-motion'
import ModelSelector from './modelSelector.jsx'
import ImageSelector from './imageSelector.jsx'
import Hero from '../pages/hero/hero.jsx'
import { useImageContext } from '../context/imageProvider.jsx'
import ImageOpener from './imageOpener.jsx'

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
  const imageRefs = useRef([])


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


        <div className={`overflow-y-scroll z-50 h-screen model-image grid gap-16 pl-2 ${toggle ? 'grid-cols-2 p-[0vw]' : 'grid-col-1'} w-full`}>
          {foundedModel.map((el, i) =>
            el.allImages.map((img, j) => (
              <motion.div
                ref={(el) => (imageRefs.current[j] = el)}
                key={j}
                className="flex flex-row-reverse gap-[4px] text-right"
                initial={{ opacity: 0, y: 50 }}
                animate = {{ opacity: 1, y: 0}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img loading="lazy" onClick={()=>{setSelectedImage(img)}} className={`object-cover object-top  ${toggle ? 'h-[30vw]':'h-[50vw]'}`} src={img} alt="" />
              </motion.div>
            ))
          )}
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
