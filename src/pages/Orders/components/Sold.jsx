import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Empty from "../../../assets/png/empty.png"

const Sold = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [currentData, setCurrentData] = useState([]);

  const getSoldItems = useSelector(state => state.getSoldItems)
  console.log(getSoldItems, "getSoldItems")

  const data = getSoldItems?.data?.data?.orders

  const totalPages = Math.ceil(data?.length / itemsPerPage);
  
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(data?.slice(startIndex, endIndex));
  }, [currentPage, data]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };


  return (
    <div>
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
            {currentData?.length > 0 ? currentData?.map((item, index) => (
                <tr key={index} className='bg-white h-[56px] border-t whitespace-nowrap cursor-pointer border-grey-100'>
                    <td className='h-[70px] px-4'>
                        <div className='flex flex-col'>
                            <p className='text-sm font-manrope font-medium text-[#101828] text-left'>#{item?.id?.slice(0, 8)}</p> 
                            {/* <p className='font-inter text-[#667185] text-xs'>{item?.orderItems}</p> */}
                        </div>
                    </td>
                    <td className='h-[70px] flex items-center gap-2 px-4'>
                        <p className='text-sm font-manrope text-[#8D9290] text-left'>{new Date(item?.created_at).toLocaleDateString() }</p>
                        <p className='text-sm font-manrope text-[#8D9290] text-left'>{new Date(item?.created_at).toLocaleTimeString() }</p>
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-manrope text-[#8D9290] text-left'>{`${item?.buyer?.first_name} ${item?.buyer?.last_name}`}</p>
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
                    <tr className='h-[354px] bg-white border-t border-grey-100'>
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
      </>
    </div>
  )
}

export default Sold