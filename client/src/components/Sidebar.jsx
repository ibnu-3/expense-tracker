import React from 'react'
import { useAuth } from '../context/useAuth'

const Sidebar = () => {
  const {user}=useAuth()
  return (
    <div className='bg-slate-100 border-r border-gray-300 hidden sm:flex sm:flex-col sm:w-64 h-screen px-3 space-y-4'>
      <div className='flex flex-col gap-6 bg-transparent '>
        <img src={user.image} alt={user.name} className='w-20 h-20 rounded-full object-cover object-center mx-auto  '/>
        <h1 className='font-extrabold text-slate-800 text-center capitalize'>{user.name}</h1>
      </div>
      <div>
        ucbd
      </div>
      
    </div>
  )
}

export default Sidebar