import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import { toast } from 'react-toastify'

import CloseIcon from "../../../assets/svg/closeIcon.svg"
import { CgSpinner } from 'react-icons/cg'

const AddAccount = ({ handleClose }) => {
    const [loading, setLoading] = useState(false)


    const formValidationSchema = Yup.object().shape({
        fullName: Yup.string().required("Required"),
        account: Yup.number().required("Required"),
        bankName: Yup.string().required("Required"),
    })

    // const submitForm = async (values) => {
     
    //     setLoading(true)
    
 

    //     try {
    //         const response = await axios.post("https://api.growafrica.shop/api/user/kyc-application", formData, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //                 "Authorization": `Bearer ${token} `
    //             }
    //         })
    //         setLoading(false)
    //         console.log(response, "gapa")
    //         toast.success(`${response?.data?.message}`, {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: true,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //         handleClose()
    //     } catch(err) {
    //         setLoading(false)
    //         toast.error(`${err?.data?.message}`, {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: true,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });
    //         handleClose()
    //     }
    // }

  return (
    <div className='w-[491px] h-[462px] mt-[100px] py-[40px] px-5 overflow-y-scroll gap-6 flex flex-col bg-[#fff] rounded-lg '>
        <button className="flex justify-end items-center" onClick={handleClose}> 
            <img src={CloseIcon} alt='close' />
        </button>
        <div className='flex items-center justify-between'>
            <p className='font-medium font-mont text-[#3F434A]  text-[20px] text-[#000]'>Kindly Fill the Account Form below</p>
        </div>
        <div className=' mb-5'>
            <Formik
                initialValues={{
                    businessName: "",
                    imageDoc: "",
                    businessCity: "",
                    businessState: "",
                    address: "",
                    gender: ""
                }}
                validationSchema={formValidationSchema}
                onSubmit={(values) => {
                    window.scrollTo(0, 0)
                    console.log(values, "often")
                    // submitForm(values)
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
                            <label htmlFor='Full Name' className="text-base font-inter text-[#09111D]">Full Name</label>
                            <div className='w-full rounded-3xl flex gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                <input
                                    name="fullName"
                                    placeholder="Ex. John Doe"
                                    type="text" 
                                    value={values.fullName}
                                    onChange={handleChange}
                                    className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none "
                                />
                            </div>
                            {errors?.fullName && touched?.fullName ? (
                            <div className='text-RED-_100 font-inter text-xs'>{errors?.fullName}</div>
                            ) : null}
                        </div>

                        <div className="flex flex-col items-start">
                            <label htmlFor='Account No' className="text-base font-inter text-[#09111D]">Account No</label>
                            <div className='w-full rounded-3xl flex gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                <input
                                    name="account"
                                    placeholder="Ex. 123456789"
                                    type="text" 
                                    value={values.account}
                                    onChange={handleChange}
                                    className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none "
                                />
                            </div>
                            {errors?.account && touched?.account ? (
                            <div className='text-RED-_100 font-inter text-xs'>{errors?.account}</div>
                            ) : null}
                        </div>

                        <div className="flex flex-col items-start">
                            <label htmlFor='Bank Name' className="text-base font-inter text-[#09111D]">Bank Name</label>
                            <div className='w-full rounded-3xl flex gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                <input
                                    name="bankName"
                                    placeholder="Ex. Wema"
                                    type="text" 
                                    value={values.bankName}
                                    onChange={handleChange}
                                    className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none "
                                />
                            </div>
                            {errors?.bankName && touched?.bankName ? (
                            <div className='text-RED-_100 font-inter text-xs'>{errors?.bankName}</div>
                            ) : null}
                        </div>
                   

    
                        <button 
                            className={`${isValid ? "bg-[#52BC77]" : "bg-[#D2DCD6]"} text-[#fff] rounded-lg p-3 gap-1 cursor-pointer w-full h-[56px] flex items-center justify-center`}
                            type="submit"
                            disabled={!isValid ? true : false}
                        >
                            <p className='text-[#fff] text-base font-inter  text-center  font-medium'>{loading ? <CgSpinner className=" animate-spin text-2xl " /> : "Submit"}</p>
                        </button>
                        
                    
                    </div>
                    

                </Form>
                )}
            </Formik>
        </div>
    </div>
  )
}

export default AddAccount