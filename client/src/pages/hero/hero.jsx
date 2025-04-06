import React from 'react';
import video from '../../assets/videos/video.mp4';
import Navber from '../../component/navber/navber';
import { motion, useScroll, useTransform } from 'framer-motion';

function Hero() {
  const { scrollY } = useScroll();

  // Create dynamic blur and overlay opacity values based on scroll
  const blur = useTransform(scrollY, [0, 300], ["blur(0px)", "blur(12px)"]);
  const overlayOpacity = useTransform(scrollY, [0, 300], [0, 0.5]);

  return (
    <div className='h-screen w-screen relative overflow-hidden'>
      

      {/* White overlay that fades in with scroll */}
      <motion.div
        className='absolute top-0 left-0 h-full w-full bg-white z-[10]'
        style={{ opacity: overlayOpacity }}
      />

      {/* Background Video with scroll blur */}
      <motion.video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className='absolute top-0 left-0 w-full h-full object-cover scale-150 z-[0]'
        style={{ filter: blur }}
      />
    </div>
  );
}

export default Hero;
