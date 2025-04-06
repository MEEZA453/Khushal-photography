import React, { useState } from 'react';
import { CiGrid32 } from "react-icons/ci";
import { BsViewList } from "react-icons/bs";
const SlidingToggle = ({toggle , setToggle , visibility}) => {

  return (
    <div className={`${visibility ? 'opacity-100':'opacity-100'} relative inline-flex rounded h-6 bg-gray-200  w-16`}>
      {/* Sliding Indicator */}
      <div
        className={`absolute  rounded h-full w-1/2  bg-black transition-all duration-300 ${
          toggle ? 'translate-x-full' : ''
        }`}
      />

      {/* Buttons */}
      <button
        onClick={() => setToggle(false)}
        className={`w-1/2 z-10 text-[14px] flex justify-center items-center font-[inter-medium] transition ${
          !toggle ? 'text-white' : 'text-black'
        }`}
      >
        <CiGrid32/>
      </button>
      <button
        onClick={() => setToggle(true)}
        className={`w-1/2 z-10 text-[14px] flex justify-center items-center font-[inter-medium] transition ${
          toggle ? 'text-white' : 'text-black'
        }`}
      >
        <BsViewList/>
      </button>
    </div>
  );
};

export default SlidingToggle;
