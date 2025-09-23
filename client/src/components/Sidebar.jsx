import React from 'react'
import { SIDEBAR_ITEMS } from '../utils/data'
import { useNavigate } from 'react-router-dom'
import useAuth from '../context/useAuth'

const Sidebar = () => {
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
    <div>
       <ul className='w-64 border-r border-slate-300 mt-12 '>
        {SIDEBAR_ITEMS.map((item)=>(
            <li onClick={()=>handleClick(item.path)}  key={item.id} className='font-bold '><item.icons/> {item.label}</li>
        ))}
       </ul>
    </div>
  )
}

export default Sidebar