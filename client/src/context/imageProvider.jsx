import React, { Children } from 'react'
import {createContext , useContext , useState} from 'react'
import Beach1 from '../assets/images/Beach/Beach1.webp';
import Beach2 from '../assets/images/Beach/Beach2.webp';
import Beach3 from '../assets/images/Beach/Beach3.webp';
import Beach4 from '../assets/images/Beach/Beach4.webp';
import Beach5 from '../assets/images/Beach/Beach5.webp';
import Beach6 from '../assets/images/Beach/Beach6.webp';
import Beach7 from '../assets/images/Beach/Beach7.webp';
import Beach8 from '../assets/images/Beach/Beach8.webp';
import Beach9 from '../assets/images/Beach/Beach9.webp';
import Beach10 from '../assets/images/Beach/Beach10.webp';
import Beach11 from '../assets/images/Beach/Beach11.webp';
import Beach12 from '../assets/images/Beach/Beach12.webp';
import Beach13 from '../assets/images/Beach/Beach13.webp';
import Beach14 from '../assets/images/Beach/Beach14.webp';
import Beach15 from '../assets/images/Beach/Beach15.webp';
import Beach16 from '../assets/images/Beach/Beach16.webp';
import Beach17 from '../assets/images/Beach/Beach17.webp';
import Beach18 from '../assets/images/Beach/Beach18.webp';
import Beach19 from '../assets/images/Beach/Beach19.webp';
import Beach20 from '../assets/images/Beach/Beach20.webp';
import Beach21 from '../assets/images/Beach/Beach21.webp';
import Beach22 from '../assets/images/Beach/Beach22.webp';
import Beach23 from '../assets/images/Beach/Beach23.webp';
import Beach24 from '../assets/images/Beach/Beach24.webp';
import Beach25 from '../assets/images/Beach/Beach25.webp';
import Beach26 from '../assets/images/Beach/Beach26.webp';
import Beach27 from '../assets/images/Beach/Beach27.webp';
import Beach28 from '../assets/images/Beach/Beach28.webp';
import Beach29 from '../assets/images/Beach/Beach29.webp';
import Beach30 from '../assets/images/Beach/Beach30.webp';
import Beach31 from '../assets/images/Beach/Beach31.webp';
import Beach32 from '../assets/images/Beach/Beach32.webp';
import Beach33 from '../assets/images/Beach/Beach33.webp';
import Beach34 from '../assets/images/Beach/Beach34.webp';
import Beach35 from '../assets/images/Beach/Beach35.webp';
import Beach36 from '../assets/images/Beach/Beach36.webp';
import Beach37 from '../assets/images/Beach/Beach37.webp';
import Beach38 from '../assets/images/Beach/Beach38.webp';
import Beach39 from '../assets/images/Beach/Beach39.webp';
import Beach40 from '../assets/images/Beach/Beach40.webp';
import Beach41 from '../assets/images/Beach/Beach41.webp';
import Beach42 from '../assets/images/Beach/Beach42.webp';
import Beach43 from '../assets/images/Beach/Beach43.webp';
import Beach44 from '../assets/images/Beach/Beach44.webp';
import Beach45 from '../assets/images/Beach/Beach45.webp';
import Beach46 from '../assets/images/Beach/Beach46.webp';
import Beach47 from '../assets/images/Beach/Beach47.webp';
import Beach48 from '../assets/images/Beach/Beach48.webp';
import Beach49 from '../assets/images/Beach/Beach49.webp';
import Beach50 from '../assets/images/Beach/Beach50.webp';


