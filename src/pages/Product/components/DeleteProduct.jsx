import React from 'react'
import { CgSpinner } from 'react-icons/cg'

import Info from "../../../assets/svg/info.svg"

import { api } from '../../../services/api'
import { appUrls } from '../../../services/urls'
import { toast } from 'react-toastify'

const DeleteProduct = ({ handleClose, deleteProductLoading, setDeleteProductLoading, showData }) => {
   

    const deleteProduct = async () => {
        setDeleteProductLoading(true)
        await api.delete(`${appUrls?.DELETE_PRODUCTS_URL}/${showData?.id}`)
        .then((res) => {
    
            setDeleteProductLoading(false)
            toast.success(`${res?.data?.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            handleClose()
        })
        .catch((err) => {

            setDeleteProductLoading(false)
            if(err?.status === 500) {
                toast.error(`Internal Server Error`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            } else {
                toast.error(`${err?.data?.message}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            handleClose()
        })
    }

  return (
    <div className='w-[426px] h-[306px] mt-[100px] pt-[48px] px-[24px] pb-[32px] rounded-lg bg-[#fff]'>
    <div className='flex flex-col justify-center items-center gap-6'>
        <p className='font-Mont font-bold text-[32px] '>Delete Product 🗑 </p>
    
        <div className='bg-[#EDF2F780] px-4 py-2.5 w-[378px] h-[68px] rounded flex items-center gap-3'>
            <img src={Info} alt='info' />
            <p className='font-Mont text-sm text-[#5C6F7F]'>
                When you click Yes, Delete,  this user will be Deleted
            </p>
        </div>
        <div className='flex items-center gap-[18px]'>
            <button
                type='button'
                className='w-[180px] h-[48px] bg-[#fff] border border-[#5C6F7F] rounded'
                onClick={handleClose}
            >
                <p className='font-Dm font-medium text-base'>Cancel</p>
            </button>
            <button
                type='button'
                className='w-[180px] h-[48px] bg-[#f00] text-center flex items-center justify-center rounded'
                onClick={() => deleteProduct()}
            >
                <p className='text-[#fff] font-Dm font-medium text-base'>{deleteProductLoading ? <CgSpinner className='animate-spin text-lg'/> : " Yes, Delete"}</p>
            </button>
        </div>
    </div>
    </div>
  )
}

export default DeleteProduct