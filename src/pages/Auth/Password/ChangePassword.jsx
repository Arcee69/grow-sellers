import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Form, Formik } from 'formik';
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { CgSpinner } from 'react-icons/cg';


import Lock from "../../../assets/svg/lock.svg"
import { api } from '../../../services/api';
import { appUrls } from '../../../services/urls';

const ChangePassword = () => {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordB, setShowPasswordB] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVisibilityB = () => {
        setShowPasswordB(!showPasswordB);
    };

    const navigate = useNavigate();

    const email = localStorage.getItem("resetEmail")

    const formValidationSchema = Yup.object().shape({
        otp: Yup.string().required("Otp is Required"),
        password: Yup.string().min(8, "Must Contain 8 Characters").required("Password is Required"),
        // .matches(
        // /^(?=.*[a-z])/,
        // " Must Contain One Lowercase Character"
        // )
        // .matches(
        // /^(?=.*[A-Z])/,
        // "  Must Contain One Uppercase Character"
        // )
        // .matches(
        // /^(?=.*[0-9])/,
        // "  Must Contain One Number Character"
        // )
        // .matches(
        // /^(?=.*[!@#\$%\^&\*])/,
        // "  Must Contain  One Special Case Character"
        // ),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    });

    const submitForm = async (values) => {
        setLoading(true)
        const data = {
            "otp": values?.otp,
            "password": values?.password,
            "password_confirmation": values?.confirmPassword
        }
        await api.post(appUrls?.RESET_PASSWORD_URL, data)
        .then((res) => {
            setLoading(false)
            toast.success(`${res.data.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/success")
        })
        .catch((err) => {
            setLoading(false)
            toast.error(`${err.data.message}`, {
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
        <div className='w-full lg:w-[531px] h-[650px] bg-[#fff] py-[31px] flex flex-col rounded'> {/* h-[559px] */}
           
            <div className='flex flex-col px-[52px] mt-5 '>
                <div className='flex flex-col gap-2.5'>
                    <p className='font-inter text-[#09111D] text-[24px] font-medium'>Change your Password</p>
                    <p className='font-inter text-[#8B9298] text-base font-medium'>You are about to change the password for <span className='text-[#52BC77] underline'>{email}</span></p>
                </div>

                <div className='mt-[32px] w-full'>
                    <Formik
                        initialValues={{
                            otp: "",
                            password: "",
                            confirmPassword: ""
                        }}
                        validationSchema={formValidationSchema}
                        onSubmit={(values) => {
                            window.scrollTo(0, 0)
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

                                <div className="flex flex-col items-start">
                                    <label htmlFor='email' className="text-base font-inter text-[#09111D]">Otp</label>
                                    <div className='w-full rounded-3xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                        <img src={Lock} alt="Lock" className='w-4 h-4' />
                                        <input
                                            name="otp"
                                            placeholder="1234"
                                            type="text" 
                                            value={values.otp}
                                            onChange={handleChange}
                                            className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none "
                                        />
                                    </div>
                                    {errors?.otp && touched?.otp && (
                                    <div className='text-[#f00] font-inter text-xs mt-1'>{errors?.otp}</div>
                                    )}
                                </div>

                                <div className="flex flex-col w-full">
                                    <label htmlFor='New Password' className="text-base font-inter text-[#09111D]">New Password</label>
                                    <div className='relative w-full rounded-3xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                        <img src={Lock} alt='Lock' className='w-4 h-4' />
                                        <input
                                            name="password"
                                            placeholder="Password"
                                            type={showPassword ? "text" : "password"} 
                                            value={values?.password}
                                            onChange={handleChange}
                                            className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none  "
                                        />
                                        {showPassword ? (
                                            <BsEye
                                                className=" absolute top-[20px] right-4 cursor-pointer text-[#828282]"
                                                onClick={togglePasswordVisibility}
                                            />
                                            ) : (
                                            <BsEyeSlash
                                                className=" absolute top-[20px] right-4 cursor-pointer text-[#828282]"
                                                onClick={togglePasswordVisibility}
                                            />
                                        )}
                                    </div>
                                    {errors?.password && touched?.password && (
                                        <div className='text-[#f00] font-inter text-xs mt-1'>{errors?.password}</div>
                                    )}
                                </div>

                                <div className="flex flex-col w-full">
                                    <label htmlFor='Confirm Password' className="text-base font-inter text-[#09111D]">Confirm Password</label>
                                    <div className='relative w-full rounded-3xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                        <img src={Lock} alt='Lock' className='w-4 h-4' />
                                        <input
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                            type={showPasswordB ? "text" : "password"} 
                                            value={values?.confirmPassword}
                                            onChange={handleChange}
                                            className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none  "
                                        />
                                        {showPasswordB ? (
                                            <BsEye
                                                className=" absolute top-[20px] right-4 cursor-pointer text-[#828282]"
                                                onClick={togglePasswordVisibilityB}
                                            />
                                            ) : (
                                            <BsEyeSlash
                                                className=" absolute top-[20px] right-4 cursor-pointer text-[#828282]"
                                                onClick={togglePasswordVisibilityB}
                                            />
                                        )}
                                    </div>
                                    {errors?.confirmPassword && touched?.confirmPassword && (
                                        <div className='text-[#f00] font-inter text-xs'>{errors?.confirmPassword}</div>
                                        )}
                                </div>

                            
                            
                                <div className='flex flex-col gap-6 mt-5'>
                                    <button 
                                        className={`${isValid ? "bg-[#52BC77]" : "bg-[#D2DCD6]"} text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[56px] flex items-center justify-center`}
                                        type="submit"
                                        disabled={!isValid ? true : false}
                                    >
                                        <p className='text-[#fff] text-base font-inter  text-center  font-medium'>{loading ? <CgSpinner className=" animate-spin text-2xl " /> : "Reset Password"}</p>
                                    </button>
                                    
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

export default ChangePassword

