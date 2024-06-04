import React from 'react'


const AllOrders = () => {

    const orderData = [
        {
            id: "#3066",
            name: "Ekomobong Enang",
            orderItems: "12 items in this order",
            dateAndTime: "18/09/23 • 12:00",
            amount: "#3,000",
            status: "Shipped"
        },
        {
            id: "#3066",
            name: "Solomon Edem",
            orderItems: "12 items in this order",
            dateAndTime: "18/09/23 • 12:00",
            amount: "#3,000",
            status: "Processing"
        },
        {
            id: "#3066",
            name: "Unwana Bright",
            orderItems: "12 items in this order",
            dateAndTime: "18/09/23 • 12:00",
            amount: "#3,000",
            status: "Cancelled"
        },
        {
            id: "#3066",
            name: "Jacob Jones",
            orderItems: "12 items in this order",
            dateAndTime: "18/09/23 • 12:00",
            amount: "#3,000",
            status: "Shipped"
        },
     
    ]

  return (
    <div>
        
        <>
            <table className='w-full'>
            <tr className='h-[48px] bg-[#F9FAFB] rounded-lg'>
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
                {/* <th className="font-semibold font-inter text-[#667085] px-4 text-[12px] text-left">
                Status
                </th> */}
            </tr>
            {orderData?.length > 1 ? orderData?.map((item, index) => (
                <tr key={index} className='bg-white h-[56px] border-t cursor-pointer border-grey-100'>
                    <td className='h-[70px] px-4'>
                        <div className='flex flex-col'>
                            <p className='text-sm font-manrope font-medium text-[#101828] text-left'>{item?.id}</p> 
                            <p className='font-inter text-[#667185] text-xs'>{item?.orderItems}</p>
                        </div>
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-manrope text-[#8D9290] text-left'>{item?.dateAndTime}</p>
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-manrope text-[#8D9290] text-left'>{item?.name}</p>
                    </td>
                    <td className='h-[70px] px-4'>
                        <p className='text-sm font-manrope text-[#8D9290] text-left'>{item?.amount}</p>
                    </td>
                    {/* <td className='h-[70px] px-4'>
                        <div className={`rounded-xl h-[22px] w-[77px] flex justify-center items-center ${item.status === 'Cancelled' && ' bg-[#FFDCDC]'} ${item.status === 'Processing' && ' bg-[#FEF7EB]'} ${item.status === 'Shipped' && 'bg-[#ECFDF3]'}`}>
                            <p className={`text-xs font-medium font-manrope ${item.status === 'Cancelled' && 'text-[#E53535]'} ${item.status === 'Processing' && 'text-[#F5A623]'} ${item.status === 'Shipped' && 'text-[#027A48]'} `}>{item?.status}</p> {/* {data.status
                        </div>
                    </td>         */}
                    
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

export default AllOrders