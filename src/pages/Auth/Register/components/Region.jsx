import React, { useState, Fragment } from 'react'
import { IoChevronBack } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io"
import { Form, Formik } from 'formik';
import { toast } from "react-toastify"
import * as Yup from "yup"
import { Listbox, Transition } from '@headlessui/react'
import Logo from "../../../../assets/svg/logo.svg"



const country = [
    { name: 'NG', link:"https://flagcdn.com/h20/ng.png", alt:"Nigeria" },
    { name: 'GH', link:"https://flagcdn.com/h20/gh.png", alt:"Ghana"  },
    { name: 'US', link:"https://flagcdn.com/h20/us.png", alt:"United States"  },
  ]

const Region = ({ setQuest }) => {
    const [selected, setSelected] = useState(country[0])

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
            setQuest(4)

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
                <p className='font-inter text-[#09111D] text-[24px] font-medium'>Country/Region of Residence</p>
                <p className='font-inter text-[#8B9298] text-base font-medium'>Choose your country of residence and input your phone number for verification.</p>
            </div>

            <div className='mt-[32px] w-full'>
                <Formik
                    initialValues={{
                        country: "",
                    }}
                    // validationSchema={formValidationSchema}
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
                
                            <div className="flex flex-col ">
                               
                                <div className='w-full rounded-3xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'>
                                    <Listbox value={selected} onChange={setSelected}>
                                        <div className="relative">
                                            <Listbox.Button className="relative w-[100px] cursor-default flex items-center gap-2   py-2 pl-3 pr-10 text-left outline-none sm:text-sm">
                                                <span className="block truncate w-full">{selected.name}</span>
                                                <span className="block truncate w-full"><img src={selected.link} alt={selected.alt} className='w-5 h-5 rounded-full' /></span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <IoIosArrowDown
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>
                                            <Transition
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                    {country.map((item, index) => (
                                                        <Listbox.Option
                                                            key={index}
                                                            className={({ active }) =>
                                                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                active ? 'bg-blue-100 text-amber-900' : 'text-gray-900'
                                                                }`
                                                            }
                                                            value={item}
                                                        >
                                                        {({ selected }) => (
                                                            <>
                                                                <span
                                                                    className={`block truncate ${
                                                                    selected ? 'font-medium' : 'font-normal'
                                                                    }`}
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
                                    <input
                                        name="country"
                                        placeholder="000 0000 000"
                                        type="number" 
                                        value={values.country}
                                        onChange={handleChange}
                                        className="w-full text-[#000] placeholder-[#7F9286] font-inter  outline-none "
                                    />
                                </div>
                                
                                {errors?.country && touched?.country ? (
                                <div className='text-RED-_100 font-inter text-xs'>{errors?.country}</div>
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

export default Region