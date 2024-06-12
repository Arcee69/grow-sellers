import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Header from './Header'
import Sidebar from './Sidebar'
import MiniHeader from './MiniHeader'


const BoardLayout = () => {
  const location = useLocation()

  return (
    <div className='overflow-x-hidden flex w-full'>
      <div className='w-[20%] hidden  bg-[#fff] border fixed h-screen lg:flex flex-col overflow-y-auto overflow-x-hidden'>
          <Sidebar/>
      </div>
      <div className='w-full flex flex-col lg:w-[85%] lg:ml-[20%]'>
          <div className='hidden lg:block w-full bg-[#fff] h-[77px]  border border-[#EBEEEF]'>
              <Header />
          </div>
          <div className='xs:flex lg:hidden' >
            <MiniHeader />
          </div>
          <div className='bg-[#FDFDFD] pb-[10px] pt-[21px] lg:px-[24px] '>
              <Outlet />
          </div>
      </div>
       
    </div>
  )
}

export default BoardLayout