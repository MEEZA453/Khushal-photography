import React ,{useState} from 'react'
import {useEffect} from 'react'
import { useImageContext } from '../context/imageProvider'
function imageSelector({ imageRefs , selectedIndex , setSelectedIndex , foundedModel }) {
const {imagesLength}  = useImageContext();
console.log(imagesLength)
console.log(imagesLength)
    const handleIndexClick = (j , imageRefs , setSelectedIndex) => {
        if (imageRefs.current[j]) {
          imageRefs.current[j].scrollIntoView({ behavior: 'smooth', block: 'center' })
          setSelectedIndex(j)
        }
      }
     
  return (
    <div className={`flex h-screen flex-col   ${imagesLength < 30 ?'justify-between':'gap-3 overflow-y-scroll'} p-1`}>
          {foundedModel.map((el, i) =>
            el.allImages.map((img, j) => (
              <h4
                className={`text-black ${selectedIndex === j ? 'opacity-100':'opacity-40'} index cursor-pointer`}
                key={`${i}-${j}`}
                onClick={() => handleIndexClick(j , imageRefs ,setSelectedIndex)}
              >
                {j < 10 ? '0' : ''}
                {j}
              </h4>
            ))
          )}
        </div>
  )
}

export default imageSelector