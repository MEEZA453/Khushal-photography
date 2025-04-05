import React from 'react'
import { useState , useEffect  } from 'react'
import ImageAlgo from './imageAlgo.jsx'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import Navber from '../../component/navber/navber.jsx';
import ViewToggle from '../../component/button/viewToggle.jsx'
import ListImage from '../../component/imageViewer/listImage.jsx'
function Index() {
  const [images , setImages] = useState([
    {
      modelName : 'Glamup',
      id : '@glumpybychaudhari',
      captures : [img1 , img2],
      isOpen : false,
    },
    {
      modelName : 'Natasha Bharadwaj',
      id : '@glumpybychaudhari',
      captures : [img3 , img4],
      isOpen : false,
    },
    {
      modelName : 'Ariyana Ghose',
      id : '@ariyanaghose',
      captures : [img5 , img6],
      isOpen : false,
    },
    {
      modelName : 'Glamup',
      id : '@glumpybychaudhari',
      captures : [img1 , img2],
      isOpen : false,
    },
    {
      modelName : 'Natasha Bharadwaj',
      id : '@glumpybychaudhari',
      captures : [img3 , img4],
      isOpen : false,
    },
  ])
const [toggle  , setToggle] = useState(false)

  return (
    <div>
      <Navber/>{toggle ? <ListImage images = {images} setImage  = {setImages}/> : <ImageAlgo images = {images}  setImages = {setImages}/>}
    
      <div className='fixed top-[90%] right-[43%]'>   <ViewToggle toggle = {toggle} setToggle = {setToggle}/></div>
    </div>
  )
}

export default Index