import React from 'react'
import { Outlet } from 'react-router'

import Header from './Header'
import MiniHeader from './MiniHeader'


const AuthLayout = () => {
  return (
    <div className='overflow-hidden w-full'>
        <div className='hidden lg:block'>
          <Header />
        </div>
        <div className='xs:flex lg:hidden' >
          <MiniHeader />
        </div>
        <div className='bg-[#FBFEFC] h-full lg:flex lg:items-center lg:justify-center'>
          <Outlet />
        </div>

    </div>
  )
}

export default AuthLayout