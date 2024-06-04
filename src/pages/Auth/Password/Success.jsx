import React from 'react'
import { useNavigate } from 'react-router'

import PasswordLock from "../../../assets/svg/password-lock.svg"

const Success = () => {



    const navigate = useNavigate();


  return (
    <div className='my-[100px]'>
        <div className='w-[531px] h-[350px] bg-[#fff] py-[31px] flex flex-col rounded'> {/* h-[559px] */}
        
            <div className='flex flex-col items-center justify-center px-[52px] gap-5 mt-5 '>
            <img src={PasswordLock} alt='PasswordLock' className='w-[48px] h-[48px]' />
                <p className='text-[#17231C] font-inter text-[24px] font-medium'>Password Changed</p>
                <p className='text-[#7F9286] font-inter text-base font-medium text-center'>
                    Your password has been changed successfully
                </p>
              
                <button 
                    className={`w-[423px] bg-[#52BC77] text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[46px] flex items-center justify-center`}
                    type="submit"
                    onClick={() => navigate("/")}
                >
                    <p className='text-[#fff] text-base font-inter  text-center  font-medium'>Login</p>
                </button>
                
            </div>

        </div>
    </div>
  )
}

export default Success