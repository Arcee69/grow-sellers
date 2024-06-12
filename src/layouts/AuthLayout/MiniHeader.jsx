import React, { useState } from 'react'

import Hamburger from "../../assets/png/hamburger.png"
import Logo from "../../assets/svg/logo.svg"
import MobileNavBar from './MobileNavBar'

const MiniHeader = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full fixed z-10'>
        <div className='w-[100%] h-[58px] bg-[#fff] py-[16px] px-[20px] rounded-xl flex justify-between items-center'>
            <img src={Logo} alt='logo' className=' h-[32px]' />
            <img src={Hamburger} alt='logo'  className='w-[21px] h-[16px]' onClick={() => setOpen(true)}/>
        </div>
        {open && <MobileNavBar handleClose={() => setOpen(false)} /> }
    </div>
  )
}

export default MiniHeader