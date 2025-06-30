import React, { useState, useEffect } from 'react'
import ImageAlgo from './imageAlgo.jsx'
import Footer from '../../component/footer/footer.jsx'
import Hero from '../hero/hero.jsx'
import Menu from '../../component/menu.jsx'
import Navber from '../../component/navber/navber.jsx'
import ViewToggle from '../../component/button/viewToggle.jsx'
import ListImage from '../../component/imageViewer/listImage.jsx'
import { AnimatePresence } from 'framer-motion'
import {useImageContext} from '../../context/imageProvider.jsx'
import Tooltip from '../../component/toolTip.jsx'
import SwitchToMobile from '../../component/SwitchToMobile.jsx'
function Index() {
  const [visibility, setVisibility] = useState(false)
  const {images , setImages ,  imagesLength , setImagesLength  } = useImageContext()
  const [opacity, setOpacity] = useState(0);
 

  const [toggle, setToggle] = useState(false)
  const [isMenuShown , setIsMenuShown] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {

      setVisibility(true)
      window.removeEventListener('scroll', handleScroll)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOpacity(scrollY);
    };
  window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
{window.innerWidth > 640 ? <SwitchToMobile/> :   <div className='min-h-screen'>
      <div className="sticky top-0 z-[900]">
        <Navber  isMenuShown = {isMenuShown} setIsMenuShown ={setIsMenuShown} />
      </div>
      {/* <div style={{ opacity: Math.max(1 - scrollY / 100, 0) }} className='w-screen  tooltipWrapper -translate-y-24 h-[90vh] content-center justify-center'>
     <Hero/>
     
     </div> */}
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
            ? <ListImage  /> 
            : <ImageAlgo imagesLength={imagesLength} setImagesLength={setImagesLength} />
            
          }
        </div>
      </div>
        <div className="fixed top-[90%] z-[50] right-[43%]">
          <ViewToggle visibility={visibility} toggle={toggle} setToggle={setToggle} />
        </div>
        <div className={toggle ? 'absolute w-full bottom-0' :null}>

        <Footer/>
        </div>
    </div>}
  
          </div>
  )
}

export default Index
