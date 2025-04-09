import React , {useState} from 'react'
import Navber from '../../component/navber/navber.jsx'
import Menu from '../../component/menu.jsx'
import { motion , AnimatePresence } from 'framer-motion'
import Footer from '../../component/footer/footer.jsx'

function About() {

  let [isMenuShown , setIsMenuShown] = useState(false)
  return (
    <motion.div 
    initial = {{opacity : 0 , y  : 50}}
    animate={{ opacity: 1, y: 0 }}
    transition={{duration : 0.5 , ease : 'easeInOut'}}
    >
      <Navber setIsMenuShown={setIsMenuShown} isMenuShown={isMenuShown}/>
      <AnimatePresence mode='wait'>
            {isMenuShown ?<div className='fixed top-0 z-[100] duration-700'>
            <Menu setIsShown = {setIsMenuShown}/></div>:null}
            </AnimatePresence>
      <div className='px-2'>
<div className='flex kh flex-col gap-0'>
  <h2>About Khushal Photography </h2>
  <div className='flex flex-col gap-2'>
      <h5>
      Founded by Khushal, a passionate photographer with a deep love for fashion and human expression, this platform is built on the belief that photography is not just about capturing how someone looks—it’s about capturing who they are. Every click is intentional. Every pose is a moment frozen in time. From high-end editorial shoots to personal model portfolios, Khushal brings a thoughtful, artistic approach to every project.
With years of hands-on experience in fashion photography, Khushal has worked with emerging models, stylists, and fashion-forward brands, helping them bring their vision to life through powerful, polished visuals. His style is modern yet timeless, bold yet refined—carefully balancing the creative and the commercial.
      </h5>
      <h5>
      With years of hands-on experience in fashion photography, Khushal has worked with emerging models, stylists, and fashion-forward brands, helping them bring their vision to life through powerful, polished visuals. His style is modern yet timeless, bold yet refined—carefully balancing the creative and the commercial.
      </h5>
      <h5>
      Whether it’s a styled shoot for a fashion campaign or a raw, authentic portrait session, Khushal aims to highlight the beauty in individuality and the power of visual storytelling. His ability to guide models with ease, create comfortable environments, and capture natural confidence sets him apart.
      </h5>
      <h5>
      At Khushal Photography, we don’t just take pictures—we create visuals that speak, move, and leave a lasting impression. If you’re looking for photographs that elevate your presence and tell your story with style, you’re in the right place.
      </h5>
</div>
</div>

<div className='flex kh flex-col gap-0'>
  <h2>About code1 Studio</h2>
  <div className='flex flex-col gap-2'>
      <h5>
      Code1 Studio is a creative digital studio founded by Meeza, dedicated to crafting beautiful, functional, and impactful digital experiences. We specialize in website development, web app development, UI/UX design, and graphic design, helping brands and individuals bring their visions to life through thoughtful design and powerful code.
      </h5>
      <h5>
      At Code1 Studio, we believe that great design and development go hand in hand. Whether it's a smooth, responsive website or a dynamic web application, our goal is to create work that not only looks good but works beautifully. Every project we take on is approached with precision, creativity, and a user-first mindset.
      </h5>
      <h5>We collaborate with startups, creatives, and businesses across industries to deliver digital solutions that are modern, clean, and future-ready. From wireframes to final deployment, every pixel and line of code is built with care.</h5>
    <h5>Have an idea in mind? <h5 className='text-blue-500'>meejanursk@gmail.com</h5></h5>
    
</div>
</div>
      </div>
      <Footer/>
    </motion.div>
  )
}

export default About