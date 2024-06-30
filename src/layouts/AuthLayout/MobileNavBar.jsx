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
                <li onClick={() => {navigate("/dashboard"); handleClose()}} className="font-inter font-medium text-base text-[#333]">Dashboard</li>
                <li onClick={() => {navigate("/inventory"); handleClose()}} className="font-inter font-medium text-base text-[#333]">Inventory</li>
                <li onClick={() => {navigate("/orders"); handleClose()}} className="font-inter font-medium text-base text-[#333]">Orders</li>
                <li onClick={() => {navigate("/sales"); handleClose()}} className="font-inter font-medium text-base text-[#333]">Sales</li>
                <li onClick={() => {navigate("/settings"); handleClose()}} className="font-inter font-medium text-base text-[#333]">Settings</li>
            </ul>
        
        </div>
    </div>
  )
}

export default MobileNavBar