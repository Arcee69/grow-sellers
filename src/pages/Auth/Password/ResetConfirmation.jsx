import React from 'react'
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from 'react-router';

const ResetConfirmation = () => {

    const navigate  = useNavigate()

    const email = localStorage.getItem("resetEmail")
  return (
    <div className='my-[50px]'>
        <div className='w-[531px] h-[491px] bg-[#fff] py-[31px] flex flex-col rounded'> {/* h-[559px] */}
            <div className='flex justify-between items-center pl-6 pr-[52px] mb-5 '>
                <div 
                    className='w-[36px] h-[36px] cursor-pointer bg-[#F8FAFC] flex items-center justify-center'
                    onClick={() => navigate("/forgot-password")}
                >
                    <IoChevronBack />
                </div>
                {/* <img src={Logo} alt='Logo' className='w-[47px] h-[34px]' /> */}
            </div>
            <hr />
            <div className='flex flex-col px-[52px] mt-5 '>
                <p className='font-inter text-[#09111D] text-[24px] font-medium'>Reset Password</p>

                <div className='mt-[32px] w-full'>
                    <p className='text-[#8B9298] font-inter text-base font-medium'>
                        A password reset link has been sent to {email}. 
                    </p>

                    <div className='flex flex-col gap-6 mt-5'>
                        <button 
                            className={`bg-[#52BC77] text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[56px] flex items-center justify-center`}
                            type="submit"
                        >
                            <a href='mailto:'>
                                <p className='text-[#fff] text-base font-inter text-center font-medium'>Go to Email</p>
                            </a>
                        </button>
                        
                        <p className='text-[#17231C] font-inter text-center text-base cursor-pointer' onClick={() => navigate("/")}>Back to Sign in</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default ResetConfirmation