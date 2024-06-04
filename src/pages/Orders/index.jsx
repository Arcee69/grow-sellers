import React, { useState } from 'react'

import Filter from "../../assets/svg/filter.svg"
import Search from "../../assets/svg/searchB.svg"
import AllOrders from './components/AllOrders'
import Pending from './components/Pending'
import Processing from './components/Processing'
import Shipped from './components/Shipped'
import Delivered from './components/Delivered'
import Cancelled from './components/Cancelled'

const Orders = () => {
    const [activeTab, setActiveTab] = useState("All Order")
    const [text, setText] = useState("")

    const handleChangeTab = (value) => {
        setActiveTab(value)
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }




  return (
    <div className='w-full flex flex-col gap-[24px]'>
        <div className='flex flex-col gap-[8px]'>
            <p className='text-[24px] font-manrope font-semibold '>Order History</p>
            <p className='font-manrope text-[#BDC1C0] text-sm '>Manage all your Orders</p>
        </div>
        <div className='flex items-center gap-4 mt-[10px]'>
            <p 
                onClick={() => handleChangeTab("All Order")} 
                className={`${activeTab === "All Order" ? "text-[#009254] text-[16px] border-b border-2" :  "text-[#2E3130] text-sm border-0"} text-center font-inter cursor-pointer border-x-0 border-t-0 border border-[#009254] w-[104px] h-[38px]`}
            >
                All Order
            </p>
            <p 
                onClick={() => handleChangeTab("Pending")} 
                className={`${activeTab === "Pending" ? "text-[#009254] text-[16px] border-b border-2" :  "text-[#2E3130] text-sm border-0"} text-center font-inter cursor-pointer border-x-0 border-t-0 border border-[#009254] w-[70px] h-[38px]`}
            >
                Sold
            </p>
            <p 
                onClick={() => handleChangeTab("Processing")} 
                className={`${activeTab === "Processing" ? "text-[#009254] text-[16px] border-b border-2" :  "text-[#2E3130] text-sm border-0"} text-center font-inter cursor-pointer border-x-0 border-t-0 border border-[#009254] w-[99px] h-[38px]`}
            >
                Returned
            </p>
            {/* <p 
                onClick={() => handleChangeTab("Shipped")} 
                className={`${activeTab === "Shipped" ? "text-[#009254] text-[16px] border-b border-2" :  "text-[#2E3130] text-sm border-0"} text-center font-inter cursor-pointer border-x-0 border-t-0 border border-[#009254] w-[99px] h-[38px]`}
            >
                Shipped
            </p>
            <p 
                onClick={() => handleChangeTab("Delivered")} 
                className={`${activeTab === "Delivered" ? "text-[#009254] text-[16px] border-b border-2" :  "text-[#2E3130] text-sm border-0"} text-center font-inter cursor-pointer border-x-0 border-t-0 border border-[#009254] w-[99px] h-[38px]`}
            >
                Delivered
            </p>
            <p 
                onClick={() => handleChangeTab("Cancelled")} 
                className={`${activeTab === "Cancelled" ? "text-[#009254] text-[16px] border-b border-2" :  "text-[#2E3130] text-sm border-0"} text-center cursor-pointer border-x-0 border-t-0 border border-[#009254] w-[78px] h-[38px]`}
            >
                Cancelled
            </p> */}
        </div>
        <div className='flex flex-col gap-3 '>
            <div className='flex items-center gap-3'>
                <div className='w-[826px] h-[44px] p-2.5 justify-between flex items-center border border-[#D0D5DD] rounded-lg gap-2'>
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
                
                <div className='w-[142px] h-[44px] flex items-center  justify-center rounded-lg border border-[#D0D5DD] gap-1.5'>
                    <img src={Filter} alt='Filter' />
                    <p>Filter</p>
                </div>
            </div>

            {activeTab === "All Order" && <AllOrders />}
            {activeTab === "Pending" && <Pending />}
            {activeTab === "Processing" && <Processing />}
            {activeTab === "Shipped" && <Shipped />}
            {activeTab === "Delivered" && <Delivered />}
            {activeTab === "Cancelled" && <Cancelled />}
        </div>

    </div>
  )
}

export default Orders