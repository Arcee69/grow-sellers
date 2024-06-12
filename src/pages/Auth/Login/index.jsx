import React, { useState } from 'react'
import { IoChevronBack } from "react-icons/io5";
import { Form, Formik } from 'formik';
import { CgSpinner } from "react-icons/cg"
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Logo from "../../../assets/svg/logo.svg"
import Google from "../../../assets/svg/google.svg"
import Mail from "../../../assets/svg/mail.svg"
import Lock from "../../../assets/svg/lock.svg"
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../features/auth/loginSlice';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

      const dispatch = useDispatch()

      const navigate = useNavigate()

    const formValidationSchema = Yup.object().shape({
        email: Yup.string().email().required("email is required"),
        password: Yup.string().required("Password is Required"),
        // password: Yup.string().min(8, "Must Contain 8 Characters").required("Password is Required")
        // .matches(
        // /^(?=.*[a-z])/,
        // " Must Contain One Lowercase Character"
        // )
        // // .matches(
        // // /^(?=.*[A-Z])/,
        // // "  Must Contain One Uppercase Character"
        // // )
        // .matches(
        // /^(?=.*[0-9])/,
        // "  Must Contain One Number Character"
        // )
        // .matches(
        // /^(?=.*[!@#\$%\^&\*])/,
        // "  Must Contain  One Special Case Character"
        // ),
        // confirmPassword: Yup.string()
        // .oneOf([Yup.ref("password"), null], "Passwords must match")
        // .required("Confirm Password is required"),

    })

    const submitForm = (values) => {
        setLoading(true)
        const data = {
            "email": values?.email,
            "password": values?.password
        }
        dispatch(loginUser(data))
        .then((res) => {
            if(res?.meta?.requestStatus === "fulfilled") {
                setLoading(false)
                navigate("/dashboard")
            }
        })
    }

  return (
    <div className='my-[50px]'>
        <div className='lg:w-[531px] h-[600px] bg-[#fff] py-[31px] flex flex-col rounded'> {/* h-[559px] */}
            <div className='hidden lg:flex justify-between items-center pl-6 pr-[52px] mb-5 '>
                <div className='w-[36px] h-[36px] bg-[#F8FAFC] flex items-center justify-center'>
                    <IoChevronBack />
                </div>
                <img src={Logo} alt='Logo' className='w-[47px] h-[34px]' />
            </div>
            <hr />
            <div className='flex flex-col px-5 lg:px-[52px] mt-5 '>
                <p className='font-inter text-[#09111D] text-[24px] font-medium'>Sign in</p>

                <div className='mt-[32px] w-full'>
                    <Formik
                        initialValues={{
                            email: "",
                            password: "",
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
                    
                                <div className="flex flex-col items-start">
                                    <label htmlFor='email' className="text-base font-inter text-[#09111D]">Email address</label>
                                    <div className='w-full rounded-3xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                        <img src={Mail} alt="Mail" className='w-4 h-4' />
                                        <input
                                            name="email"
                                            placeholder="youremail@domain.com"
                                            type="text" 
                                            value={values.email}
                                            onChange={handleChange}
                                            className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none "
                                        />
                                    </div>
                                    {errors?.email && touched?.email ? (
                                    <div className='text-RED-_100 font-inter text-xs'>{errors?.email}</div>
                                    ) : null}
                                </div>

                                <div className="flex flex-col items-start w-full">
                                    <div className='w-full flex items-center justify-between'>
                                        <label htmlFor='password' className="text-base font-inter text-[#09111D]">Password</label>
                                        <p className='text-[13px] font-inter text-[#27AE60] cursor-pointer'>Forgot Password?</p>
                                    </div>
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
                                    {errors?.password && touched?.password ? (
                                        <div className='text-RED-_100 font-inter text-xs'>{errors?.password}</div>
                                        ) : null}
                                </div>
                               
                                <div className='flex flex-col gap-6 mt-5'>
                                    <button 
                                        className={`${isValid ? "bg-[#52BC77]" : "bg-[#D2DCD6]"} text-[#fff] rounded-lg p-3 gap-1 cursor-pointer w-full h-[56px] flex items-center justify-center`}
                                        type="submit"
                                        disabled={!isValid ? true : false}
                                    >
                                        <img src={Logo} alt='Logo' className='w-[25px] h-[18px]' />
                                        <p className='text-[#fff] text-base font-inter  text-center  font-medium'>{loading ? <CgSpinner className=" animate-spin text-2xl " /> : "Log in to GrowAfrica"}</p>
                                    </button>
                                    
                                    <button
                                        className='border border-[#D9E4ED] rounded-lg h-[56px] w-full flex items-center gap-3 justify-center p-3 cursor-pointer'
                                        type='button'
                                    >
                                        <img src={Google} alt='google'/>
                                        <p className='text-[#09111D] text-base font-inter font-semibold'>Sign with Google</p>
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

export default Login