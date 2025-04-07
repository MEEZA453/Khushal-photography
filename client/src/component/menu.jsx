import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menu] = useState([
    { name: 'Index', path: '/' },
    { name: 'Gallary', path: '/Gallary' },
    { name: 'Models', path: '/Models' },
    { name: 'About', path: '/About' },
  ]);

  const [copied, setCopied] = useState(false);
  const email = "khushal@gmail.com"; // replace with your actual email

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='h-screen w-screen bg-white bg-opacity-70 px-4'
    >
      <button
        onClick={handleCopy}
        className='bg-white text-[4.5vw] absolute bottom-24 left-1/2 -translate-x-[15vw] font-[inter-medium] tracking-tighter border rounded-full h-fit w-fit py-2 px-3'
      >
        {copied ? "Email Copied!" : "Get in touch"}
      </button>

      <div className='flex flex-col absolute top-[20vh] gap-1'>
        {menu.map((el, i) => {
          const isActive = location.pathname === el.path;

          return (
            <div
              onClick={() => navigate(el.path)}
              key={i}
              className='h-fit w-fit overflow-hidden cursor-pointer'
            >
              <motion.h3
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className={`duration-300 ${
                  isActive ? 'text-black text-opacity-100' : 'text-black text-opacity-30'
                }`}
              >
                {el.name}
              </motion.h3>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Menu;
