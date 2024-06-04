import React from 'react'
import { Outlet } from 'react-router'

import Header from './Header'


const AuthLayout = () => {
  return (
    <div className='overflow-hidden w-full'>
        <div>
          <Header />
        </div>
        <div className='bg-[#FBFEFC] h-full flex items-center justify-center'>
          <Outlet />
        </div>

    </div>
  )
}

export default AuthLayout