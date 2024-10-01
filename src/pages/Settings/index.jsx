import React, { useEffect, useState } from 'react'
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Form, Formik } from 'formik';
import * as Yup from "yup"
import { useDispatch, useSelector } from 'react-redux';

import { fetchProfile } from '../../features/profile/getProfileSlice';

import ModalPop from '../../components/modalPop';
import Details from './components/Details';
import { updatePassword } from '../../features/profile/updatePasswordSlice';

import { appUrls } from '../../services/urls'
import { api } from '../../services/api'
import { toast } from 'react-toastify';
import KycForm from './components/KycForm';
import axios from 'axios';


const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [openKyc, setOpenKyc] = useState(false)
  const [storeLoading, setStoreLoading] = useState(false)
  const [userImage, setUserImage] = useState(null)

  const dispatch = useDispatch()
  const token = localStorage.getItem("token")

  const profile = useSelector(state => state.getProfile)

  const userProfile = profile?.data?.users

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleImageChange = (e) => {
    const selectedImage =  e.target.files[0]
    setUserImage(selectedImage)
  }

  const closeStore = async () => {
    setStoreLoading(true)
    await api.post(appUrls?.CLOSE_STORE_URL)
    .then((res) => {
     
        setStoreLoading(false)
        toast.success(`${res?.data?.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setOpen(false)
    })
    .catch((err) => {
    
        setStoreLoading(false)
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
    })
}

const openStore = async () => {
    setStoreLoading(true)
    await api.post(appUrls?.OPEN_STORE_URL)
    .then((res) => {

        setStoreLoading(false)
        toast.success(`${res?.data?.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setOpen(false)
    })
    .catch((err) => {

        setStoreLoading(false)
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
    })
}

  useEffect(() => {
    dispatch(fetchProfile())
  }, [storeLoading])

  const formValidationSchema = Yup.object().shape({
    password: Yup.string().required("Password is Required"), 
    newPassword: Yup.string().required("New Password is Required"), 
    confirmPassword: Yup.string().oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
})

  const uploadImage = async () => {
    let formData = new FormData()
    formData.append("pic", userImage)
    await axios.post("https://api.growafrica.shop/api/user/update/profile-pic", formData, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "multipart/formdata"
      }
    })
    .then((res) => {
      toast.success(`${res?.data?.message}`, {
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
    .catch((err) => {
      // console.log(err, "err")
    })
  } 

  const submitForm = (values) => {
      setLoading(true)
      const data = {
        "current_password": values?.password,
        "new_password": values?.newPassword,
        "new_password_confirmation": values?.confirmPassword
      }
      dispatch(updatePassword(data))
      .then((res) => {
        setLoading(false)
      })
  }

  useEffect(() => {
    uploadImage()
  }, [userImage])
  return (
    <div className='flex-col flex gap-6 px-6 py-[15px] mt-10 lg:mt-0'>
      <div className='flex justify-between items-center'>
        <p className='text-[#091D10] text-[24px] font-medium'>Settings</p>
        <button type='button' onClick={() => setOpenKyc(true)} className={`${userProfile?.kyc_status === "approved" ? "hidden" : 'w-[150px] rounded-lg bg-[#000] h-[45px] lg:mr-14'}`}>
          <p className='text-[#fff] text-sm font-medium'>Update KYC</p>
        </button>
      </div>

      <div className=' border border-[#D9EDE1] flex  w-full  pt-[17px] pb-[17px]  lg:w-[95%] flex-col rounded-lg'>
        <div className='border border-b-[#D9E4ED] border-t-0 pb-[22px] px-[40px]'>
          <p className='text-[#101928] text-[18px] font-semibold '>Account Details</p>
        </div>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex flex-col px-5 lg:px-[40px] border border-b-0 border-t-0 w-full lg:w-[327px] py-[21px] gap-2'>

            {
              userProfile?.pic ? 
                <div className="pt-0 " >
                  <img src={userProfile?.pic} alt="upload" className='w-[104px] h-[104px] rounded-full' />
                </div>
                :
                <div className="flex flex-col xs:mt-4 lg:mt-0 lg:w-12/12">
                  {userImage
                  ? 
                      <div className="pt-0 " >
                          <img alt="upload" className='w-[104px] h-[104px] rounded-full' src={URL.createObjectURL(userImage)} />
                      </div>
                  :
                  <label className='w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center bg-[#CDF4DD]'>
                    <p className='text-[#009254] font-inter  text-xl font-medium'>
                      {`${userProfile?.first_name?.slice(0, 1)}${userProfile?.last_name?.slice(0, 1)}`}
                    </p>
                  <input
                      type="file"
                      name="imageDoc"
                      value={userImage}
                      className="hidden"
                      onChange={(e) => handleImageChange(e)}
                      id="upload"
                      accept={"image/*"}
                      multiple={false}
                  />
                  </label>
                  }
                                          
                </div> 
            }

            {/* <div className='w-[64px] h-[64px] rounded-full flex items-center justify-center bg-[#CDF4DD]'>
              <p className='text-[#009254] font-inter text-base font-medium'>{`${userProfile?.first_name?.slice(0, 1)}${userProfile?.last_name?.slice(0, 1)}`}</p>
            </div> */}

            <p className='text-[#091D10] text-base font-inter font-medium'>{userProfile?.first_name + " " + userProfile?.last_name}</p>
            <p className='font-inter text-[#8B9890] text-sm uppercase'>{userProfile?.business_name} STORE</p>
          </div>
          <div className='flex flex-col gap-[27px] pt-[19px] px-6'>
            <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-[80px]'>
              <div className='flex flex-col w-full lg:w-[199px] gap-[8px]'>
                <p className='text-[#091D10] text-base font-inter font-medium'>Phone Number</p>
                <p className='text-[#8B9890] font-inter font-normal text-sm'>{userProfile?.phone}</p>
              </div>
              <div className='flex flex-col w-full lg:w-[199px] gap-[8px]'>
                <p className='text-[#091D10] text-base font-inter font-medium'>Email</p>
                <p className='text-[#8B9890] font-inter font-normal text-sm'>{userProfile?.email}</p>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center gap-5 lg:gap-[80px]'>
              <div className='flex flex-col w-full lg:w-[199px] gap-[8px]'>
                <p className='text-[#091D10] text-base font-inter font-medium'>KYC Status</p>
                <div className={`${userProfile?.kyc_status === "approved" ? "bg-[#E6FCF9]" : "bg-[#FFC600]"} w-[75px] h-[24px] p-2 flex flex-col items-center justify-center rounded-xl`}>
                  <p className={`${userProfile?.kyc_status === "approved" ? "text-[#009254]" : "text-[#fff]"} font-inter font-normal text-sm`} >{userProfile?.kyc_status === "approved" ? "Verified" : "Pending"}</p>
                </div>
              </div>
              <div className='flex flex-col w-full lg:w-[199px] gap-[8px]'>
                <p className='text-[#091D10] text-base font-inter font-medium'>Date Created</p>
                <p className='text-[#8B9890] font-inter font-normal text-sm'>{new Date(userProfile?.created_at).toDateString()}</p>
              </div>
              <div className='flex flex-col w-full lg:w-[199px] gap-[8px]'>
                <p className='text-[#091D10] text-base font-inter font-medium'>Account Status</p>
                <div className={`${userProfile?.store_status === 1 ? "bg-[#E6FCF9]" : "bg-[#f00]"} w-[75px] h-[24px] p-2 flex flex-col items-center justify-center rounded-xl`}>
                  <p className={`${userProfile?.store_status === 1 ? "text-[#009254]" : "text-[#fff]"} font-inter font-normal text-sm`} >{userProfile?.store_status === 1 ? "Active" : "Inactive"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

      </div>

      <div className='flex flex-col border border-[#D9EDE1] bg-[#fff] rounded-lg w-full lg:w-[95%] gap-6 py-6 px-5 lg:px-[40px]'>
            <p className='text-[#101928] font-inter text-[18px] font-semibold'>Security</p>
            <div className=' w-full'>
              <Formik
                  initialValues={{
                    password: "",
                    newPassword: "",
                    confirmPassword: ""
                  }}
                  validationSchema={formValidationSchema}
                  onSubmit={(values, action) => {
                      window.scrollTo(0, 0)
              
                      submitForm(values)
                      action.resetForm()
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
                            className='relative w-full lg:w-[374px] rounded-xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'
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

                        <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 items-center'>
                          <div className="flex flex-col items-start w-full">
                            <div className='flex items-center justify-between'>
                              <label htmlFor='password' className="text-base font-inter text-[#09111D]">New Password</label>
                            </div>
                            <div 
                              className='relative w-full lg:w-[374px] rounded-xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'
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
                              className='relative w-full lg:w-[374px] rounded-xl flex items-center gap-1.5 mt-1.5 h-[60px] border-solid  p-4 border border-[#D9E4ED]'
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
                        
                        <div className='w-full lg:w-[374px] flex flex-col gap-6 mt-5'>
                            <button 
                              className={`${isValid ? "bg-[#52BC77]" : "bg-[#D2DCD6]"} text-[#fff] w-[374px] rounded-lg p-3 gap-1 cursor-pointer w-full h-[56px] flex items-center justify-center`}
                              type="submit"
                              disabled={!isValid ? true : false}

                            >
                              <p className='text-[#fff] text-base font-inter  text-center  font-medium'>
                                {loading ? <CgSpinner className=" animate-spin text-2xl " /> : "Change Password"}
                              </p>
                            </button>
                            
                        </div>

                        
                      
                      </div>
                      

                  </Form>
                  )}
              </Formik>
            </div>
      </div>

      <div className='flex flex-col border border-[#D9EDE1] bg-[#fff] rounded-lg lg:w-[95%] gap-6 py-6 px-[40px]'>
        <p className='text-[#101928] text-[18px] font-semibold'>Account Management</p>
        <div className='flex items-center justify-between lg:gap-[368px]'>
          <p className='text-[#333333] font-inter text-base font-medium'>
            {userProfile?.store_status === 1 ? "Close" : "Open"} Store
          </p>
          <button
            className={`${userProfile?.store_status === 1 ? "bg-[#C80E10]" : "bg-[#52BC77]"} rounded-[10px] w-[121px] h-[46px]`}
            onClick={() => setOpen(true)}
          >
            <p className='text-[#fff]'>{userProfile?.store_status === 1 ? "Close" : "Open"}</p>
          </button>
        </div>
      </div>

      <ModalPop isOpen={open}>
          <Details 
            handleClose={() => setOpen(false)} 
            userProfile={userProfile} 
            openStore={openStore} 
            closeStore={closeStore}
            storeLoading={storeLoading} 
          />
      </ModalPop>

      <ModalPop isOpen={openKyc}>
        <KycForm 
          handleClose={() => setOpenKyc(false)}
        />
      </ModalPop>
  
    </div>
  )
}

export default Settings