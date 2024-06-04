import React from 'react'

const Details = ({ handleClose }) => {
  return (
    <div className='bg-[#fff] w-[560px] mt-[100px] h-[330px] rounded-lg py-[70px] flex flex-col items-center px-[48px] gap-4'>
        <p className='font-inter text-center text-[#000] text-[24px] font-medium'>
            Are you sure you want to delete your Account.
        </p>
        <p className='text-[#667185] text-xs text-center font-inter'>
            Please note that account deletion is an irreversible action. 
            Take a moment to ensure this aligns with your intentions, as once completed, the process cannot be undone.
        </p>
        <div className='flex items-center gap-[34px] justify-between'>
            <button onClick={handleClose} className='w-[198px] h-[52px] rounded-lg border border-[#333333] flex items-center justify-center flex-col '>
                <p className='font-inter text-[#333333] font-bold text-base'>No</p>
            </button>
            <button className='w-[198px] h-[52px] rounded-lg bg-[#C80E10] flex items-center justify-center flex-col '>
                <p className='font-inter text-[#fff] font-bold text-base'>Yes</p>
            </button>
        </div>
    </div>
  )
}

export default Details