import React, {useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Empty from "../../assets/png/empty.png"
import Show from "../../assets/png/show.png"
import Bin from "../../assets/png/bin.png"


import Bag from "../../assets/svg/bag.svg" 
import Filter from "../../assets/svg/filter.svg"
import Search from "../../assets/svg/searchB.svg"
import { fetchAllCategories } from '../../features/categories/getCategorySlice'
import { fetchAllProducts } from '../../features/products/getProductsSlice'
import { api } from '../../services/api'
import { appUrls } from '../../services/urls'
import { toast } from 'react-toastify'


const Inventory = () => {
    const [text, setText] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [currentData, setCurrentData] = useState([]);
    const [delistLoading, setDelistLoading] = useState(false)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setText(e.target.value)
    }



    useEffect(() => {
        dispatch(fetchAllProducts(text))
    }, [text, delistLoading])

    useEffect(() => {
        dispatch(fetchAllCategories())
    }, [])

    const delistProduct = async (id) => {
        setDelistLoading(true)
        await api.post(`${appUrls?.DELIST_PRODUCTS_URL}/${id}`)
        .then((res) => {
            console.log(res, "nothing")
            setDelistLoading(false)
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
        })
        .catch((err) => {
            console.log(err, 'kiss')
            setDelistLoading(false)
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
        })
    }

    const allProducts = useSelector(state => state.allProducts)
    console.log(allProducts, "allProducts")
    const products = allProducts?.data?.data?.products


    const navigate = useNavigate()
  
    const totalPages = Math.ceil(products?.length / itemsPerPage);
  
    useEffect(() => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCurrentData(products?.slice(startIndex, endIndex));
    }, [currentPage, products]);
  
    const handlePageChange = (newPage) => {
      if (newPage > 0 && newPage <= totalPages) {
        setCurrentPage(newPage);
      }
    };

  return (
    <div className='w-full flex flex-col mt-10 lg:mt-0 lg:px-0 px-5 gap-[24px]'>
        <div className='flex flex-row items-center  mt-5 lg:mt-0 justify-between'>
            <div className='flex flex-col gap-[8px]'>
                <p className='text-base lg:text-[24px] font-manrope font-semibold '>Products</p>
                <p className='font-manrope text-[#BDC1C0] hidden lg:flex text-sm '>Manage all your Products</p>
            </div>
            <button className='flex items-center gap-2 w-[130px] lg:w-[176px] h-[56px] lg:py-5 px-2 lg:px-6 rounded-lg bg-[#009254]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.83325C10.4603 3.83325 10.8334 4.20635 10.8334 4.66659V16.3333C10.8334 16.7935 10.4603 17.1666 10 17.1666C9.5398 17.1666 9.16671 16.7935 9.16671 16.3333V4.66659C9.16671 4.20635 9.5398 3.83325 10 3.83325Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33337 10.4999C3.33337 10.0397 3.70647 9.66658 4.16671 9.66658H15.8334C16.2936 9.66658 16.6667 10.0397 16.6667 10.4999C16.6667 10.9602 16.2936 11.3333 15.8334 11.3333H4.16671C3.70647 11.3333 3.33337 10.9602 3.33337 10.4999Z" fill="white"/>
                </svg>
                <p onClick={() => navigate("/add-product")} className='font-manrope font-bold text-sm lg:text-base text-[#fff]'>Add Product</p>
            </button>
        </div>

        <div className='flex flex-col lg:flex-row lg:items-center gap-3'>
            <div className='w-full lg:w-[826px] h-[54px] p-2.5 justify-between flex items-center border border-[#D0D5DD] rounded-lg gap-2'>
                <input 
                    className='outline-none text-[#667085] text-base font-inter bg-transparent '
                    name='filter'
                    type='text'
                    placeholder='Search for products'
                    value={text}
                    onChange={(e) => handleChange(e)}
                />
                <img src={Search} alt='Search' />
            </div>
            
            <div className='w-[142px] h-[54px] flex items-center  justify-center rounded-lg border border-[#D0D5DD] gap-1.5'>
                <img src={Filter} alt='Filter' />
                <p>Filter</p>
            </div>
        </div>

        <div className='overflow-x-auto'>
            <table className='w-full '>
                <tr className='h-[48px] w-full bg-[#F9FAFB] whitespace-nowrap rounded-lg'>
                    <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                        Product Name
                    </th>
                    <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                        Inventory
                    </th>
                    <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                        Price/unit
                    </th>
                    <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                        No. of sales    
                    </th>
                    <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                        Category    
                    </th>
                    <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                        Product Status
                    </th>
                    <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                        Action
                    </th>
                </tr>
                {currentData?.length > 0 ? currentData?.map((item, index) => (
                    <tr key={index} className='bg-white w-full whitespace-nowrap h-[56px] border-t cursor-pointer border-grey-100'>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-inter text-[#101828] text-left'>{item?.name}</p> 
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.inventory}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-inter text-[#8D9290] text-left'>₦{item?.unit_price}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.sales_number || 0}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.category?.name}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <div className={`rounded-xl h-[22px] w-[90px] flex justify-center items-center ${!item.status === 'Inactive'  && ' bg-[#FFDCDC]'} ${!item.status && ' bg-[#FEF6E7]'} ${item.status === 'Hidden' && ' bg-[#FBEAE9]'} ${item.status  && 'bg-[#ECFDF3]'}`}>
                                <p className={`text-xs font-medium font-manrope ${item.status === 'Inactive' && 'text-[#E53535]'} ${!item.status  && 'text-[#865503]'} ${item.status === 'Hidden' && 'text-[#9E0A05]'}  ${item.status  && 'text-[#027A48]'} `}>{item?.status ? "In Stock" : "Out of Stock"}</p> {/* {data.status} */}
                            </div>
                        </td> 
                        <td className='h-[70px] px-4'>
                            <div className='flex items-center gap-2'>
                                <img src={Show} alt='Show' className='w-[30px] h-[30px]' />
                                <img src={Bin} alt='Bin'  className='w-[30px] h-[30px] cursor-pointer' onClick={() => delistProduct(item?.id)}/>
                            </div>
                        </td>       

                    </tr>
                    )) : (
                        <tr className='h-[654px] bg-white border-t border-grey-100'>
                            <td colSpan="8" className="relative">
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='flex flex-col gap-2 items-center'>
                                        <img src={Empty} alt='empty' className='w-[159px] h-[103px]'/>
                                        <p>Oops! Nothing to see here.</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )}
            </table>
            <div className='flex w-auto items-center border border-x-0 border-t bg-[#fff] px-4 py-4 justify-between'>
                <p className='text-[#344054] font-manrope font-medium'>Page {currentPage} of {totalPages}</p>

                <div className='flex items-center gap-3'>
                    <button type='button' onClick={() => handlePageChange(currentPage - 1)} className='w-[85px] h-[36px] flex items-center border border-[#D0D5DD] rounded-lg justify-center'>
                        <p className='text-[#344054] font-medium text-sm font-manrope'>Previous</p>
                    </button>
                    <button type='button' onClick={() => handlePageChange(currentPage + 1)} className='w-[85px] h-[36px] flex items-center border border-[#D0D5DD] rounded-lg justify-center'>
                        <p className='text-[#344054] font-medium text-sm font-manrope'>Next</p>
                    </button>
                </div>
                
            </div>
        </div>
       

    </div>
  )
}

export default Inventory