import Clothing1 from '../assets/images/Clothing brand/Clothing brand1.webp';
import Clothing2 from '../assets/images/Clothing brand/Clothing brand2.webp';
import Clothing3 from '../assets/images/Clothing brand/Clothing brand3.webp';
import Clothing4 from '../assets/images/Clothing brand/Clothing brand4.webp';
import Clothing5 from '../assets/images/Clothing brand/Clothing brand5.webp';
import Clothing6 from '../assets/images/Clothing brand/Clothing brand6.webp';
import Clothing7 from '../assets/images/Clothing brand/Clothing brand7.webp';
import Clothing8 from '../assets/images/Clothing brand/Clothing brand8.webp';
import Clothing9 from '../assets/images/Clothing brand/Clothing brand9.webp';
import Clothing10 from '../assets/images/Clothing brand/Clothing brand10.webp';
import Clothing11 from '../assets/images/Clothing brand/Clothing brand11.webp';
import Clothing12 from '../assets/images/Clothing brand/Clothing brand12.webp';
import Clothing13 from '../assets/images/Clothing brand/Clothing brand13.webp';
import Clothing14 from '../assets/images/Clothing brand/Clothing brand14.webp';
import Clothing15 from '../assets/images/Clothing brand/Clothing brand15.webp';
import Clothing16 from '../assets/images/Clothing brand/Clothing brand16.webp';
import Clothing17 from '../assets/images/Clothing brand/Clothing brand17.webp';
import Clothing18 from '../assets/images/Clothing brand/Clothing brand18.webp';
import Clothing19 from '../assets/images/Clothing brand/Clothing brand19.webp';
import Clothing20 from '../assets/images/Clothing brand/Clothing brand20.webp';
import Clothing21 from '../assets/images/Clothing brand/Clothing brand21.webp';
import Clothing22 from '../assets/images/Clothing brand/Clothing brand22.webp';
import Clothing23 from '../assets/images/Clothing brand/Clothing brand23.webp';
import Clothing24 from '../assets/images/Clothing brand/Clothing brand24.webp';
import Clothing25 from '../assets/images/Clothing brand/Clothing brand25.webp';
import Clothing26 from '../assets/images/Clothing brand/Clothing brand26.webp';


