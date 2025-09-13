import React from 'react'
import { useAuth } from '../context/useAuth'
import { SIDEBAR_DATA } from '../utils/data'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({activeMenu}) => {
  const {user,logout}=useAuth()
  const navigate=useNavigate()
  const handleClick =(route)=>{
    if(route === 'logout'){
      return logout()
    }else{
      navigate(route)
    }
  }
  
  return (
    <div className='bg-slate-100 border-r border-gray-300 hidden sm:flex sm:flex-col sm:w-64 h-screen px-3 space-y-4 fixed left-0 z-40'>
      <div className='flex flex-col gap-3 pt-12 '>
        <img src={user.image} alt={user.name} className='w-20 h-20 rounded-full object-cover object-center mx-auto  '/>
        <h1 className='font-extrabold text-slate-800 text-center capitalize'>{user.name}</h1>
      </div>
      <div>
        {SIDEBAR_DATA.map((item)=>(
          <ul key={item.id} className='p-3 '>
            <li onClick={()=>handleClick(item.path)} className={`${activeMenu === item.label ? 'bg-teal-600 hover:bg-teal-700 text-slate-300  ':'text-slate-700'} flex  items-center  font-bold  cursor-pointer px-5 py-2.5 hover:bg-slate-200 rounded-md`}><item.icon size={25} className='mr-3'/> {item.label}</li>
          </ul>
        ))}
      </div>
      
    </div>
  )
}

export default Sidebar