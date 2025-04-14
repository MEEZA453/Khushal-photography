import React , {useState} from 'react'
import ImageSelector from './imageSelector.jsx'
function ModelSelector({ imageRefs , foundedModel , setSelectedIndex, selectedIndex , coverImage, modelIndex, setModelIndex }) {
  let  [imagesLength , setImagesLength]  = useState(null)
  const handleOnclick = (el , i)=>{
    setModelIndex(i)
    setImagesLength(el.allImages.length)
  }
  
  return (
    <div className='filter-scale flex'>
<div className='z-[100]'> 

<ImageSelector imageRefs={imageRefs} imagesLength = {imagesLength} foundedModel={foundedModel} setSelectedIndex={setSelectedIndex} selectedIndex={selectedIndex}/>
</div>

    <div className="overflow-y-scroll z-[100] h-screen border-l-[1px]  w-[20vw] ">
      <div className="-translate-x-[2vw]   h-full flex flex-col gap-[19vw] justify-center items-center">
        {coverImage.map((el, i) => {
          return (
            <div key={i} className="mb-2  h-[] w-fit rotate-[270deg]">
              <h2
                onClick={()=>handleOnclick(el, i)}
                className={`pl-1 pt-1  cursor-pointer ${
                  modelIndex === i ? 'opacity-100' : 'opacity-30'
                }`}
                >
                {el.modelName}
              </h2>
            </div>
          )
        })}
      </div>
    </div>
        </div>
  )
}

export default ModelSelector
