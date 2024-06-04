import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Form, Formik } from 'formik';
import * as Yup from "yup"
import ModalPop from '../../components/modalPop';
import Details from './components/Details';

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formValidationSchema = Yup.object().shape({
    password: Yup.string().required("Password is Required"), 
    newPassword: Yup.string().required("New Password is Required"), 
    confirmPassword: Yup.string().required("New Password is Required"), 

})

  return (
    <div className='flex-col flex gap-6 px-6 py-[15px] '>
      <p className='text-[#091D10] text-[24px] font-medium'>Settings</p>

      <div className='w-full border border-[#D9EDE1] flex  pt-[17px] w-[95%] flex-col rounded-lg'>
        <div className='border border-b-[#D9E4ED] border-t-0 pb-[22px] px-[40px]'>
          <p className='text-[#101928] text-[18px] font-semibold '>Account Details</p>
        </div>
        <div className='flex '>
          <div className='flex flex-col px-[40px] border border-b-0 border-t-0 w-[327px] py-[21px] gap-2'>
            <div className='w-[64px] h-[64px] rounded-full flex items-center justify-center bg-[#CDF4DD]'>
              <p className='text-[#009254] font-inter text-base font-medium'>SE</p>
            </div>
            <p className='text-[#091D10] text-base font-inter font-medium'>Solomon Edem</p>
            <p className='font-inter text-[#8B9890] text-sm'>SOLOMON EDEM STORE</p>
          </div>
          <div className='flex flex-col gap-[27px] pt-[19px] px-6'>
            <div className='flex items-center gap-[100px]'>
              <div className='flex flex-col w-[199px] gap-[8px]'>
                <p className='text-[#091D10] text-base font-inter font-medium'>Phone Number</p>
                <p className='text-[#8B9890] font-inter font-normal text-sm'>******9391</p>
              </div>
              <div className='flex flex-col w-[199px] gap-[8px]'>
                <p className='text-[#091D10] text-base font-inter font-medium'>Email</p>
                <p className='text-[#8B9890] font-inter font-normal text-sm'>soloedemux@gmail.com</p>
              </div>
            </div>
            <div className='flex items-center gap-[100px]'>
              <div className='flex flex-col w-[199px] gap-[8px]'>
                <p className='text-[#091D10] text-base font-inter font-medium'>Store Link</p>
                <p className='text-[#8B9890] font-inter font-normal text-sm'>bit.ly/solomonedemstore</p>
              </div>
              <div className='flex flex-col w-[199px] gap-[8px]'>
                <p className='text-[#091D10] text-base font-inter font-medium'>Date Created</p>
                <p className='text-[#8B9890] font-inter font-normal text-sm'>15-05-1994</p>
              </div>
              <div className='flex flex-col w-[199px] gap-[8px]'>
                <p className='text-[#091D10] text-base font-inter font-medium'>Account Status</p>
                <div className='w-[62px] h-[24px] flex flex-col items-center justify-center bg-[#E6FCF9] rounded-xl'>
                  <p className='text-[#009254] font-inter font-normal text-sm'>Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

      </div>

      <div className='flex flex-col border border-[#D9EDE1] bg-[#fff] rounded-lg w-[95%] gap-6 py-6 px-[40px]'>
            <p className='text-[#101928] font-inter text-[18px] font-semibold'>Security</p>
            <div className=' w-full'>
              <Formik
                  initialValues={{
                    password: "",
                    newPassword: "",
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
                      <div className='flex flex-col gap-6 '>
              

                        <div className="flex flex-col items-start w-full">
                          <div className='flex items-center justify-between'>
                            <label htmlFor='password' className="text-base font-inter text-[#09111D]">Password</label>
                          </div>
                          <div 
                            className='relative w-[374px] rounded-xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'
                          >
                          
                            <input
                                name="password"
                                placeholder="Password"
                                type={showPassword ? "text" : "password"} 
                                value={values?.password}
                                onChange={handleChange}
                                className="w-full text-[#000] bg-transparent placeholder-[#7F9286] font-inter  outline-none  "
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

                        <div className='flex items-center'>
                          <div className="flex flex-col items-start w-full">
                            <div className='flex items-center justify-between'>
                              <label htmlFor='password' className="text-base font-inter text-[#09111D]">New Password</label>
                            </div>
                            <div 
                              className='relative w-[374px] rounded-xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'
                            >
                            
                              <input
                                  name="newPassword"
                                  placeholder="New Password"
                                  type={showNewPassword ? "text" : "password"} 
                                  value={values?.newPassword}
                                  onChange={handleChange}
                                  className="w-full text-[#000] bg-transparent placeholder-[#7F9286] font-inter  outline-none  "
                              />
                              {showNewPassword ? (
                                  <BsEye
                                      className=" absolute top-[20px] right-4 cursor-pointer text-[#828282]"
                                      onClick={toggleNewPasswordVisibility}
                                  />
                                  ) : (
                                  <BsEyeSlash
                                      className=" absolute top-[20px] right-4 cursor-pointer text-[#828282]"
                                      onClick={toggleNewPasswordVisibility}
                                  />
                              )}
                            </div>
                            {errors?.newPassword && touched?.newPassword ? (
                                <div className='text-RED-_100 font-inter text-xs'>{errors?.newPassword}</div>
                                ) : null}
                          </div>

                          <div className="flex flex-col items-start w-full">
                            <div className='flex items-center justify-between'>
                              <label htmlFor='password' className="text-base font-inter text-[#09111D]">Retype Password</label>
                            </div>
                            <div 
                              className='relative w-[374px] rounded-xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'
                            >
                            
                              <input
                                  name="confirmPassword"
                                  placeholder="Confirm Password"
                                  type={showConfirmPassword ? "text" : "password"} 
                                  value={values?.confirmPassword}
                                  onChange={handleChange}
                                  className="w-full text-[#000] bg-transparent placeholder-[#7F9286] font-inter  outline-none  "
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
                        </div>
                        
                        <div className='flex flex-col gap-6 mt-5'>
                            <button 
                                className={`${isValid ? "bg-[#52BC77]" : "bg-[#D2DCD6]"} text-[#fff] w-[374px] rounded-lg p-3 gap-1 cursor-pointer w-full h-[56px] flex items-center justify-center`}
                                type="submit"
                                disabled={!isValid ? true : false}
                            >
                              <p className='text-[#fff] text-base font-inter  text-center  font-medium'>{loading ? <CgSpinner className=" animate-spin text-2xl " /> : "Change Password"}
                              </p>
                            </button>
                            
                        </div>

                        
                      
                      </div>
                      

                  </Form>
                  )}
              </Formik>
            </div>
      </div>

      <div className='flex flex-col border border-[#D9EDE1] bg-[#fff] rounded-lg w-[95%] gap-6 py-6 px-[40px]'>
        <p className='text-[#101928] text-[18px] font-semibold'>Account Management</p>
        <div className='flex items-center gap-[368px]'>
          <p className='text-[#333333] font-inter text-base font-medium'>Delete Account</p>
          <button
            className='bg-[#C80E10] rounded-[10px] w-[121px] h-[46px]'
            onClick={() => setOpen(true)}
          >
            <p className='text-[#fff]'>Delete</p>
          </button>
        </div>
      </div>

      <ModalPop isOpen={open}>
          <Details handleClose={() => setOpen(false)} />
      </ModalPop>
  
    </div>
  )
}

export default Settings