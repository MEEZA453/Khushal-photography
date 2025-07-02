import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useImageContext } from '../context/imageProvider';

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedPage, setSelectedPage ,setIsMenuShown  } = useImageContext();
  const [copied, setCopied] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const email = "khushalchouhan48@gmail.com";

  const menu = [
    { name: 'Index', path: '/' },
    {
      name: 'Works',
      pages: [
        { name: 'In-Studio' },
        { name: 'Beachside-Bliss' },
        { name: 'Beyond-Walls' },
        { name: 'Fit-Frame' },
        { name: 'Ethnic-Frames' },
        { name: 'Product-Frame' },
      ],
    },
    { name: 'Social', path: '/social' },
    { name: 'About', path: '/about' },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleOnClick = (el , i) => {
    console.log(i)
    if (el.pages) {
      setExpandedMenu(prev => prev === el.name ? null : el.name);

    } else {
      navigate( '/Models' , {
        state : {index : i}
      })
    }
  };

  const isPageActive = (el) => {
    if (el.path) return location.pathname === el.path;
    return location.pathname === `/${el.name}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='h-screen w-screen bg-white  '
    >
      {/* Top tag */}
      {/* <div className='gap-1 flex absolute top-3 opacity-60 left-[22vw]'>
        <h5>Crafted in </h5>
        <h4 className='font-[inter-bold]'>code1 studio</h4>
        <h5>by meeza™</h5>
      </div> */}

      {/* Email button */}

<a href="/" className='absolute bottom-3 right-3 text-[4.5vw] tracking-tight font-[inter-medium]'>IG</a>

      <button
        onClick={handleCopy}
        className='bg-white text-[4.5vw] absolute bottom-24 left-1/2 -translate-x-[15vw] font-[inter-medium] tracking-tighter border rounded-full h-fit w-fit py-2 px-3'
      >
        {copied ? "Email Copied!" : "Get in touch"}
      </button>

      {/* Menu */}
      <div className='flex flex-col w-full justify-center absolute text-center top-[32vh] gap-1'>
        {menu.map((el, i) => (
          <div key={i} className='h-fit w-full text-center overflow-hidden'>
            <div
              onClick={() => handleOnClick(el )}
              className='cursor-pointer'
            >
              <motion.h3
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`${el.name === 'Works' ? '':null} duration-300 ${
                  isPageActive(el) || expandedMenu === el.name
                    ? 'text-black text-opacity-100'
                    : 'text-black text-opacity-30'
                }`}
              >
                {el.name}
              </motion.h3>
            </div>

            {/* Sub Pages */}
            <AnimatePresence>
            {el.pages && expandedMenu === el.name && (
  <motion.div 
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.4, ease: 'easeInOut' }}
    className="ml-0 mt-1 text-center flex flex-col gap-1"
  >
                  {el.pages.map((sub, j) => (
                    <motion.div
                      key={j}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: j * 0.05 }}
                      className='cursor-pointer'
                      onClick={() => handleOnClick(sub , j)}
                    >
                      <h3
                        className={`font-[inter-light] ${  
                          isPageActive(sub)
                            ? 'text-black text-opacity-100'
                            : 'text-black text-opacity-30'
                        }`}
                      >
                        {sub.name}
                      </h3>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Menu;
