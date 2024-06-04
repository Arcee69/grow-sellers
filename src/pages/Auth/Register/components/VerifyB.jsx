import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


import Check from "../../../../assets/svg/check.svg"

const VerifyB = () => {
    
    const navigate = useNavigate()
    
    const submitForm = () => {
        toast.success('Verification Link Sent', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    }

  return (
    <div className='my-[50px]'>
        <div className='w-[531px] h-[559px] bg-[#fff] py-[31px] flex flex-col rounded'> {/* h-[559px] */}
        
            <div className='flex flex-col items-center justify-center px-[52px] gap-5 mt-5 '>
            <img src={Check} alt='Check' className='w-[68px] h-[68px]' />
                <p className='text-[#17231C] font-inter text-[24px] font-medium'>You are all signed up!</p>
                <p className='text-[#7F9286] font-inter text-base font-medium text-center'>
                    An email has been sent to your email and verification instructions, 
                    If you didn’t receive the email <span className='text-[#52BC77]'>try again</span> in 2 Minutes
                </p>
                <div className='flex flex-col gap-[8px]'>
                    <button 
                        className={`w-[423px] bg-[#52BC77] text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[46px] flex items-center justify-center`}
                        type="submit"
                        onClick={() => navigate("/")}
                    >
                        <p className='text-[#fff] text-base font-inter  text-center  font-medium'>Login</p>
                    </button>

                    <button 
                        className={`w-[423px] bg-[#FBFEFC] rounded-lg p-3 cursor-pointer w-full h-[46px] flex items-center justify-center`}
                        type="submit"
                        onClick={() => submitForm()}
                    >
                        <p className='text-[#1A3D26] text-base font-inter  text-center  font-medium'>Resend Link</p>
                    </button>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default VerifyB