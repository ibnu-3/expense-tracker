import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const DashboardLayout = ({children, activeMenu}) => {
  return (
    <div>
      <Navbar activeMenu={activeMenu}/>
      
      <div className='flex pt-16 '>
        <Sidebar activeMenu={activeMenu}/>
        <div className='px-3 w-full overflow-auto sm:pl-64'>
            {children}
        </div>
      
      </div>
    </div>
  )
}

export default DashboardLayout