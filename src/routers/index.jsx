import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/Auth/Login'
import BoardLayout from '../layouts/BoardLayout'
import Dashboard from '../pages/Dashboard'

import Settings from '../pages/Settings'
import Sales from '../pages/Transactions'
import Inventory from '../pages/Product'
import Orders from '../pages/Orders'
import AddProducts from '../pages/Product/components/AddProducts'



const Routers = () => {
  return (
    <Routes>
        <Route element={<AuthLayout />}>
            <Route path='/' element={<Login />} />
        </Route>
        <Route element={<BoardLayout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/sales' element={<Sales />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/add-product' element={<AddProducts />} />
            <Route path='/settings' element={<Settings />} />
        </Route>
    
    </Routes>
  )
}

export default Routers