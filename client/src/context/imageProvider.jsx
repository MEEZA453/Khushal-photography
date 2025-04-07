import React, { Children } from 'react'
import {createContext , useContext , useState} from 'react'
import marina1 from '../assets/images/marina1.jpg'
import marina2 from '../assets/images/marina2.jpg'
import marina3 from '../assets/images/marina3.jpg'
import marina4 from '../assets/images/marina4.jpg'
import marina5 from '../assets/images/marina5.jpg'
import marina6 from '../assets/images/marina6.jpg'
import marina7 from '../assets/images/marina7.jpg'
import marina8 from '../assets/images/marina8.jpg'
import marina9 from '../assets/images/marina9.jpg'
import marina10 from '../assets/images/marina10.jpg'
import marina11 from '../assets/images/marina11.jpg'
import marina12 from '../assets/images/marina12.jpg'
import marina13 from '../assets/images/marina13.jpg'

const ImageContext = createContext()
export const ImageProvider = ({ children }) => {

    const [images, setImages] = useState([
        {
          modelName: 'Mariana',
          id: '@marianaacortes',
          captures: [marina1, marina2],
          isOpen: false, isSelected : true,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        },
        {
          modelName: 'Komal',
          id: '@marianaacortes',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Ayushi',
          id: '@marianaacortes',
          captures: [marina1, marina2],
          isOpen: false, isSelected : true,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Madmin',
          id: '@marianaacortes',
          captures: [marina1, marina2],
          isOpen: false, isSelected : true,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Laura',
          id: '@marianaacortes',
          captures: [marina1, marina2],
          isOpen: false, isSelected : true,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Jyoti',
          id: '@ShivJyoti',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Pannikova',
          id: '@pannik_at_retouch',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Giorgia',
          id: '@marianaacortes',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Sakshi',
          id: '@sakshimalikk',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Monika',
          id: '@realmonikachoudhary',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Nas',
          id: '@nastii1777',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Kristina',
          id: '@nesterenk0.k',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Rose',
          id: '@itsedinrose',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Chaika',
          id: '@lilychaika',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        },
         {
          modelName: 'Komal',
          id: '@marianaacortes',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Ayushi',
          id: '@marianaacortes',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Madmin',
          id: '@marianaacortes',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Laura',
          id: '@marianaacortes',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Jyoti',
          id: '@ShivJyoti',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Pannikova',
          id: '@pannik_at_retouch',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Giorgia ',
          id: '@marianaacortes',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Sakshi',
          id: '@sakshimalikk',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Monika',
          id: '@realmonikachoudhary',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Nas',
          id: '@nastii1777',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Kristina',
          id: '@nesterenk0.k',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Rose',
          id: '@itsedinrose',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
          about: 'A versetle model who loves to flex her fashion in a mystirious and cool way.'
        }, {
          modelName: 'Chaika',
          id: '@lilychaika',
          captures: [marina1, marina2],
          isOpen: false, isSelected : false,
          allImages: [
            marina1 ,marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13 , marina1 , marina2 , marina3 , marina4 , marina5, marina6, marina7, marina8 , marina9 , marina10 , marina11 , marina12 , marina13
          ],
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