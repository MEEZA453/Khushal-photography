import React, { useState, useEffect } from 'react'
import ImageAlgo from './imageAlgo.jsx'

import Hero from '../hero/hero.jsx'
import Menu from '../../component/menu.jsx'
import Navber from '../../component/navber/navber.jsx'
import ViewToggle from '../../component/button/viewToggle.jsx'
import ListImage from '../../component/imageViewer/listImage.jsx'
import { AnimatePresence } from 'framer-motion'
import {useImageContext} from '../../context/imageProvider.jsx'
function Index() {
  const [visibility, setVisibility] = useState(false)
  const {images , setImages } = useImageContext()

  const [toggle, setToggle] = useState(false)
  const [isMenuShown , setIsMenuShown] = useState(false)

  // Set visibility to true when scroll starts
  useEffect(() => {
    const handleScroll = () => {
      // Set visibility true on first scroll
      setVisibility(true)
      // Optionally, you can remove the listener after first scroll:
      window.removeEventListener('scroll', handleScroll)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <div className="sticky top-0 z-[999]">
        <Navber  isMenuShown = {isMenuShown} setIsMenuShown ={setIsMenuShown} />
      </div>
      <AnimatePresence mode='wait'>
      {isMenuShown ?<div className='fixed top-0 z-[100] duration-700'>
      <Menu setIsShown = {setIsMenuShown}/></div>:null}
      </AnimatePresence>
      {/* <div className="fixed top-0">
        <Hero visibility = {visibility} />
      </div> */}

      {/* Use the "visibility" state to control display or animation */}
      <div className={`transition-all duration-500 `}>
        <div>
          {toggle 
            ? <ListImage images={images} setImages={setImages} /> 
            : <ImageAlgo images={images} setImages={setImages} />
          }
        </div>
      </div>
        <div className="fixed top-[90%] z-[50] right-[43%]">
          <ViewToggle visibility={visibility} toggle={toggle} setToggle={setToggle} />
        </div>
    </div>
  )
}

export default Index
