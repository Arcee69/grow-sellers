import React, { useState } from 'react'
import { IoChevronBack } from "react-icons/io5";
import { Form, Formik } from 'formik';
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

import Logo from "../../../../assets/svg/logo.svg"
import Mail from "../../../../assets/svg/mail.svg"


const SignUp = ({ setQuest }) => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

    const navigate = useNavigate()

    const formValidationSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email().required("email is required"),
        // password: Yup.string().required("Password is Required"),
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
        if(values) {
            // toast.success('Login Successfully', {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: true,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            // });
            setQuest(2)

        }
    }

  return (
    <div className='my-[50px]'>
        <div className='w-[531px] h-[600px] bg-[#fff] py-[31px] flex flex-col rounded'> {/* h-[559px] */}
            <div className='flex justify-between items-center pl-6 pr-[52px] mb-5 '>
                <div className='w-[36px] h-[36px] bg-[#F8FAFC] flex items-center justify-center'>
                    <IoChevronBack />
                </div>
                <img src={Logo} alt='Logo' className='w-[47px] h-[34px]' />
            </div>
            <hr />
            <div className='flex flex-col px-[52px] mt-5 '>
                <div className='flex flex-col gap-2.5'>
                    <p className='font-inter text-[#09111D] text-[24px] font-medium'>Welcome to GrowAfrica</p>
                    <p className='font-inter text-[#8B9298] text-base font-medium'>Create your account to start shopping and discover unique products.</p>
                </div>

                <div className='mt-[32px] w-full'>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
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

                                <div className='flex items-center gap-8'>

                                    <div className="flex flex-col ">
                                        <label htmlFor='First Name' className="text-base font-inter text-[#09111D]">First Name</label>
                                            <input
                                                name="firstName"
                                                placeholder="John"
                                                type="text" 
                                                value={values.firstName}
                                                onChange={handleChange}
                                                className="w-full text-[#000] placeholder-[#7F9286] font-inter outline-none w-full rounded-3xl mt-1.5 h-[60px] border-solid p-4 border border-[#D9E4ED]"
                                            />
                                        {errors?.firstName && touched?.firstName ? (
                                        <div className='text-RED-_100 font-inter text-xs'>{errors?.firstName}</div>
                                        ) : null}
                                    </div>

                                    <div className="flex flex-col ">
                                        <label htmlFor='Last Name' className="text-base font-inter text-[#09111D]">Last Name</label>
                                            <input
                                                name="lastName"
                                                placeholder="Doe"
                                                type="text" 
                                                value={values.lastName}
                                                onChange={handleChange}
                                                className="w-full text-[#000] placeholder-[#7F9286] font-inter outline-none w-full rounded-3xl mt-1.5 h-[60px] border-solid p-4 border border-[#D9E4ED]"
                                            />
                                        {errors?.lastName && touched?.lastName ? (
                                        <div className='text-RED-_100 font-inter text-xs'>{errors?.lastName}</div>
                                        ) : null}
                                    </div>

                                </div>
                    
                                <div className="flex flex-col ">
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

                               
                            
                                <div className='flex flex-col gap-6 mt-5'>
                                    <button 
                                        className={`${isValid ? "bg-[#52BC77]" : "bg-[#D2DCD6]"} text-[#fff] rounded-lg p-3 cursor-pointer w-full h-[56px] flex items-center justify-center`}
                                        type="submit"
                                        disabled={!isValid ? true : false}
                                    >
                                        <p className='text-[#fff] text-base font-inter  text-center  font-medium'>Next</p>
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

export default SignUp