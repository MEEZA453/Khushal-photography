  import React , {useState} from 'react'
  import { AiOutlineMenu } from "react-icons/ai";
  import logo from '../../assets/logo/logo.png'
  import logoWhite from '../../assets/logo/whitelogo.png'
  import {useNavigate} from 'react-router-dom'
  import Modal from 'react-modal'
  import Menu from '../../component/menu.jsx'
  import ToggleCross from '../../component/button/toggleCross.jsx'
  import logomzco from '../../assets/logo/signature.png'


  function navber({setIsMenuShown , isMenuShown}) {
    const navigate = useNavigate()
    const [openMenu , setOpenMenu]  = useState(false)
    return (
      <div className='w-screen     bg-opacity-60    items-center pr-3 mb-3 flex justify-between'>
          <div className = {`${isMenuShown ? 'opacity-0':'opacity-100'} duration-500 flex mt-10 mb-10 ml-5`}>
          
            {/* <pre>Signature</pre> */}
            </div>
        
          <div className='menu z-[999]' onClick={()=>{setIsMenuShown(!isMenuShown)}}><AiOutlineMenu color='' size={20}/></div>
        
      </div>
    )
  }

  export default navber