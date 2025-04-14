import React , {useState} from 'react'
import Navber from '../../component/navber/navber.jsx'
import Menu from '../../component/menu.jsx'
import { motion , AnimatePresence } from 'framer-motion'
import Footer from '../../component/footer/footer.jsx'
import code1Studio from '../../assets/images/code1studio.jpeg'

function About() {

  let [isMenuShown , setIsMenuShown] = useState(false)
  return (
    <motion.div 
    initial = {{opacity : 0 , y  : 50}}
    animate={{ opacity: 1, y: 0 }}
    transition={{duration : 0.5 , ease : 'easeInOut'}}
    className=''
    ><div className="absolute top-0">

      <Navber setIsMenuShown={setIsMenuShown} isMenuShown={isMenuShown}/>
    </div>
      <AnimatePresence mode='wait'>
            {isMenuShown ?<div className='fixed top-0 z-[100] duration-700'>
            <Menu setIsShown = {setIsMenuShown}/></div>:null}
            </AnimatePresence>
      <div className=''>
       <img src={code1Studio} alt="" />

<div className='flex kh flex-col px-1 mt-2  gap-0'>
      <h6>
      <b>Code1 Studio</b> is a creative digital studio founded by Meeza, dedicated to <b>crafting beautiful, functional, and impactful digital experiences</b>. We specialize in  website development, web app development, UI/UX design, and graphic design,<b>helping brands and individuals</b>  bring their visions to life through thoughtful design and powerful code.
     
      
      At Code1 Studio, we believe that great design and development go hand in hand. Whether it's a smooth, responsive website or a dynamic web application, <b>our goal is to create work that not only looks good but works beautifully</b>. Every project we take on is approached with precision, creativity, and a user-first mindset.
    
      We collaborate with startups, creatives, and businesses across industries to deliver digital solutions that are modern, clean, and future-ready. From wireframes to final deployment, every pixel and line of code is built with care.
    <h6><b>Have an idea in mind? </b><h6 className='text-blue-500'>meejanursk@gmail.com</h6></h6></h6>
    

</div>
      </div>
      <Footer/>
    </motion.div>
  )
}

export default About