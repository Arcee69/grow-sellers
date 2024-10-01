import React, { useEffect, useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'

import Upload from "../../../assets/png/upload.png"
import ImagePlaceholder from "../../../assets/png/image_placeholder.png"
import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'
import { IoIosArrowDown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { createProducts } from '../../../features/products/addProductSlice'
import { CgSpinner } from 'react-icons/cg'
import { useLocation, useNavigate } from 'react-router-dom'

import CloseIcon from "../../../assets/svg/closeIcon.svg"
import axios from 'axios'
import { toast } from 'react-toastify'


const EditProducts = () => {

    const location = useLocation()
    const productData = location.state

  const [userImage, setUserImage] = useState(null)
  const [userImageB, setUserImageB] = useState(null)
  const [userImageC, setUserImageC] = useState(null)
  const [productName, setProductName] = useState(productData?.name)
  const [description, setDescription] = useState(productData?.description)
  const [specification, setSpecification] = useState(productData?.specification)
  const [noOfItems, setNoOfItems] = useState(productData?.inventory)
  // const [productCategories, setProductCategories] = useState([])
  const [productColor, setProductColor] = useState(productData?.color)
  const [price, setPrice] = useState(productData?.unit_price)
  const [discount, setDiscount] = useState(productData?.discount)
  const [loading, setLoading] = useState(false)
  const [weight, setWeight] = useState(productData?.weight)

  const [thumbImage, setThumbImage] = useState(null)

  const dispatch = useDispatch()

  let URL = import.meta.env.VITE_APP_API_URL;

  console.log(productData, "basket")
  const token = localStorage.getItem("token")


  const productCategories = useSelector(state => state.productCategories)

  // const fetchProductCategories = async () => {
  //   await api.get(appUrls?.FETCH_PRODUCTS_CATEGORIES_URL)
  //   .then((res) => {
  //     console.log(res, "pdpd")
  //     setProductCategories(res?.data?.data?.categories)
  //   })
  //   .catch((err) => {
  //     console.log(err, "err")
  //   })
  // }

  // console.log(productCategories, "productCategories[0]")
  const categories = productCategories?.data?.categories

  const [selected, setSelected] = useState(categories)

  // console.log(selected, "selected[0]")

  const navigate = useNavigate()


  //For Product Images
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setUserImage(selectedFile)
  };

  const handleFileChangeB = (event) => {
    const selectedFileB = event.target.files[0];
    setUserImageB(selectedFileB)
  };

  const handleFileChangeC = (event) => {
    const selectedFileC = event.target.files[0];
    setUserImageC(selectedFileC)
  };

  //For Thumbnail
  const handleFileChangeThumb = (event) => {
    const selectedFileThumb = event.target.files[0];
    setThumbImage(selectedFileThumb)
  };

  const submitForm = async () => {
    setLoading(true)
    const data = {
        "product_id": productData?.id,
        "category_id": productData?.category_id,
        "name": productName || productData?.name,
        "weight": weight || productData?.weight,
        "specification": specification || productData?.specification,
        "color": productColor || productData?.color,
        "inventory": noOfItems || productData?.inventory,
        "unit_price": price || productData?.unit_price,
        "discount": discount || productData?.discount,
        "description": description || productData?.description
    }

    try {
        const res = await axios.post(`${URL}${appUrls?.EDIT_PRODUCTS_URL}`, data, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
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

        if((userImage !== null) || (userImageB !== null)) {
            const formData = new FormData()
            formData.append("images[0]", userImage)
            formData.append("images[1]", userImageB)
            const res = await axios.post(`${URL}${appUrls?.EDIT_PRODUCTS_IMAGE_URL}/${productData?.id}`, formData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            })
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
        }
        if(thumbImage !== null) {
            const formData = new FormData()
            formData.append("thumbnail", userImage)
            const res = await axios.post(`${URL}${appUrls?.EDIT_PRODUCTS_THUMBNAIL_URL}/${productData?.id}`, formData, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            })
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
        }

    } catch (err) {
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
    } finally {
        setLoading(false)
    }

  }


 


  return (
    <div className='flex flex-col lg:flex-row items-start'>
      <div className='flex flex-col w-full lg:w-[672px] gap-[8px] overflow-x-hidden'>
        <div className='w-full bg-[#fff] flex flex-col border-[#E9F6EE] border gap-6 px-6 py-4 rounded-lg'>
          <p className='font-inter text-[#191C1E] font-semibold text-base'>EDIT PRODUCT</p>
          <div className='flex flex-col lg:flex-row items-center gap-3'> 
            <div className='flex flex-col lg:mx-auto  bg-[#F8F9FA] rounded-xl items-center lg:w-[200px] px-6 py-[28px]  gap-[16px]'>
              <div className='p-[9px] w-full lg:w-[150px] cursor-pointer flex justify-center gap-[16px] '>
                  {  
                      userImage?.name ? 
                          <div className='flex flex-col gap-1 relative'>
                            <img alt="upload" width={"200px"} height={"100px"} className='' src={URL.createObjectURL(userImage)} />
                            <button className="flex items-center absolute -top-5 -right-3" onClick={() => setUserImage(null)}> 
                              <img src={CloseIcon} alt='close' />
                            </button>
                          </div> 
                          :
                          <div className='flex flex-col items-center'>
                              <label htmlFor="fileInput1" className='cursor-pointer flex justify-center items-center   '>
                                <div className='flex flex-col items-center w-full'>
                                  <img src={Upload} alt='upload' className='w-[56px] h-[56px]' />
                                    <p className='text-sm font-semibold font-inter whitespaace-nowrap mt-4 text-[#52BC77]'>
                                        Click here <span className='text-[#475367]'>or drag and drop to upload</span>
                                    </p>
                                    <p className='text-xs text-center font-medium text-[#98A2B3]'>SVG, PNG, JPG or GIF (max. 800x300px)</p>
                                </div>
                                  <input
                                      type="file"
                                      id="fileInput1"
                                      name='imgOne'
                                      style={{ display: 'none' }}
                                      onChange={handleFileChange}
                                  />
                              </label>
                          </div>
                  }
                  
              </div>
            </div>
            <div className='flex flex-col lg:mx-auto  bg-[#F8F9FA] rounded-xl items-center lg:w-[200px] px-6 py-[28px]  gap-[16px]'>
              <div className='p-[9px] w-full lg:w-[150px] cursor-pointer flex justify-center gap-[16px] '>
                  {  
                      userImageB?.name ? 
                          <div className='flex flex-col gap-1 relative'>
                            <img alt="upload" width={"200px"} height={"100px"} className='' src={URL.createObjectURL(userImageB)} />
                            <button className="flex items-center absolute -top-5 -right-3" onClick={() => setUserImageB(null)}> 
                              <img src={CloseIcon} alt='close' />
                            </button>
                          </div> 
                          :
                          <div className='flex flex-col items-center'>
                              <label htmlFor="fileInput2" className='cursor-pointer flex justify-center items-center'>
                                <div className='flex flex-col items-center w-full'>
                                  <img src={Upload} alt='upload' className='w-[56px] h-[56px]' />
                                    <p className='text-sm font-semibold font-inter whitespaace-nowrap mt-4 text-[#52BC77]'>
                                        Click here <span className='text-[#475367]'>or drag and drop to upload</span>
                                    </p>
                                    <p className='text-xs text-center font-medium text-[#98A2B3]'>SVG, PNG, JPG or GIF (max. 800x300px)</p>
                                </div>
                                  <input
                                      type="file"
                                      id="fileInput2"
                                      name='imgTwo'
                                      style={{ display: 'none' }}
                                      onChange={handleFileChangeB}
                                  />
                              </label>
                          </div>
                  }
                  
              </div>
            </div>

            <div className='flex flex-col lg:mx-auto  bg-[#F8F9FA] rounded-xl items-center lg:w-[200px] px-6 py-[28px]  gap-[16px]'>
              <div className='p-[9px] w-full lg:w-[150px] cursor-pointer flex justify-center gap-[16px] '>
                  {  
                      userImageC?.name ? 
                          <div className='flex flex-col gap-1 relative'>
                            <img alt="upload" width={"200px"} height={"100px"} className='' src={URL.createObjectURL(userImageC)} />
                              <button className="flex items-center absolute -top-5 -right-3" onClick={() => setUserImageC(null)}> 
                                  <img src={CloseIcon} alt='close' />
                              </button>
                          </div> 
                          :
                          <div className='flex flex-col items-center gap-[16px]'>
                              <label htmlFor="fileInput3" className='cursor-pointer flex justify-center items-center   '>
                                <div className='flex flex-col items-center w-full'>
                                  <img src={Upload} alt='upload' className='w-[56px] h-[56px]' />
                                    <p className='text-sm font-semibold font-inter mt-4 text-[#52BC77]'>
                                        Click here <span className='text-[#475367]'>or drag and drop to upload</span>
                                    </p>
                                    <p className='text-xs text-center font-medium text-[#98A2B3]'>SVG, PNG, JPG or GIF (max. 800x300px)</p>
                                </div>
                                  <input
                                      type="file"
                                      id="fileInput3"
                                      name='imgThree'
                                      style={{ display: 'none' }}
                                      onChange={handleFileChangeC}
                                  />
                              </label>
                          </div>
                  }
                  
              </div>
            </div>

          </div>
        </div>
        <div className='w-full bg-[#fff] flex flex-col border-[#E9F6EE] border gap-6 p-6 rounded-lg'>
          <p className='font-inter text-[#191C1E] font-semibold text-base'>PRODUCT DETAILS</p>
          <div className='flex flex-col gap-1'>
            <label className='font-inter text-[#3F484F] font-medium text-base'>Product Name <span className='text-red-400'>*</span></label>
            <input 
              className='w-full border border-[#C4C7C6] outline-none rounded-lg p-2'
              name='productName'
              placeholder='Product Name'
              type='text'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='font-inter text-[#3F484F] font-medium text-base'>Product Description <span className='text-red-400'>*</span></label>
            <textarea 
              className='w-full border border-[#C4C7C6] outline-none rounded-lg p-2 h-[156px]'
              name='description'
              type='text'
              placeholder='Product Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className='flex flex-col gap-1'>
            <label className='font-inter text-[#3F484F] font-medium text-base'>Product Specification<span className='text-red-400'>*</span></label>
            <input 
              className='w-full border border-[#C4C7C6] outline-none rounded-lg p-2'
              name='specification'
              type='text'
              placeholder='Product Specification'
              value={specification}
              onChange={(e) => setSpecification(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='font-inter text-[#3F484F] font-medium text-base'>Product Weight (kg)<span className='text-red-400'>*</span></label>
            <input 
              className='w-full border border-[#C4C7C6] outline-none rounded-lg p-2'
              name='weight'
              type='number'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className='flex flex-col lg:flex-row w-full lg:items-center gap-5 lg:gap-2.5'>
            <div className='flex flex-col gap-1'>
              <label className='font-inter text-[#3F484F]  font-medium text-base'>No. of items</label>
              <input 
                className='w-full border border-[#C4C7C6] outline-none rounded-lg p-2'
                name='specification'
                type='text'
                value={noOfItems}
                onChange={(e) => setNoOfItems(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-inter text-[#3F484F] font-medium text-base'>Product Category</label>
                <Listbox value={selected?.name} onChange={setSelected}>
                  <div className="relative">
                      <Listbox.Button className="relative cursor-default flex items-center gap-2 w-full h-[45px] border border-[#C4C7C6] rounded-lg  py-2 pl-3 pr-10 text-left outline-none sm:text-sm">
                          <span className="block truncate w-full">{selected?.name || "Category"}</span>
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
                              {categories?.map((item, index) => (
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
                                              {item?.name}
                                          </span>
                                      </>
                                  )}
                                  </Listbox.Option>
                              ))}
                          </Listbox.Options>
                      </Transition>
                  </div>
                </Listbox>
              {/* <input 
                className='w-full border border-[#C4C7C6] rounded-lg p-2'
                name='specification'
                type='text'
              /> */}
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-inter text-[#3F484F] font-medium text-base'>Color</label>
              <input 
                className='w-full border border-[#C4C7C6] outline-none rounded-lg p-2'
                name='color'
                type='text'
                value={productColor}
                onChange={(e) => setProductColor(e.target.value)}
              />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-inter text-[#3F484F] font-medium text-base'>Product thumbnail</label>
            <div className='flex flex-col lg:mx-auto  bg-[#F8F9FA] rounded-xl items-center lg:w-full px-6 py-[28px]  gap-[16px]'>
              <div className='p-[9px] w-[300px] cursor-pointer flex justify-center gap-[16px] '>
                {  
                  thumbImage?.name ? 
                    <div className='flex flex-col gap-1 relative'>
                      <img alt="upload" width={"300px"} height={"100px"} className='' src={URL.createObjectURL(thumbImage)} />
                        <button className="flex items-center absolute -top-3 -right-32" onClick={() => setThumbImage(null)}> 
                          <img src={CloseIcon} alt='close' />
                        </button>
                    </div> 
                    :
                    <div className='flex flex-col items-center gap-[16px]'>
                
                        <label htmlFor="fileInput4" className='cursor-pointer flex justify-center items-center   '>
                          <div className='flex flex-col w-full'>
                            <img src={Upload} alt='upload' className='w-[56px] h-[56px] mx-auto' /> 
                              <p className='text-sm font-semibold font-inter whitespaace-nowrap text-[#52BC77]'>
                                  Click here <span className='text-[#475367]'>or drag and drop to upload</span>
                              </p>
                              <p className='text-xs text-center font-medium text-[#98A2B3]'>SVG, PNG, JPG or GIF (max. 800x300px)</p>
                          </div>
                            <input
                                type="file"
                                id="fileInput4"
                                name='imgThumb'
                                style={{ display: 'none' }}
                                onChange={handleFileChangeThumb}
                            />
                        </label>
                    </div>
                }
              </div>
            </div>
          </div>

        </div>
        <div className='w-full bg-[#fff] flex flex-col border-[#E9F6EE] border gap-6 p-6 rounded-lg'>
          <p className='font-inter text-[#191C1E] font-semibold text-base'>PRICING</p>
          
          <div className='flex items-center gap-2.5'>
            
            <div className='flex w-full flex-col gap-1'>
              <label className='font-inter text-[#3F484F] font-medium text-base'>Product Price (Per Unit)</label>
              <input 
                className='w-full border border-[#C4C7C6] outline-none rounded-lg p-2'
                name='price'
                type='number'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className='flex flex-col  w-full gap-1'>
              <label className='font-inter text-[#3F484F] font-medium text-base'>Product Discount Price</label>
              <input 
                className='w-full border border-[#C4C7C6] outline-none rounded-lg p-2'
                name='discount'
                type='number'
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
          </div>
          
          <div className='flex flex-col gap-1'>
            <label className='font-inter text-[#3F484F] font-medium text-base'>Value Added Tax (VAT)</label>
            <input 
              className='w-full border border-[#C4C7C6] outline-none rounded-lg p-2'
              name='specification'
              type='text'
            />
          </div>

        </div>
      </div>
      
      <div className='flex flex-col w-full lg:w-[360px] py-4 px-6 gap-6'>
        <p className='text-[#191C1E] font-inter text-base font-semibold'>PREVIEW</p>
        <img src={thumbImage ? URL.createObjectURL(thumbImage) : ImagePlaceholder} alt='ImagePlaceholder' className='w-full h-[320px]' />

        <div className='flex flex-col gap-2 mt-6'>
          <button className='w-full flex items-center justify-center bg-[#27A376] h-[60px] rounded-lg' onClick={() => submitForm()}>
            <p className='text-[#fff] text-base font-inter text-[18px] text-center  font-medium'>{loading ? <CgSpinner className=" animate-spin text-2xl " /> : "Save"}</p>
          </button>
          <button className='w-full flex items-center justify-center border border-[#C00000] h-[60px] rounded-lg'>
            <p className='text-[#C00000] font-inter text-[18px]'>Cancel</p>
          </button>
        </div>

      </div>
    </div>
  )
}

export default EditProducts