import React, { useState } from 'react'
import { IoChevronBack } from "react-icons/io5";
import { Form, Formik } from 'formik';
import { CgSpinner } from "react-icons/cg"

import * as Yup from "yup"
import { toast } from 'react-toastify';

import Logo from "../../../assets/svg/logo.svg"
import Mail from "../../../assets/svg/mail.svg"
import { useNavigate } from 'react-router';


const ForgotPassword = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    const formValidationSchema = Yup.object().shape({
        email: Yup.string().email().required("email is required"),
    })

    const submitForm = (values) => {
        localStorage.setItem("resetEmail", values?.email)
        if(values) {
            toast.success('A reset link has been sent to your email', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/reset-confirmation")

        }
    }
    
  return (
    <div className='my-[50px]'>
        <div className='w-[531px] h-[491px] bg-[#fff] py-[31px] flex flex-col rounded'> {/* h-[559px] */}
            <div className='flex justify-between items-center pl-6 pr-[52px] mb-5 '>
                <div className='w-[36px] h-[36px] bg-[#F8FAFC] flex items-center justify-center'>
                    <IoChevronBack />
                </div>
                {/* <img src={Logo} alt='Logo' className='w-[47px] h-[34px]' /> */}
            </div>
            <hr />
            <div className='flex flex-col px-[52px] mt-5 '>
                <p className='font-inter text-[#09111D] text-[24px] font-medium'>Reset your password</p>

                <div className='mt-[32px] w-full'>
                    <Formik
                        initialValues={{
                            email: "",
                        }}
                        validationSchema={formValidationSchema}
                        onSubmit={(values) => {
                            window.scrollTo(0, 0)
                            console.log(values, "often")
                            submitForm(values)
                        }}
                        >
                        {({
                            handleSubmit,
                            handleChange,
                            dirty,
                            isValid,
                            setFieldValue,
                            errors,
                            touched,
                            // setFieldTouched,
                            values,
                        }) => (
                        <Form onSubmit={handleSubmit} className="flex flex-col ">
                            <div className='flex flex-col gap-6 h-[47px]'>
                    
                                <div className="flex flex-col ">
                                    <label htmlFor='email' className="text-base font-inter text-[#09111D]">Email address</label>
                                    <div className='w-full rounded-3xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                        <img src={Mail} alt="Mail" className='w-4 h-4' />
                                        <input
                                            name="email"
                                            placeholder="youremail@domain.com"
                                            type="email" 
                                            value={values.email}
                                            onChange={handleChange}
                                            className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none "
                                        />
                                    </div>
                                    {errors?.email && touched?.email ? (
                                    <div className='text-RED-_100 font-inter text-xs'>{errors?.email}</div>
                                    ) : null}
                                </div>

                                <p className='text-[#7F9286] font-inter text-[13px]'>Please enter the email you created your account with.</p>
                               
                                <div className='flex flex-col gap-6 mt-5'>
                                    <button 
                                        className={`${isValid ? "bg-[#52BC77]" : "bg-[#D2DCD6]"} text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[56px] flex items-center justify-center`}
                                        type="submit"
                                        disabled={!isValid ? true : false}
                                    >
                                        <p className='text-[#fff] text-base font-inter text-center font-medium'>{loading ? <CgSpinner className=" animate-spin text-2xl " /> : 'Reset Password'}</p>
                                    </button>
                                    
                                   <p className='text-[#17231C] font-inter text-center cursor-pointer text-base' onClick={() => navigate("/")}>Back to Sign in</p>
                                </div>
                            
                            </div>
                            

                        </Form>
                        )}
                    </Formik>
                </div>
            </div>

        </div>

    </div>
  )
}

export default ForgotPassword