import outDoor2 from '../assets/images/Outdoor/Outdoor2.webp';
import outDoor3 from '../assets/images/Outdoor/Outdoor3.webp';
import outDoor4 from '../assets/images/Outdoor/Outdoor4.webp';
import outDoor5 from '../assets/images/Outdoor/Outdoor5.webp';
import outDoor6 from '../assets/images/Outdoor/Outdoor6.webp';
import outDoor7 from '../assets/images/Outdoor/Outdoor7.webp';
import outDoor8 from '../assets/images/Outdoor/Outdoor8.webp';
import outDoor9 from '../assets/images/Outdoor/Outdoor9.webp';
import outDoor10 from '../assets/images/Outdoor/Outdoor10.webp';
import outDoor11 from '../assets/images/Outdoor/Outdoor11.webp';
import outDoor12 from '../assets/images/Outdoor/Outdoor12.webp';
import outDoor13 from '../assets/images/Outdoor/Outdoor13.webp';
import outDoor14 from '../assets/images/Outdoor/Outdoor14.webp';
import outDoor15 from '../assets/images/Outdoor/Outdoor15.webp';
import outDoor16 from '../assets/images/Outdoor/Outdoor16.webp';
import outDoor17 from '../assets/images/Outdoor/Outdoor17.webp';
import outDoor18 from '../assets/images/Outdoor/Outdoor18.webp';
import outDoor19 from '../assets/images/Outdoor/Outdoor19.webp';
import outDoor20 from '../assets/images/Outdoor/Outdoor20.webp';
import outDoor21 from '../assets/images/Outdoor/Outdoor21.webp';
import outDoor22 from '../assets/images/Outdoor/Outdoor22.webp';
import outDoor23 from '../assets/images/Outdoor/Outdoor23.webp';
import outDoor24 from '../assets/images/Outdoor/Outdoor24.webp';
import outDoor25 from '../assets/images/Outdoor/Outdoor25.webp';
import outDoor26 from '../assets/images/Outdoor/Outdoor26.webp';
import outDoor27 from '../assets/images/Outdoor/Outdoor27.webp';
import outDoor28 from '../assets/images/Outdoor/Outdoor28.webp';
import outDoor29 from '../assets/images/Outdoor/Outdoor29.webp';
import outDoor30 from '../assets/images/Outdoor/Outdoor30.webp';
import outDoor31 from '../assets/images/Outdoor/Outdoor31.webp';
import outDoor32 from '../assets/images/Outdoor/Outdoor32.webp';
import outDoor33 from '../assets/images/Outdoor/Outdoor33.webp';
import outDoor34 from '../assets/images/Outdoor/Outdoor34.webp';
import outDoor35 from '../assets/images/Outdoor/Outdoor35.webp';
import outDoor36 from '../assets/images/Outdoor/Outdoor36.webp';
import outDoor37 from '../assets/images/Outdoor/Outdoor37.webp';
import outDoor38 from '../assets/images/Outdoor/Outdoor38.webp';
import outDoor39 from '../assets/images/Outdoor/Outdoor39.webp';
import outDoor40 from '../assets/images/Outdoor/Outdoor40.webp';
import outDoor41 from '../assets/images/Outdoor/Outdoor41.webp';
import outDoor42 from '../assets/images/Outdoor/Outdoor42.webp';
import traditional2 from '../assets/images/Traditional/Traditional2.webp';
import traditional3 from '../assets/images/Traditional/Traditional3.webp';
import traditional4 from '../assets/images/Traditional/Traditional4.webp';
import traditional5 from '../assets/images/Traditional/Traditional5.webp';
import traditional6 from '../assets/images/Traditional/Traditional6.webp';
import traditional7 from '../assets/images/Traditional/Traditional7.webp';
import traditional8 from '../assets/images/Traditional/Traditional8.webp';
import traditional9 from '../assets/images/Traditional/Traditional9.webp';
import traditional10 from '../assets/images/Traditional/Traditional10.webp';
import traditional11 from '../assets/images/Traditional/Traditional11.webp';
import traditional12 from '../assets/images/Traditional/Traditional12.webp';
import traditional13 from '../assets/images/Traditional/Traditional13.webp';
import traditional14 from '../assets/images/Traditional/Traditional14.webp';
import traditional15 from '../assets/images/Traditional/Traditional15.webp';
import traditional16 from '../assets/images/Traditional/Traditional16.webp';
import traditional17 from '../assets/images/Traditional/Traditional17.webp';
import traditional18 from '../assets/images/Traditional/Traditional18.webp';
import traditional19 from '../assets/images/Traditional/Traditional19.webp';
import traditional20 from '../assets/images/Traditional/Traditional20.webp';
import traditional21 from '../assets/images/Traditional/Traditional21.webp';
import traditional22 from '../assets/images/Traditional/Traditional22.webp';
import traditional23 from '../assets/images/Traditional/Traditional23.webp';
import traditional24 from '../assets/images/Traditional/Traditional24.webp';
import traditional25 from '../assets/images/Traditional/Traditional25.webp';
import traditional26 from '../assets/images/Traditional/Traditional26.webp';
import traditional27 from '../assets/images/Traditional/Traditional27.webp';
import traditional28 from '../assets/images/Traditional/Traditional28.webp';
import traditional29 from '../assets/images/Traditional/Traditional29.webp';
import traditional30 from '../assets/images/Traditional/Traditional30.webp';
import traditional31 from '../assets/images/Traditional/Traditional31.webp';
import traditional32 from '../assets/images/Traditional/Traditional32.webp';
import traditional33 from '../assets/images/Traditional/Traditional33.webp';
import traditional34 from '../assets/images/Traditional/Traditional34.webp';
import traditional35 from '../assets/images/Traditional/Traditional35.webp';
import traditional36 from '../assets/images/Traditional/Traditional36.webp';
import traditional37 from '../assets/images/Traditional/Traditional37.webp';
import traditional38 from '../assets/images/Traditional/Traditional38.webp';
import traditional39 from '../assets/images/Traditional/Traditional39.webp';
import traditional40 from '../assets/images/Traditional/Traditional40.webp';
import traditional41 from '../assets/images/Traditional/Traditional41.webp';
import traditional42 from '../assets/images/Traditional/Traditional42.webp';
import traditional43 from '../assets/images/Traditional/Traditional43.webp';

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
import studio224 from '../assets/images/Studio/Studio224.webp';
import studio225 from '../assets/images/Studio/Studio225.webp';
import studio118 from '../assets/images/Studio/Studio118.webp';
import studio119 from '../assets/images/Studio/Studio119.webp';


// Now creating the allImages array
const allImages = [
  Beach1, Beach2, Beach3, Beach4, Beach5, Beach6, Beach7, Beach8, Beach9, 
  Beach10, Beach11, Beach12, Beach13, Beach14, Beach15, Beach16, Beach17, Beach18, Beach19, Beach20, 
  Beach21, Beach22, Beach23, Beach24, Beach25, Beach26, Beach27, Beach28, Beach29, Beach30, 
  Beach31, Beach32, Beach33, Beach34, Beach35, Beach36, Beach37, Beach38, Beach39, Beach40, 
  Beach41, Beach42, Beach43, Beach44, Beach45, Beach46, Beach47, Beach48, Beach49, Beach50
];
const allClothingImages = [
  Clothing1, Clothing2, Clothing3, Clothing4, Clothing5, Clothing6, Clothing7, Clothing8, Clothing9, 
  Clothing10, Clothing11, Clothing12, Clothing13, Clothing14, Clothing15, Clothing16, Clothing17, Clothing18, Clothing20, 
  Clothing21, Clothing23, Clothing24
];

