import React from 'react'

function ModelSelector({ coverImage, modelIndex, setModelIndex }) {

  return (
    <div className="overflow-y-scroll z-[100] h-screen border-l-[1px] border-[#949494] w-[14vw] ">
      <div className="-translate-x-[6vw] -translate-y-[12vh] flex flex-col gap-[15vh] justify-end items-start">
        {coverImage.map((el, i) => {
          return (
            <div key={i} className="mb-2 rotate-[270deg]">
              <h2
                onClick={() => setModelIndex(i)}
                className={`pl-1 pt-1 transition-opacity  cursor-pointer ${
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
