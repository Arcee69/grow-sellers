import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { CgSpinner } from 'react-icons/cg'

import Check from "../../../../assets/svg/check.svg"
import { api } from '../../../../services/api'
import { appUrls } from '../../../../services/urls'


const Verify = ({ setQuest }) => {
    const [code, setCode] = useState()
    const [loading, setLoading] = useState(false)
    const [resendLoading, setResendLoading] = useState(false)

    const navigate = useNavigate()

    const email = localStorage.getItem("email")

    const submitForm = async () => {
        setLoading(true)
        const data = {
            "verification_code": code
        }
        await api.post(appUrls?.EMAIL_VERIFICATION_URL, data)
        .then((res) => {
            console.log(res, 'pampo')
            setLoading(false)
            toast.success(`${res?.data?.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            localStorage.removeItem("firstName");
            localStorage.removeItem("lastName");
            localStorage.removeItem("email");
            localStorage.removeItem("phone");
            localStorage.removeItem("category");
            setQuest(4)
        })
        .catch((err) => {
            console.log(err, 'jinma')
            setLoading(false)
            toast.error('Verification Error', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    }

    const resendVerification = async () => {
        setResendLoading(true)
        const data = {
            "email": email
        }
        await api.post(appUrls?.RESEND_VERIFICATION_URL, data)
        .then((res) => {
            console.log(res, 'salo')
            setResendLoading(false)
            toast.success('Verification Sent', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
        .catch((err) => {
            console.log(err, 'gain')
            setResendLoading(false)
            toast.error('Verification Error', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
    }

  return (
    <div className='my-[50px]'>
        <div className='lg:w-[531px] h-[569px] bg-[#fff] py-[31px] gap-10 px-5 lg:px-[52px] flex flex-col rounded'> {/* h-[559px] */}
           
            <div className='flex flex-col items-center justify-center  gap-5 mt-5 '>
               <img src={Check} alt='Check' className='w-[68px] h-[68px]' />
                <p className='text-[#17231C] font-inter text-[24px] font-medium'>Verification Code Sent!</p>
                <p className='text-[#7F9286] font-inter text-base font-medium text-center'>
                    Kindly enter the verification code sent to your email
                </p>
            </div>
            <div className="flex flex-col ">
                <label htmlFor='code' className="text-base font-inter text-[#09111D]">Verification Code</label>
                <div className='w-full rounded-3xl  gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                    <input
                        name="code"
                        placeholder="*****"
                        type="text" 
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className=" text-[#000] placeholder-[#7F9286] font-inter  outline-none "
                    />
                </div>
            </div>
            <div className='flex flex-col gap-[8px]'>
                <button 
                    className={`w-[423px] bg-[#52BC77] text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[46px] flex items-center justify-center`}
                    type="submit"
                    onClick={() => submitForm()}
                >
                    <p className='text-[#fff] text-base font-inter  text-center  font-medium'>{loading ? <CgSpinner className=" animate-spin text-2xl " /> : "Verify Email"}</p>
                </button>

                <button 
                    className={`w-[423px] bg-[#FBFEFC] rounded-lg p-3 cursor-pointer w-full h-[46px] flex items-center justify-center`}
                    type="submit"
                    onClick={() => resendVerification()}
                >
                    <p className='text-[#1A3D26] text-base font-inter  text-center  font-medium'>{resendLoading ? <CgSpinner className=" animate-spin text-2xl " /> : "Resend Code"}</p>
                </button>
            </div>
                
           

        </div>

    </div>
  )
}

export default Verify