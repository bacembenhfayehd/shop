'use client'

import Navbar from '@/app/components/seller/Navbar'
import SideBar from '@/app/components/seller/Sidebar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      <div className='flex w-full'>
        <SideBar/>
        {children}
      </div>
    </div>
  )
}

export default Layout