import React from 'react'
import CloseIcon from "../../../assets/svg/closeIcon.svg"

const ViewProduct = ({ handleClose, showData }) => {

  return (
    <div className='w-[491px] h-[462px] mt-[100px] py-[40px] px-5 overflow-y-auto gap-6 flex flex-col bg-[#fff] rounded-lg '>
        <div className='flex justify-end'>
            <button className="flex items-center" onClick={handleClose}> 
                <img src={CloseIcon} alt='close' />
            </button>
        </div>
        <div className='flex flex-col gap-5'>
            <img src={showData?.thumbnail} alt='thumbnail' className='w-[300px] h-[300px] mx-auto' />
            <div className='flex flex-col gap-3'>
                <p className='text-[#000] text-lg font-mont font-semibold'>Product ID: <span className='text-sm font-poppins font-medium'>{showData?.id}</span></p>
                <p className='text-[#000] text-lg font-mont font-semibold'>Product Name: <span className='text-sm font-poppins font-medium'>{showData?.name}</span></p>
                <p className='text-[#000] text-lg font-mont font-semibold'>Product Description: <span className='text-sm font-poppins font-medium'>{showData?.description}</span></p>
                <p className='text-[#000] text-lg font-mont font-semibold'>Inventory: <span className='text-sm font-poppins font-medium'>{showData?.inventory} Stock</span></p>
                <p className='text-[#000] text-lg font-mont font-semibold'>Price: <span className='text-sm font-poppins font-medium'>{showData?.unit_price}/unit</span></p>

            </div>
        </div>
    </div>
  )
}

export default ViewProduct