const allOutdoorImages = [
   outDoor2, outDoor3, outDoor4, outDoor5, outDoor6, outDoor7, outDoor8, outDoor9, 
  outDoor10, outDoor11, outDoor12, outDoor13, outDoor14, outDoor15, outDoor16, outDoor17, outDoor18, outDoor19, outDoor20, 
  outDoor21, outDoor22, outDoor23, outDoor24, outDoor25, outDoor26, outDoor27, outDoor28, outDoor29, outDoor30, 
  outDoor31, outDoor32, outDoor33, outDoor34, outDoor35, outDoor36, outDoor37, outDoor38, outDoor39, outDoor40, 
  outDoor41, outDoor42
];

const allTraditionalImages = [
   traditional2, traditional3, traditional4, traditional5, traditional6, traditional7, traditional8, traditional9, 
  traditional10, traditional11, traditional12, traditional13, traditional14, traditional15, traditional16, traditional17, traditional18, traditional19, traditional20, 
  traditional21, traditional22, traditional23, traditional24, traditional25, traditional26, traditional27, traditional28, traditional29, traditional30, 
  traditional31, traditional32, traditional33, traditional34, traditional35, traditional36, traditional37, traditional38, traditional39, traditional40, 
  traditional41, traditional42, traditional43
];


const allStudioImages = [
   studio2, studio3, studio4, studio5, studio6, studio7, studio8, studio9, studio10,
  studio11, studio12, studio13, studio14, studio15, studio16, studio17, studio18, studio19, studio20,
  studio21, studio22, studio23, studio24, studio25, studio26, studio27, studio28, studio29, studio30,
  studio31, studio32, studio33, studio34, studio35, studio36, studio37, studio38, studio39, studio40,
  studio41, studio42, studio43, studio44, studio45, studio46, studio47, studio48, studio49, studio50,
 studio224 , studio118 , studio119 ,
 studio225 , 
];


const ImageContext = createContext()
export const ImageProvider = ({ children }) => {

    const [images, setImages] = useState([
       
        {
          modelName: 'Studio',
          id: 'Fashion-shoot',
          captures: [studio224 , studio225 , studio118 , studio119],
          isOpen: true, isSelected : true,
          allImages: allStudioImages , 
          
          about: 'A fearless muse owning every frame with bold elegance and timeless grace.'
        }, {
          modelName: 'Beachs',
          id: 'Model-photoshoot',
          captures: [ Beach30, Beach32 , Beach37 , Beach39],
          isOpen: false, isSelected : true,
          allImages: allImages ,
          about: 'A sun-kissed soul who slays the shore with effortless vibe and golden allure.'
        },
        {
          modelName: 'Outdoor',
          id: 'Model-photoshoot',
          captures: [outDoor22, outDoor24 , outDoor16 , outDoor17],
          isOpen: false, isSelected : true,
          allImages: allOutdoorImages ,
          about: 'A wild spirit embracing nature’s backdrop with raw beauty and effortless cool.'
        },
        {
          modelName: 'Clothing-brand',
          id: 'Fashion',
          captures: [Clothing7, Clothing9 , Clothing15 , Clothing16],
          isOpen: false, isSelected : true,
          allImages:allClothingImages,
          about: 'A trendsetter who brings brands to life with attitude, edge, and killer looks.'
        },  {
          modelName: 'Treditional',
          id: 'Fashion-shoot',
          captures: [traditional42 ,traditional41 , traditional12 ,traditional13],
          isOpen: false, isSelected : true,
          allImages:allTraditionalImages ,
          about: 'A cultural soul who redefines traditions with poise, charm, and vibrant flair.'
        },
       
       
      ])

  return (
   <ImageContext.Provider  value = {{images , setImages}}>
    {children}
   </ImageContext.Provider>
  )
}

export const useImageContext = () => useContext(ImageContext)