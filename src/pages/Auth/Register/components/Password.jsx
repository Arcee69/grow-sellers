import React, { useState } from 'react'
import { IoChevronBack } from "react-icons/io5";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Form, Formik } from 'formik';
import * as Yup from "yup"
import { toast } from 'react-toastify';

import Lock from "../../../../assets/svg/lock.svg"
import Logo from "../../../../assets/svg/logo.svg"
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../../../features/auth/signUpSlice';
import { CgSpinner } from 'react-icons/cg';

const Password = ({ setQuest }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const firstName = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("lastName");
    const email = localStorage.getItem("email");
    const phone = localStorage.getItem("phone");
    const category = localStorage.getItem("category");

    const formValidationSchema = Yup.object().shape({
        // password: Yup.string().required("Password is Required"),
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
        confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    });

    const submitForm = (values) => {
        setLoading(true)
        const data = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "phone": phone,
            "store_category": category,
            "password": values?.password,
            "password_confirmation": values?.confirmPassword
        }
        dispatch(signUpUser(data))
        .then((res) => {
            setLoading(false)
            console.log(res, "apostle")
            if(res?.meta?.requestStatus === "fulfilled") {
                setQuest(3)
            }
        })
        
    }
        
  return (
    <div className='my-[50px]'>
        <div className='w-full lg:w-[531px] h-[600px] bg-[#fff] py-[31px] flex flex-col rounded'> {/* h-[559px] */}
            <div className='hidden lg:flex justify-between items-center pl-6 pr-[52px] mb-5 '>
                <div className='w-[36px] h-[36px] bg-[#F8FAFC] flex items-center justify-center' onClick={() => setQuest(1)}>
                    <IoChevronBack />
                </div>
                <img src={Logo} alt='Logo' className='w-[47px] h-[34px]' />
            </div>
            <hr />
            <div className='flex flex-col px-5 lg:px-[52px] mt-5 '>
                <div className='flex flex-col gap-2.5'>
                    <p className='font-inter text-[#09111D] text-[24px] font-medium'>Set Password</p>
                    <p className='font-inter text-[#8B9298] text-base font-medium'>Create your account to start shopping and discover unique products.</p>
                </div>

                <div className='mt-[32px] w-full'>
                    <Formik
                        initialValues={{
                            password: "",
                            confirmPassword: ""
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

                                <div className="flex flex-col w-full">
                                    <label htmlFor='Password' className="text-base font-inter text-[#09111D]">Finish Signing up by creating a password</label>
                                    <div className='relative w-full rounded-3xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                        <img src={Lock} alt='Lock' className='w-4 h-4' />
                                        <input
                                            name="password"
                                            placeholder="************"
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

                                <div className="flex flex-col w-full">
                                    <label htmlFor='Confirm Password' className="text-base font-inter text-[#09111D]">Confirm Password</label>
                                    <div className='relative w-full rounded-3xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                        <img src={Lock} alt='Lock' className='w-4 h-4' />
                                        <input
                                            name="confirmPassword"
                                            placeholder="************"
                                            type={showConfirmPassword ? "text" : "password"} 
                                            value={values?.confirmPassword}
                                            onChange={handleChange}
                                            className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none  "
                                        />
                                        {showConfirmPassword ? (
                                            <BsEye
                                                className=" absolute top-[20px] right-4 cursor-pointer text-[#828282]"
                                                onClick={toggleConfirmPasswordVisibility}
                                            />
                                            ) : (
                                            <BsEyeSlash
                                                className=" absolute top-[20px] right-4 cursor-pointer text-[#828282]"
                                                onClick={toggleConfirmPasswordVisibility}
                                            />
                                        )}
                                    </div>
                                    {errors?.confirmPassword && touched?.confirmPassword ? (
                                    <div className='text-RED-_100 font-inter text-xs'>{errors?.confirmPassword}</div>
                                    ) : null}
                                </div>

                               
                            
                                <div className='flex flex-col gap-6 mt-5'>
                                    <button 
                                        className={`${isValid ? "bg-[#52BC77]" : "bg-[#D2DCD6]"} text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[56px] flex items-center justify-center`}
                                        type="submit"
                                        // disabled={!isValid ? true : false}
                                    >
                                        <p className='text-[#fff] text-base font-inter  text-center  font-medium'>{loading ? <CgSpinner className=" animate-spin text-2xl " /> : "Next"}</p>
                                    </button>

                                    <p className='text-center font-inter text-base text-[#C6D2CA]' onClick={() => {navigate("/"); window.scrollTo(0, 0)}}>
                                        Already have an account?<span className='text-[#1CA157] cursor-pointer'> Sign In</span>
                                    </p>

                                    
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

export default Password