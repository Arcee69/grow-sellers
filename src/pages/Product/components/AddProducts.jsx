import React, { useState } from 'react'

import Upload from "../../../assets/png/upload.png"
import ImagePlaceholder from "../../../assets/png/image_placeholder.png"

const AddProducts = () => {
  const [userImage, setUserImage] = useState(null)
  const [userImageB, setUserImageB] = useState(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setUserImage(selectedFile)
  };

  
  const handleFileChangeB = (event) => {
    const selectedFileB = event.target.files[0];
    setUserImageB(selectedFileB)
};


  return (
    <div className='flex items-start'>
      <div className='flex flex-col w-[672px] gap-[8px] overflow-auto'>
        <div className='w-full bg-[#fff] flex flex-col border-[#E9F6EE] border gap-6 px-6 py-4 rounded-lg'>
          <p className='font-inter text-[#191C1E] font-semibold text-base'>ADD PRODUCT</p>
          <div className='flex flex-col lg:mx-auto  bg-[#F8F9FA] rounded-xl items-center lg:w-full px-6 py-[28px]  gap-[16px]'>
            <div className='p-[9px] w-[300px] cursor-pointer flex justify-center gap-[16px] '>
                {  
                    userImage?.name ? 
                        <div className='flex flex-col gap-1'>
                            <div className='flex items-center justify-between'>
                                <p className='text-[15px] font-hanken text-[#858585]'>{userImage?.name}</p>
                                <p className='text-[#000] text-[11px]'>Completed</p>
                            </div>
                            <div className='w-[266px] h-[5px] bg-[#51E38B] rounded-lg'></div>
                        </div> 
                        :
                        <div className='flex flex-col items-center gap-[16px]'>
                            <img src={Upload} alt='upload' className='w-[56px] h-[56px]' />
                            
                           
                            <label htmlFor="fileInput" className='cursor-pointer flex justify-center items-center   '>
                              <div className='flex flex-col w-full'>
                                  <p className='text-sm font-semibold font-inter whitespaace-nowrap text-[#52BC77]'>
                                      Click here <span className='text-[#475367]'>or drag and drop to upload</span>
                                  </p>
                                  <p className='text-xs text-center font-medium text-[#98A2B3]'>SVG, PNG, JPG or GIF (max. 800x300px)</p>
                              </div>
                                <input
                                    type="file"
                                    id="fileInput"
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                }
                
            </div>
          </div>
        </div>
        <div className='w-full bg-[#fff] flex flex-col border-[#E9F6EE] border gap-6 p-6 rounded-lg'>
          <p className='font-inter text-[#191C1E] font-semibold text-base'>PRODUCT DETAILS</p>
          <div className='flex flex-col gap-1'>
            <label className='font-inter text-[#3F484F] font-medium text-base'>Product Name</label>
            <input 
              className='w-full border border-[#C4C7C6] rounded-lg p-2'
              name='productName'
              type='text'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='font-inter text-[#3F484F] font-medium text-base'>Product Description</label>
            <textarea 
              className='w-full border border-[#C4C7C6] rounded-lg p-2 h-[156px]'
              name='description'
              type='text'
            ></textarea>
          </div>
          <div className='flex flex-col gap-1'>
            <label className='font-inter text-[#3F484F] font-medium text-base'>Product Specification</label>
            <input 
              className='w-full border border-[#C4C7C6] rounded-lg p-2'
              name='specification'
              type='text'
            />
          </div>

          <div className='flex items-center gap-2.5'>
            <div className='flex flex-col gap-1'>
              <label className='font-inter text-[#3F484F] font-medium text-base'>No. of items</label>
              <input 
                className='w-full border border-[#C4C7C6] rounded-lg p-2'
                name='specification'
                type='text'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-inter text-[#3F484F] font-medium text-base'>Product Category</label>
              <input 
                className='w-full border border-[#C4C7C6] rounded-lg p-2'
                name='specification'
                type='text'
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label className='font-inter text-[#3F484F] font-medium text-base'>Select Color</label>
              <input 
                className='w-full border border-[#C4C7C6] rounded-lg p-2'
                name='specification'
                type='text'
              />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <label className='font-inter text-[#3F484F] font-medium text-base'>Product thumbnail</label>
            <div className='flex flex-col lg:mx-auto  bg-[#F8F9FA] rounded-xl items-center lg:w-full px-6 py-[28px]  gap-[16px]'>
              <div className='p-[9px] w-[300px] cursor-pointer flex justify-center gap-[16px] '>
                {  
                  userImageB?.name ? 
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center justify-between'>
                            <p className='text-[15px] font-hanken text-[#858585]'>{userImageB?.name}</p>
                            <p className='text-[#000] text-[11px]'>Completed</p>
                        </div>
                        <div className='w-[266px] h-[5px] bg-[#51E38B] rounded-lg'></div>
                    </div> 
                    :
                    <div className='flex flex-col items-center gap-[16px]'>
                        <img src={Upload} alt='upload' className='w-[56px] h-[56px]' />
                        
                      
                        <label htmlFor="fileInput" className='cursor-pointer flex justify-center items-center   '>
                          <div className='flex flex-col w-full'>
                              <p className='text-sm font-semibold font-inter whitespaace-nowrap text-[#52BC77]'>
                                  Click here <span className='text-[#475367]'>or drag and drop to upload</span>
                              </p>
                              <p className='text-xs text-center font-medium text-[#98A2B3]'>SVG, PNG, JPG or GIF (max. 800x300px)</p>
                          </div>
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: 'none' }}
                                onChange={handleFileChangeB}
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
                className='w-full border border-[#C4C7C6] rounded-lg p-2'
                name='specification'
                type='text'
              />
            </div>
            <div className='flex flex-col  w-full gap-1'>
              <label className='font-inter text-[#3F484F] font-medium text-base'>Product Discount Price</label>
              <input 
                className='w-full border border-[#C4C7C6] rounded-lg p-2'
                name='specification'
                type='text'
              />
            </div>
          </div>
          
          <div className='flex flex-col gap-1'>
            <label className='font-inter text-[#3F484F] font-medium text-base'>Value Added Tax (VAT)</label>
            <input 
              className='w-full border border-[#C4C7C6] rounded-lg p-2'
              name='specification'
              type='text'
            />
          </div>

        </div>
      </div>
      
      <div className='flex flex-col w-[411px] py-4 px-6 gap-6'>
        <p className='text-[#191C1E] font-inter text-base font-semibold'>PREVIEW</p>
        <img src={ImagePlaceholder} alt='ImagePlaceholder' className='w-full h-[320px]' />

        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-1'>
            <p className='font-inter text-base text-[#3F484F] font-semibold'>Product Link</p>
            <p className='font-inter text-base font-normal text-[#536066] text-sm'>https://eh_khomm/product_name</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="#536066" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" stroke="#536066" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <div className='flex flex-col gap-2 mt-6'>
          <button className='w-full flex items-center justify-center bg-[#27A376] h-[60px] rounded-lg'>
            <p className='text-[#fff] font-inter text-[18px]'>Save</p>
          </button>
          <button className='w-full flex items-center justify-center border border-[#C00000] h-[60px] rounded-lg'>
            <p className='text-[#C00000] font-inter text-[18px]'>Cancel</p>
          </button>
        </div>

      </div>
    </div>
  )
}

export default AddProducts