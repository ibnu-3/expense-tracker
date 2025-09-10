import React from 'react'
import { useAuth } from '../context/useAuth'
import { SIDEBAR_DATA } from '../utils/data'

const Sidebar = ({activeMenu}) => {
  const {user}=useAuth()
  return (
    <div className='bg-slate-100 border-r border-gray-300 hidden sm:flex sm:flex-col sm:w-64 h-screen px-3 space-y-4'>
      <div className='flex flex-col gap-3 py-12 '>
        <img src={user.image} alt={user.name} className='w-20 h-20 rounded-full object-cover object-center mx-auto  '/>
        <h1 className='font-extrabold text-slate-800 text-center capitalize'>{user.name}</h1>
      </div>
      <div>
        {SIDEBAR_DATA.map((item)=>(
          <ul key={item.id} className='p-3 '>
            <li className={`${activeMenu === item.label ? 'bg-purple-600 hover:bg-purple-700 text-slate-50  ':''} flex  items-center text-xl font-bold text-slate-700 cursor-pointer px-5 py-2.5 hover:bg-slate-200 rounded-md`}><item.icon size={25} className='mr-3'/> {item.label}</li>
          </ul>
        ))}
      </div>
      
    </div>
  )
}

export default Sidebar