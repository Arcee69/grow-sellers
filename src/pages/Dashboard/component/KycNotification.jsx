import React from 'react'
import CloseIcon from "../../../assets/svg/closeIcon.svg"
import { useNavigate } from 'react-router-dom'

const KycNotification = ({ handleClose }) => {
    
    const navigate = useNavigate()

  return (
    <div className='bg-[#fff] w-[600px] h-[300px] flex flex-col gap-4 overflow-y-scroll  mt-[50px] rounded-lg p-4'>
        <div className='flex items-center justify-end'>
            <button className="flex justify-center items-center" onClick={handleClose}>
                <img src={CloseIcon} alt='close' />
            </button>
        </div>
        <div className='flex flex-col items-center justify-center w-full gap-5 mt-10'>
            <p className='text-[24px] font-semibold font-inter'>Update KYC</p>
            <button 
                onClick={() => navigate("/settings")}
                className={`bg-[#52BC77] text-[#fff] w-[374px] rounded-lg p-3 gap-1 w-full cursor-pointer lg:w-[400px] h-[56px] flex items-center justify-center`}
                type='button'
            >
                <p>Go to Settings</p>
            </button>
        </div>
    </div>
  )
}

export default KycNotification