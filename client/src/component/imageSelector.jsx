import React, { useState, useEffect } from 'react';
import { useImageContext } from '../context/imageProvider';

function imageSelector({ imageRefs, selectedIndex, setSelectedIndex, foundedModel }) {
  const { imagesLength } = useImageContext();
  console.log(imagesLength);

  const handleIndexClick = (j) => {
    if (imageRefs?.current?.[j]) {
      imageRefs.current[j].scrollIntoView({ behavior: 'smooth', block: 'center' });
      setSelectedIndex(j);
    } else {
      console.log('df');
    }
  };

  return (
    <div className={`flex h-screen flex-col ${imagesLength < 30 ? 'justify-between' : 'gap-3 overflow-y-scroll'} p-1`}>
      {foundedModel.map((el, i) =>
        el.allImages.map((img, j) => (
          <h4
            className={`text-black ${selectedIndex === j ? 'opacity-100' : 'opacity-40'} index cursor-pointer`}
            key={`${i}-${j}`}
            onClick={() => handleIndexClick(j)}
          >
            {j < 10 ? '0' : ''}
            {j}
          </h4>
        ))
      )}
    </div>
  );
}

export default imageSelector;
