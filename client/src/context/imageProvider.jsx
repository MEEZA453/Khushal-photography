import React, { Children } from 'react'
import {createContext , useContext , useState} from 'react'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'
import img5 from '../assets/images/img5.jpg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'
import img8 from '../assets/images/img8.jpg'
import img9 from '../assets/images/img9.jpg'
import img10 from '../assets/images/img10.jpg'
import img11 from '../assets/images/img11.jpg'
import img12 from '../assets/images/img12.jpg'
const ImageContext = createContext()
export const ImageProvider = ({ children }) => {

    const [images, setImages] = useState([
        {
          modelName: 'Glamup',
          id: '@glumpybychaudhari',
          captures: [img1, img2],
          isOpen: false,
          allImages: [
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        },
        {
          modelName: 'Natasha',
          id: '@glumpybychaudhari',
          captures: [img3, img4],
          isOpen: false,
          allImages: [img1, img2, img3, img4, img5, img6],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        },
        {
          modelName: 'Glamup',
          id: '@glumpybychaudhari',
          captures: [img1, img2],
          isOpen: false,
          allImages: [
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        },
        {
          modelName: 'Glamup',
          id: '@glumpybychaudhari',
          captures: [img1, img2],
          isOpen: false,
          allImages: [
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        },
        {
          modelName: 'Glamup',
          id: '@glumpybychaudhari',
          captures: [img1, img2],
          isOpen: false,
          allImages: [
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
            img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        },
        {
          modelName: 'Ariyana',
          id: '@ariyanaghose',
          captures: [img5, img6],
          isOpen: false,
          allImages: [img1, img2, img3, img4, img5, img6],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        },
        {
          modelName: 'Glamup',
          id: '@glumpybychaudhari',
          captures: [img1, img2],
          isOpen: false,
          allImages: [img1, img2, img3, img4, img5, img6],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        },
        {
          modelName: 'Natasha',
          id: '@glumpybychaudhari',
          captures: [img3, img4],
          isOpen: false,
          allImages: [img1, img2, img3, img4, img5, img6],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        },
      ])

  return (
   <ImageContext.Provider  value = {{images , setImages}}>
    {children}
   </ImageContext.Provider>
  )
}

export const useImageContext = () => useContext(ImageContext)