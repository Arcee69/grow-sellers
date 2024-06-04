import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Empty from "../../assets/png/empty.png"
import Show from "../../assets/png/show.png"
import Bin from "../../assets/png/bin.png"


import Bag from "../../assets/svg/bag.svg" 
import Filter from "../../assets/svg/filter.svg"
import Search from "../../assets/svg/searchB.svg"


const Inventory = () => {
    const [text, setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const navigate = useNavigate()

    const data = [
        {
            inventory: 145,
            name: "Product A",
            sales: 123,
            category: "Clothing",
            price: "₦100,000",
       
            status: "In Stock"
        },
        {
            name: "Product B",
            inventory: 30,
            sales: 64,
            category: "Furniture",
            price: "₦100,000",
          
            status: "Out of Stock"
        },
        {
            name: "Product C",
            inventory: 40,
            sales: 236,
            category: "Stationery",
            price: "₦100,000",

            status: "Inactive"
        },
        {
            name: "Product D",
            inventory: 6,
            sales: 1043,
            category: "Clothing",
            price: "₦100,000",
      
            status: "Hidden"
        },
        {
            name: "Product E",
            inventory: 7,
            sales: "Guy Hawkins",
            category: 1022,
            price: "₦100,000",
       
            status: "In Stock"
        },
    ]

  return (
    <div className='w-full flex flex-col gap-[24px]'>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-[8px]'>
                <p className='text-[24px] font-manrope font-semibold '>Products</p>
                <p className='font-manrope text-[#BDC1C0] text-sm '>Manage all your Products</p>
            </div>
            <button className='flex items-center gap-2 w-[176px] h-[56px] py-5 px-6 rounded-lg bg-[#009254]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.83325C10.4603 3.83325 10.8334 4.20635 10.8334 4.66659V16.3333C10.8334 16.7935 10.4603 17.1666 10 17.1666C9.5398 17.1666 9.16671 16.7935 9.16671 16.3333V4.66659C9.16671 4.20635 9.5398 3.83325 10 3.83325Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33337 10.4999C3.33337 10.0397 3.70647 9.66658 4.16671 9.66658H15.8334C16.2936 9.66658 16.6667 10.0397 16.6667 10.4999C16.6667 10.9602 16.2936 11.3333 15.8334 11.3333H4.16671C3.70647 11.3333 3.33337 10.9602 3.33337 10.4999Z" fill="white"/>
                </svg>
                <p onClick={() => navigate("/add-product")} className='font-manrope font-bold text-base text-[#fff]'>Add Product</p>
            </button>
        </div>

        <div className='flex items-center gap-3'>
            <div className='w-[826px] h-[54px] p-2.5 justify-between flex items-center border border-[#D0D5DD] rounded-lg gap-2'>
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

        <>
            <table className='w-full'>
                <tr className='h-[48px] bg-[#F9FAFB] rounded-lg'>
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
                {data?.length > 1 ? data?.map((item, index) => (
                    <tr key={index} className='bg-white h-[56px] border-t cursor-pointer border-grey-100'>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-inter text-[#101828] text-left'>{item?.name}</p> 
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.inventory}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.price}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.sales}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.category}</p>
                        </td>
                        <td className='h-[70px] px-4'>
                            <div className={`rounded-xl h-[22px] w-[90px] flex justify-center items-center ${item.status === 'Inactive' && ' bg-[#FFDCDC]'} ${item.status === 'Out of Stock' && ' bg-[#FEF6E7]'} ${item.status === 'Hidden' && ' bg-[#FBEAE9]'} ${item.status === 'In Stock' && 'bg-[#ECFDF3]'}`}>
                                <p className={`text-xs font-medium font-manrope ${item.status === 'Inactive' && 'text-[#E53535]'} ${item.status === 'Out of Stock' && 'text-[#865503]'} ${item.status === 'Hidden' && 'text-[#9E0A05]'}  ${item.status === 'In Stock' && 'text-[#027A48]'} `}>{item?.status}</p> {/* {data.status} */}
                            </div>
                        </td> 
                        <td className='h-[70px] px-4'>
                            <div className='flex items-center gap-2'>
                                <img src={Show} alt='Show' className='w-[30px] h-[30px]' />
                                <img src={Bin} alt='Bin'  className='w-[30px] h-[30px]'/>
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
            <div className='flex items-center border border-x-0 border-t bg-[#fff] px-4 py-4 justify-between'>
                <p className='text-[#344054] font-manrope font-medium'>Page 1 of 10</p>

                <div className='flex items-center gap-3'>
                    <button className='w-[85px] h-[36px] flex items-center border border-[#D0D5DD] rounded-lg justify-center'>
                        <p className='text-[#344054] font-medium text-sm font-manrope'>Previous</p>
                    </button>
                    <button className='w-[85px] h-[36px] flex items-center border border-[#D0D5DD] rounded-lg justify-center'>
                        <p className='text-[#344054] font-medium text-sm font-manrope'>Next</p>
                    </button>
                </div>
                
            </div>
        </>
       

    </div>
  )
}

export default Inventory