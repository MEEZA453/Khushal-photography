import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

function Footer() {
  return (
    <div>
      <div className='w-full p-2 mt-[5vh] justify-between flex'>
        <div className='mb-2 flex flex-col gap-5'>
          <h4 className='font-[inter-medium] tracking-tight'>Want a shoot?</h4>

        
          <a href="mailto:meejanursk@gmail.com" className='w-fit'>
            <h2 className='text-[20vw] tracking-[-1.8vw] hover:underline transition-all duration-300'>
              Let &apos;s talk
            </h2>
          </a>
        </div>
        <div>
          <GoArrowUpRight size={30} />
        </div>
      </div>

      <div className="w-full text-center border-t-[1px] border-black py-1">
        <h4 className='font-[inter-regular] tracking-tight'>
          Copyright © 2025 Khushal
        </h4>
      </div>
    </div>
  );
}

export default Footer;
