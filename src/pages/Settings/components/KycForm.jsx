import React, { useState } from 'react'
import { Form, Formik } from 'formik'


const KycForm = ({ handleClose }) => {

    const [loading, setLoading] = useState(false)

  return (
    <div className='bg-[#fff] w-full lg:w-[560px] mt-[150px] h-[500px] overflow-y-scroll rounded-lg py-[40px] flex flex-col items-center px-[48px] gap-4'>
        <p>Kindly Fill the KYC Form below</p>
        <div>
            <Formik
                initialValues={{
                    email: "",
                }}
                // validationSchema={formValidationSchema}
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

    
                        <button 
                            className={`${isValid ? "bg-[#52BC77]" : "bg-[#D2DCD6]"} text-[#fff] rounded-lg p-3 gap-1 cursor-pointer w-full h-[56px] flex items-center justify-center`}
                            type="submit"
                            disabled={!isValid ? true : false}
                        >
                            <p className='text-[#fff] text-base font-inter  text-center  font-medium'>{loading ? <CgSpinner className=" animate-spin text-2xl " /> : "Log in to GrowAfrica"}</p>
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