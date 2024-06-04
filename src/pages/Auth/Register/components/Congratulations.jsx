import React from 'react'
import { useNavigate } from 'react-router'

import Shield from "../../../../assets/svg/shield.svg"

const Congratulations = () => {

    const navigate = useNavigate()

  return (
    <div className='my-[120px]'>
        <div className='w-[531px] h-[327px] bg-[#fff] py-[31px] flex flex-col rounded'> {/* h-[559px] */}
        
            <div className='flex flex-col items-center justify-center px-[52px] gap-5 mt-5 '>
                <img src={Shield} alt='Check' className='w-[68px] h-[68px]' />
                <p className='text-[#17231C] font-inter text-[24px] font-medium'>Congratulations 🎉</p>
                <p className='text-[#7F9286] font-inter text-base font-medium text-center'>
                    Start exploring our unique products and enjoy a seamless shopping experience.
                </p>

                <button 
                    className={`w-[423px] bg-[#52BC77] rounded-lg p-3 cursor-pointer w-full h-[46px] flex items-center justify-center`}
                    type="submit"
                    onClick={() => navigate("/")}
                >
                    <p className='text-[#FFF] text-base font-inter  text-center  font-medium'>Go to Login</p>
                </button>
                
            </div>

        </div>

    </div>
  )
}

export default Congratulations