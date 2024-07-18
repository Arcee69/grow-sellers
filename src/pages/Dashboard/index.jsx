import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import Padlock from "../../assets/svg/padlock.svg"
import LongMenu from "../../assets/svg/longmenu.svg"

import Empty from "../../assets/png/empty.png"
import { useDispatch, useSelector } from 'react-redux'
import { fetchAnalytics } from '../../features/analytics/getAnalyticsSlice'
import ModalPop from '../../components/modalPop'
import KycNotification from './component/KycNotification'


const Dashboard = () => {
  const [openKyc, setOpenKyc] = useState(false)

  const userLogin = useSelector(state => state.userLogin)
  console.log(userLogin, "mask")

  const dispatch = useDispatch()

  const userData = userLogin?.data?.data

  useEffect(() => {
    dispatch(fetchAnalytics())
  }, [])

  const checkKycStatus = () => {
    if(userData?.kyc_status === "pending") {
      setOpenKyc(true)
    } else {
      setOpenKyc(false)
    }
  }
 
  useEffect(() => {
    checkKycStatus()
  }, [userData])

  const getAnalytics = useSelector(state => state.getAnalytics)
  console.log(getAnalytics, "getAnalytics")

  const allOrders = useSelector(state => state.allOrders)
  console.log(allOrders, "allOrders")

  const orderData = allOrders?.data?.data?.orders


  const data = [
    {
      "name": "Jan",
      "Food & Beverages": 4000,
      "Furniture": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "Food & Beverages": 3000,
      "Furniture": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "Food & Beverages": 2000,
      "Furniture": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "Food & Beverages": 2780,
      "Furniture": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "Food & Beverages": 1890,
      "Furniture": 4800,
      "amt": 2181
    },
    {
      "name": "Jun",
      "Food & Beverages": 2390,
      "Furniture": 3800,
      "amt": 2500
    },
    {
      "name": "Jul",
      "Food & Beverages": 3490,
      "Furniture": 4300,
      "amt": 2100
    }
  ]



//   const orderData = [
//     {
//         id: "#3066",
//         name: "Ekomobong Enang",
//         dateAndTime: "18/09/23 • 12:00",
//         amount: "#3,000",
//         status: "Shipped"
//     },
//     {
//         id: "#3066",
//         name: "Solomon Edem",
//         dateAndTime: "18/09/23 • 12:00",
//         amount: "#3,000",
//         status: "Processing"
//     },
//     {
//         id: "#3066",
//         name: "Unwana Bright",
//         dateAndTime: "18/09/23 • 12:00",
//         amount: "#3,000",
//         status: "Cancelled"
//     },
//     {
//         id: "#3066",
//         name: "Jacob Jones",
//         dateAndTime: "18/09/23 • 12:00",
//         amount: "#3,000",
//         status: "Shipped"
//     },
 
// ]

  return (
    <div className='py-[40px] px-4 flex flex-col gap-[26px]'>
      <div className='border border-[#D9E4ED] bg-[#fff] rounded-xl flex flex-col gap-4 p-4 '>
        <div className='flex justify-between'>
            <div className='flex flex-col gap-1.5 w-[194px] lg:w-full'> 
              <p className='text-[#09111D] text-xl lg:text-[24px] font-semibold font-inter'>Welcome {userData?.first_name}</p>
              <p className='text-xs lg:text-[18px] font-inter text-[#8B9298]'>It’s a fine day today, we want you to make more sales today!</p>
            </div>
            <div className='border border-[#D9E4ED] rounded-lg w-[167px] lg:w-[190px] h-[74px] flex justify-between p-4 items-center'>
              <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F8FAFC]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66663 0.833344C7.12686 0.833344 7.49996 1.20644 7.49996 1.66668V2.50001H12.5V1.66668C12.5 1.20644 12.8731 0.833344 13.3333 0.833344C13.7935 0.833344 14.1666 1.20644 14.1666 1.66668V2.50001H15C16.8409 2.50001 18.3333 3.99239 18.3333 5.83334V15C18.3333 16.841 16.8409 18.3333 15 18.3333H4.99996C3.15901 18.3333 1.66663 16.841 1.66663 15V5.83334C1.66663 3.99239 3.15901 2.50001 4.99996 2.50001H5.83329V1.66668C5.83329 1.20644 6.20639 0.833344 6.66663 0.833344ZM12.5 4.16668C12.5 4.62691 12.8731 5.00001 13.3333 5.00001C13.7935 5.00001 14.1666 4.62691 14.1666 4.16668H15C15.9204 4.16668 16.6666 4.91287 16.6666 5.83334V6.25001H3.33329V5.83334C3.33329 4.91287 4.07948 4.16668 4.99996 4.16668H5.83329C5.83329 4.62691 6.20639 5.00001 6.66663 5.00001C7.12686 5.00001 7.49996 4.62691 7.49996 4.16668H12.5ZM16.6666 7.91668H3.33329V15C3.33329 15.9205 4.07948 16.6667 4.99996 16.6667H15C15.9204 16.6667 16.6666 15.9205 16.6666 15V7.91668Z" fill="#344054"/>
                </svg>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-[#8B9298] text-xs lg:text-[13px] font-inter '>Today's Date</p>
                <p className='font-inter text-[#09111D] text-xs lg:text-[13px]'>{new Date().toDateString()}</p>
              </div>
            </div>
        </div>
        <div className='rounded-xl border border-[#D9E4ED] grid grid-cols-2 gap-4 lg:gap-0 lg:flex lg:justify-between lg:items-center px-2 py-4 lg:px-[22px]'>
            <div className='flex items-center'>
              <div className='flex items-center gap-4'>
                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F8FAFC]'>
                  <img src={Padlock} alt='padlock' />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-[#8B9298] font-inter text-xs lg:text-base'>Total Sales</p>
                  <p className='text-[#09111D] text-xl lg:text-[24px] font-inter'>{getAnalytics?.data?.totalItemOrders}</p>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='flex items-center gap-4'>
                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F8FAFC]'>
                  <img src={Padlock} alt='padlock' />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-[#8B9298] font-inter text-xs lg:text-base'>Fulfilled Orders</p>
                  <p className='text-[#09111D] text-xl lg:text-[24px] font-inter'>{getAnalytics?.data?.totalItemOrders}</p>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='flex items-center gap-4'>
                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F8FAFC]'>
                  <img src={Padlock} alt='padlock' />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-[#8B9298] font-inter text-xs lg:text-base'>Returned Orders</p>
                  <p className='text-[#09111D] text-xl lg:text-[24px] font-inter'>{getAnalytics?.data?.returnedOrders}</p>
                </div>
              </div>
            </div>

            <div className='flex items-center'>
              <div className='flex items-center gap-4'>
                <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F8FAFC]'>
                  <img src={Padlock} alt='padlock' />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-[#8B9298] font-inter text-xs lg:text-base'>Shipped Orders</p>
                  <p className='text-[#09111D] text-xl lg:text-[24px] font-inter'>{getAnalytics?.data?.nonReturnedOrders}</p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row  lg:items-center gap-5">

        <div className='w-full lg:w-[754px] p-2 lg:p-6 flex flex-col bg-[#fff]'>
          <div className='flex justify-between p-3'>
            <div className='flex flex-col gap-2'>
              <p className='text-[#111827] font-inter text-sm lg:text-[20px] font-semibold'>Product Category Performance</p>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#0CAF60" />
                  </svg>
                  <p className='font-medium text-[10px] text-[#111827] font-inter'>Furniture</p>
                </div>
                <div className='flex items-center gap-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle cx="4" cy="4" r="4" fill="#FFC837" />
                  </svg>
                  <p className='font-medium text-[10px] text-[#111827] font-inter'>Food & Beverages</p>
                </div>
              </div>
            </div>
            {/* <div className='flex items-center border border-[#E9EAEC] rounded-lg p-2 gap-1 w-[127px] lg:w-full'>
              <p className='text-[#111827] whitespace-nowrap font-medium text-xs font-inter'>Last 7 month</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.99992 5.29167C4.42462 5.29167 3.95825 5.75804 3.95825 6.33333V16.3333C3.95825 16.9086 4.42462 17.375 4.99992 17.375H14.9999C15.5752 17.375 16.0416 16.9086 16.0416 16.3333V6.33333C16.0416 5.75804 15.5752 5.29167 14.9999 5.29167H4.99992ZM2.70825 6.33333C2.70825 5.06768 3.73427 4.04167 4.99992 4.04167H14.9999C16.2656 4.04167 17.2916 5.06768 17.2916 6.33333V16.3333C17.2916 17.599 16.2656 18.625 14.9999 18.625H4.99992C3.73427 18.625 2.70825 17.599 2.70825 16.3333V6.33333Z" fill="#111827" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13.3333 2.375C13.6784 2.375 13.9583 2.65482 13.9583 3V6.33333C13.9583 6.67851 13.6784 6.95833 13.3333 6.95833C12.9881 6.95833 12.7083 6.67851 12.7083 6.33333V3C12.7083 2.65482 12.9881 2.375 13.3333 2.375Z" fill="#111827" />
                <path fillRule="evenodd" clipRule="evenodd" d="M6.66659 2.375C7.01176 2.375 7.29158 2.65482 7.29158 3V6.33333C7.29158 6.67851 7.01176 6.95833 6.66659 6.95833C6.32141 6.95833 6.04159 6.67851 6.04159 6.33333V3C6.04159 2.65482 6.32141 2.375 6.66659 2.375Z" fill="#111827" />
                <path fillRule="evenodd" clipRule="evenodd" d="M2.70825 9.66667C2.70825 9.32149 2.98807 9.04167 3.33325 9.04167H16.6666C17.0118 9.04167 17.2916 9.32149 17.2916 9.66667C17.2916 10.0118 17.0118 10.2917 16.6666 10.2917H3.33325C2.98807 10.2917 2.70825 10.0118 2.70825 9.66667Z" fill="#111827" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.33325 13C8.33325 12.5398 8.70635 12.1667 9.16658 12.1667H9.99992C10.4602 12.1667 10.8333 12.5398 10.8333 13C10.8333 13.4602 10.4602 13.8333 9.99992 13.8333H9.16658C8.70635 13.8333 8.33325 13.4602 8.33325 13Z" fill="#111827" />
                <path fillRule="evenodd" clipRule="evenodd" d="M9.99992 12.375C10.3451 12.375 10.6249 12.6548 10.6249 13V15.5C10.6249 15.8452 10.3451 16.125 9.99992 16.125C9.65474 16.125 9.37492 15.8452 9.37492 15.5V13C9.37492 12.6548 9.65474 12.375 9.99992 12.375Z" fill="#111827" />
              </svg>
            </div> */}
          </div>
          <div className='lg:w-[730px] w-full h-[250px]'>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Furniture" stroke="#0CAF60" />
                <Line type="monotone" dataKey="Food & Beverages" stroke="#FFC837" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='w-full h-[382px] overflow-auto flex flex-col bg-[#fff] gap-[18px] p-[18px] border rounded-lg'>
          <div className='flex justify-between items-center'>
            <p className='text-[#111827] font-inter text-sm font-semibold'>Best Selling Items</p>
            {/* <p className='text-[#667185] font-inter text-[11px]'>Yearly</p> */}
          </div>
          <div className='bg-[#F5F5F5] p-4 rounded-lg flex items-center justify-between'>
            <p className='font-medium text-[11px] font-inter text-[#333]'>Items</p>
            <p className='font-medium text-[11px] font-inter text-[#333]'>Total Order</p>
          </div>
          <div className='flex flex-col gap-4'>
            {
              getAnalytics?.data?.productOrderCounts?.length > 0 ?
              getAnalytics?.data?.productOrderCounts?.map((item, index) => (
              
                <div key={index} className='flex items-center justify-between mx-5'>
                  <div className='flex items-center gap-1.5'>
                      {/* <div className='bg-[#C4C4C4] w-[36px] h-[36px] rounded-lg'></div> */}
                      <p className='font-inter text-[11px] text-[#333] font-medium'>{item?.product_name}</p>
                  </div>
                  <p className='text-[#667185] text-[11px] font-inter'>{item?.total_quantity}</p>
                </div>
              ))
              :
              <p>No Item Available</p>
            }
          </div>
        </div>
      </div>

      <div className='bg-[#fff] w-full overflow-auto rounded-xl px-[24px] py-[15px] gap-[39px] flex flex-col'>
        <p className='font-manrope text-[#111827] text-[20px] font-bold'>My Orders</p>
        <>
          <table className='w-full'>
            <tr className='h-[48px] bg-[#F9FAFB] whitespace-nowrap rounded-lg'>
              <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                Order iD
              </th>
              <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                Date & Time
              </th>
              <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                Buyer’s Name
              </th>
              <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                Total Amount
              </th>
              <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                Status
              </th>
            </tr>
            {orderData?.length > 1 ? orderData?.slice(0, 5)?.map((item, index) => (
                <tr key={index} className='bg-white h-[56px] border-t whitespace-nowrap cursor-pointer border-grey-100'>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-manrope text-[#101828] text-left'>#{item?.id?.slice(0, 8)}</p> 
                    </td>
                    <td className='h-[70px] flex items-center gap-2 px-4'>
                        <p className='text-sm font-manrope text-[#8D9290] text-left'>{new Date(item?.created_at).toLocaleDateString() }</p>
                        <p className='text-sm font-manrope text-[#8D9290] text-left'>{new Date(item?.created_at).toLocaleTimeString() }</p>
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-manrope text-[#8D9290] text-left'>{item?.name}</p>
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-manrope text-[#8D9290] text-left'>{item?.total_amount}</p>
                    </td>
                    <td className='h-[70px] px-4'>
                      <div className={`rounded-xl h-[22px] w-[77px] flex justify-center items-center ${item.status === 'Cancelled' && ' bg-[#FFDCDC]'} ${item.status === 'pending' && ' bg-[#FEF7EB]'} ${item.status === 'Shipped' && 'bg-[#ECFDF3]'}`}>
                          <p className={`text-xs font-medium font-manrope ${item.status === 'Cancelled' && 'text-[#E53535]'} ${item.status === 'pending' && 'text-[#F5A623]'} ${item.status === 'Shipped' && 'text-[#027A48]'} `}>{item?.status}</p> {/* {data.status */}
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
              <p className='text-[#344054] font-manrope font-medium'>Page 1 of 1</p>

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

      <ModalPop isOpen={openKyc}>
        <KycNotification 
          handleClose={() => setOpenKyc(false)}
        />
      </ModalPop>

    </div>
  )
}

export default Dashboard