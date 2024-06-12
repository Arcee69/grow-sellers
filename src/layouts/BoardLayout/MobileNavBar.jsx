import React from 'react'
import Logo from "../../assets/svg/logo.svg"
import Close from "../../assets/svg/closeIcon.svg"

import { useNavigate } from 'react-router-dom'

const MobileNavBar = ({ handleClose}) => {
    const navigate = useNavigate()
  return (
    <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated  animate__bounceInDown animate__slow" style={{zIndex: 9999}}>
        <div className="bg-[#fff] w-[100%] h-full absolute px-5 py-[32px] right-0 top-0"> 
            <div className="flex justify-between items-center">
                <img src={Logo} alt='logo' className='w-[166px] h-[32px] invisible' onClick={() => {navigate("/"); handleClose()}} />
                <img src={Close} alt="close" className="cursor-pointer" onClick={handleClose}/>
            </div>
            <ul class="mt-[32px] flex flex-col gap-y-[24px] pb-[16px]">
                <a href='#solutions' onClick={() => handleClose()} className="font-inter font-medium text-[17px]  text-[#fff]">Solutions</a>
                <li onClick={() => { handleClose()}} className="font-inter font-medium text-base  text-[#fff]">Why Synergyy</li>

                <li onClick={() => { handleClose()}} className="font-inter font-medium text-base  text-[#fff]">For Job Seekers</li>
            </ul>
            <div className=" flex flex-col gap-4 mt-[32px]">
       
                <button
                    onClick={() => {navigate("/register"); handleClose()}} 
                    className="p-[9.6px] w-full rounded-[4.8px] text-[#fff] font-inter bg-[#52BC77] border border-[#FFF] text-[16px] font-semibold"
                >
                    Sign Up
                </button>
            </div>
        </div>
    </div>
  )
}

export default MobileNavBar