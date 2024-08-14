import React, { useEffect, useState } from 'react'

import SideArrow from "../../assets/svg/side_arrow.svg"
import ArrowGreen from "../../assets/svg/arrow_green.svg"
import ArrowRed from "../../assets/svg/arrow_red.svg"

import Filter from "../../assets/svg/filter.svg"
import Search from "../../assets/svg/searchB.svg"

import Inflow from './components/Inflow'
import ModalPop from '../../components/modalPop'
import Details from './components/Details'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransactions } from '../../features/transaction/getTransactionSlice'
import AddAccount from './components/AddAccount'

const Sales = () => {
  const [text, setText] = useState("")
  const [activeButton, setActiveButton] = useState("Inflow")
  const [openDetails, setOpenDetails] = useState(false)
  const [openAccount, setOpenAccount] = useState(false)

  const handleChange = (e) => {
      setText(e.target.value)
  }

  const dispatch = useDispatch()

  const handleButtonChange = (value) => {
      setActiveButton(value)
  }

  const formatter = new Intl.NumberFormat('en-US');

  const allOrders = useSelector(state => state.allOrders)
  console.log(allOrders, "allOrders")

  const orders = allOrders?.data?.data?.orders

     // Function to calculate the total amount
     const calculateTotalAmount = (data) => {
      // console.log(data, "apako")
      return data?.reduce((total, item) => {
          // Remove any currency symbols and commas, and convert to number
          const amount = parseFloat(item?.total_amount); //.replace(/[^0-9.-]+/g, "")
          return total + amount;
      }, 0);
  };

  // Calculate the total amount
  const totalAmount = calculateTotalAmount(orders);

  useEffect(() => {
    dispatch(fetchTransactions())
  }, [])

  return (
    <div className='w-full flex flex-col mt-[80px] lg:mt-0 px-4 lg:px-0 gap-[32px]'>
      <div className='flex flex-col'>
        <p className='text-[24px] font-inter font-semibold leading-[32px]'>Sales Overview</p>
        <p className='font-inter text-[#475367] text-base leading-[24px]'>All Your Product Here in one place</p>
      </div>

      <div className='flex flex-col lg:flex-row items-center gap-4'>

        <div className='w-full lg:w-[473px] h-[240px]  bg-[#009254] rounded-[16px] px-5 lg:px-[40px] py-[35px] flex flex-col items-start gap-[4px]'>
          <div className='flex items-center justify-between w-full'>
            <p className='text-[#fff] font-bold font-inter text-xs'>Order Payment Metrics</p>
            {/* <div className='flex items-center gap-1'>
              <p className='font-medium font-inter text-[#fff] text-xs'>This Week</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.9133 8.16305L10.6633 14.4131C10.5762 14.5005 10.4727 14.5698 10.3588 14.6171C10.2448 14.6644 10.1226 14.6888 9.99925 14.6888C9.87586 14.6888 9.75368 14.6644 9.63973 14.6171C9.52577 14.5698 9.42228 14.5005 9.33518 14.4131L3.08518 8.16305C2.90906 7.98693 2.81012 7.74806 2.81012 7.49899C2.81012 7.24992 2.90906 7.01105 3.08518 6.83493C3.2613 6.65881 3.50017 6.55986 3.74925 6.55986C3.99832 6.55986 4.23719 6.65881 4.41331 6.83493L10 12.4216L15.5867 6.83415C15.7629 6.65803 16.0017 6.55908 16.2508 6.55908C16.4999 6.55908 16.7388 6.65803 16.9149 6.83415C17.091 7.01027 17.1899 7.24914 17.1899 7.49821C17.1899 7.74728 17.091 7.98615 16.9149 8.16227L16.9133 8.16305Z" fill="white"/>
              </svg>
            </div> */}
          </div>
          <p className='text-[24px] text-[#fff] font-inter mt-2 font-bold'>{orders?.length} Paid Order</p>
          <div className='flex items-center gap-1.5'>
            <p className='font-inter text-xs text-[#fff] font-normal'>0 Successful</p>
            <p className='font-inter text-xs text-[#fff] font-normal'>0 Returned</p>
            <p className='font-inter text-xs text-[#fff] font-normal'>0 Pending</p>
          </div>
 
          <div className='flex w-[265px] flex-col  gap-1 mt-[14px]'>
            <div className='flex flex-col'>
              <p className='text-[#fff] font-inter text-xs'>Payment Pending Approval</p>
              <div className='items-center flex justify-between'>
                <p className='font-inter text-[24px] text-[#fff] font-semibold'>₦{formatter.format(totalAmount)}</p>
                <p className='text-[#FFFFFF] font-inter text-xs'>From {orders?.length} Orders</p>
              </div>
            </div>

          </div>
        </div>

        <div className='w-full lg:w-[473px] h-[240px] bg-[#F4FBF6] rounded-[16px] px-5 lg:px-[40px] py-[35px] flex flex-col items-start gap-[4px]'>
          <div className='flex items-center justify-between w-full'>
            <p className='text-[#1A1C1B] font-bold font-inter text-xs'>Total Payment</p>
            {/* <div className='flex items-center gap-1'>
              <p className='font-medium font-inter text-[#1A1C1B] text-xs'>This Week</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16.9133 8.16305L10.6633 14.4131C10.5762 14.5005 10.4727 14.5698 10.3588 14.6171C10.2448 14.6644 10.1226 14.6888 9.99925 14.6888C9.87586 14.6888 9.75368 14.6644 9.63973 14.6171C9.52577 14.5698 9.42228 14.5005 9.33518 14.4131L3.08518 8.16305C2.90906 7.98693 2.81012 7.74806 2.81012 7.49899C2.81012 7.24992 2.90906 7.01105 3.08518 6.83493C3.2613 6.65881 3.50017 6.55986 3.74925 6.55986C3.99832 6.55986 4.23719 6.65881 4.41331 6.83493L10 12.4216L15.5867 6.83415C15.7629 6.65803 16.0017 6.55908 16.2508 6.55908C16.4999 6.55908 16.7388 6.65803 16.9149 6.83415C17.091 7.01027 17.1899 7.24914 17.1899 7.49821C17.1899 7.74728 17.091 7.98615 16.9149 8.16227L16.9133 8.16305Z" fill="#1A1C1B"/>
              </svg>
            </div> */}
          </div>
          <p className='text-[24px] text-[#1A1C1B] font-inter mt-2 font-bold'>₦0</p>
          <div className='flex items-center gap-1.5'>
            <p>From 0 Orders</p>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#009254" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 15.5V9.5" stroke="#009254" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 11.5L12 8.5L15 11.5" stroke="#009254" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className='text-[#009254] font-inter text-xs font-bold'>2.1%</p> */}
          </div>
          
          <div className='flex items-center gap-5'>
            <button
              className='bg-[#009254] rounded-[16px] w-[143px] flex items-center justify-center h-[40px] mt-6'
              onClick={() => setOpenDetails(true)}
            >
              <p className='text-[#fff] font-inter text-xs font-semibold'>Account Details</p>
            </button>
            <button
              className='bg-[#009254] rounded-[16px] w-[143px] flex items-center justify-center h-[40px] mt-6'
              onClick={() => setOpenAccount(true)}
            >
              <p className='text-[#fff] font-inter text-xs font-semibold'>Add Account</p>
            </button>

          </div>
          
        </div>

      </div>

      <div className='flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 lg:justify-between mr-[30px]'>

        <div className='flex flex-col'>
          <p className='text-[18px] text-[#101828] font-inter font-medium'>Transactions</p>
          <p className='text-[#667085] font-inter text-sm'>List of all transactions you’ve made</p>
        </div>

        <div className='flex flex-col lg:flex-row lg:items-center invisible gap-3'>
            <div className='lg:w-[400px] h-[40px] p-2.5 flex items-center border border-[#D0D5DD] rounded-lg gap-2'>
                <img src={Search} alt='Search' />
                <input 
                    className='outline-none text-[#667085] text-base font-inter bg-transparent '
                    name='filter'
                    type='text'
                    placeholder='Search'
                    value={text}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            
            <div className='w-[102px] h-[40px] flex items-center  justify-center rounded-lg border border-[#D0D5DD] gap-1.5'>
                <img src={Filter} alt='Filter' />
                <p>Filter</p>
            </div>
        </div>

      </div>
        {activeButton === "Inflow" && <Inflow />}

        <ModalPop isOpen={openDetails}>
          <Details handleClose={() => setOpenDetails(false)} />
        </ModalPop>

        <ModalPop isOpen={openAccount}>
          <AddAccount handleClose={() => setOpenAccount(false)} />
        </ModalPop>
    </div>
  )
}

export default Sales