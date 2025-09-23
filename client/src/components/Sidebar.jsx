import React from 'react'
import { SIDEBAR_ITEMS } from '../utils/data'
import { useNavigate } from 'react-router-dom'
import useAuth from '../context/useAuth'

const Sidebar = ({activeMenu}) => {
    const navigate=useNavigate()
    const {user,logout}=useAuth()
    const handleClick =(route)=>{
        if(route === '/login'){
            handleLogout()
            return;
        }
        navigate(route)
    }
    const handleLogout=async()=>{
        await logout()
        navigate('/login')

    }
  return (
    <div className=' hidden sm:flex sm:w-48  h-screen fixed p-3 bg-white border-r border-slate-300 rounded-md'>
       <ul className=' space-y-6 mt-6  '>
        {SIDEBAR_ITEMS.map((item)=>(
            <li onClick={()=>handleClick(item.path)}  key={item.id} className={` cursor-pointer ${activeMenu === item.label ? 'bg-purple-600 text-slate-50 hover:bg-purple-700': 'hover:bg-slate-200'} flex items-center gap-3 w-full transition-colors px-4 py-2 rounded-md font-bold `}><item.icons/> {item.label}</li>
        ))}
       </ul>
    </div>
  )
}

export default Sidebar