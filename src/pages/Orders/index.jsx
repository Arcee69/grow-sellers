import React, { useEffect, useState } from 'react'

import Filter from "../../assets/svg/filter.svg"
import Search from "../../assets/svg/searchB.svg"
import AllOrders from './components/AllOrders'
import Sold from './components/Sold'
import Processing from './components/Processing'
import Shipped from './components/Shipped'
import Delivered from './components/Delivered'
import Cancelled from './components/Cancelled'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllOrders } from '../../features/orders/getOrdersSlice'
import { fetchAllSoldItems } from '../../features/orders/getSoldItemsSlice'


const Orders = () => {
    const [activeTab, setActiveTab] = useState("All Order")
    const [text, setText] = useState("")


    const dispatch = useDispatch()

    const handleChangeTab = (value) => {
        setActiveTab(value)
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const userLogin = useSelector(state => state.userLogin)
    console.log(userLogin, "userLogin")
    const id = userLogin?.data?.data?.id
    console.log(id, 'id')

    useEffect(() => {
        dispatch(fetchAllOrders(id))
    },[text])


    useEffect(() => {
        dispatch(fetchAllSoldItems())
    }, [])


  return (
    <div className='w-full flex flex-col gap-[24px] px-5 mt-10 lg:mt-0 lg:px-0'>
        <div className='flex flex-col mt-5 lg:mt-0 gap-[8px]'>
            <p className='text-base lg:text-[24px] font-manrope font-semibold '>Order History</p>
            <p className='font-manrope text-[#BDC1C0] text-sm '>Manage all your Orders</p>
        </div>
        <div className='flex items-center gap-4 mt-[10px]'>
            <p 
                onClick={() => handleChangeTab("All Order")} 
                className={`${activeTab === "All Order" ? "text-[#009254] text-[16px] border-b border-2" :  "text-[#2E3130] text-sm border-0"} text-center font-inter cursor-pointer border-x-0 border-t-0 border border-[#009254] w-[104px] h-[38px]`}
            >
                All Orders
            </p>
            <p 
                onClick={() => handleChangeTab("Sold")} 
                className={`${activeTab === "Sold" ? "text-[#009254] text-[16px] border-b border-2" :  "text-[#2E3130] text-sm border-0"} text-center font-inter cursor-pointer border-x-0 border-t-0 border border-[#009254] w-[70px] h-[38px]`}
            >
                Sold
            </p>
            {/*<p 
                onClick={() => handleChangeTab("Processing")} 
                className={`${activeTab === "Processing" ? "text-[#009254] text-[16px] border-b border-2" :  "text-[#2E3130] text-sm border-0"} text-center font-inter cursor-pointer border-x-0 border-t-0 border border-[#009254] w-[99px] h-[38px]`}
            >
                Returned
            </p> */}
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
        <div className='flex flex-col gap-3 overflow-x-auto'>
            <div className='flex lg:flex-row flex-col hidden lg:items-center gap-3'>
                <div className='w-full lg:w-[826px] h-[44px] p-2.5 justify-between flex items-center border border-[#D0D5DD] rounded-lg gap-2'>
                    <input 
                        className='outline-none text-[#667085] text-base font-inter bg-transparent '
                        name='filter'
                        type='text'
                        placeholder='Search for orders'
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
            {activeTab === "Sold" && <Sold />}
            {activeTab === "Processing" && <Processing />}
            {activeTab === "Shipped" && <Shipped />}
            {activeTab === "Delivered" && <Delivered />}
            {activeTab === "Cancelled" && <Cancelled />}
        </div>

    </div>
  )
}

export default Orders