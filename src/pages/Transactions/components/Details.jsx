import React from 'react'

import Empty from "../../../assets/svg/empty-wallet.svg"
import Copy from "../../../assets/svg/copy.svg"
import { useSelector } from 'react-redux'

const Details = ({ handleClose }) => {

    const userLogin = useSelector(state => state.userLogin)
    const userData = userLogin?.data?.data
    console.log(userData, "userData")

  return (
    <div className='w-[491px] h-[462px] mt-[100px] py-[40px] px-[80px] gap-6 flex flex-col bg-[#fff] rounded-lg items-center'>
        <img src={Empty} alt='Empty' />
        <div className='flex flex-col items-center gap-[18px]'>
            <p className='text-[32px] text-[#000] font-inter font-semibold' >Account Information</p>
            <p className='font-inter text-[#8D9290] text-base font-semibold'>Account Name: {userData?.account_name}</p>
            <div className='flex items-center gap-1.5'>
                <p className='font-inter text-[#8D9290] text-base font-semibold'>Account Number: {userData?.account_number}</p>
                {/* <img src={Copy} alt='Copy' /> */}
            </div>
            <p className='font-inter text-[#8D9290] text-base font-semibold'>Bank Name: {userData?.bank_name}</p>
            <button
                className='w-[323px] rounded-lg flex items-center justify-center bg-[#1E854A] h-[52px]'
                onClick={() => handleClose()}
            >
                <p className='text-[#fff] font-inter text-[18px] font-semibold'>Close</p>
            </button>
        </div>
    </div>
  )
}

export default Details