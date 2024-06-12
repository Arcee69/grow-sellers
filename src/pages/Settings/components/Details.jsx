import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { CgSpinner } from 'react-icons/cg'


const Details = ({ handleClose, userProfile, openStore, closeStore, storeLoading }) => {


  return (
    <div className='bg-[#fff] w-full lg:w-[560px] mt-[150px] h-[230px] rounded-lg py-[40px] flex flex-col items-center px-[48px] gap-4'>
        <p className='font-inter text-center text-[#000] text-[24px] font-medium'>
            Are you sure you want to {userProfile?.store_status === 1 ? "Close" : "Open"} your Store.
        </p>
        {/* <p className='text-[#667185] text-xs text-center font-inter'>
            Please note that account deletion is an irreversible action. 
            Take a moment to ensure this aligns with your intentions, as once completed, the process cannot be undone.
        </p> */}
        <div className='flex items-center gap-[34px] justify-between'>
            <button type='button' onClick={handleClose} className='w-[150px] lg:w-[198px] h-[52px] rounded-lg border border-[#333333] flex items-center justify-center flex-col '>
                <p className='font-inter text-[#333333] font-bold text-base'>No</p>
            </button>
            <button type='button' className={`${userProfile?.store_status === 1 ? "bg-[#C80E10]" : "bg-[#52BC77]"} w-[150px] lg:w-[198px] h-[52px] rounded-lg  flex items-center justify-center flex-col`} onClick={() => {userProfile?.store_status === 1 ? closeStore() : openStore()}}>
                <p className='font-inter text-[#fff] font-bold text-base'>{storeLoading ? <CgSpinner className=" animate-spin text-2xl " /> : "Yes"}</p>
            </button>
        </div>
    </div>
  )
}

export default Details