import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Header from './Header'
import Sidebar from './Sidebar'


const BoardLayout = () => {
  const location = useLocation()

  return (
    <div className='overflow-x-hidden flex w-full'>
      <div className='w-[20%]  bg-[#fff] border fixed h-screen flex flex-col overflow-y-auto overflow-x-hidden'>
          <Sidebar/>
      </div>
      <div className='flex flex-col w-[85%] ml-[20%]'>
          <div className='w-full bg-[#fff] h-[77px] border border-[#EBEEEF]'>
              <Header />
          </div>
          <div className='bg-[#FDFDFD] pb-[10px] pt-[21px] px-[24px] '>
              <Outlet />
          </div>
      </div>
       
    </div>
  )
}

export default BoardLayout