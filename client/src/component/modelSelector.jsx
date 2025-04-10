import React from 'react'

function ModelSelector({ coverImage, modelIndex, setModelIndex }) {

  return (
    <div className="overflow-y-scroll z-[100] h-screen border-l-[1px]  w-[20vw] ">
      <div className="-translate-x-[2vw]   h-full flex flex-col gap-[19vw] justify-center items-center">
        {coverImage.map((el, i) => {
          return (
            <div key={i} className="mb-2  h-[] w-fit rotate-[270deg]">
              <h2
                onClick={() => setModelIndex(i)}
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
  )
}

export default ModelSelector
