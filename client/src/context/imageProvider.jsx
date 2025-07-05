import React, { Children } from 'react'
import {createContext , useContext , useState} from 'react'


import Beach30 from '../assets/images/Beach/Beach30.webp';

import Beach32 from '../assets/images/Beach/Beach32.webp';

import Beach42 from '../assets/images/Beach/Beach42.webp';
import Beach43 from '../assets/images/Beach/Beach43.webp';


import studio2 from '../assets/images/Studio/Studio2.webp';
import studio3 from '../assets/images/Studio/Studio3.webp';
import studio4 from '../assets/images/Studio/Studio4.webp';
import studio5 from '../assets/images/Studio/Studio5.webp';
import studio6 from '../assets/images/Studio/Studio6.webp';
import studio7 from '../assets/images/Studio/Studio7.webp';
import studio8 from '../assets/images/Studio/Studio8.webp';
import studio9 from '../assets/images/Studio/Studio9.webp';
import studio10 from '../assets/images/Studio/Studio10.webp';
import studio11 from '../assets/images/Studio/Studio11.webp';
import studio12 from '../assets/images/Studio/Studio12.webp';
import studio13 from '../assets/images/Studio/Studio13.webp';
import studio14 from '../assets/images/Studio/Studio14.webp';
import studio15 from '../assets/images/Studio/Studio15.webp';
import studio16 from '../assets/images/Studio/Studio16.webp';
import studio17 from '../assets/images/Studio/Studio17.webp';
import studio18 from '../assets/images/Studio/Studio18.webp';
import studio19 from '../assets/images/Studio/Studio19.webp';
import studio20 from '../assets/images/Studio/Studio20.webp';
import studio21 from '../assets/images/Studio/Studio21.webp';
import studio22 from '../assets/images/Studio/Studio22.webp';
import studio23 from '../assets/images/Studio/Studio23.webp';
import studio24 from '../assets/images/Studio/Studio24.webp';
import studio25 from '../assets/images/Studio/Studio25.webp';
import studio26 from '../assets/images/Studio/Studio26.webp';
import studio27 from '../assets/images/Studio/Studio27.webp';
import studio28 from '../assets/images/Studio/Studio28.webp';
import studio29 from '../assets/images/Studio/Studio29.webp';
import studio30 from '../assets/images/Studio/Studio30.webp';
import studio31 from '../assets/images/Studio/Studio31.webp';
import studio32 from '../assets/images/Studio/Studio32.webp';
import studio33 from '../assets/images/Studio/Studio33.webp';
import studio34 from '../assets/images/Studio/Studio34.webp';
import studio35 from '../assets/images/Studio/Studio35.webp';
import studio36 from '../assets/images/Studio/Studio36.webp';
import studio37 from '../assets/images/Studio/Studio37.webp';
import studio38 from '../assets/images/Studio/Studio38.webp';
import studio39 from '../assets/images/Studio/Studio39.webp';
import studio40 from '../assets/images/Studio/Studio40.webp';
import studio41 from '../assets/images/Studio/Studio41.webp';
import studio42 from '../assets/images/Studio/Studio42.webp';
import studio43 from '../assets/images/Studio/Studio43.webp';
import studio44 from '../assets/images/Studio/Studio44.webp';
import studio45 from '../assets/images/Studio/Studio45.webp';
import studio46 from '../assets/images/Studio/Studio46.webp';
import studio47 from '../assets/images/Studio/Studio47.webp';
import studio48 from '../assets/images/Studio/Studio48.webp';
import studio49 from '../assets/images/Studio/Studio49.webp';
import studio50 from '../assets/images/Studio/Studio50.webp';
import studio51 from '../assets/images/Studio/Studio51.webp';
import studio52 from '../assets/images/Studio/Studio52.webp';
import studio53 from '../assets/images/Studio/Studio53.webp';
import studio54 from '../assets/images/Studio/Studio54.webp';
import studio55 from '../assets/images/Studio/Studio55.webp';
import studio56 from '../assets/images/Studio/Studio56.webp';
import studio57 from '../assets/images/Studio/Studio57.webp';
import studio58 from '../assets/images/Studio/Studio58.webp';
import studio59 from '../assets/images/Studio/Studio59.webp';
import studio60 from '../assets/images/Studio/Studio60.webp';
import studio61 from '../assets/images/Studio/Studio61.webp';
import studio62 from '../assets/images/Studio/Studio62.webp';
import studio63 from '../assets/images/Studio/Studio63.webp';
import studio64 from '../assets/images/Studio/Studio64.webp';
import studio65 from '../assets/images/Studio/Studio65.webp';
import studio66 from '../assets/images/Studio/Studio66.webp';
import studio67 from '../assets/images/Studio/Studio67.webp';
import studio68 from '../assets/images/Studio/Studio68.webp';
import studio69 from '../assets/images/Studio/Studio69.webp';
import studio70 from '../assets/images/Studio/Studio70.webp';
import studio71 from '../assets/images/Studio/Studio71.webp';
import studio72 from '../assets/images/Studio/Studio72.webp';
import studio73 from '../assets/images/Studio/Studio73.webp';
import studio74 from '../assets/images/Studio/Studio74.webp';
import studio75 from '../assets/images/Studio/Studio75.webp';
import studio76 from '../assets/images/Studio/Studio76.webp';
import studio77 from '../assets/images/Studio/Studio77.webp';
import studio78 from '../assets/images/Studio/Studio78.webp';
import studio79 from '../assets/images/Studio/Studio79.webp';
import studio80 from '../assets/images/Studio/Studio80.webp';
import studio81 from '../assets/images/Studio/Studio81.webp';
import studio82 from '../assets/images/Studio/Studio82.webp';
import studio83 from '../assets/images/Studio/Studio83.webp';
import studio84 from '../assets/images/Studio/Studio84.webp';
import studio85 from '../assets/images/Studio/Studio85.webp';
import studio86 from '../assets/images/Studio/Studio86.webp';
import studio87 from '../assets/images/Studio/Studio87.webp';
import studio88 from '../assets/images/Studio/Studio88.webp';
import studio89 from '../assets/images/Studio/Studio89.webp';
import studio90 from '../assets/images/Studio/Studio90.webp';
import studio91 from '../assets/images/Studio/Studio91.webp';
import studio92 from '../assets/images/Studio/Studio92.webp';
import studio93 from '../assets/images/Studio/Studio93.webp';
import studio94 from '../assets/images/Studio/Studio94.webp';
import studio95 from '../assets/images/Studio/Studio95.webp';
import studio96 from '../assets/images/Studio/Studio96.webp';
import studio97 from '../assets/images/Studio/Studio97.webp';
import studio98 from '../assets/images/Studio/Studio98.webp';
import studio99 from '../assets/images/Studio/Studio99.webp';
import studio100 from '../assets/images/Studio/Studio100.webp';
import studio101 from '../assets/images/Studio/Studio101.webp';
import studio102 from '../assets/images/Studio/Studio102.webp';
import studio103 from '../assets/images/Studio/Studio103.webp';
import studio104 from '../assets/images/Studio/Studio104.webp';
import studio105 from '../assets/images/Studio/Studio105.webp';
import studio106 from '../assets/images/Studio/Studio106.webp';
import studio107 from '../assets/images/Studio/Studio107.webp';
import studio108 from '../assets/images/Studio/Studio108.webp';
import studio109 from '../assets/images/Studio/Studio109.webp';
import studio110 from '../assets/images/Studio/Studio110.webp';
import studio111 from '../assets/images/Studio/Studio111.webp';
import studio112 from '../assets/images/Studio/Studio112.webp';
import studio113 from '../assets/images/Studio/Studio113.webp';
import studio114 from '../assets/images/Studio/Studio114.webp';
import studio115 from '../assets/images/Studio/Studio115.webp';
import studio116 from '../assets/images/Studio/Studio116.webp';
import studio117 from '../assets/images/Studio/Studio117.webp';
import studio118 from '../assets/images/Studio/Studio118.webp';
import studio119 from '../assets/images/Studio/Studio119.webp';
import studio120 from '../assets/images/Studio/Studio120.webp';
import studio121 from '../assets/images/Studio/Studio121.webp';
import studio122 from '../assets/images/Studio/Studio122.webp';
import studio123 from '../assets/images/Studio/Studio123.webp';
import studio124 from '../assets/images/Studio/Studio124.webp';
import studio125 from '../assets/images/Studio/Studio125.webp';
import studio126 from '../assets/images/Studio/Studio126.webp';
import studio127 from '../assets/images/Studio/Studio127.webp';
import studio128 from '../assets/images/Studio/Studio128.webp';
import studio129 from '../assets/images/Studio/Studio129.webp';
import studio130 from '../assets/images/Studio/Studio130.webp';
import studio131 from '../assets/images/Studio/Studio131.webp';
import studio132 from '../assets/images/Studio/Studio132.webp';
import studio133 from '../assets/images/Studio/Studio133.webp';
import studio134 from '../assets/images/Studio/Studio134.webp';
import studio135 from '../assets/images/Studio/Studio135.webp';
import studio136 from '../assets/images/Studio/Studio136.webp';
import studio137 from '../assets/images/Studio/Studio137.webp';
import studio138 from '../assets/images/Studio/Studio138.webp';
import studio139 from '../assets/images/Studio/Studio139.webp';
import studio140 from '../assets/images/Studio/Studio140.webp';
import studio141 from '../assets/images/Studio/Studio141.webp';
import studio142 from '../assets/images/Studio/Studio142.webp';
import studio143 from '../assets/images/Studio/Studio143.webp';
import studio144 from '../assets/images/Studio/Studio144.webp';
import studio145 from '../assets/images/Studio/Studio145.webp';
import studio146 from '../assets/images/Studio/Studio146.webp';
import studio147 from '../assets/images/Studio/Studio147.webp';
import studio148 from '../assets/images/Studio/Studio148.webp';
import studio149 from '../assets/images/Studio/Studio149.webp';
import studio150 from '../assets/images/Studio/Studio150.webp';
import studio151 from '../assets/images/Studio/Studio151.webp';
import studio152 from '../assets/images/Studio/Studio152.webp';
import studio153 from '../assets/images/Studio/Studio153.webp';
import studio154 from '../assets/images/Studio/Studio154.webp';
import studio155 from '../assets/images/Studio/Studio155.webp';
import studio156 from '../assets/images/Studio/Studio156.webp';
import studio157 from '../assets/images/Studio/Studio157.webp';

