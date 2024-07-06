import React, { useEffect, useState } from 'react'

import Empty from "../../../assets/png/empty.png"
import LongMenu from "../../../assets/svg/longmenu.svg"
import { useSelector } from 'react-redux'

const Inflow = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [currentData, setCurrentData] = useState([]);

    const formatter = new Intl.NumberFormat('en-US');

    const allTransactions = useSelector(state => state.getTransaction)
    const transaction = allTransactions?.data?.data?.transactions
    console.log(transaction, "transaction")

    const totalPages = Math.ceil(transaction?.length / itemsPerPage);
  
    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentData(transaction?.slice(startIndex, endIndex));
    }, [currentPage, transaction]);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
        setCurrentPage(newPage);
        }
    };
    

  return (
    <div className='mr-[30px] mb-[100px] overflow-x-auto'>
        <table className='w-full'>
            <tr className='h-[48px] bg-[#F9FAFB]  whitespace-nowrap rounded-lg'>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Order ID
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    {/* Buyer's Name */} Channel
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Amount
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Date
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Status
                </th>
                <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                    Action
                </th>
            </tr>
            {currentData?.length > 1 ? currentData?.map((item, index) => (
                <tr key={index} className='bg-white h-[56px] border-t whitespace-nowrap cursor-pointer border-grey-100'>
                    <td className='h-[70px] px-4'>
                        <div className='flex flex-col'>
                            <p className='text-sm font-inter font-medium text-[#101828] text-left'>#{item?.order_id.slice(0, 8)}</p> 
                   
                        </div>
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-inter text-[#8D9290] text-left'>{item?.channel}</p>
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-inter text-[#101828] font-medium text-left'>{formatter.format(item?.total_amount)}</p>
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-inter text-[#8D9290] text-left'>{new Date(item?.created_at).toLocaleDateString()}</p>
                    </td> 
                    <td className='h-[70px] px-4'>
                        <div className={`rounded-lg h-8 w-[91px] flex justify-center items-center ${item.status === 'Returned' && ' bg-[#FFDCDC]'}  ${item.status === 'Pending' && ' bg-[#FEF7EB]'} ${item.status === 'Success' && 'bg-[#ECFDF3]'}`}>
                            <p className={`text-xs font-medium  ${item.status === 'Pending' && 'text-[#FFC837]'} ${item.status === 'Returned' && 'text-[#E53535] '} ${item.status === 'Success' && 'text-[#027A48] '} `}>{item?.status}</p> {/* {data.status} */}
                        </div>
                    </td> 
                         
                    <td className='h-[70px] px-4 flex justify-center items-center'>
                        <img src={LongMenu} alt='LongMenu' className=' h-[16px]' />
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
        <div className='flex items-center border  whitespace-nowrap lg:gap-0 border-x-0 border-t bg-[#fff] px-4 py-4 justify-between'>
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
  )
}

export default Inflow