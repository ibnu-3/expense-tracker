import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const DashboardLayout = ({children, activeMenu}) => {
  return (
    <div>
      <Navbar activeMenu={activeMenu}/>
      
      <div className='flex '>
        <Sidebar activeMenu={activeMenu}/>
        <div className='pl-3'>
            {children}
        </div>
      
      </div>
    </div>
  )
}

export default DashboardLayout