import studio194 from '../assets/images/Studio/Studio194.webp';
import studio195 from '../assets/images/Studio/Studio195.webp';

import studio210 from '../assets/images/Studio/Studio210.webp';
import studio211 from '../assets/images/Studio/Studio211.webp';

import studio224 from '../assets/images/Studio/Studio224.webp';
import studio225 from '../assets/images/Studio/Studio225.webp';

import studio258 from '../assets/images/Studio/Studio258.webp';
import studio259 from '../assets/images/Studio/Studio259.webp';




// Now creating the allImages array
const allImages = [
 studio104 , studio105 , studio97, studio98, studio99, studio100,
  studio101, studio102, studio103,
];
const productImages = [
  studio97, studio98, studio99, studio100,
  studio101, studio102, studio103, studio104 , studio105 ,
];

const allClothingImages = [
  studio97, studio98, studio99, studio100,
  studio101, studio102, studio103,
];

const allOutdoorImages = [
  studio97, studio98, studio99, studio100,
  studio101, studio102, studio103,
  
];

const allTraditionalImages = [
  studio97, studio98, studio99, studio100,
  studio101, studio102, studio103,
];


const allStudioImages = [
  studio97, studio98, studio99, studio100,
  studio101, studio102, studio103,
];


const ImageContext = createContext()
export const ImageProvider = ({ children }) => {
  const   [imagesLength , setImagesLength]  = useState(0)

    const [images, setImages] = useState([
       
        {
          modelName: 'Editorial',
          id: 'Fashion-shoot',
          captures:[ studio194 , studio195 , studio118 , studio119],
          isOpen: false, isSelected : true,
          allImages: allStudioImages , 
          
          about: 'A fearless muse owning every frame with bold elegance and timeless grace.'
        },
        {
          modelName: 'Beauty',
          id: 'Fashion',
          captures: [studio225, studio224 , studio194 , studio195],
          isOpen: true, isSelected : true,
          allImages:allClothingImages,
          about: 'A trendsetter who brings brands to life with attitude, edge, and killer looks.'
        },  {
          modelName: 'Retouch',
          id: 'Fashion-shoot',
          captures: [studio258 ,studio259, studio210 ,studio211],
          isOpen: false, isSelected : true,
          allImages:allTraditionalImages ,
          about: 'A cultural soul who redefines traditions with poise, charm, and vibrant flair.'
        }, {
          modelName: 'Beach',
          id: 'Model-photoshoot',
          captures: [Beach30 , Beach32, Beach43, Beach42,  ],
          isOpen: false, isSelected : true,
          allImages: allImages ,
          about: 'A sun-kissed soul who slays the shore with effortless vibe and golden allure.'
        },
        {
          modelName: 'Creative',
          id: 'Model-photoshoot',
          captures: [ studio61 ,studio62, studio45 , studio46],
          isOpen: false, isSelected : true,
          allImages: allOutdoorImages ,
          about: 'A wild spirit embracing nature’s backdrop with raw beauty and effortless cool.'
        },
        
        {
          modelName: 'Outdoor',
          id: 'Product',
          captures: [studio56 ,studio57 , studio118 ,studio119],
          isOpen: false, isSelected : true,
          allImages: productImages ,
          about: 'A stylish eye who turns everyday products into icons with vibe and vision.'
        },
       
       
      ])

  return (
   <ImageContext.Provider  value = {{images , setImages , imagesLength ,  setImagesLength}}>
    {children}
   </ImageContext.Provider>
  )
}

export const useImageContext = () => useContext(ImageContext)