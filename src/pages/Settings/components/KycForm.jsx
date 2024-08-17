import React, { Fragment, useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from "yup"
import { toast } from 'react-toastify'
import { CgSpinner } from 'react-icons/cg'
import { Listbox, Transition } from '@headlessui/react'
import { IoIosArrowDown } from 'react-icons/io'
import axios from 'axios'

import UploadIcon from "../../../assets/svg/upload_icon.svg"
import CloseIcon from "../../../assets/svg/closeIcon.svg"



const genderOptions = [
    {name: ""},
    {name: "Male"},
    {name: "Female"}
]

const KycForm = ({ handleClose }) => {
    const [loading, setLoading] = useState(false)

    const token = localStorage.getItem("token")

    const formValidationSchema = Yup.object().shape({
        businessName: Yup.string().required("Required"),
        businessCity: Yup.string().required("Required"),
        businessState: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        gender: Yup.string().required("Required"),
    })

    const submitForm = async (values) => {
        setLoading(true)
        let formData = new FormData()
        formData.append("id_doc", values?.imageDoc)
        formData.append("business_name", values?.businessName)
        formData.append("business_city", values?.businessCity)
        formData.append("business_state", values?.businessState)
        formData.append("address", values?.address)
        formData.append("gender", values?.gender)

        try {
            const response = await axios.post("https://api.growafrica.shop/api/user/kyc-application", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token} `
                }
            })
            setLoading(false)
     
            toast.success(`${response?.data?.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            handleClose()
        } catch(err) {
            setLoading(false)
            toast.error(`${err?.data?.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            handleClose()
        }
    }

  return (
    <div className='bg-[#fff] w-full lg:w-[600px] mt-[50px] h-[500px] overflow-y-scroll px-5 rounded-lg py-[40px] flex flex-col  gap-4'>
        <button className="flex justify-end items-center" onClick={handleClose}> 
            <img src={CloseIcon} alt='close' />
        </button>
        <div className='flex items-center justify-between'>
            <p className='font-medium font-mont text-[#3F434A]  text-[20px] text-[#000]'>Kindly Fill the KYC Form below</p>
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
                            <label htmlFor='Business Name' className="text-base font-inter text-[#09111D]">Business Name</label>
                            <div className='w-full rounded-3xl flex gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                <input
                                    name="businessName"
                                    placeholder="Ex. Dangote Cement"
                                    type="text" 
                                    value={values.businessName}
                                    onChange={handleChange}
                                    className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none "
                                />
                            </div>
                            {errors?.businessName && touched?.businessName ? (
                            <div className='text-RED-_100 font-inter text-xs'>{errors?.businessName}</div>
                            ) : null}
                        </div>

                        <div className="flex flex-col items-start">
                            <label htmlFor='Business City' className="text-base font-inter text-[#09111D]">Business City</label>
                            <div className='w-full rounded-3xl flex gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                <input
                                    name="businessCity"
                                    placeholder="Ex. Ikeja"
                                    type="text" 
                                    value={values.businessCity}
                                    onChange={handleChange}
                                    className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none "
                                />
                            </div>
                            {errors?.businessCity && touched?.businessCity ? (
                            <div className='text-RED-_100 font-inter text-xs'>{errors?.businessCity}</div>
                            ) : null}
                        </div>

                        <div className="flex flex-col items-start">
                            <label htmlFor='Business State' className="text-base font-inter text-[#09111D]">Business State</label>
                            <div className='w-full rounded-3xl flex gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                <input
                                    name="businessState"
                                    placeholder="Ex. Lagos"
                                    type="text" 
                                    value={values.businessState}
                                    onChange={handleChange}
                                    className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none "
                                />
                            </div>
                            {errors?.businessState && touched?.businessState ? (
                            <div className='text-RED-_100 font-inter text-xs'>{errors?.businessState}</div>
                            ) : null}
                        </div>

                        <div className="flex flex-col items-start">
                            <label htmlFor='Address' className="text-base font-inter text-[#09111D]">Address</label>
                            <div className='w-full rounded-3xl flex gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                <input
                                    name="address"
                                    placeholder="Ex. 12 bembe street"
                                    type="text" 
                                    value={values.address}
                                    onChange={handleChange}
                                    className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none "
                                />
                            </div>
                            {errors?.address && touched?.address ? (
                            <div className='text-RED-_100 font-inter text-xs'>{errors?.address}</div>
                            ) : null}
                        </div>

                        <div className='flex flex-col w-full gap-1'>
                            <label htmlFor='gender' className='font-mont font-medium  text-[#00141B] text-[15px]' >Gender</label>
                                         
                            <Listbox value={values.gender} onChange={(value) => setFieldValue('gender', value)}>
                                <div className="relative">
                                    <Listbox.Button className="outline-none w-full flex items-center justify-between  rounded-lg bg-[#fff] border  border-[#BABABA] p-3 h-[48px] border-solid">
                                        <span className="block truncate w-full text-left text-[#222222] font-medium  font-mont">  {values.gender || 'Select an option'}</span>
                                        {/* <span className="pointer-events-none absolute inset-y-0 right-0 pr-2 lg:-right-6 flex items-center"> */}
                                            <IoIosArrowDown
                                                className="h-5 w-5 text-[#AAAAAA] "
                                                aria-hidden="true"
                                            />
                                        {/* </span> */}
                                    </Listbox.Button>
                                    <Transition
                                        as={Fragment}
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <Listbox.Options className="absolute z-10 mt-1 w-[300px] max-h-60  overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                            {genderOptions.map((item, index) => (
                                                <Listbox.Option
                                                    key={index}
                                                    className={({ active }) =>
                                                        `relative cursor-default select-none py-2 pl-4 pr-4 ${
                                                        active ? 'bg-[#E6F6F4] text-[#052011]' : 'text-[#052011]'
                                                        }`
                                                    }
                                                    value={item.name}
                                                >
                                                {({ selected }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${
                                                            selected ? 'font-medium' : 'font-normal'
                                                            } text-[#052011]`}
                                                            onChange={() => setFieldValue("gender", item?.name)}
                                                        >
                                                            {item.name}
                                                        </span>
                                                    </>
                                                )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>
                            {errors.gender && touched.gender ? (
                            <div className="text-RED-_100 text-xs">
                                {errors.gender}
                            </div>
                            ) : null}
                        </div>


                             
                        <div className="flex flex-col gap-2  xs:mt-4 lg:mt-0 lg:w-12/12">
                            <p className='font-medium font-inter text-[#344054] text-sm'>Upload Id Document <span className='text-RED-_100 text-xs'>*</span></p>
                            {values?.imageDoc
                                ? 
                                <div className='flex flex-col gap-1'>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[15px] font-hanken text-[#858585]'>{values?.imageDoc?.name}</p>
                                        <p className='text-[#000] text-[11px]'>Completed</p>
                                    </div>
                                    <div className='w-[266px] h-[5px] bg-[#51E38B] rounded-lg'></div>
                                </div>   
                                :
                                <label className="flex flex-col xs:w-full  h-[157px] py-4 px-0 border border-dashed border-[#D0D5DD] border-dashed">
                                    <div className="flex flex-col my-3 items-center">
                                        <img src={UploadIcon} alt="upload" />
                                        <div className="font-medium mt-4 text-black w-[329px] flex flex-col gap-4 items-center justify-center">
                                            <p className='text-sm font-inter text-center' >
                                                Drag and drop or <span className='inline-block text-[#1B565B]'>Click here</span> to upload the file from your computer  
                                            </p>
                                            <p className='text-[#8C9FB1] font-inter text-xs font-normal '>PDF or DOC. Max 2mb</p>
                                        </div>   
                                    </div>
                                    <input
                                        type="file"
                                        name="imageDoc"
                                        value={values?.imageDoc}
                                        className="opacity-0"
                                        onChange={(e) => {setFieldValue("imageDoc", e.target.files[0])}}
                                        id="upload"
                                        accept=".pdf,.jpg,.png"
                                        multiple={false}
                                    />
                                </label>
                            }
                            {errors.imageDoc && touched.imageDoc ? 
                            <div className='text-RED-_100'>{errors.imageDoc}</div> 
                            : null
                            }
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

export default KycForm