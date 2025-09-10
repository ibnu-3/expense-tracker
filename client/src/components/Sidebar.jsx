import React from 'react'
import { useAuth } from '../context/useAuth'
import { SIDEBAR_DATA } from '../utils/data'

const Sidebar = () => {
  const {user}=useAuth()
  return (
    <div className='bg-slate-100 border-r border-gray-300 hidden sm:flex sm:flex-col sm:w-64 h-screen px-3 space-y-4'>
      <div className='flex flex-col gap-3 py-12 '>
        <img src={user.image} alt={user.name} className='w-20 h-20 rounded-full object-cover object-center mx-auto  '/>
        <h1 className='font-extrabold text-slate-800 text-center capitalize'>{user.name}</h1>
      </div>
      <div>
        {SIDEBAR_DATA.map((item)=>(
          <ul key={item.id} className='flex flex-col gap-3 '>
            <li className=''><item.icon/> {item.label}</li>
          </ul>
        ))}
      </div>
      
    </div>
  )
}

export default Sidebar